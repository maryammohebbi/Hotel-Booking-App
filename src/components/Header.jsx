import React from 'react'
import {MdLocationOn} from "react-icons/md"
import {HiCalendar, HiSearch} from "react-icons/hi"

function Header() {
  return (
    <div className='flex flex-col md:flex-row w-full md:justify-between border-2 border-gray-400 p-3 rounded-lg gap-2 gap-y-4'>
        <div className='flex items-center border-b-2 border-gray-300 md:border-r-2 md:border-b-0'>
            <MdLocationOn className="w-9 h-9 text-red-500" />
            <input type="text" placeholder='Where to go?' className='focus:outline-none'/>
        </div>
        <div className='flex items-center border-b-2 border-gray-200 md:border-r-2 md:border-b-0 pr-4 cursor-pointer'>
            <HiCalendar className='w-8 h-8 text-violet-600'/>
            <div className='text-sm'>
                22/12/2023 to 22/1/2024
            </div>
        </div>
        <div className='flex items-center border-b-2 border-gray-300 md:border-r-2 md:border-b-0 pr-4 cursor-pointer'>
            <div className='text-sm'>
                1 adult &bull; 0 children &bull; 1 room
            </div>
        </div>
        <div>
            <button className='bg-violet-600 p-2 rounded-lg'>
                <HiSearch className='w-6 h-6 text-white'/>
            </button>
        </div>
    </div>
  )
}

export default Header