import React from 'react'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className='flex gap-4 flex-col-reverse top-8 md:flex-row md:justify-between md:h-[calc(100vh-25rem)]'>
        <div className='bg-green-200 md:overflow-y-scroll md:w-[35%] md:h-full'>
            <Outlet/>
        </div>
        <div className=' bg-pink-400 h-52 md:w-[75%] md:h-full'>
            map
        </div>
    </div>
  )
}

export default AppLayout