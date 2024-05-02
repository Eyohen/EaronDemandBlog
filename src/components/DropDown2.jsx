import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const DropDown2 = () => {
  return (
    <div className="rounded-md shadow-lg bg-white p-4">
    <ul className='min-w-[170px] cursor-pointer '>
      <Link to={'https://bloomfounder.com/'}><li className='font-normal hover:text-red-400 hover:ml-2'>School of Startup</li></Link>
      <Link to={'https://crosshired.com/'}><li className='font-normal mt-3 hover:text-red-400 hover:ml-2'>Hire Tech Experts</li></Link>
      <Link to={'https://pigeonhire.com/'}><li className='font-normal mt-3 hover:text-red-400 hover:ml-2'>Hire Marketing Experts</li></Link>
      <Link to={'https://liddly.com/'}><li className='font-normal mt-3 hover:text-red-400 hover:ml-2'>CareerDocs</li></Link>
     
    </ul>
  </div>
  )
}

export default DropDown2