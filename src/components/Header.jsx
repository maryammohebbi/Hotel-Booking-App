import React, { useRef, useState } from 'react'
import {MdLocationOn} from "react-icons/md"
import {HiCalendar, HiMinus, HiPlus, HiSearch} from "react-icons/hi"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range'
import useOutsideClick from '../hooks/useOutsideClick'
import { format } from 'date-fns';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';


function Header() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [destination, setDestination] = useState(searchParams.get("destination") || "")
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ])
    const [openDate, setOpenDate] = useState(false)
    const navigate = useNavigate()
    const encodedParams = createSearchParams({
        date: JSON.stringify(date),
        destination,
        options: JSON.stringify(options)
    })

    const handleOptions = (name, operation)=> {
        setOptions((prev)=>{
            return{
                ...prev,
                [name]: operation === "inc" ? options[name] + 1 : options[name] - 1
            }
        })
    }
    const handleSearch = ()=>{
        navigate({
            pathname: "/hotels",
            search: encodedParams.toString()
        })

    }
  return (
    <div className='flex flex-col md:flex-row w-full md:justify-between border-2 border-gray-400 p-3 rounded-lg gap-2 gap-y-4 shadow-xl bg-gray-100'>
        <div className='flex items-center border-b-2 border-gray-300 md:border-r-2 md:border-b-0'>
            <MdLocationOn className="w-9 h-9 text-red-500" />
            <input 
            value={destination} 
            onChange={(e)=>setDestination(e.target.value)} 
            type="text" 
            placeholder='Where to go?' 
            className='focus:outline-none bg-transparent'/>

        </div>
        <div className='flex items-center border-b-2 border-gray-200 md:border-r-2 md:border-b-0 pr-4 cursor-pointer relative'>
            <HiCalendar className='w-8 h-8 text-violet-600'/>
            <div onClick={()=> setOpenDate(!openDate)} className='text-sm'>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
            </div>
            {openDate && 
                <DateRange
                    className='absolute top-[50px] -left-4  z-[10000]'
                    ranges={date} 
                    onChange={(item)=> setDate([item.selection])} 
                    minDate={new Date()} 
                    moveRangeOnFirstSelection={true}
                />}

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
            <button onClick={handleSearch} className='bg-violet-600 p-2 rounded-lg'>
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
        <div ref={optionRef} className='absolute top-7 md:top-12 w-[220px] border-2 border-gray-400 rounded-md shadow-xl bg-white p-4  z-[10000]'>
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