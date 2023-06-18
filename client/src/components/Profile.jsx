import React from 'react'
import Brandon from '../assets/mexilovefood.webp'

const ProfileCard = () => {
  return (
    <div name='profile' className="bg-yellow-500">
  <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
    <img className="w-32 h-32 rounded-full mx-auto" src={Brandon} alt="green geometry" />
    <h2 className="text-center text-2xl font-semibold mt-3">Brandon S.</h2>
    <p className="text-center text-gray-600 mt-1">Confused Web Developer</p>
    <div className="flex justify-center mt-5">
      <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">My Quizzes</a>
      <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">Create A Quiz</a>
      <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">Take A Quiz</a>
    </div>
    <div className="mt-5">
      <h3 className="text-xl font-semibold">Bio</h3>
      <p className="text-gray-600 mt-2">Brandon has been skillfully breaking code beyond repair since 2023. He is semi-skilled in JavaScript, React, and Tailwind CSS.</p>
    </div>
  </div>
</div>
  )
}

export default ProfileCard