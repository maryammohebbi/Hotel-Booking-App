import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("user@test.com")
    const [password, setPassword] = useState("1234")
    const {login, isAuthenticated} = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email && password) login(email, password)
    }

    useEffect(()=>{
        if(isAuthenticated) navigate("/", {replace: true})
    }, [isAuthenticated, navigate])

  return (
    <div className='max-w-sm md:max-w-lg lg:max-w-xl container mx-auto flex flex-col items-center mb-44'>
        <h2 className='font-bold text-xl text-slate-950 my-8'>Login</h2>
        <form 
        onSubmit={handleSubmit}
        className='w-full border-2 border-slate-500 rounded-lg p-4 flex flex-col gap-4'>
            <div>
                <label className='block' htmlFor="email">Email</label>
                <input 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                className='border-2 border-slate-300 rounded-lg w-full p-1' type="email" name="email"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                className='border-2 border-slate-300 rounded-lg w-full p-1' type="password" name="password"/>
            </div>
            <div>
                <button className='bg-green-300 rounded-lg p-2 w-full'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login