import React, { useState } from 'react'
import { SlGlobe } from "react-icons/sl";
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { URL } from "../url"
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const navigate = useNavigate()

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const res = await axios.post(`${URL}/api/login`, { email, password })
      const { access_token, status } = res.data;
      console.log(res.data)

      if (status) {
        localStorage.setItem("access_token", access_token)
        localStorage.setItem("currentUser", JSON.stringify(res.data.user));
        navigate("/dashboard")
       
      }
      
      else {
        setError(true)
      }
    } catch (err) {
      setError(true)
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <p className='font-bold text-lg ml-9 mt-6'>EaronDemand</p>
      <div className='flex items-center justify-center h-[100vh]'>
        <div className='border border-red-50 rounded-lg px-4 md:px-[180px] py-[40px] relative'>
          <p className='font-bold text-lg text-center'>Admin Login</p>
          <p className='pt-6'>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} className='border border-red-200 w-full md:w-[400px] py-2 px-3 rounded-lg hover:border-red-200' />
          <p className='pt-5'>Password</p>
          <div className="relative w-full md:w-[400px]">
            <div className="absolute inset-y-0 right-0 flex items-center px-2">
              <label onClick={togglePasswordVisibility} className="px-2 py-1 text-xl font-mono cursor-pointer text-gray-400" htmlFor="toggle">{isPasswordVisible ? (<RiEyeLine />) : (<RiEyeOffLine />)}</label>
            </div>
            <input onChange={(e) => setPassword(e.target.value)} className="border border-red-200 rounded-lg w-full py-2 px-3 leading-tight hover:border-red-200 pr-16 font-mono" type={isPasswordVisible ? "text" : "password"} autoComplete="off" />
          </div>
          <div>
            <button onClick={handleSubmit} className='bg-[#F7F7F7] text-[#98999A] w-full md:w-[400px] py-2 rounded-2xl mt-6 hover:bg-red-200 hover:text-white'>{isLoading ? "Loading..." : "Login"}</button>
            {error && <h3 className='text-red-500 text-lg text-center'>Something went wrong</h3>}
          </div>
        </div>
      </div>
      <div className='flex justify-between mb-12'>
        <p className='px-6 text-[#6A6B6C]'>Privacy Policy</p>
        <p className='px-6 text-[#6A6B6C]'>All Rights Reserved © 2024</p>
      </div>
    </div>
  )
}

export default Login
