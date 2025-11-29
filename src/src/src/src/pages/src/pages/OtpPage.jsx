import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function OTPPage(){
  const [searchParams] = useSearchParams()
  const phone = searchParams.get('phone') || ''
  const [otp, setOtp] = useState('')
  const [msg, setMsg] = useState('')

  const verify = e => {
    e.preventDefault()
    if(otp.length < 3){
      setMsg("Invalid OTP")
      return
    }
    setMsg("OTP verified successfully (Demo)")
  }

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-blue-600 text-center">Verify OTP</h1>
        <p className="text-center text-gray-600 mb-3">OTP sent to: <b>{phone}</b></p>

        {msg && <div className="text-blue-600 text-sm mb-3 text-center">{msg}</div>}

        <form onSubmit={verify} className="space-y-3">
          <input 
            className="input" 
            placeholder="Enter OTP" 
            value={otp} 
            onChange={e=>setOtp(e.target.value)}
          />
          <button className="w-full bg-blue-600 text-white p-3 rounded-xl text-lg font-semibold">
            Verify
          </button>
        </form>
      </div>
    </div>
  )
}
