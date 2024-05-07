import React from 'react'
import spaghetti from '../assets/spaghetti.jpeg'
import { URL, IF } from '../url'
import truncate from 'html-truncate';
import QuillContent from '../components/QuillContent';


const Postcards = ({post}) => {
  return (
    <div>
        {/* <div className='px-64 grid grid-cols-3 justify-items-center gap-y-6 mt-16'> */}
            <div className='rounded-xl max-w-[520px]'>
            <img src={`${URL}/storage/${post?.image}`} alt='' className='object-fit w-[520px] h-[300px] rounded-xl '/>
            {/* <img src={`http://localhost:8000/storage/${post?.image}`} alt='' className='object-fit w-[520px] h-[300px] rounded-xl '/> */}
            <p className='font-semibold text-lg px-1 mt-2'>{post.title}</p>
            <p className='flex'><QuillContent content={post.description} maxLength={30} /> ...</p>
            <p className='px-1 text-gray-500 font-medium mt-4'>{new Date(post?.created_at).toDateString()}</p>
            </div>

           
         {/* </div> */}
    </div>
  )
}

export default Postcards