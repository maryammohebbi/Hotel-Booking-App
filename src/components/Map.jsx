import React, { useState } from 'react'
import { useHotel } from '../context/HotelProvider'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


function Map() {
    
   const {isLoading, hotels} = useHotel()
   const [position, setPosition] = useState([51.505, -0.09])
  return (
    <div className=' bg-green-400 h-52 lg:w-[65%] lg:h-full'>
        <MapContainer className='h-full' center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    </div>
  )
}

export default Map