import React from 'react'
import Header from './Header'

function Banner() {
  return (
    <div className='w-full relative mb-8'>
        <img src="../src/assets/b.jpg" alt="" className='w-full h-[30rem] object-cover'/>
        <div className='md:absolute md:top-[90%] w-full'><Header/></div>  
    </div>
  )
}

export default Banner