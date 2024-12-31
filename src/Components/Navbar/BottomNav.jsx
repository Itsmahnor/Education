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
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { coursesData } from './Bottom';
export const BottomNav = () => {
  // handle toggle
  const [show, setShow] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='w-[100vw] h-[16vh] bg-orange-950 flex justify-center items-center text-orange-500 font-bold text-[1.2rem]'>
      <div className='w-[80vw]  flex justify-around bottom'>
        {/* img section */}
     <div className='w-[230px] p-[15px]'>
      <img src="https://skillseducation.pk/assets/skillsimages/nav-icons/skillsimages/mainlogo.png" alt="logo" />
     </div>
     {/* link section */}
     <div className='flex justify-center items-center gap-7 left-nav  '>
      <Link to="/">
<span className='text-orange-500'>Home</span></Link>



<button className="text-orange-500 px-4 py-2 rounded-md flex justify-center items-center gap-2 relative group">
  Courses
  <MdOutlineKeyboardArrowDown />
  <div className="group-hover:flex hidden bg-orange-500 text-black widthof border md:w-auto h-auto absolute top-[50px] left-1/2 transform -translate-x-1/2 p-6 shadow-lg rounded-md z-10 flex-col">
  <div className="flex justify-between gap-6">
    {coursesData.map((category) => (
      <div className="flex flex-col gap-3 text-black" key={category.category}>
        <h3 className="text-lg font-semibold text-black">{category.category}</h3>
        <ul className="flex flex-col gap-2 text-black">
          {category.courses.map((course) => (
            <Link to={`/course/${course.route}`} key={course.name}>
              <li className="flex items-center gap-2 cursor-pointer text-black">
                <course.icon /> {course.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

  {/* Dropdown */}
  {/* <div className="group-hover:flex hidden bg-orange-500 text-black widthof border  md:w-auto h-auto absolute top-[90px] left-1/2 transform -translate-x-1/2 p-6 shadow-lg rounded-md z-10 flex-col" >
    <div className="flex justify-between gap-6">
        
           <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">AI PROGRAMS</h3>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <FaPython /> Python Programming
          </li>
          <li className="flex items-center gap-2">
            <FaRobot /> Generative AI
          </li>
          <li className="flex items-center gap-2">
            <FaRobot /> Machine Learning
          </li>
          <li className="flex items-center gap-2">
            <FaRobot /> Chatbot Development
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">DEVELOPMENT</h3>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <SiMongodb /> Mern Stack Development
          </li>
          <li className="flex items-center gap-2">
            <FaPython /> Python Django Development
          </li>
          <li className="flex items-center ">
            <FaLaravel /> PHP Laravel Development
          </li>
          <li className="flex items-center gap-2">
            <FaReact /> Frontend Development
          </li>
          <li className="flex items-center gap-2">
            <FaReact /> Backend Development
          </li>
          <li className="flex items-center gap-2">
            <FaReact /> React JS Development
          </li>
          <li className="flex items-center gap-2">
            <FaWordpress /> WordPress Development
          </li>
          <li className="flex items-center gap-2">
            <SiShopify /> Shopify Development
          </li>
        </ul>
      </div>

     
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">APP DEVELOPMENT</h3>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <SiFlutter /> Flutter App Development
          </li>
          <li className="flex items-center gap-2">
            <FaReact /> React Native App Development
          </li>
          <li className="flex items-center gap-2">
            <SiFlutter /> FlutterFlow App Development
          </li>
          <li className="flex items-center gap-2">
            <FaAndroid /> Android App Development
          </li>
        </ul>
      </div>

 

      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold">MARKETING PROGRAMS</h3>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <SiGoogleads /> Social Media Marketing
          </li>
          <li className="flex items-center gap-2">
            <SiGoogleads /> Digital Marketing
          </li>
          <li className="flex items-center gap-2">
            <SiGoogleads /> Google Ads
          </li>
        </ul>
      </div>
    </div>
  </div> */}
</button>



 
  



<div className='flex gap-1 justify-center items-center relative group'>
<span>Operatunities</span> 
<MdOutlineKeyboardArrowDown />
<div className="group-hover:flex hidden bg-orange-500 border text-black lg:w-[11vw] md:w-auto h-auto absolute top-[50px] left-1/2 transform -translate-x-1/2 p-2 cursor-pointer shadow-lg rounded-md z-10 flex-col">
<div className="flex flex-col gap-3">
      
        <ul className="flex flex-col gap-2">
          <li className="py-2">
             Intership offer
          </li>
          <li className="py-1">
       Become tutor
          </li>
          <li className="py-1">
           Job Offer
          </li>
        </ul>
      </div>
</div>
</div>
<div className="relative group">
      {/* Parent Button */}
      <button className="text-orange-500 px-4 py-2 rounded-md flex items-center gap-2 ">
      About Us
      <MdOutlineKeyboardArrowDown />
      </button>

      {/* Dropdown */}
      <div className="absolute top-full left-0 mt-2 bg-orange-500 text-black w-[15vw] border p-4 rounded-md shadow-lg hidden group-hover:block z-10">
        <ul>
          {/* Why SkillsEducation */}
          <li className="py-2 ">Why SkillsEducation</li>
          {/* Our Instructors */}
          <li className="py-2 ">Our Instructors</li>
          {/* Our Branches with Nested Dropdown */}
          <li
            className="py-2 flex justify-between items-center  cursor-pointer"
            onMouseEnter={() => setBranchesOpen(true)}
            onMouseLeave={() => setBranchesOpen(false)}
          >
            Our Branches
            <MdOutlineKeyboardArrowRight />
            {/* Nested Dropdown */}
            {branchesOpen && (
              <div className="absolute top-14 left-full ml-2 bg-orange-500 w-[13vw] border p-4 rounded-md shadow-lg">
                <ul>
                  <li className="py-2 ">Bahawalpur</li>
                  <li className="py-2 ">Hatheji</li>
                  <li className="py-2 ">Jalalpur Pirwala</li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
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
    <div className="w-[250px] mx-auto ">
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
