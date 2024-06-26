import React from 'react'
import logo from '../assets/earondemandlogo.png'
import { Link } from 'react-router-dom'



const SideCard = () => {
  return (
    <div className="rounded-md shadow-lg bg-white p-9 ">
    <ul className='md:min-w-[350px] min-w-[210px] '>
    <img src={logo} alt='' className='h-9' />
      <Link to={'/'}><li className='mt-9'>Home</li></Link>
      <Link to={'/about'}><li className='mt-3'>About EARonDemand</li></Link>
      <Link to={'/'}><li className='mt-3'>Our Expertise</li></Link>
      <Link to={'/'}><li className='mt-3'>Partner-Supported</li></Link>

      <div className='min-w-[170px] h-[0.5px] bg-gray-400 mt-9 mx-auto'></div>

      <Link to={'/'}><p className='font-medium text-lg mt-9'>Quick Links</p></Link>

      <Link to={'/'}><li className='mt-3'>Privacy Policy</li></Link>
      <Link to={'/'}><li className='mt-3'>Contact Us</li></Link>

      <div className='min-w-[150px] h-[0.5px] bg-gray-400 mt-24 mx-auto'></div>
     
      <p className='font-semibold text-gray-400 mt-4'>© EARonDemand Inc.2024</p>
    </ul>
  </div>
  )
}

export default SideCard