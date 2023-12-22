import React, { createContext, useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import axios from 'axios'
import toast from 'react-hot-toast'

const HotelContext = createContext()
const BASE_URL = "https://hotelbooking-api-ynox.onrender.com"

function HotelProvider({children}) {

    const [searchParams, setSearchParams] = useSearchParams()
    const destination = searchParams.get("destination")
    const room = JSON.parse(searchParams.get("options"))?.room
    const [currentHotel, setCurrentHotel] = useState({})
    const [isLoadingCurrentHotel, setIsLoadingCurrentHotel] = useState(false)

    const {isLoading, data: hotels} = useFetch(`${BASE_URL}/hotels`, `q=${destination || ""}&accommodates_gte=${room || 1}`)

    async function getHotel(id){
      setIsLoadingCurrentHotel(true)
      try {
          const { data } = await axios.get(`${BASE_URL}/hotels/${id}`)
          setCurrentHotel(data)
      } catch (err) {
        toast.error(err.message)
      }
      finally{
        setIsLoadingCurrentHotel(false)
      }
    }

  return (
    <HotelContext.Provider value={{isLoading, hotels, currentHotel, isLoadingCurrentHotel, getHotel}}>
        {children}
    </HotelContext.Provider>
  )
}

export default HotelProvider

export function useHotel(){
    return useContext(HotelContext)
}