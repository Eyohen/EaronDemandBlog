import React, { useState, useEffect } from 'react'
import spaghetti from '../assets/spaghetti.jpeg'
import { HiChevronLeft } from "react-icons/hi2";
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios'
import { URL } from '../url'


const BlogDetail = () => {
    const {id: postId} = useParams()
    const [items, setItems] = useState([])
    const navigate = useNavigate()

    
    const fetchPosts = async () => {

            try {
                
            
              const res =  await axios.get(URL+"/api/posts/"+postId)
              console.log(res.data)
              setItems(res.data)
            //   console.log(reservation)
            }
            catch(err){
              console.log(err)
            }
        
        } 
        
    
         useEffect(() => {
            fetchPosts()
         },[postId])
  return (
    <div>

<div onClick={()=> navigate(-1)} className='cursor-pointer font-semibold px-16 text-xl mt-9'><div className='flex gap-x-4 items-center'><HiChevronLeft size={25} className='mt-1' />back</div></div>

<div className='max-w-[900px] mx-auto justify-center mt-9'>
 
    <div>
    <p className='text-4xl font-bold mt-16 mx-6 md:mx-0'>{items?.title}</p>
<p className='text-2xl font-semibold mt-6 text-gray-500 mx-6 md:mx-0 '>{items?.subtitle}</p>
<p className='font-medium text-gray-600 mt-4 mx-4 md:mx-0'>{items?.user?.firstName},{items?.user?.lastName} {new Date(items?.date).toDateString()}</p>
</div>
</div>



<div className='max-w-[900px] md:mx-auto mt-16 mx-4'>
<img src={spaghetti} alt='' className='object-fit w-[900px] md:h-[550px] h-[300px] rounded-xl '/>

<p className='text-lg text-gray-700 mt-9'>{items?.text}</p>
{/* <p className='text-lg text-gray-700 mt-2'>Yes, its true, you dont need to ask your parents to give you money for rent, and for other expenses.</p>

<p>Yes, its true, you dont need to ask your parents to give you money for rent, and for other expenses.</p> */}
</div>

<div className='mb-16'></div>
    </div>
  )
}

export default BlogDetail