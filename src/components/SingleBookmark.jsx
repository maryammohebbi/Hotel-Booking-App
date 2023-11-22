import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useBookmark } from '../context/BookmarkListContext'
import ReactCountryFlag from 'react-country-flag'

function SingleBookmark() {
    const navigate = useNavigate()

    const {id} = useParams()
    const {currentBookmark, isLoading, getBookmark} = useBookmark()

    useEffect(()=>{
        getBookmark(id)
    }, [id])

    const handleBack = () => {
        navigate(-1)
    }

    if(isLoading) return <p>Loading...</p>

  return (
    <div>
        <button onClick={handleBack} className='p-2 bg-blue-200 shadow-2xl rounded-lg my-4 font-bold text-xs'>&larr; Back To Bookmark List</button>
        <hr />
        <br />
        <div className='p-2 w-full flex flex-col gap-2'>
            <div className='flex justify-between bg-slate-200 p-4 rounded-lg'>
                <span className='text-blue-950 font-bold'>{currentBookmark.country}</span>
                <ReactCountryFlag svg countryCode={currentBookmark.countryCode} style={{width:"2rem", height:"2rem"}}/>
            </div>
            <div className='flex justify-between bg-gray-200 p-4 rounded-lg'>
                <span className='text-purple-950 font-bold'>{currentBookmark.cityName}</span>
                <span className='font-bold'>{currentBookmark.countryCode}</span>
            </div>
        </div>
    </div>
  )
}

export default SingleBookmark