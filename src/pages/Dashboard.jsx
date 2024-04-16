import React,{useState} from "react";
import { URL } from '../url'
import DatePicker from "react-datepicker";
import axios from 'axios'
import {Link, useNavigate, useParams } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";


const statuses = [
  {
    _id: 1,
    status: "not-done",
    },
    {
        _id: 2,
        status: "pending",
    },
    {
        _id: 3,
        status: "completed",
    },
   
    ]

    const priorities = [
      {
          _id: 1,
          priority: "high",
      },
      {
          _id: 2,
          priority: "medium",
      },
      {
        _id: 3,
        priority: "low",
    },
      ]

      const pickupstatus = [
        {
            _id: 1,
            pickupstatus: "not-ready",
        },
        {
            _id: 2,
            pickupstatus: "ready",
        },
        {
          _id: 3,
          pickupstatus: "picked-up",
      },
        ]
  

const Dashboard = () => {
  const navigate = useNavigate()
  const [startDate, setStartDate] = useState(new Date());
//   const [startDate2, setStartDate2] = useState(new Date());
    // const [selectedStatus, setSelectedStatus] = useState([])
    const [date, setDate] = useState(new Date())
    // const [date2, setDate2] = useState(new Date())
    const [title,setTitle]=useState("")
    const [subtitle,setSubtitle]=useState("")
    const [text,setText]=useState("")
    const [error,setError]=useState(false)
    const [isLoading,setIsLoading]=useState(false)



      const handlePost = async ()=>{
        setIsLoading(true)
        try{
          const accessToken = localStorage.getItem("access_token");

          if(!accessToken){
                // Handle the case where the access token is not available
            console.error('Access token not found')
          }

          const res = await axios.post(URL+"/api/posts/create",{title,subtitle,text,date}, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          })
          setTitle(res.data.title)
          setSubtitle(res.data.subtitle)
          setText(res.data.text)   
          setDate(res.data.date)
          setError(false)
          navigate("/dashboard")
          
        }
        catch(err){
          setError(true)
          console.log(err)
        }finally {
          setIsLoading(false)
        }
    
      }
    
  return (
    <div className="w-full">
    
      <div className="items-center h-[100vh] justify-center flex w-full">
        {isLoading ? (<p className="text-2xl">Loading...</p>) : ( <div className="flex flex-col gap-y-6">
        <p className="text-2xl text-red-300 text-center">Create Blog Post</p>
          <input value={title} onChange={(e)=>setTitle(e.target.value)} className="border border-black px-2 py-1 w-full md:w-[500px]" placeholder="Create Title" />
          <input value={subtitle} onChange={(e)=>setSubtitle(e.target.value)} className="border border-black px-2 py-1" placeholder="Create subtitle " />
          <textarea value={text} onChange={(e)=>setText(e.target.value)} className="border border-black px-2 py-1" placeholder="create post message " />

          <p className='text-md text-gray-600'>Enter post date: <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='border border-black py-1 ' /></p>
          {/* <p className='text-md text-gray-600'>Enter Due Date: <DatePicker selected={startDate2} onChange={(date) => setStartDate2(date)} className='border border-black py-1 ' placeholder='Enter Due Date' /></p>  */}
          {/* <select value={selectedStatus} onChange={handleStatus} className="border border-black px-2 py-1">
            <option value="">Select Status:</option>
            {statuses.map(item => (
              <option key={item._id} value={item.status}>{item.status}</option>
            ) )}
          </select>

          <select value={selectedPriority} onChange={handlePriority} className="border border-black px-2 py-1">
            <option value="">Select Priority:</option>
            {priorities.map(item => (
              <option key={item._id} value={item.priority}>{item.priority}</option>
            ) )}
          </select>

          <select value={selectedPickup} onChange={handlePickup} className="border border-black px-2 py-1">
            <option value="">Select Pickup status:</option>
            {pickupstatus.map(item => (
              <option key={item._id} value={item.pickupstatus}>{item.pickupstatus}</option>
            ) )}
          </select> */}

          {/* <input onChange={(e)=>setTailor(e.target.value)} className="border border-red-300 px-2 py-1" placeholder="Tailor in charge" />
          <input onChange={(e)=>setCustomerPhone(e.target.value)} className="border border-red-300 px-2 py-1 " placeholder="Customers phone number " /> */}

<button onClick={handlePost} className="bg-red-300 text-white py-1">{isLoading ? "Loading ..." : "Create Post"}</button>
{error && <h3 className="text-red-500 text-md ">Something went wrong</h3>}
          
        </div>)}
       
      </div>
    </div>
  );
};

export default Dashboard;
