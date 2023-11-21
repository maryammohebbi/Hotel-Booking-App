import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function SingleHotel() {
    const {id} = useParams()
    const {isLoading, data} = useFetch(`http://localhost:5000/hotels/${id}`)

    if(isLoading) return <p className='font-bold text-xl text-green-800'>Loading...</p>
  return (
    <div className='flex flex-col p-4 gap-4'>
        <h2 className='font-bold text-lg my-2'>{data.smart_location}</h2>
        <img className='w-full h-60 rounded-lg' src={data.xl_picture_url} alt={data.name} />
        <h3 className='font-bold text-slate-700'>{data.name}</h3>
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between bg-slate-100 p-2 rounded-xl'>
              <span className='font-bold'>Rooms:</span> 
              <span className='font-bold w-8 h-8 bg-pink-300 rounded-full flex items-center justify-center'>{data.accommodates}</span>
            </div>
            <div className='flex justify-between bg-slate-50 p-2 rounded-xl'>
              <span className='font-bold'>Bedrooms:</span> 
              <span className='font-bold w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center'>{data.bedrooms}</span>
            </div>
            <div className='flex justify-between bg-slate-100 p-2 rounded-xl'>
              <span className='font-bold'>Beds:</span> 
              <span className='font-bold w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center'>{data.beds}</span>
            </div>
            <div className='flex justify-between bg-slate-50 p-2 rounded-xl'>
              <span className='font-bold'>Bathrooms:</span> 
              <span className='font-bold w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center'>{data.bathrooms}</span>
            </div>
            <div className='flex justify-between bg-slate-100 p-2 rounded-xl'>
              <span className='font-bold'>Price:</span> 
              <span className='font-bold p-2 bg-green-300 rounded-full flex items-center justify-center'>{data.price} €</span>
            </div>
        </div>
    </div>
  )
}

export default SingleHotel