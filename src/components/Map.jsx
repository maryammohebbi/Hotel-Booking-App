import React from 'react'
import { useHotel } from '../context/HotelProvider'

function Map() {
    
   const {isLoading, hotels} = useHotel()
  return (
    <div className=' bg-green-400 h-52 lg:w-[65%] lg:h-full'>
        map
    </div>
  )
}

export default Map