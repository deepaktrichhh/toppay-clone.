import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function RegisterPage(){
  const [searchParams] = useSearchParams()
  const referral = searchParams.get('code') || ''

  const [form, setForm] = useState({
    name:'', email:'', phone:'', password:'', confirmPassword:'',
    address:'', bank:'', ifsc:'', accountNumber:'', upi:'',
    referralCode: referral
  })

  const navigate = useNavigate()
  const [msg, setMsg] = useState('')

  const handle = e => setForm({...form, [e.target.name]: e.target.value})

  const submit = e => {
    e.preventDefault()
    if(!form.name || !form.email || !form.phone || !form.password){
      setMsg("Please fill required fields")
      return
    }
    if(form.password !== form.confirmPassword){
      setMsg("Passwords do not match")
      return
    }

    // Normally API call hota... yha demo ke liye direct OTP page
    navigate('/otp?phone=' + encodeURIComponent(form.phone))
  }

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-blue-600 mb-3 text-center">Toppay Registration</h1>

        {msg && <div className="text-red-500 text-sm mb-3">{msg}</div>}

        <form onSubmit={submit} className="space-y-3">
          <input name="name" className="input" placeholder="Full Name" onChange={handle}/>
          <input name="email" className="input" placeholder="Email" onChange={handle}/>
          <input name="phone" className="input" placeholder="Phone Number" onChange={handle}/>
          <input name="password" type="password" className="input" placeholder="Password" onChange={handle}/>
          <input name="confirmPassword" type="password" className="input" placeholder="Confirm Password" onChange={handle}/>
          <input name="address" className="input" placeholder="Address" onChange={handle}/>
          <input name="bank" className="input" placeholder="Bank Name" onChange={handle}/>
          <input name="ifsc" className="input" placeholder="IFSC Code" onChange={handle}/>
          <input name="accountNumber" className="input" placeholder="Account Number" onChange={handle}/>
          <input name="upi" className="input" placeholder="UPI ID" onChange={handle}/>

          <div className="text-sm text-gray-600">Referral Code: <b>{form.referralCode || 'None'}</b></div>

          <button className="w-full bg-blue-600 text-white p-3 rounded-xl text-lg font-semibold">
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
