import React from 'react'

function Login() {
  return (
    <div className='max-w-sm md:max-w-lg lg:max-w-xl container mx-auto flex flex-col items-center mb-44'>
        <h2 className='font-bold text-xl text-slate-950 my-8'>Login</h2>
        <form className='w-full border-2 border-slate-500 rounded-lg p-4 flex flex-col gap-4' action="">
            <div>
                <label className='block' htmlFor="email">Email</label>
                <input className='border-2 border-slate-300 rounded-lg w-full p-1' type="email" name="" id="" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input className='border-2 border-slate-300 rounded-lg w-full p-1' type="password" name="" id="" />
            </div>
            <div>
                <button className='bg-green-300 rounded-lg p-2 w-full'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login