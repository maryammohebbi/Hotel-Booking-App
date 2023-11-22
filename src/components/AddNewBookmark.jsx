import React, { useEffect, useState } from 'react'
import ReactCountryFlag from 'react-country-flag'
import { useNavigate } from 'react-router-dom'
import useUrlLocation from '../hooks/useUrlLocation'
import axios from 'axios'
import { useBookmark } from '../context/BookmarkListContext'

const BASE_GEOLOCATION_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client"

function AddNewBookmark() {
    const [cityName, setCityName] = useState("")
    const [country, setCountry] = useState("")
    const [countryCode, setCountryCode] = useState("")
    const [geoCodingError, setGeoCodingError] = useState(null)
    const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false)
    const navigate = useNavigate()
    const [lat, lng] = useUrlLocation()
    const {createBookmark} = useBookmark()

    const handleBack = (e) => {
        e.preventDefault()
        navigate(-1)
    }
    useEffect(()=>{
        if(!lat && !lng) return 

        async function fetchData(){
            setIsLoadingGeoCoding(true)
            setGeoCodingError(null)
            try {
                const {data} = await axios.get(`${BASE_GEOLOCATION_URL}?latitude=${lat}&longitude=${lng}`)
                // console.log(data)
                if(!data.countryCode) {
                    throw new Error("This location is not a city! Please click somewhere else.")
                }
                setCityName(data.city)
                setCountry(data.countryName)
                setCountryCode(data.countryCode)
            } catch (error) {
                setGeoCodingError(error.message)
            }
            finally{
                setIsLoadingGeoCoding(false)
            }
        }
        fetchData()
    }, [lat, lng])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!cityName || !country) return 

        const newBookmark = {
            cityName,
            country,
            countryCode,
            latitude: lat,
            longitude: lng,
            host_location: cityName + " " + country
        }
        await createBookmark(newBookmark)
        navigate("/bookmark")
    }

    if(isLoadingGeoCoding) return <p>Loading...</p>
    if(geoCodingError) return <p>{geoCodingError}</p>
  return (
    <div className='p-2'>
        <h2 className='font-bold mb-8 text-lg'>Add New Location</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label className='block mb-2 font-bold text-blue-950' htmlFor="cityName">CityName</label>
                <input
                value={cityName}
                onChange={e=> setCityName(e.target.value)}
                 type="text"
                 className='border-2 border-slate-500 rounded-lg p-2 w-full'
                 />
            </div>
            <div className='relative mb-8'>
                <label className='block mb-2 font-bold text-blue-950' htmlFor="country">Country</label>
                <input
                value={country}
                onChange={e=> setCountry(e.target.value)}
                 type="text" 
                 className='border-2 border-slate-500 rounded-lg p-2 w-full'
                 />
                <ReactCountryFlag className='absolute top-[55%] right-2 w-6 h-6' svg countryCode={countryCode}/>
            </div>
            <div className='flex justify-between'>
                <button onClick={handleBack} className='p-2 bg-slate-300 rounded-md'>&larr; Back</button>
                <button className='p-2 bg-green-300 rounded-md'>+ Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddNewBookmark