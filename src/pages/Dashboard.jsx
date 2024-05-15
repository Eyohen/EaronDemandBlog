import React, { useState, useEffect} from "react";
import { URL } from '../url'
import DatePicker from "react-datepicker";
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import { Editor } from '@tinymce/tinymce-react';
import SideBar from "../components/SideBar";
import logo from '../assets/earondemandlogo.png'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';



const Dashboard = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [title, setTitle] = useState("")
  const [subheading, setSubHeading] = useState("")
  const [description, setDescription] = useState("")
  const [fileimage, setPhoto] = useState("")
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const logOut = async () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("currentUser");
    setData(null)
    navigate("/login")
  }

  
  const uploadPost = async () => {

    console.log(fileimage);
    console.log(description);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('subheading', subheading);
    formData.append('description', description);
    formData.append('image', fileimage);

    console.log(formData);

    const accessToken = localStorage.getItem("access_token");
    console.log(formData);

    if (!accessToken) {
      // Handle the case where the access token is not available
      console.error('Access token not found')
    }

    const res = await axios.post(URL + "/api/create-post", formData, {
      headers: {
        'Content-Type': "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      }
    });

    if (res) {
      console.log(res)
      setTitle("")
      setDescription("")
      setSubHeading("")
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadPost();
  }

  const handleChange = (value) => {
    setDescription(value);
  };



  return (
    <div className="w-full">

      <div className="flex justify-between items-center px-4">
        <img src={logo} className=' h-12 md:px-24' />
        <div>
          <p onClick={logOut} className='flex justify-center font-semibold bg-red-400 text-white text-xl px-auto rounded-md mt-2 cursor-pointer'>Log Out</p>
          <Link to='/posttable'><p className="text-red-300 pr-6 text-xl">See Posts</p></Link>
        </div>



      </div>

      <div className="items-center h-[100vh] justify-center flex w-full">
        {isLoading ? (<p className="text-2xl">Loading...</p>) : (<div className="flex flex-col gap-y-6">
          <p className="text-2xl text-red-300 text-center">Create Blog Post</p>
          <input onChange={(e) => setPhoto(e.target.files[0])} className="border w-[270px] md:w-[550px] px-3 py-2" type="file" />
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="border border-black px-2 py-1 w-full md:w-[500px]" placeholder="Create Title" />
          <input value={subheading} onChange={(e) => setSubHeading(e.target.value)} className="border border-black px-2 py-1" placeholder="Create sub-heading " />
          {/* <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className="border border-black px-2 py-1" placeholder="post message " /> */}
          {/* <Editor apiKey="krzkuqftdcrx9ckdljxku78y9soxe9a1w458w3fsng5r9ltq"
           onEditorChange={handleEditorChange} />
          */}
          <div>
            <ReactQuill theme="snow"
              className="h-[200px]"
              value={description}
              onChange={handleChange}
            // onChange={(e)=>setDescription(e.target.value)}
            />
          </div>

          <button onClick={handleSubmit} className="bg-red-300 text-white py-1 mt-9">{isLoading ? "Loading ..." : "Create Post"}</button>
          {error && <h3 className="text-red-500 text-md ">Something went wrong</h3>}

        </div>)}

      </div>
    </div>
  );

};


export default Dashboard;
