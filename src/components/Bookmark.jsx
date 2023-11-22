import React from 'react'
import { useBookmark } from '../context/BookmarkListContext'
import { Link } from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'
import { HiTrash } from 'react-icons/hi'

function Bookmark() {
    const {bookmarks,currentBookmark, deleteBookmark} = useBookmark()

    const handleDelete = async (e, id) => {
        e.preventDefault()
        await deleteBookmark(id)
    }
  return (
    <div className='p-2'>
        <h2 className='font-bold text-lg'>Bookmark List</h2>
        {(!bookmarks.length) ? (<p className='text-blue-800 font-bold mt-8'>There's no bookmarks yet.</p>) : 
            <div className='mt-4 flex flex-col gap-4'>
                {
                    bookmarks.map(item => {
                        return(
                            <Link key={item.id} to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}>
                                <div className={`w-full p-2 border-2  rounded-lg shadow-xl flex justify-between ${item.id === currentBookmark?.id ? "border-green-500" : "border-slate-500"}`}>
                                    <div className='flex justify-between w-[75%]'>
                                        <ReactCountryFlag svg countryCode={item.countryCode} style={{width:"1.5rem", height:"1.5rem"}}/>
                                        <strong>{item.cityName}</strong>
                                        <span>{item.country}</span>
                                    </div>
                                    <button onClick={(e)=> handleDelete(e, item.id)}>
                                        <HiTrash className='w-5 h-5 text-red-400'/>
                                    </button>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        }
    </div>
  )
}

export default Bookmark