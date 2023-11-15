import React from 'react'
import Header from './Header'

function Banner() {
  return (
    <div className='w-full h-[30rem] relative'>
        <img src="../src/assets/b.jpg" alt="" className='w-full h-full object-cover'/>
        <Header/>
    </div>
  )
}

export default Banner