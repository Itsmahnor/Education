import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { PiGraduationCapBold } from "react-icons/pi";
import { PiLineVerticalLight } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';


export const BottomNav = () => {
  // handle toggle
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='w-[100vw] h-[16vh] bg-orange-950 flex justify-center items-center text-orange-500 font-bold text-[1.2rem]'>
      <div className='w-[80vw] flex justify-around bottom'>
        {/* img section */}
     <div className='w-[230px] p-[15px]'>
      <img src="https://skillseducation.pk/assets/skillsimages/nav-icons/skillsimages/mainlogo.png" alt="logo" />
     </div>
     {/* link section */}
     <div className='flex justify-center items-center gap-7 left-nav'>
      <Link to="/">
<span className='text-orange-500'>Home</span></Link>

  <button class="text-orange-500 px-4 py-2 rounded-md flex justify-center items-center gap-2 relative group">
    Courses
    <MdOutlineKeyboardArrowDown />
    <div className='group-hover:flex hidden bg-green-300 w-[100px] h-[100px] absolute top-10'>
hello
    </div>
  </button>

 
  



<div className='flex gap-1 justify-center items-center'>
<span>Operatunities</span>
<MdOutlineKeyboardArrowDown />
</div>
<div className='flex gap-1 justify-center items-center'>
<span>About Us</span>
<MdOutlineKeyboardArrowDown />
</div>
<span>Hosting</span>
<span>Contact Us</span>
<span className='hide'><FaSearch /></span>
<Link to="/findProgram">
<div className='flex gap-1 justify-center items-center bg-orange-500 px-7 py-4  rounded-full hide'>
<span >
  <PiGraduationCapBold className='text-[1.6rem] text-black' />
</span>
<span >
  <PiLineVerticalLight  className='text-[2rem] text-white' />
</span>
<span className='text-[1rem] text-black'>Find Program</span>
</div></Link>
     </div>
     {/* toggle for mobile view */}
     <div  variant="primary" className="d-lg-none text-[2rem] text-white bar" onClick={handleShow}>
     <FaBars   />
     </div>

     <Offcanvas show={show} onHide={handleClose} className="offcanvas">
  {/* Offcanvas Header */}
  <Offcanvas.Header closeButton className="text-[1.5rem] font-semibold text-orange-400 border-b border-gray-700">
    <div className="w-[200px] mx-auto">
      <img
        src="https://skillseducation.pk/assets/skillsimages/nav-icons/skillsimages/mainlogo.png"
        alt="logo"
        className="w-full"
      />
    </div>
  </Offcanvas.Header>

  {/* Offcanvas Body */}
  <div className="bg-orange-950 text-white h-full flex flex-col items-start px-5 py-8 gap-4">
    {/* Navigation Links */}
    <nav className="w-full">
      <ul className="flex flex-col gap-6 text-[1.2rem]">
      <Link to="/">
        <li className="hover:text-orange-400 cursor-pointer text-white">Home</li></Link>
        <li className="flex items-center justify-between hover:text-orange-400 cursor-pointer">
          <span>Courses</span><FaPlus />
        </li>
        <li className="flex items-center justify-between hover:text-orange-400 cursor-pointer">
          <span>Opportunities</span> <FaPlus />
        </li>
        <li className="flex items-center justify-between hover:text-orange-400 cursor-pointer">
          <span>About Us</span> <FaPlus />
        </li>
        <li className="hover:text-orange-400 cursor-pointer">Hosting</li>
        <li className="hover:text-orange-400 cursor-pointer">Contact Us</li>
      </ul>
    </nav>
  </div>
</Offcanvas>

      </div>
    </div>
    
  )
}
