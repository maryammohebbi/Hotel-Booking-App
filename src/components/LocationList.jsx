import React from 'react'
import useFetch from '../hooks/useFetch'
import Banner from './Banner'

function LocationList() {
    const {data, isLoading} = useFetch("https://hotelbooking-api-ynox.onrender.com/hotels", "")


  return (
    <div>
    <Banner/>
    <div className='w-full my-10'>
        <h2 className='text-2xl font-bold my-4'>Nearby Locations</h2>
        {
            isLoading 
            ? 
            ( <p className='font-bold text-xl text-green-800'>Loading...</p> ) 
            : 
            (
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
                    {
                        data.map(item=>{
                            return(
                                <div key={item.id} className='border-2 border-slate-500 rounded-lg shadow-xl'>
                                    <img src={item.xl_picture_url} alt={item.name} className='w-full h-80' />
                                    <div className='p-2'>
                                        <p className='font-bold'>{item.smart_location}</p>
                                        <p className='text-sm font-bold text-slate-800'>{item.name}</p>
                                        <p className='text-center text-lg font-bold'>€&nbsp;{item.price}&nbsp; - Per Night</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    </div>
    </div>
  )
}

export default LocationList