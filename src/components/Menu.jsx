import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import { useAuth } from '../context/AuthProvider'
import { HiLogout } from 'react-icons/hi'

function Menu() {
  return (
    <div className='sticky top-0 w-full bg-gray-100 z-[10000]'>
      <nav className='max-w-sm container mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-7xl relative'>
          <BigScreenMenu/>
          <MobileMenu/>
      </nav>
    </div>
  )
}

export default Menu

function BigScreenMenu(){
  return(
    <div className='hidden md:flex w-full justify-between p-4 bg-gray-100'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/bookmark">Bookmarks</NavLink>
        <NavLink to="/about">About</NavLink>
        <User/>
    </div>
  )
}

function MobileMenu(){
  const [isOpen, setIsOpen] = useState(false)
  return(
    <div className='flex flex-col p-2 md:hidden bg-slate-100 w-full'>
        <div>
          <GiHamburgerMenu 
          onClick={()=>setIsOpen(true)}
          className={`w-6 h-6 cursor-pointer ${isOpen ? "hidden" : ""}`}/>
          <IoMdClose 
          onClick={()=> setIsOpen(false)}
          className={`w-7 h-7 ${isOpen ? "" : "hidden"}`}/>
        </div>
        <ul className={`flex flex-col items-center cursor-pointer gap-2 ${isOpen ? "" : "hidden"}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/bookmark">Bookmarks</NavLink>
          <NavLink to="/about">About</NavLink>
          <User/>
        </ul>
    </div>
  )
}


export function User(){
  const navigate = useNavigate()
  const {user, isAuthenticated, logout} = useAuth()
  const handleLogout = ()=>{
      logout()
      navigate("/")
  }
  return(
      <div>
          {
              isAuthenticated ? (
                  <div className='flex items-center'>
                      <span>Hi, {user.name}!&nbsp;</span>
                      <button>
                        <HiLogout onClick={handleLogout} className='w-7 h-7 text-red-400'/>
                      </button>
                  </div>
              ) : (
                  <NavLink to="/login">Login</NavLink>
              )
          }
      </div>
    )
  }