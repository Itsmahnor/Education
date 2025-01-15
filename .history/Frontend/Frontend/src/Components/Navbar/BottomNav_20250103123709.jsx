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
  const [show, setShow] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const { pathname } = useLocation(); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="w-[100vw] h-[16vh] bg-[#2C3E50] flex justify-center items-center text-[#ECF0F1] font-bold text-[1.2rem]">
      <div className="w-[80vw] flex justify-around">
        {/* Logo */}
        <div className="w-[230px] p-[15px]">
          <img src="https://skillseducation.pk/assets/skillsimages/nav-icons/skillsimages/mainlogo.png" alt="logo" />
        </div>

        {/* Links */}
        <div className="flex justify-center items-center gap-7">
          <Link to="/" className={`${pathname === '/' ? 'text-[#F39C12]' : 'text-[#ECF0F1]'} hover:text-[#2980B9]`}>
            Home
          </Link>

          <div className="relative group">
            <button
              className="text-[#ECF0F1] px-4 py-2 rounded-md flex items-center gap-2"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Courses <MdOutlineKeyboardArrowDown />
            </button>
            <div className="hidden group-hover:flex absolute top-[50px] bg-[#2980B9] text-black border p-6 shadow-lg rounded-md z-10 flex-col">
              {coursesData.map((category) => (
                <div key={category.category} className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                  <ul className="flex flex-col gap-2">
                    {category.courses.map((course) => (
                      <Link to={`/course/${course.route}`} key={course.name}>
                        <li className="flex items-center gap-2 hover:text-[#9B59B6] transition">
                          <course.icon /> {course.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Other Links */}
          <div className="relative group">
            <button className="text-[#ECF0F1] px-4 py-2 flex items-center gap-2">
              About Us <MdOutlineKeyboardArrowDown />
            </button>
            <div className="hidden group-hover:flex absolute top-full left-0 mt-2 bg-[#2980B9] text-black border p-4 rounded-md shadow-lg">
              <ul>
                <Link to="/choose">
                  <li className="py-2 hover:text-[#9B59B6]">Why ProLearno</li>
                </Link>
                <Link to="/instructors">
                  <li className="py-2 hover:text-[#9B59B6]">Our Instructors</li>
                </Link>
                <li
                  className="py-2 flex justify-between items-center cursor-pointer hover:text-[#9B59B6]"
                  onMouseEnter={() => setBranchesOpen(true)}
                  onMouseLeave={() => setBranchesOpen(false)}
                >
                  Our Branches <MdOutlineKeyboardArrowRight />
                  {branchesOpen && (
                    <div className="absolute top-14 left-full ml-2 bg-[#2980B9] border p-4 rounded-md shadow-lg">
                      <ul>
                        <li className="py-2 hover:text-[#9B59B6]">Bahawalpur</li>
                        <li className="py-2 hover:text-[#9B59B6]">Hatheji</li>
                        <li className="py-2 hover:text-[#9B59B6]">Jalalpur Pirwala</li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>

          <Link to="/contact" className="text-[#ECF0F1] hover:text-[#2980B9]">Contact Us</Link>
        </div>

        {/* Mobile Menu */}
        <div className="d-lg-none text-[2rem] text-[#ECF0F1]" onClick={handleShow}>
          <FaBars />
        </div>

        {/* Offcanvas Menu */}
        <Offcanvas show={show} onHide={handleClose} className="offcanvas">
          <Offcanvas.Header closeButton className="text-[1.5rem] font-semibold text-[#F39C12]">
            <img
              src="https://skillseducation.pk/assets/skillsimages/nav-icons/skillsimages/mainlogo.png"
              alt="logo"
              className="w-full"
            />
          </Offcanvas.Header>
          <Offcanvas.Body className="bg-[#2C3E50] text-[#ECF0F1] h-full flex flex-col items-start px-5 py-8 gap-4">
            <nav className="w-full">
              <ul className="flex flex-col gap-6 text-[1.2rem]">
                <Link to="/" className="hover:text-[#9B59B6]">Home</Link>
                <li className="flex justify-between hover:text-[#9B59B6]">
                  Courses <FaPlus />
                </li>
                <li className="flex justify-between hover:text-[#9B59B6]">
                  About Us <FaPlus />
                </li>
                <li className="hover:text-[#9B59B6]">Hosting</li>
                <li className="hover:text-[#9B59B6]">Contact Us</li>
              </ul>
            </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};