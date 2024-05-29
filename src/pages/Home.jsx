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
import ReactPaginate from 'react-paginate';
import PaginationButtons from '../components/PaginationButtons';
// import { Helmet } from 'react-helmet-async';
import truncate from 'html-truncate';
import {Helmet} from "react-helmet";

const Home = () => {
 const [posts, setPost] = useState([]);
 const [loading, setLoading] = useState(true);
 const [currentPage, setCurrentPage] = useState(0);
 const [pageCount, setPageCount] = useState(0);

// const totalPages = 13;

    const fetchPosts = async () => {
        try {
          const res = await axios.get(URL + `/api/list-posts?page=${currentPage + 1}`);

          setPost(res.data.data);
          setPageCount(res.data.meta.total);
          console.log(res.data.data)
        }
             catch (err) {
          console.log(err);
          // setLoading(false)
        }
      };
    
      useEffect(() => {
        fetchPosts();
      }, [currentPage]);  // fetch data when currentPage changes

      // const handlePageChange = (page) => {
      //   setCurrentPage(page);
      // };

      const handlePageChange = ({ selected }) => {
        setCurrentPage(selected); // Update the current page when pagination is clicked
      };
   


  return (
 
    <>
    <Helmet>
      <title>EarOnDemand | Get your stories and posts on tech solutions here</title>
     <meta name='keywords' content='earondemand earondemand blog earondemand-blog' />
      <meta name='description' content='Here we give posts about everything in tech and business'/>
      </Helmet>
    <div className='overflow-x-hidden w-full'>
        <Navbar/> 
 
         
            <div className='text-center'>
         <button className='bg-red-100 rounded-full px-12 py-4 text-xl font-semibold mt-12'>Blog</button>
         <p className='text-4xl font-semibold text-[#006D77] mt-9'>Blogs and Articles</p>
         </div>

        
         {/* post grids */}
         <div className='px-6 md:px-64 grid md:grid-cols-2 md:gap-x-4 justify-items-center gap-y-6 mt-16'>
         {posts?.map(post => (
        <Link to={`/blogdetail/${post.id}`}>
       <Postcards key={post.id} post={post}/>
       </Link>
         ))}
            </div>
            {/* <div className='flex justify-center gap-x-9 mt-9'>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button className='border border-red-300 px-4' key={page} onClick={() => handlePageChange(page)}>{page}</button>
        ))}
      </div> */}

<div className='flex justify-center gap-x-9 mt-9'>
      <PaginationButtons prop1={handlePageChange} prop2={pageCount} />
      </div>
  
  <div className='md:px-64 px-6'>
  <NewsLetterBar/>
  </div>

  <Footer/>
         

         <div className='mb-16'></div>
   
   
    </div>

    </>

  )
}

export default Home
