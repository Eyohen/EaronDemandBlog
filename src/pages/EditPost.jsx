import React, {useEffect, useState} from 'react'
import { URL } from '../url';
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"



const EditPost = () => {
    const postId = useParams().id;
    // const { postId } = useParams(); 
  
    const navigate = useNavigate()
  
    const [description, setDescription] = useState('')

    const [title, setTitle] = useState('')
    const [subheading, setSubHeading] = useState('')
    const [file,setFile]=useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const [error, setError] = useState(false)




    const fetchPost = async () => {
        try {
          const res = await axios.get(URL+"/api/single-post/"+postId);
          console.log(res.data.data)
          setTitle(res.data.data.title);
          setDescription(res.data.data.description);
          setSubHeading(res.data.data.subheading);
          

        //   setDessert(res.data.submenus.dessert);
        } catch (err) {
          console.log(err);
        }
      };




      const editPost = async () => {
        setIsLoading(true);
        try {
          const accessToken = localStorage.getItem("access_token");
      
          if (!accessToken) {
            throw new Error('Access token not found');
          
          }
      
          const res = await axios.put(
            URL+"/api/update-post/"+postId,
            { title, subheading, description },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
              }
            }
          );
      
          setError(false);
        } catch (err) {
          setError(true);
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };


      useEffect(() => {
        fetchPost();
      }, [postId]);

  return (
    <div className=''>
        <p className='text-center text-xl mt-16 text-red-300'>Edit Menu</p>

        <div className='max-w-[320px] mx-auto mt-16'>
        <p className=''>Title</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className='border border-red-300 w-full rounded-md px-2 py-1' placeholder=''/>

        <p className=''>Sub Heading</p>
        <input value={subheading} onChange={(e) => setSubHeading(e.target.value)} className='border border-red-300 w-full rounded-md px-2 py-1' placeholder=''/>

        <p className='mt-4'>Description</p>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='border border-red-300  w-full rounded-md px-2 py-1' placeholder='Please put in the description of the full menu'/>
        {/* <input value={image}  onChange={(e)=>setImage(e.target.files[0])}  className="border border-red-300 rounded-md w-full px-3 py-2"  type="file"  />
        <p>Current Image: {image}</p> */}

<div className='w-1/2 mx-auto'>
        <button onClick={editPost} className='bg-red-300 text-white px-6 py-1 rounded mt-4 '>{isLoading ? 'Loading ...':'Submit Menu'}</button>
        </div>

      </div>
        
        <p></p>
        
        </div>
  )
}

export default EditPost