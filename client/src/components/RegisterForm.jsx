import React, { useState } from 'react';
import { Link } from 'react-scroll'

import Orb from '../assets/orb.png';

import { useMutation } from '@apollo/client';
import { ADD_PLAYERS } from '../utils/mutations';

const RegisterForm = () => {

  const [ playerInfo, setPlayerInfo ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [mutatePlayers, { error }] = useMutation(ADD_PLAYERS);

  const handleInputChange = async (e) => {
    const { firstName, value } = e.target;
    setPlayerInfo({...playerInfo, [firstName]: value });
  }
  
const handleFormSubmit = async (e) => {
  e.preventDefault();
  try {
    const { data } = await mutatePlayers({
          variables: {
            ...playerInfo
          }
          })
          window.location.reload();
          console.log(data);
        } catch (err) {
          console.log(err);
        }
   
  }

  return (
    

<div name='register' className='w-full h-screen flex'>
<div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-800 bg-[#f99cf6] sm:max-w-[900px]'>
   
    <div className='p-4 flex flex-col justify-around'>
        <form>
            <h2 className='text-6xl font-bold text-center mb-8  text-[#53e1b9]'>What R U?</h2>
            <p className='text-3xl font-bold text-center mb-8'>Ugh. Figure It Out.</p>
            <div>
                <input className='border p-2 m-2' type="string" placeholder='First Name' />
                <input className='border p-2 m-2' type="string" placeholder='Last Name' />
                <input className='border p-2 m-2' type="string" placeholder='Email' />
                <input className='border p-2 m-2' type="string" placeholder='Password' />
            </div>
            <Link to='profile' smooth={true} duration={500}>
            <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500'>You Just Wanna Be Like Us</button>
            </Link>
            
        </form>
        <Link to='login' smooth={true} duration={500}>
        <p className='text-center cursor-pointer'>You're So Confused, Aren't You?  Sign In.</p>
        </Link>
    </div>
    <div className='w-full h-[550px] hidden md:block'>
        <img className='w-full h-full' src={Orb} alt="/" />
    </div>
</div>
</div>



  );
};



export default RegisterForm;