import React from 'react'

import Nuggies from '../assets/nuggies.png'

 const Login = () => {
  return (
    <div name='login' className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-800 bg-[#f99cf6] sm:max-w-[900px]'>
            <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src={Nuggies} alt="/" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                    <h2 className='text-6xl font-bold text-center mb-8  text-blue-400'>Whatchoo Know 'Bout Me?</h2>
                    <p className='text-3xl font-bold text-center mb-8'>A Friendly Quiz Game</p>
                    <div>
                        <input className='border p-2 m-2' type="text" placeholder='Username' />
                        <input className='border p-2' type="password" placeholder='Password' />
                    </div>
                    <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500'>Sign In</button>
                    <p className='text-center'>Forgot Username or Password?</p>
                </form>
                <p className='text-center'>Sign Up</p>
            </div>
        </div>
    </div>
  )
}

export default Login