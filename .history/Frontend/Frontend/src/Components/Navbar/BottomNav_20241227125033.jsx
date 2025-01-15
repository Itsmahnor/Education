import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { PiGraduationCapBold } from "react-icons/pi";
import { PiLineVerticalLight } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router';

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
<div class="relative group">
  <button class="text-orange-500 px-4 py-2 rounded-md flex justify-center items-center gap-2">
    Courses
    <MdOutlineKeyboardArrowDown />
  </button>

 
  <div class="absolute hidden group-hover:flex flex-row sm:flex-col bg-orange-500 md:w-[200px] text-gray-800 rounded-md shadow-lg mt-2 z-10 gap-4 p-4 overflow-x-auto">
    
  
    <div class="min-w-[150px]">
      <h3 class="px-4 py-2 font-semibold border-b">Backend</h3>
      <ul class="px-4 py-2">
        <li class="py-1">PHP Laravel Development</li>
        <li class="py-1">Python Django Development</li>
        <li class="py-1">Backend Development</li>
      </ul>
    </div>


    <div class="min-w-[150px]">
      <h3 class="px-4 py-2 font-semibold border-b">Fullstack</h3>
      <ul class="px-4 py-2">
        <li class="py-1">MERN Stack Web Development</li>
      </ul>
    </div>

 
    <div class="min-w-[150px]">
      <h3 class="px-4 py-2 font-semibold border-b">Mobile</h3>
      <ul class="px-4 py-2">
        <li class="py-1">App Development</li>
        <li class="py-1">FlutterFlow Development</li>
        <li class="py-1">Android App Development</li>
      </ul>
    </div>

  
    <div class="min-w-[150px]">
      <h3 class="px-4 py-2 font-semibold border-b">Frontend</h3>
      <ul class="px-4 py-2">
        <li class="py-1">Frontend Development</li>
        <li class="py-1">React Js Development</li>
      </ul>
    </div>

    
    <div class="min-w-[150px]">
      <h3 class="px-4 py-2 font-semibold border-b">Ecommerce</h3>
      <ul class="px-4 py-2">
        <li class="py-1">Shopify Development</li>
        <li class="py-1">WordPress Development</li>
      </ul>
    </div>
  </div>
</div>



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
<Link to="findProgram">
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
