import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Map from './Map'

function BookmarkLayout() {
  return (
    <div>
        <div className='my-12'>
            <Header/>
        </div>
        <div className='flex gap-4 flex-col-reverse top-8 lg:flex-row md:justify-between lg:h-[calc(100vh-10rem)]'>
            <div className='h-80 overflow-y-scroll lg:w-[35%] lg:h-full'>
                <Outlet/>
            </div>
            <Map/>
        </div>
    </div>
  )
}

export default BookmarkLayout