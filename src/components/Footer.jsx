import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='mt-12'>

    <div className='flex justify-center gap-x-[90px]'>

        <div>
        <p className='font-semibold text-xl'>USA</p>
        <p className='font-light tracking-wider mt-6'>1178 Broadway,</p>
        <p className='font-light tracking-wider mt-1'>3rd Floor #1182,</p>
        <p className='font-light tracking-wider mt-1'>New York, Ny 10001</p>
        <p className='font-light tracking-wide mt-6'>ear@earondemand.com</p>

        <div className='w-[400px] h-[0.5px] bg-gray-400 mt-4'></div>

        <p className='font-semibold text-xl mt-4'>Canada</p>
        <p className='font-light tracking-wider mt-6'>17 brookmere road, Etobicoke,</p>
        <p className='font-light tracking-wider mt-1'>Toronto, ON; Broadridge Bay,</p>
        <p className='font-light tracking-wider mt-1'>Winnipeg, MB</p>
        <p className='font-light tracking-wider mt-1'>+1 431 999 0172</p>
        <p className='font-light tracking-wide mt-6'>ear@earondemand.com</p>
        </div>

        <div>
        <p className='font-semibold text-xl'>Nigeria</p>
        <p className='font-light tracking-wider mt-6'>4, Ayanboye Street</p>
        <p className='font-light tracking-wider mt-2'>Off Faramobi Ajike Street,</p>
        <p className='font-light tracking-wider mt-2'>Anthony Village, Lagos</p>
        <p className='font-light tracking-wider mt-2'>+234 913 1478 269</p>
        <p className='font-light tracking-wider mt-2'>WhatsApp Support</p>
        <p className='font-light tracking-wide mt-6'>ear@earondemand.com</p>
        </div>

        <div>
        <p className='font-semibold text-xl'>About us</p>
        <p className='font-light tracking-wider mt-6'>About EARonDemand</p>
        <p className='font-light tracking-wider mt-2'>School of Founders</p>
        <p className='font-light tracking-wider mt-2'>Join the Newsletter</p>
        <p className='font-light tracking-wider mt-2'>Contact Us</p>
        </div>

        <div>
        <p className='font-semibold text-xl'>Services</p>
        <p className='font-light tracking-wider mt-6'>Business Launch</p>
        <p className='font-light tracking-wider mt-2'>Business Strategy</p>
        <p className='font-light tracking-wider mt-2'>Funding Support</p>
        <p className='font-light tracking-wider mt-2'>Business Plans</p>
        <p className='font-light tracking-wider mt-2'>Bookkeeping</p>
        <p className='font-light tracking-wider mt-2'>Pitch Decks</p>
        <p className='font-light tracking-wider mt-2'>Documentation</p>
        <p className='font-light tracking-wider mt-2'>Market Research</p>
        <p className='font-light tracking-wider mt-2'>Grant Writing</p>
         </div>

        <div>
        <p className='font-semibold text-xl'>Useful links</p>
        <p className='font-light tracking-wider mt-6'>Privacy Policy</p>
        <p className='font-light tracking-wider mt-2'>Terms & Conditions</p>
        </div>



        </div>

        <div className='w-[1000px] h-[0.5px] bg-gray-300 mt-9 mx-auto'></div>

        <div className='px-[250px] mt-9 flex justify-between'>

    
        <p className='font-light '>© EARonDemand Inc.2024</p>

<div className='flex gap-x-6'>
        <FaInstagram size={25} />
        <FaFacebook size={25}/>
        <FaLinkedin size={25}/>
        </div>

        </div>

    </div>
  )
}

export default Footer