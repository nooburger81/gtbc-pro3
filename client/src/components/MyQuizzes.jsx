import React from 'react'
import Jung from '../assets/jung.png'
import Cole from '../assets/cole.png'
import Broccoli from '../assets/broccolihouse.jpeg'
import { Link } from 'react-scroll'

const MyQuizzes = () => {
  return (

<div name='myquiz' className='w-full md:h-screen text-yellow-400'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-9xl font-bold text-white'>
            My Quizzes
          </p>
          <p className='text-3xl py-6'>Look At My Beautiful Friends, And They're Beautiful Quizzes.</p>
        </div>

        
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {/* Grid Item */}
            <div 
            style={{ backgroundImage: `url(${Jung})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-no-repeat bg-cover'>

                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-3xl font-bold text-pink-500 tracking-wider'>
                        My Friend Jung

                  </span>
                  <div className='pt-8 text-center'>
                   
                    <Link to='quiz' smooth={true} duration={500}>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Take Quiz</button>
                    </Link>

                  </div>
                </div>
            </div>
            <div 
            style={{ backgroundImage: `url(${Cole})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-pink-500 tracking-wider'>
                        My Friend Cole

                  </span>
                  <div className='pt-8 text-center'>
                   
                    <Link to='quiz' smooth={true} duration={500}>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Take Quiz</button>
                    </Link>

                  </div>
                </div>
            </div>
            <div 
            style={{ backgroundImage: `url(${Broccoli})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-no-repeat'>

                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-pink-500 tracking-wider'>
                        My Friend Rehman

                  </span>
                  <div className='pt-8 text-center'>
                   
                  <Link to='quiz' smooth={true} duration={500}>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Take Quiz</button>
                    </Link>

                  </div>
                </div>
            </div>
        </div>
        </div>
    </div>





  )
}

export default MyQuizzes 