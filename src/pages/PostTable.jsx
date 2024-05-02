import React, { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { URL, IF } from '../url'
import { SlPencil } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { SlTrash } from "react-icons/sl";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { MdEdit } from "react-icons/md";
import PaginationButtons from '../components/PaginationButtons';


const PostTable = () => {
  const navigate=useNavigate()
    const [showConfirmation, setShowConfirmation] = useState("")
    const [items, setItems] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    const fetchPosts = async () => {

    //   const accessToken = localStorage.getItem("access_token");

    //   if(!accessToken){
    //         // Handle the case where the access token is not available
    //     console.error('Access token not fund')
    //   }


        const res = await axios.get(URL+`/api/list-posts?page=${currentPage + 1}`
        //,{
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`,
        //   },
        // }
        )
        setItems(res.data.data)
        console.log(res.data)
        setPageCount(res.data.meta.total);
    }


    useEffect(() => {
      fetchPosts()
    }, [currentPage])

    
    // const handlePageChange = (page) => {
    //     setCurrentPage(page);
    //   };

    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected); // Update the current page when pagination is clicked
    };
 

    const handleDelete=async(itemId)=>{
      try{
        const accessToken = localStorage.getItem("access_token");

        if(!accessToken){
              // Handle the case where the access token is not available
          console.error('Access token not found')
        }
  
  
        const res = await axios.delete(URL+"/api/delete-post/"+itemId,{
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        setItems((prevData) => prevData.filter(item => item._id !== itemId));
        console.log(res.data)
      }
      catch(err){
        console.log(err)
      }
    }



  return (
    <div className='w-full'>
        <div className='flex justify-between  h-12 bg-white mt-6'>
        <div onClick={() => navigate(-1)} className="flex items-center space-x-3 pt-6 px-12">
        <SlArrowLeft />
        <h1 className='font-bold md:text-2xl text-xl '>Back</h1>
        </div>

    
        </div>


        <div className='max-w-[1100px] bg-white mx-auto'>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
      <h1 className="font-bold text-2xl mt-10 text-center text-red-300">
        Posts Created
      </h1>

      <div class="max-h-60 overflow-y-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr >
          <th scope="col" class="px-6 py-3 font-light text-red-300">
              id
            </th>
            <th scope="col" class="px-6 py-3 font-light text-red-300">
              Post
            </th>
            <th scope="col" class="px-6 py-3 font-light text-red-300">
              edit
            </th>
            <th scope="col" class="px-6 py-3 font-light text-red-300">
              delete
            </th>
            <th scope="col" class="px-6 py-3 font-light text-red-300">
              view
            </th>
          </tr>
        </thead>
        <tbody>
      
            {items.map((item) => (
            
              <tr
                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-200"
                key={item._id}
                //  onClick={()=>navigate(`/menudetail/${item._id}`)}
              >
                 <td class="px-6 py-2">{item.id}</td>
                <td class="px-6 py-2">{item.title.slice(0,9)}...</td>
               
                <Link to={`/editpost/${item.id}`}><td class="px-6 py-2"><MdEdit className='mt-3'/></td></Link>
                <td class="px-6 py-2" onClick={() => handleDelete(item.id)}><SlTrash className='text-red-800'/></td>
                <Link to={`/blogdetail/${item.id}`}><td class="px-6 py-2"><HiOutlineArchiveBox className=''/></td></Link>
               
              </tr>

            ))}
        </tbody>
      </table>
      </div>
     
    </div>

      <div className='flex justify-center gap-x-9 mt-9'>
      <PaginationButtons prop1={handlePageChange} prop2={pageCount} />
      </div>
        </div>
       
      
       
        
        
    </div>
  )
}

export default PostTable