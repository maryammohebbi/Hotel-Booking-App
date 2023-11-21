import React from 'react'
import { Link } from 'react-router-dom'
import { useHotel } from '../context/HotelProvider'

function Hotels() {
    const {isLoading, hotels, currentHotel} = useHotel()

    if(isLoading) return <p>Loading...</p>
  return (
    <div>
        <div className='flex flex-col gap-4 p-4'>
            <h2 className='font-bold text-xl'>Search Result({hotels.length})</h2>
            {
                hotels.map(item => (
                    <Link to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`} key={item.id}>
                        <div className={`flex border-2 border-slate-500 rounded-lg shadow-xl w-full h-28 p-1 ${item.id === currentHotel?.id ? "border-green-500" : ""}`} >
                            <img src={item.picture_url.url} alt={item.name} className='w-[35%] rounded-lg'/>
                            <div className='p-2 w-[65%] flex flex-col justify-center'>
                                <p className='font-bold'>{item.smart_location}</p>
                                <p className='text-sm font-bold text-slate-800'>{item.name}</p>
                                <p className='text-center text-md font-bold'>€&nbsp;{item.price}&nbsp; - per night</p>
                            </div>
                        </div>
                    </Link>
                ))
            }

        </div>
    </div>
  )
}

export default Hotels