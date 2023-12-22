import React from 'react'
import Header from './Header'
import {Typewriter} from "react-simple-typewriter"

function Banner() {
  return (
    <div className='w-full relative mb-8'>
        <img src="/b.jpg" alt="banner" className='w-full h-[30rem] object-cover'/>
        <p className='text-3xl p-4 top-[30%] md:text-4xl lg:text-5xl text-white font-bold absolute lg:top-[40%] drop-shadow-2xl w-full'>
          WELCOME TO THE 
          <br/>
          <Typewriter words={["HOTEL BOOKING WEBSITE"]} loop={5} />
        </p>
        <div className='md:absolute md:top-[90%] w-full'><Header/></div>  
    </div>
  )
}

export default Banner