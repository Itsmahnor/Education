import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Course from './Course.json';
import { IoMdStar } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
export const Courses = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1208); // Adjust breakpoint as needed
    };
    handleResize(); // Initial check
    // window.addEventListener('resize', handleResize);
    // return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
  
      {
        breakpoint: 610,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-[100vw] h-auto md:pt-5 bg-orange-950 flex justify-center text-orange-500 ">
      <div className="w-[80vw] h-auto flex justify-around flex-wrap gap-10">
        {/* Section Header */}
        <HeaderSection />
        {/* Slider or Grid */}
        <div className="w-[80vw]">
          {isSmallScreen ? (
            <CategorySlider settings={settings} />
          ) : (
            <CategoryGrid />
          )}
        </div>
      </div>
    </div>
  );
};

// Header Section Component
const HeaderSection = () => (
  <div>
    <p className="text-center">BROWSE TOP COURSES</p>
    <h1 className="md:text-[3rem] font-bold text-center">Most Popular Courses</h1>
  </div>
);

// Slider Component
const CategorySlider = ({ settings }) => (
  <Slider {...settings}>
    {Course.map((item, index) => (
      <div key={index} className="w-[220px] bg-orange-500 rounded-lg h-[220px]">
        <img src={item.img} alt="" className="w-full h-full object-cover rounded-lg" />
        <h1>{item.title}</h1>
      </div>
    ))}
  </Slider>
);

// Grid Component for larger screens
const CategoryGrid = () => (
  <div className="grid grid-cols-3 gap-2">
    { Course.map((item, index) => (
      <div key={index} className='w-[420px] h-auto bg-orange-500 rounded-3xl
        '>
          <div className='m-4 '>
          <img src={item.img} alt="" className='w-[380px] h-[350px] object-cover rounded-2xl '  />
          <div className='flex justify-between'>
          <div className='flex gap-1'>
          <div className='flex  mt-3 '>    <span className='text-yellow-500 text-[1.5rem]  '><IoMdStar /></span>
          <span className='text-yellow-500 text-[1.5rem]  '><IoMdStar /></span>   <span className='text-yellow-500 text-[1.5rem] '><IoMdStar /></span></div>
<span className='text-black mt-3
'>(5.0)</span>
          </div>
          <span className='text-black font-bold mt-3 text-[1.2rem]'>{item.rupees} /-</span>
          </div>
   <h1 className='text-black text-[1.3rem] font-bold mt-4'>{item.title}</h1>
          </div>
<div className='m-4 flex justify-between '>
<div className='flex gap-1 text-black'><span><FaRegUserCircle className='mt-1' /></span> <span className=''>By: Umair Farooqi</span></div>
<div className='flex gap-1 text-black '><span><IoMdTime className='mt-1' /></span> <span className=''> {item.duration}:Month</span></div>
<div className='flex gap-1 text-black '><span><FaRegUserCircle className='mt-1' /></span> <span className=''>Duration</span></div>

</div>

      </div>
    ))}
  </div>
); 