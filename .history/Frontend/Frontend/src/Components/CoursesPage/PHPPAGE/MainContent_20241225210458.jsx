import React from 'react'
import { IoStar } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { SiStudyverse } from "react-icons/si";
import { Link } from 'react-router';
export const MainContent = () => {
  return (
    <div className='w-[100vw]  flex justify-center items-center pt-16 bg-orange-950 text-orange-500'>
      <div className='w-[80vw] flex gap-7 justify-between flex-wrap'>
        <div className='w-[40vw]'>
        <p>Full Stack Development</p>
        
        <h1 className='font-bold'>Master Full Stack PHP Laravel Development</h1>
        <div className='flex gap-3'>
        <div className='flex gap-2 mt-1'>
          <IoStar />  <IoStar />  <IoStar />  <IoStar />  <IoStar />
        </div>
        (5.0)
        </div>
        {/* overview */}
        <div className='pt-7'>
        <h2>Overview</h2>
        <p>Dive into the world of web development with our comprehensive Full Stack PHP Laravel course. Learn how to build dynamic, responsive, and secure web applications from scratch. This course covers both front-end and back-end development, with a focus on Laravel, one of the most popular PHP frameworks.</p>
        </div>
        {/* why choose this course */}
        <div className='pt-7'>
        <h2>What You Will Learn</h2>
       <p>- PHP fundamentals and advanced concepts</p>
        </div>
        </div>
        {/* right side */}
       <div className='w-[25vw] lg:h-[30vh] h-auto  bg-orange-500 rounded-lg flex flex-col justify-center items-center text-black font-bold text-[1.1rem]'>
        <div className='p-3 '>
        <div className='w-[18vw]   flex justify-between '>
          <div className='flex gap-1'>
            <GiDuration className='mt-1' />
            <p>Duration:</p>
          </div>
  <p>	6 Month</p>
</div>
<div className='w-[18vw] pt-1  flex justify-between '>
          <div className='flex gap-1'>
            <IoTimeOutline className='mt-1' />
            <p>Weekend Classes:</p>
          </div>
  <p>4 Hours</p>
</div>
<div className='w-[18vw] pt-1 flex justify-between '>
          <div className='flex gap-1'>
            <PiStudent className='mt-1' />
            <p>Student:</p>
          </div>
  <p>3504 Students</p>
</div>
<div className='w-[18vw] pt-1 flex justify-between '>
          <div className='flex gap-1'>
            <SiStudyverse className='mt-1' />
            <p>Course Type:</p>
          </div>
  <p>100% online</p>
</div>
<Link to="register">
<div className='bg-orange-950 rounded-lg text-orange-500 p-2 flex justify-center'>
  Course Enrollment
</div>
</Link>    </div>

       </div>

      </div>
      </div>
  )
}
