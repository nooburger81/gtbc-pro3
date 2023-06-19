import React from 'react'
import { Link } from 'react-scroll'
import Rehman from '../assets/rehman.png'

const rehmanProfile = () => {
  
  return (
<div name='coleProfile' className='w-full md:h-screen text-yellow-400'>
  <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
          <img className="w-32 h-32 rounded-full mx-auto" src={Rehman} alt="green geometry" />
          <h2 className="text-center text-4xl text-pink-500 font-semibold mt-3"> Rehman Qureshi </h2>
          <p className="text-center text-gray-600 mt-1">Web Developer? Barely Know Her</p>
        <div className="flex justify-center mt-5">
            <Link to='myquiz' smooth={true} duration={500} className="text-blue-500 hover:text-blue-700 mx-3">My Quizzes</Link>
            <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">Create A Quiz</a>
            <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">Take A Quiz</a>
        </div>
        <div className="mt-5">
          <h3 className="text-xl text-center font-semibold">Bio</h3>
          <p className="text-gray-600 text-2xl text-center">Since early 2023 Rehman has been known in the local ATL scene to be the go to for all of your web development inquiries. He is proficient in all, but more specifically in JavaScript, CSS and mongoDB.</p>
        </div>
      </div>
  </div>
</div>
)};

export default rehmanProfile;