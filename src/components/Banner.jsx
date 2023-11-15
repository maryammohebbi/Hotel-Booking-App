import React from 'react'
import Menu from './Menu'
import Header from './Header'

function Banner() {
  return (
    <div className='w-full h-[30rem] relative'>
        <Menu/>
        <img src="../src/assets/b.jpg" alt="" 
        className='w-full h-full object-cover'/>
        <Header/>
    </div>
  )
}

export default Banner