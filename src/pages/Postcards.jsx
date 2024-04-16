import React from 'react'
import spaghetti from '../assets/spaghetti.jpeg'

const Postcards = ({post}) => {
  return (
    <div>
        {/* <div className='px-64 grid grid-cols-3 justify-items-center gap-y-6 mt-16'> */}
            <div className='rounded-xl max-w-[520px]'>
            <img src={spaghetti} alt='' className='object-fit w-[520px] h-[300px] rounded-xl '/>
            <p className='font-semibold text-lg px-1 mt-2'>{post.title}</p>
            <p className='px-1 text-gray-500 mt-1'>{post.text.slice(0, 30)} . . . <span className='text-green-500'>Read more</span></p>
            <p className='px-1 text-gray-500 font-medium mt-4'>April 28, 2021</p>
            </div>

           
            

         {/* </div> */}
    </div>
  )
}

export default Postcards