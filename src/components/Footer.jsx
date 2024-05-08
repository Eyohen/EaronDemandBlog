import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='mt-12 mx-6 md:mx-0'>

    <div className='md:flex justify-center gap-x-[90px]'>

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
        <Link to={'https://api.whatsapp.com/send?phone=2347030831279'}><p className='font-light tracking-wider mt-2'>WhatsApp Support</p></Link>
        <p className='font-light tracking-wide mt-6'>ear@earondemand.com</p>
        </div>

        <div>
        <p className='font-semibold text-xl'>About us</p>
        <Link to={'https://earondemand.com/about'}><p className='font-light tracking-wider mt-6'>About EARonDemand</p></Link>
        <Link to={'https://bloomfounder.com/'}><p className='font-light tracking-wider mt-2'>School of Founders</p></Link>
        <Link to={'https://ear.myflodesk.com/earsignup'}><p className='font-light tracking-wider mt-2'>Join the Newsletter</p></Link>
        <Link to={'https://earondemand.com/contact'}><p className='font-light tracking-wider mt-2'>Contact Us</p></Link>
        </div>

        <div>
        <p className='font-semibold text-xl'>Services</p>
        <Link to={'https://earondemand.com/business-launch'}><p className='font-light tracking-wider mt-6'>Business Launch</p></Link>
        <Link to={'https://earondemand.com/business-strategy'}><p className='font-light tracking-wider mt-2'>Business Strategy</p></Link>
        <Link to={'https://earondemand.com/funding-support'}><p className='font-light tracking-wider mt-2'>Funding Support</p></Link>
        <Link to={'https://businessplans2go.com/'}><p className='font-light tracking-wider mt-2'>Business Plans</p></Link>
        <Link to={'https://trybookkeeping.com/'}><p className='font-light tracking-wider mt-2'>Bookkeeping</p></Link>
        <Link to={'https://onepitchdecks.com/'}><p className='font-light tracking-wider mt-2'>Pitch Decks</p></Link>
        <Link to={'https://submissionsbyearondemand.com/'}><p className='font-light tracking-wider mt-2'>Documentation</p></Link>
        <Link to={'https://pocketgabby.com/'}><p className='font-light tracking-wider mt-2'>Market Research</p></Link>
        <Link to={'https://teamgranted.com/'}><p className='font-light tracking-wider mt-2'>Grant Writing</p></Link>
         </div>

        <div>
        <p className='font-semibold text-xl'>Useful links</p>
        <Link to={'https://earondemand.com/privacy'}><p className='font-light tracking-wider mt-6'>Privacy Policy</p></Link>
        <Link to={'https://earondemand.com/terms'}><p className='font-light tracking-wider mt-2'>Terms & Conditions</p></Link>
        </div>



        </div>

        <div className='w-[1000px] h-[0.5px] bg-gray-300 mt-9 mx-auto'></div>

        <div className='px-[6px] md:px-[250px]  mt-9 flex justify-between'>

    
        <p className='font-light '>© EARonDemand Inc.2024</p>

<div className='flex gap-x-6'>
        <Link to={'https://www.instagram.com/earondemand/'}><FaInstagram size={25} /></Link>
        <Link to={'https://www.facebook.com/photo/?fbid=805996339928301&set=a.533417640519507/'}><FaFacebook size={25}/></Link>
        <Link to={'https://www.linkedin.com/company/earondemand/'}><FaLinkedin size={25}/></Link>
        </div>

        </div>

    </div>
  )
}

export default Footer