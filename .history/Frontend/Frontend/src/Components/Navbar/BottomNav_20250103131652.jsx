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
    <div className='w-[100vw] h-[16vh] bg-[#04211e] flex justify-center items-center text-white font-bold text-[1.2rem]'>
      <div className='w-[80vw] flex justify-around bottom'>
        {/* img section */}
        <div className='w-[230px] p-[15px]'>
          <img src="https://skillseducation.pk/assets/skillsimages/nav-icons/skillsimages/mainlogo.png" alt="logo" />
        </div>

        {/* link section */}
        <div className='flex justify-center items-center gap-7 left-nav'>
          <Link to="/">
            <span className='text-white'>Home</span>
          </Link>

          {/* Courses dropdown */}
          <button className="text-white px-4 py-2 rounded-md flex justify-center items-center gap-2 relative group">
            Courses
            <MdOutlineKeyboardArrowDown />
            <div className="group-hover:flex hidden bg-[#098E68] text-white widthof border md:w-auto h-auto absolute top-[50px] left-1/2 transform -translate-x-1/2 p-6 shadow-lg rounded-md z-10 flex-col transition-all duration-300 ease-in-out">
              <div className="flex justify-between gap-6">
                {coursesData.map((category) => (
                  <div className="flex flex-col gap-3 text-white" key={category.category}>
                    <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                    <ul className="flex flex-col gap-2 text-white">
                      {category.courses.map((course) => (
                        <Link to={`/course/${course.route}`} key={course.name}>
                          <li className="flex items-center gap-2 cursor-pointer text-[#04211e] transition duration-200">
                            <course.icon /> {course.name}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </button>

          {/* Opportunities dropdown */}
          <div className="flex gap-1 justify-center items-center relative group cursor-pointer text-white">
            <span>Opportunities</span>
            <MdOutlineKeyboardArrowDown />
            <div className="group-hover:flex hidden bg-[#098E68] border text-[#04211e] lg:w-[11vw] md:w-auto h-auto absolute top-[30px] left-1/2 transform -translate-x-1/2 p-2 cursor-pointer shadow-lg rounded-md z-10 flex-col transition-all duration-300 ease-in-out">
              <div className="flex flex-col gap-3">
                <ul className="flex flex-col gap-2">
                  <Link to="/internship">
                    <li className="py-2 relative text-[#04211e] hover:text-[#04211e] transition duration-200">Internship Offer</li>
                  </Link>
                  <Link to="/tutor">
                    <li className="py-2 relative text-[#04211e] hover:text-[#04211e] transition duration-200">Become Tutor</li>
                  </Link>
                  <Link to="/job">
                    <li className="py-2 relative text-[#04211e] hover:text-[#04211e] transition duration-200">Job Offer</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>

          {/* About Us dropdown */}
          <div className="relative group">
            <button className="text-white px-4 py-2 rounded-md flex items-center gap-2">
              About Us
              <MdOutlineKeyboardArrowDown />
            </button>
            <div className="absolute top-full left-0 mt-2 bg-[#098E68] text-white w-[15vw] border p-4 rounded-md shadow-lg hidden group-hover:block z-10 transition-all duration-300 ease-in-out">
              <ul>
                <Link to="/choose">
                  <li className="py-2 text-white hover:text-[#04211e] transition duration-200">Why SkillsEducation</li>
                </Link>
                <Link to="/instructors">
                  <li className="py-2 hover:text-[#04211e] transition duration-200 text-white">Our Instructors</li>
                </Link>
                <li
                  className="py-2 flex justify-between items-center cursor-pointer hover:text-[#04211e] transition duration-200"
                  onMouseEnter={() => setBranchesOpen(true)}
                  onMouseLeave={() => setBranchesOpen(false)}
                >
                  Our Branches
                  <MdOutlineKeyboardArrowRight />
                  {branchesOpen && (
                    <div className="absolute top-14 left-full ml-2 bg-[#098E68] w-[13vw] border p-4 rounded-md shadow-lg transition-all duration-300 ease-in-out">
                      <ul>
                        <li className="py-2 hover:text-[#04211e] transition duration-200">Bahawalpur</li>
                        <li className="py-2 hover:text-[#04211e] transition duration-200">Hatheji</li>
                        <li className="py-2 hover:text-[#04211e] transition duration-200">Jalalpur Pirwala</li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <Link to="/contact">
            <span className='text-white'>Contact Us</span>
          </Link>

          {/* Search Icon */}
          <span className='hide'>
            <FaSearch />
          </span>

          {/* Find Program button */}
          <Link to="/findProgram">
            <div className='flex gap-1 justify-center items-center bg-[#098E68] px-7 py-4 rounded-full hide'>
              <span>
                <PiGraduationCapBold className='text-[1.6rem] text-white' />
              </span>
              <span>
                <PiLineVerticalLight className='text-[2rem] text-white' />
              </span>
              <span className='text-[1rem] text-white'>Find Program</span>
            </div>
          </Link>
        </div>

        {/* Toggle for mobile view */}
        <div variant="primary" className="d-lg-none text-[2rem] text-white bar" onClick={handleShow}>
          <FaBars />
        </div>

        {/* Offcanvas for mobile view */}
        <Offcanvas show={show} onHide={handleClose} className="offcanvas">
          <Offcanvas.Header closeButton className="text-[1.5rem] font-semibold text-[#098E68] border-b border-gray-700">
            <div className="w-[250px] mx-auto ">
              <img
                src="https://skillseducation.pk/assets/skillsimages/nav-icons/skillsimages/mainlogo.png"
                alt="logo"
                className="w-full"
              />
            </div>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <div className="bg-[#04211e] text-white h-full flex flex-col items-start px-5 py-8 gap-4">
              {/* Navigation Links */}
              <nav className="w-full">
                <ul className="flex flex-col gap-6 text-[1.2rem]">
                  <Link to="/">
                    <li className="hover:text-[#098E68] cursor-pointer text-white">Home</li>
                  </Link>
                  <li className="flex items-center justify-between hover:text-[#04211e] cursor-pointer">
                    <span>Courses</span><FaPlus />
                  </li>
                  <li className="flex items-center justify-between hover:text-[#04211e] cursor-pointer">
                    <span>About Us</span> <FaPlus />
                  </li>
                  <li className="hover:text-[#04211e] cursor-pointer">Hosting</li>
                  <li className="hover:text-[#04211e] cursor-pointer">Contact Us</li>
                </ul>
              </nav>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  )
}
