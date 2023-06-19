import React from 'react'
import { Link } from 'react-scroll'
import Cole from '../assets/cole.png'

const coleProfile = () => {
  
  return (
<div name='coleProfile' className='w-full md:h-screen text-yellow-400'>
  <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    {/* <div className='pb-8'>
          <p className='text-9xl font-bold text-white'>
            My Profile
          </p>
          <p className='text-3xl py-6'>I Made This Page All For You.</p>
    </div> */}

    
      <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
          <img className="w-32 h-32 rounded-full mx-auto" src={Cole} alt="green geometry" />
          <h2 className="text-center text-4xl text-pink-500 font-semibold mt-3"> Cole Carter </h2>
          <p className="text-center text-gray-600 mt-1">Web Developer Imposter</p>
        <div className="flex justify-center mt-5">
            <Link to='myquiz' smooth={true} duration={500} className="text-blue-500 hover:text-blue-700 mx-3">My Quizzes</Link>
            <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">Create A Quiz</a>
            <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">Take A Quiz</a>
        </div>
        <div className="mt-5">
          <h3 className="text-xl text-center font-semibold">Bio</h3>
          <p className="text-gray-600 text-2xl text-center">Cole has been ginding hard or hardly grinding since March 2023. He prefers the backend processes of Web Development, but has been known to occasionally enjoy the front end styling of a web page.</p>
        </div>
      </div>
  </div>
</div>
)};

export default coleProfile;