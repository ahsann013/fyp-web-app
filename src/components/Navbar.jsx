import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Link as Button } from '@nextui-org/react'

import Login from './Login.jsx';
import { nextui } from '@nextui-org/react';


const Navbar = () => {

  return (
    
    <>
      
      <div className='m-autot'>
    
        <div className='max-w py-3 flex bg-gray-800 px-1.5 shadow-xl top-0 sticky'>
         
          <h1 className='flex font-sans p-1.5 ml-5 font-extrabold text-3xl text-white transition-transform transform hover:scale-105 hover:text-gray-700  duration-300 shadow-sm rounded-xl hover:bg-white'>EVHub</h1>
         
            <Button className='px-5 font-medium ml-10  rounded-2xl text-white hover:text-gray-900 transition-colors duration-300 hover:bg-white'> <Link to="/" >Home</Link></Button>
           
           <Button className='px-5 font-medium ml-10  rounded-2xl text-white hover:text-gray-900 transition-colors duration-300 hover:bg-white'> <Link to="/about" >About</Link></Button>
             <Button className='px-5 font-medium ml-10  rounded-2xl text-white hover:text-gray-900 transition-colors duration-300 hover:bg-white'> <Link to="/info">Info </Link></Button>
           
            <div className="ml-auto my-auto px-auto flex">
          <Login/>
             <Button className='px-5 font-medium ml-10  rounded-2xl text-white hover:text-gray-900 transition-colors duration-300 hover:bg-white'> <Link to="/signup" >signup </Link></Button>
            </div>
            
          </div>
      
        </div>
       
    </>
  );
}

export default Navbar;
