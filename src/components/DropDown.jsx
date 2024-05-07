import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const DropDown = () => {

  const navigate = useNavigate()

  const buslunch = () => {
    navigate('/business-launch')
  }
  return (
    <div className="rounded-md shadow-lg bg-white p-4">
    <ul className='min-w-[170px] cursor-pointer'>
      <Link to={'https://earondemand.com/business-launch'}><li className='font-normal hover:text-red-400'>Business Launch</li></Link>
      <Link to={'https://earondemand.com/business-strategy'}><li className='font-normal mt-3 hover:text-red-400 hover:ml-2'>Business Strategy</li></Link>
      <Link to={'https://earondemand.com/funding-support'}><li className='font-normal mt-3 hover:text-red-400 hover:ml-2'>Funding Support</li></Link>
      <Link to={'https://businessplans2go.com'}><li className='font-normal mt-3 hover:text-red-400 hover:ml-2'>Business Plans</li></Link>
      <Link to={'https://trybookkeeping.com/'}><li className='font-normal mt-3 hover:text-red-400 hover:ml-2'>Bookkeeping</li></Link>
      <Link to={'https://onepitchdecks.com/'}><li className='font-normal mt-3 hover:text-red-400 hover:ml-2'>Pitch Decks</li></Link>
      <Link to={'https://submissionsbyearondemand.com/'}><li className='font-normal mt-3 hover:text-red-400 hover:ml-2'>Documentation</li></Link>
      <Link to={'https://pocketgabby.com/'}><li className='font-normal mt-3 hover:text-red-400 hover:ml-2'>Market Research</li></Link>
      <Link to={'https://teamgranted.com/'}><li className='font-normal mt-3 hover:text-red-400 hover:ml-2'>Grant Writing</li></Link>
    </ul>
  </div>
  )
}

export default DropDown