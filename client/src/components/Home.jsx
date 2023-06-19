import React from 'react';
import { Link } from 'react-scroll';
import 'animate.css';


const Home = () => {
   
    return (
        <div name='home' className='w-full h-screen'>


      {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                    <p className='text-8xl text-yellow-300 animate__animated animate__fadeInDown animate__delay-1s'>It's Time For</p>
                    <h1 className='text-9xl sm:text-9xl font-bold text-[#f99cf6] animate__animated animate__backInDown animate__delay-2s'>Whatchoo Know 'Bout Me?!</h1>
                    <h2 className='text-8xl text-[#2343a4] animate__animated animate__bounceIn animate__delay-3s'>A Friendly Quiz Game</h2>
                <Link to='login' smooth={true} duration={500}>
                    <button className='h-full text-white bg-transparent text-8xl font-bold group text-right hover:bg-green-300 animate__animated animate__fadeIn animate__delay-5s'>Play 
                        <span>
                        </span>
                    </button>
                </Link>
                </div>
            </div>
      
    )};

    
export default Home;