import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <div className='w-full flex justify-between p-4 bg-gray-50'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/bookmark">Bookmarks</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/login">Login</NavLink>
    </div>
  )
}

export default Menu