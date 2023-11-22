import React, { useEffect, useState } from 'react'
import { useHotel } from '../context/HotelProvider'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from 'react-leaflet'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useGeoLocation from '../hooks/useGeoLocation'
import useUrlLocation from '../hooks/useUrlLocation'


function Map({markerlocations}) {
   const [lat, lng] = useUrlLocation()

//    const {isLoading, hotels} = useHotel()
   const {isLoading: isLoadingPosition, position: geoLocationPosition, geoPosition} = useGeoLocation()
   const [mapCenter, setMapCenter] = useState([51.505, -0.09])

   useEffect(()=>{
    if(lat && lng) setMapCenter([lat, lng])
   }, [lat, lng])

   useEffect(()=>{
    if(geoLocationPosition?.lat && geoLocationPosition?.lng) 
    setMapCenter([geoLocationPosition.lat, geoLocationPosition.lng])
   }, [geoLocationPosition])
   
  return (
    <div className=' bg-green-400 h-52 lg:w-[65%] lg:h-full relative'>
        <MapContainer className='h-full' center={mapCenter} zoom={13} scrollWheelZoom={true}>
            <button
             onClick={geoPosition} 
                className='absolute bottom-2 left-2 z-[1000] font-bold shadow-2xl p-1 bg-purple-500 text-white rounded-xl'>
                    {isLoadingPosition ? "Loading..." : "Use your location"}
            </button>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <DetectClick/>
            <ChangeCenter position={mapCenter}/>
            {
                markerlocations.map(item => (
                    <Marker key={item.id} position={[item.latitude, item.longitude]}>
                        <Popup>
                            {item.host_location}
                        </Popup>
                    </Marker>
                ))
            }
        </MapContainer>
    </div>
  )
}

export default Map

function ChangeCenter({position}){
    const map = useMap()
    map.setView(position)

    return null
}

function DetectClick(){
    const navigate = useNavigate()
    useMapEvent({
        click: (e)=> navigate(`/bookmark/add?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
        // click: (e) => console.log(e)
    })
    return null
}