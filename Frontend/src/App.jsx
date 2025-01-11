import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import MyProfile from './Pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './Pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:speciality' element={<Doctors />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/my-profile' element={<MyProfile/>} />
      <Route path='/my-appointment' element={<MyAppointment/>} />
      <Route path='/appointment/:docId' element={<Appointment/>} />
    </Routes>
    <Footer/>
      </div>
  )
}

export default App