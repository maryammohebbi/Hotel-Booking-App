import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6"
import { PiTelegramLogoDuotone } from "react-icons/pi"
import { AiOutlineLinkedin } from "react-icons/ai"
import { FiTwitter } from "react-icons/fi"

function Footer() {
  return (
    <div className='w-full bg-slate-200 bottom-0 mt-8 p-4'>    
        <div className='flex flex-wrap gap-4 justify-between max-w-sm container mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl'>
        <div className='w-[150px] items-center'>
            <h4 className='mb-4 text-center font-bold'>Important Links</h4>
            <div className='flex flex-col items-center gap-2'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/bookmark">Bookmarks</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/login">Login</NavLink>
            </div>
          </div>
          <div className='w-[150px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, Quasi eos asperiores reprehenderit.</div>
          <div className='w-[150px]'>
            <h4 className='mb-4 text-center font-bold'>Follow us!</h4>
            <div className='flex justify-between'>
              <a href="#"><FaInstagram className='w-6 h-6'/></a>
              <a href="#"><PiTelegramLogoDuotone  className='w-6 h-6'/></a>
              <a href="#"><AiOutlineLinkedin className='w-6 h-6'/></a>
              <a href="#"><FiTwitter className='w-6 h-6'/></a>
            </div>
          </div>
          <div className='w-[150px]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, quae.
          </div>
        </div>
    </div>
  )
}

export default Footer 