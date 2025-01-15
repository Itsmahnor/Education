import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaSearch, FaBars, FaPlus } from "react-icons/fa6";
import { PiGraduationCapBold, PiLineVerticalLight } from "react-icons/pi";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

export const BottomNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="w-[100vw] h-[16vh] bg-orange-950 flex justify-center items-center text-orange-500 font-bold text-[1.2rem]">
      <div className="w-[80vw] flex justify-between items-center">
        {/* Logo Section */}
        <div className="w-[230px]">
          <img
            src="https://skillseducation.pk/assets/skillsimages/nav-icons/skillsimages/mainlogo.png"
            alt="logo"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          <Link to="/" className="text-orange-500 hover:text-orange-400">
            Home
          </Link>
          <div className="flex gap-1 items-center cursor-pointer">
            <span>Courses</span>
            <MdOutlineKeyboardArrowDown />
          </div>
          <div className="flex gap-1 items-center cursor-pointer">
            <span>Opportunities</span>
            <MdOutlineKeyboardArrowDown />
          </div>
          <div className="flex gap-1 items-center cursor-pointer">
            <span>About Us</span>
            <MdOutlineKeyboardArrowDown />
          </div>
          <span>Hosting</span>
          <span>Contact Us</span>
          <FaSearch className="cursor-pointer" />
          <Link to="/findProgram">
            <div className="flex gap-1 items-center bg-orange-500 px-7 py-4 rounded-full">
              <PiGraduationCapBold className="text-[1.6rem] text-black" />
              <PiLineVerticalLight className="text-[2rem] text-white" />
              <span className="text-[1rem] text-black">Find Program</span>
            </div>
          </Link>
        </div>

        {/* Toggle for Mobile */}
        <FaBars
          className="text-[2rem] text-white cursor-pointer md:hidden"
          onClick={handleShow}
        />

        {/* Offcanvas Menu */}
        <Offcanvas show={show} onHide={handleClose} className="offcanvas">
          <Offcanvas.Header
            closeButton
            className="text-[1.5rem] font-semibold text-orange-400 border-b border-gray-700 bg-orange-950"
          >
            <div className="w-[200px] mx-auto">
              <img
                src="https://skillseducation.pk/assets/skillsimages/nav-icons/skillsimages/mainlogo.png"
                alt="logo"
                className="w-full"
              />
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body className="bg-orange-950 text-white h-full flex flex-col px-5 py-8 gap-4">
            <nav className="w-full">
              <ul className="flex flex-col gap-6 text-[1.2rem]">
                <Link to="/" onClick={handleClose}>
                  <li className="hover:text-orange-400 cursor-pointer">Home</li>
                </Link>
                <li className="flex items-center justify-between hover:text-orange-400 cursor-pointer">
                  <span>Courses</span>
                  <FaPlus />
                </li>
                <li className="flex items-center justify-between hover:text-orange-400 cursor-pointer">
                  <span>Opportunities</span>
                  <FaPlus />
                </li>
                <li className="flex items-center justify-between hover:text-orange-400 cursor-pointer">
                  <span>About Us</span>
                  <FaPlus />
                </li>
                <li className="hover:text-orange-400 cursor-pointer">Hosting</li>
                <li className="hover:text-orange-400 cursor-pointer">Contact Us</li>
              </ul>
            </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};
