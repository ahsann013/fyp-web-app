

import './App.css'

import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'

import Info from './components/Info'
import About from './components/About'
import Signup from './components/Signup'
import DashBoard from './components/DashBoard'

function App() {
 

  return (
    <>
  
      
           <Navbar />
     
      <Routes>
        <Route path='/' />
        <Route path='/contactUs' element={<Info/>} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
     
      

    </>
  )
}

export default App
