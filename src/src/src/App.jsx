import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import OTPPage from './pages/OtpPage'

export default function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage/>} />
        <Route path="/regist" element={<RegisterPage/>} />
        <Route path="/otp" element={<OTPPage/>} />
      </Routes>
    </Router>
  )
}
