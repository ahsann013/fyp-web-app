import { useState } from 'react'

import './App.css'
import { Route,Routes } from 'react-router-dom'


import Navbar from './components/Navbar'
import Login from './components/Login'
import Info from './components/Info'
import About from './pages/About'
import Signup from './components/Signup'
import DashBoard from './components/DashBoard'

function App() {
 

  return (
    <>
  
     <Navbar/>
      <Routes>
        <Route path='/fyp-web-app' />
        <Route path='/fyp-web-app/info' element={<Info/>} />
        <Route path='/fyp-web-app/about' element={<About />} />
        <Route path='/fyp-web-app/signup' element={<Signup />} />
        <Route path='/fyp-web-app/dashboard' element={<DashBoard />} />
         <Route path='/' />
        <Route path='/info' element={<Info/>} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<DashBoard/>} />
      </Routes>
    
      

    </>
  )
}

export default App
