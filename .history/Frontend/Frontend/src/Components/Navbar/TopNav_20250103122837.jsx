import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

export const TopNav = () => {
  return (
    <div className='bg-[#2C3E50] w-[100vw] flex justify-center items-center m-0 p-0'>
      <div className='w-[80vw] flex justify-around items-center'>
        <div className='hideRes flex'>
          <p className='text-[#ECF0F1] pt-2 '>+923276381819 | info@prolearno.com</p>
        </div>
        <div className='flex gap-8 justify-center items-center'>
          <Link to="/register">
            <div className="flex gap-2 justify-center items-center text-[#F39C12] hover:text-[#2980B9]">
              <FaRegUserCircle />
              <p className='text-[1rem] pt-2'>Register</p>
            </div>
          </Link>
          <div className="flex gap-2 justify-center items-center text-[#F39C12] hover:text-[#2980B9]">
            <FaFacebookF />
            <FaInstagram />
            <FaWhatsapp />
            <SiGmail />
          </div>
        </div>
      </div>
    </div>
  )
}
