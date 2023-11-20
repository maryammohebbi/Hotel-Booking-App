import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function Hotels() {
    const [searchParams, setSearchParams] = useSearchParams()
    const destination = searchParams.get("destination")
    const room = JSON.stringify(searchParams.get("options")?.room)

    const {isLoading, data} =useFetch("http://localhost:5000/hotels", `q=${destination || ""}&accommodates_gte=${room || 1}`)

    if(isLoading) return <p>Loading...</p>
  return (
    <div>
        <div className='flex flex-col gap-4 p-4'>
            <h2 className='font-bold text-xl'>Search Result({data.length})</h2>
            {
                data.map(item => (
                    <Link key={item.id}>
                        <div className='flex border-2 border-slate-500 rounded-lg shadow-xl w-full h-28' >
                            <img src={item.picture_url.url} alt={item.name} className='w-[35%]'/>
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