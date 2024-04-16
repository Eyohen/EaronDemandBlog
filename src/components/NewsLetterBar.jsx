import React from 'react'

const NewsLetterBar = () => {
  return (
    <div className='rounded-xl bg-red-100 py-12 px-9 mt-9'>
        <div className='flex gap-x-12 items-center justify-end'>
            <div>
        <p className='font-bold text-2xl'>Join Our Newsletter</p>
        <p className='mt-2 text-lg max-w-[600px]'>Be one of the first to get updates from EarOnDemands tips, insights, motivations and all</p>
        </div>
        <button className='bg-black text-white px-4 py-2 rounded-full'>Click here to Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetterBar