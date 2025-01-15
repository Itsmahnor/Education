import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FaSearch, FaBars, FaPlus } from 'react-icons/fa6';
import { PiGraduationCapBold, PiLineVerticalLight } from 'react-icons/pi';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';
import { coursesData } from './Bottom';

export const BottomNav = () => {
  const [show, setShow] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const { pathname } = useLocation(); // To highlight active link

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="w-[100vw] h-[16vh] bg-orange-950 flex justify-center items-center text-orange-500 font-bold text-[1.2rem]">
      <div className="w-[80vw] flex justify-around bottom">
        {/* Logo */}
        <div className="w-[230px] p-[15px]">
          <img src="https://skillseducation.pk/assets/skillsimages/nav-icons/skillsimages/mainlogo.png" alt="logo" />
        </div>

        {/* Links */}
        <div className="flex justify-center items-center gap-7 left-nav">
          {/* Home */}
          <Link to="/" className={`${pathname === '/' ? 'text-orange-400' : 'text-orange-500'} hover:text-orange-400`}>
            Home
          </Link>

          {/* Courses Dropdown */}
          <div className="relative group">
            <button
              className="text-orange-500 px-4 py-2 rounded-md flex items-center gap-2"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Courses <MdOutlineKeyboardArrowDown />
            </button>
            <div className="hidden group-hover:flex absolute top-[50px] bg-orange-500 text-black border p-6 shadow-lg rounded-md z-10 flex-col">
              {coursesData.map((category) => (
                <div key={category.category} className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                  <ul className="flex flex-col gap-2">
                    {category.courses.map((course) => (
                      <Link to={`/course/${course.route}`} key={course.name}>
                        <li className="flex items-center gap-2 hover:text-orange-400 transition">
                          <course.icon /> {course.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunities Dropdown */}
          <div className="relative group">
            <span className="flex items-center gap-2 cursor-pointer">
              Opportunities <MdOutlineKeyboardArrowDown />
            </span>
            <div className="hidden group-hover:flex absolute top-[30px] bg-orange-500 text-black border p-2 shadow-lg rounded-md z-10 flex-col">
              <Link to="/internship" className="hover:text-orange-400">Internship Offer</Link>
              <Link to="/tutor" className="hover:text-orange-400">Become Tutor</Link>
              <Link to="/job" className="hover:text-orange-400">Job Offer</Link>
            </div>
          </div>

          {/* About Us */}
          <div className="relative group">
            <button className="text-orange-500 px-4 py-2 flex items-center gap-2">
              About Us <MdOutlineKeyboardArrowDown />
            </button>
            <div className="hidden group-hover:flex absolute top-full left-0 mt-2 bg-orange-500 text-black border p-4 rounded-md shadow-lg">
              <ul>
                <Link to="/choose">
                  <li className="py-2 hover:text-orange-950">Why SkillsEducation</li>
                </Link>
                <Link to="/instructors">
                  <li className="py-2 hover:text-orange-950">Our Instructors</li>
                </Link>
                <li
                  className="py-2 flex justify-between items-center cursor-pointer hover:text-orange-950"
                  onMouseEnter={() => setBranchesOpen(true)}
                  onMouseLeave={() => setBranchesOpen(false)}
                >
                  Our Branches <MdOutlineKeyboardArrowRight />
                  {branchesOpen && (
                    <div className="absolute top-14 left-full ml-2 bg-orange-500 border p-4 rounded-md shadow-lg">
                      <ul>
                        <li className="py-2 hover:text-orange-400">Bahawalpur</li>
                        <li className="py-2 hover:text-orange-400">Hatheji</li>
                        <li className="py-2 hover:text-orange-400">Jalalpur Pirwala</li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <Link to="/contact" className="text-orange-500 hover:text-orange-400">Contact Us</Link>

          {/* Find Program */}
          <Link to="/findProgram" className="flex gap-1 items-center bg-orange-500 px-7 py-4 rounded-full">
            <PiGraduationCapBold className="text-[1.6rem] text-black" />
            <PiLineVerticalLight className="text-[2rem] text-white" />
            <span className="text-[1rem] text-black">Find Program</span>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="d-lg-none text-[2rem] text-white" onClick={handleShow}>
          <FaBars />
        </div>

        {/* Offcanvas Menu */}
        <Offcanvas show={show} onHide={handleClose} className="offcanvas">
          <Offcanvas.Header closeButton className="text-[1.5rem] font-semibold text-orange-400">
            <img
              src="https://skillseducation.pk/assets/skillsimages/nav-icons/skillsimages/mainlogo.png"
              alt="logo"
              className="w-full"
            />
          </Offcanvas.Header>
          <Offcanvas.Body className="bg-orange-950 text-white h-full flex flex-col items-start px-5 py-8 gap-4">
            <nav className="w-full">
              <ul className="flex flex-col gap-6 text-[1.2rem]">
                <Link to="/" className="hover:text-orange-950">Home</Link>
                <li className="flex justify-between hover:text-orange-400">
                  Courses <FaPlus />
                </li>
                <li className="flex justify-between hover:text-orange-400">
                  About Us <FaPlus />
                </li>
                <li className="hover:text-orange-950">Hosting</li>
                <li className="hover:text-orange-950">Contact Us</li>
              </ul>
            </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};
