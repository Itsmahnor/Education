import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
export const TopNav = () => {
  return (
    <div className='bg-orange-400 w-[100vw] flex justify-center items-center m-0 p-0 TopNavRes'>
      <div className='w-[80vw] flex justify-around items-center topnavwidth'>
<div className='hideRes flex'>
  <p className='text-[1rem] pt-2 '>+923276381819 | info@skillseducation.pk</p>
</div>
<div className='flex gap-8 justify-center items-center'>
<div className="flex gap-2  justify-center items-center ">
<FaRegUserCircle />
<p className='text-[1rem] pt-2  '>Register</p>
</div>
<div className="flex gap-2 justify-center items-center">
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
