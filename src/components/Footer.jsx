import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full bg-slate-200 bottom-0 h-28 mt-8'>    
        <div className='flex flex-wrap justify-between max-w-sm container mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/bookmark">Bookmarks</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
    </div>
  )
}

export default Footer 