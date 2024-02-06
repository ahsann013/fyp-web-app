import React from 'react';
import { Link } from '@nextui-org/react';

import Login from './Login.jsx';


const Navbar = () => {

  return (
    
    <>
      <div className='m-autot'>
        <div className='max-w py-3 flex bg-gray-800 px-1.5 shadow-xl top-0 sticky'>
         
          <h1 className='flex font-sans p-1.5 ml-5 font-extrabold text-3xl text-white transition-transform transform hover:scale-105 hover:text-gray-700  duration-300 shadow-sm rounded-xl hover:bg-white'>EVHub</h1>
          <Link href="/" className='px-5 font-medium ml-10  rounded-2xl text-white hover:text-gray-900 transition-colors duration-300 hover:bg-white'>Home</Link>
          <Link href="/about" className='px-5 font-medium ml-4 rounded-2xl text-white hover:text-gray-900 transition-colors duration-300 hover:bg-white'>About</Link>
          <Link href="/info" className='px-5 font-medium ml-4 rounded-2xl text-white hover:text-gray-900 transition-colors duration-300 hover:bg-white'>Info</Link>
          <div className="ml-auto my-auto px-auto flex">
          <Login/>
            <Link href="/signup" className="block rounded-xl p-2.5 ml-2 font-semibold text-white hover:text-gray-100 transition-colors duration-300 hover:bg-gray-700">Sign up</Link>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Navbar;
