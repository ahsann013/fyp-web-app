

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
  
     <Navbar/>
     
        <Routes>
        <Route path='/fyp-web-app.vercel.app' />
        <Route path='/fyp-web-app.vercel.app/info' element={<Info/>} />
        <Route path='/fyp-web-app.vercel.app/about' element={<About />} />
        <Route path='/fyp-web-app.vercel.app/signup' element={<Signup />} />
        <Route path='/fyp-web-app.vercel.app/dashboard' element={<DashBoard />} />
          </Routes>
     
      

    </>
  )
}

export default App
