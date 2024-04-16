import React, { useState, useEffect } from 'react'
import spaghetti from '../assets/spaghetti.jpeg'
import Navbar from '../components/Navbar'
import { FiChevronRight } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Postcards from './Postcards';
import axios from 'axios'
import { URL } from '../url'
import { Link } from 'react-router-dom';
import NewsLetterBar from '../components/NewsLetterBar';
import Footer from '../components/Footer';

const Home = () => {
 const [posts, setPost] = useState([])

    const fetchPosts = async () => {
        try {
          const res = await axios.get(URL + "/api/posts/");
          setPost(res.data);
          console.log(res.data)
        } catch (err) {
          console.log(err);
        }
      };
    
      useEffect(() => {
        fetchPosts();
      }, []);


  return (
    <div className=''>
        <Navbar/>
 
          <div className='flex justify-center mt-12'>
            <div className='text-center'>
         <button className='bg-red-100 rounded-full px-12 py-4 text-xl font-semibold'>Blog</button>
         <p className='text-4xl font-semibold text-[#006D77] mt-9'>Blogs and Articles</p>
         </div>
         </div>




         {/* blog grid */}
         <div className='px-64 grid grid-cols-2 justify-items-center gap-y-6 mt-16'>
         {posts.map(post => (
        <Link to={`/blogdetail/${post._id}`}>
       <Postcards key={post._id} post={post}/>
       </Link>
         ))}
                </div>
  
  <div className='px-64'>
  <NewsLetterBar/>
  </div>

  <Footer/>
         

         <div className='mb-16'></div>
   
   
    </div>
  )
}

export default Home