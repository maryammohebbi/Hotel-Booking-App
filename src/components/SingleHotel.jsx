import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useHotel } from '../context/HotelProvider'

function SingleHotel() {
    const {id} = useParams()
    // const {isLoading, data} = useFetch(`http://localhost:5000/hotels/${id}`)
    const {currentHotel, isLoadingCurrentHotel, getHotel} = useHotel()
    
    useEffect(()=>{
      getHotel(id)
    }, [id])

    if(isLoadingCurrentHotel) return <p className='font-bold text-xl text-green-800'>Loading...</p>
  return (
    <div className='flex flex-col p-4 gap-4'>
        <h2 className='font-bold text-lg my-2'>{currentHotel.smart_location}</h2>
        <img className='w-full h-60 rounded-lg' src={currentHotel.xl_picture_url} alt={currentHotel.name} />
        <h3 className='font-bold text-slate-700'>{currentHotel.name}</h3>
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between bg-slate-100 p-2 rounded-xl'>
              <span className='font-bold'>Rooms:</span> 
              <span className='font-bold w-8 h-8 bg-pink-300 rounded-full flex items-center justify-center'>{currentHotel.accommodates}</span>
            </div>
            <div className='flex justify-between bg-slate-50 p-2 rounded-xl'>
              <span className='font-bold'>Bedrooms:</span> 
              <span className='font-bold w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center'>{currentHotel.bedrooms}</span>
            </div>
            <div className='flex justify-between bg-slate-100 p-2 rounded-xl'>
              <span className='font-bold'>Beds:</span> 
              <span className='font-bold w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center'>{currentHotel.beds}</span>
            </div>
            <div className='flex justify-between bg-slate-50 p-2 rounded-xl'>
              <span className='font-bold'>Bathrooms:</span> 
              <span className='font-bold w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center'>{currentHotel.bathrooms}</span>
            </div>
            <div className='flex justify-between bg-slate-100 p-2 rounded-xl'>
              <span className='font-bold'>Price:</span> 
              <span className='font-bold p-2 bg-green-300 rounded-full flex items-center justify-center'>{currentHotel.price} €</span>
            </div>
        </div>
    </div>
  )
}

export default SingleHotel