import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './Images/logo.png';

export const BottomNav = () => {
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // State for search visibility

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='w-[100vw] h-[16vh] bg-white flex justify-center items-center text-[#098E68] font-bold text-[1.4rem]'>
      <div className='w-[80vw] flex justify-around bottom'>
        {/* Logo */}
        <div className='w-[280px] h-[200px] p-[15px] text-[#098E68] flex justify-center items-center'>
          <img src={logo} alt="Logo" />
        </div>

        {/* Links */}
        <div className='flex justify-center items-center gap-7 left-nav'>
          <Link to="/">
            <span className='text-[#098E68]'>Home</span>
          </Link>

          {/* Search Button */}
          <button
            className="flex items-center gap-2 text-[#098E68]"
            onClick={() => setShowSearch(!showSearch)}
          >
            <FaSearch /> Search
          </button>

          {/* Conditionally Render Search Field */}
          {showSearch && (
            <div className="absolute top-[60px] w-[300px] bg-white border border-gray-300 rounded shadow-md p-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
          )}

          <Link to="/contact">
            <span className='text-[#098E68]'>Contact Us</span>
          </Link>

          {/* Mobile Toggle */}
          <div className="d-lg-none text-[2rem] text-[#098E68] bar" onClick={handleShow}>
            {/* Your mobile menu icon */}
          </div>
        </div>

        {/* Offcanvas */}
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <div className="w-[250px] mx-auto">
              <img src={logo} alt="logo" className="w-full object-contain" />
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* Mobile nav content */}
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};
