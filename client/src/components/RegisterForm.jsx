import React, { useState } from 'react';

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
    <section className="container">
            <div className="row bg-orange-200">
            <form onSubmit={handleFormSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input type="text" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter First Name" 
                    name="firstName"
                    value={playerInfo.firstName}
                    onChange={handleInputChange}
                    required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                    <input type="text" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Last Name" 
                    name="lastName"
                    value={playerInfo.lastName}
                    onChange={handleInputChange}
                    required />
                </div>  
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="number" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email Address" 
                    name="email"
                    value={playerInfo.email}
                    onChange={handleInputChange}
                    required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password" 
                    name="password"
                    value={playerInfo.password}
                    onChange={handleInputChange}
                    required />
                </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
            </form>
        </div>
    </section>
  );
};

export default RegisterForm;