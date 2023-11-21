import React from 'react'
import { useParams } from 'react-router-dom'

function SingleHotel() {
    const {id} = useParams()
  return (
    <div className='flex flex-col'>
        <h2>Hotel name</h2>
        <img src="" alt="" />
        <div>
          
        </div>
    </div>
  )
}

export default SingleHotel