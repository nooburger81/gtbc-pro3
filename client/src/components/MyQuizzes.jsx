import React from 'react'
import Jung from '../assets/jung.png'
import Cole from '../assets/cole.png'
import Rehman from '../assets/rehman.png'
import { Link } from 'react-scroll'

const MyQuizzes = () => {
  return (

    <div name='myquiz' className=''>
  
  <div className='flex items-center justify-center min-h-screen'>
    <div className='flex space-x-4'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-30 mx-auto' src={Jung} alt="JavaScript Icon" />
            <Link to='quiz' smooth={true} duration={500}>
            <p className='my-4'>Take Quiz</p>
            </Link>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-30 mx-auto' src={Cole} alt="React Icon" />
            <p className='my-4'>Take Quiz</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-30 mx-auto' src={Rehman} alt="MongoDB Icon" />
            <p className='my-4'>Take Quiz</p>
        </div>
    </div>
</div>


  </div>
  )
}

export default MyQuizzes 