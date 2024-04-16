import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/earondemandlogo.png'
import { AiFillCaretDown } from "react-icons/ai";
import DropDown from './DropDown';
import { RxHamburgerMenu } from "react-icons/rx";
import SideCard from './SideCard';
import { RxCross1 } from "react-icons/rx";
import DropDown2 from './DropDown2';

const Navbar = () => {
    const [isDropDownVisible, setDropDownVisible] = useState(false);
    const [isDropDownVisible2, setDropDownVisible2] = useState(false);
    const [isDropDownVisible3, setDropDownVisible3] = useState(false);

    const handleMouseEnter = () => {
      setDropDownVisible(true);
    };
  
    const handleMouseLeave = () => {
      setDropDownVisible(false);
    };

    const handleMouseEnter3 = () => {
        setDropDownVisible3(true);
      };
    
      const handleMouseLeave3 = () => {
        setDropDownVisible3(false);
      };

    const handleBurger = () => {
        setDropDownVisible2(!isDropDownVisible2);
    }

  return (
    <div className=' py-2'>
        <div className='flex justify-between items-center gap-x-[60px] px-12 mt-4'>

        <img src={logo} alt='' className=' h-12 px-24' />
        <div className='flex gap-x-12'>
        <p className='font-medium hover:text-red-500'>About EARonDemand</p>
       <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className='flex gap-x-2 items-center relative'><p className='font-medium hover:text-red-500'>Our Expertise</p><AiFillCaretDown />
       <div className="absolute top-10">
    {isDropDownVisible && <DropDown />}
    </div>
    </div> 
       <div onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}  className='flex gap-x-2 items-center relative'><p className='font-medium hover:text-red-500'>Partner-Supported</p><AiFillCaretDown />
       <div className="absolute top-10">
    {isDropDownVisible3 && <DropDown2 />}
    </div>
       </div> 

        <p className='font-medium hover:text-red-500'>Join the Newsletter</p>
        </div>



        <div onClick={handleBurger} className='relative' >
        {isDropDownVisible2 ? (<RxCross1 size={30} />
) : (<RxHamburgerMenu size={30}/>)}
        <div className="absolute right-2">
    {isDropDownVisible2 && <SideCard />}
    </div>
    </div>

        </div>
    </div>
  )
}

export default Navbar