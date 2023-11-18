import React, { useRef, useState } from 'react'
import {MdLocationOn} from "react-icons/md"
import {HiCalendar, HiMinus, HiPlus, HiSearch} from "react-icons/hi"
import useOutsideClick from '../hooks/useOutsideClick'

function Header() {
    const [destination, setDestination] = useState("")
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const handleOptions = (name, operation)=> {
        setOptions((prev)=>{
            return{
                ...prev,
                [name]: operation === "inc" ? options[name] + 1 : options[name] - 1
            }
        }

        )
    }
  return (
    <div className='flex flex-col md:flex-row w-full md:justify-between border-2 border-gray-400 p-3 rounded-lg gap-2 gap-y-4 shadow-xl bg-gray-100 md:absolute md:top-[90%]'>
        <div className='flex items-center border-b-2 border-gray-300 md:border-r-2 md:border-b-0'>
            <MdLocationOn className="w-9 h-9 text-red-500" />
            <input 
            value={destination} 
            onChange={(e)=>setDestination(e.target.value)} 
            type="text" 
            placeholder='Where to go?' 
            className='focus:outline-none bg-transparent'/>

        </div>
        <div className='flex items-center border-b-2 border-gray-200 md:border-r-2 md:border-b-0 pr-4 cursor-pointer'>
            <HiCalendar className='w-8 h-8 text-violet-600'/>
            <div className='text-sm'>
                22/12/2023 to 22/1/2024
            </div>

        </div>
        <div  className='flex items-center border-b-2 border-gray-300 md:border-r-2 md:border-b-0 pr-4 relative'>
            <div onClick={()=>setOpenOptions(!openOptions)} id='optionDropDown' className='text-sm cursor-pointer'>
                {options.adult} adult &bull; {options.children} children &bull; {options.room} room
            </div>
            {
                openOptions && <GuestOptionList options={options} setOpenOptions={setOpenOptions} handleOptions={handleOptions}/>
            }
        </div>
        <div>
            <button className='bg-violet-600 p-2 rounded-lg'>
                <HiSearch className='w-6 h-6 text-white'/>
            </button>
        </div>
    </div>
  )
}

export default Header

function GuestOptionList({options, handleOptions, setOpenOptions}){
    const optionRef = useRef()
    useOutsideClick(optionRef,"optionDropDown", ()=>setOpenOptions(false) )
   
    return(
        <div ref={optionRef} className='absolute top-7 md:top-12 w-[220px] border-2 border-gray-400 rounded-md shadow-xl bg-white p-4 z-50'>
            <OptionItem 
            type="adult"
            options={options}
            minLimit={1}
            handleOptions={handleOptions}
            />
            <OptionItem 
            type="children"
            options={options}
            minLimit={0}
            handleOptions={handleOptions}
            />
            <OptionItem 
            type="room"
            options={options}
            minLimit={1}
            handleOptions={handleOptions}
            />


        </div>
    )
}

function OptionItem({type, options, minLimit, handleOptions}){
    return(
        <div className='flex items-center justify-between gap-4 mb-4'>
            <span>{type}</span>
            <div className='flex items-center gap-4'>
                <button 
                onClick={()=>handleOptions(type, "dec")}
                className='bg-slate-100 py-1 px-2 rounded-md' 
                disabled={options[type] <= minLimit}>
                    <HiMinus/>
                </button>
                <span>{options[type]}</span>
                <button 
                onClick={()=>handleOptions(type, "inc")}
                className='bg-slate-100 py-1 px-2 rounded-md'>
                    <HiPlus/>
                </button>
            </div>
        </div>
    )
}