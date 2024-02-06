import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Link as Button } from '@nextui-org/react'

import Login from './Login.jsx';
import { nextui } from '@nextui-org/react';


const Navbar = () => {

  return (
    
    <>
      
      <div className='m-autot'>
    
        <div className='max-w py-2.5 flex bg-gray-800 px-1.5 shadow-xl top-0 sticky'>
         
          <h1 className='flex font-sans p-2.5 ml-5 font-extrabold text-3xl text-white transition-transform transform hover:scale-105 hover:text-gray-700  duration-300 shadow-sm rounded-xl hover:bg-white'>EVHub</h1>
         
          <Link to="/" >
            <Button className='p-2.5 mt-1.5 font-medium ml-16  rounded-2xl text-white hover:text-gray-900 transition-colors duration-300 hover:bg-white'> Home</Button>
          </Link>
               <Link to="/about" >
            <Button className='p-2.5  mt-1.5  font-medium ml-16  rounded-2xl text-white hover:text-gray-900 transition-colors duration-300 hover:bg-white'> About</Button>
          </Link>
         
               <Link to="/contactUs" >
            <Button className=' p-2.5  mt-1.5  font-medium ml-16  rounded-2xl text-white hover:text-gray-900 transition-colors duration-300 hover:bg-white'> Contact Us</Button>
          </Link>
           
          
            
           
            <div className="ml-auto my-auto px-auto flex">
          <Login/>
          <Link to="/info" >
            <Button className='p-2.5 font-medium ml-6 mr-2 rounded-2xl text-white hover:text-gray-900 transition-colors duration-300 hover:bg-white'> Signup</Button>
          </Link>
            
          </div>
      </div>
        </div>
       
    </>
  );
}

export default Navbar;
