import React from 'react'
import Header from './Header'
import {motion} from "framer-motion"

function Banner() {
  return (
    <div className='w-full relative mb-8'>
        <img src="../src/assets/b.jpg" alt="" className='w-full h-[30rem] object-cover'/>
        <p className='text-3xl top-[30%] left-16 md:text-4xl lg:text-5xl text-white font-bold absolute lg:top-[40%] lg:left-32 drop-shadow-2xl w-full'>
          WELCOME TO THE 
          <br/>
          <span className='absolute left-6 lg:left-12'>HOTEL BOOKING WEBSITE</span>
        </p>
        <div className='md:absolute md:top-[90%] w-full'><Header/></div>  
    </div>
  )
}

export default Banner