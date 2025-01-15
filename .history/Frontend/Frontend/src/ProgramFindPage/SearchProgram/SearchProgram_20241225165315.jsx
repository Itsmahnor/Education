import React from 'react';
import Course from './Search.json';
import { IoMdStar } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { BsCalendarDate } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
export const SearchProgram = () => {
  return (
    <div className="w-full h-auto md:pt-20 bg-orange-950 flex justify-center text-orange-500">
      <div className="w-[90%] h-auto flex flex-wrap justify-around gap-10">
        <div className="lg:w-[80%] w-full  ">
          <div className='flex justify-between flex-wrap gap-3'>
          <input type="text" placeholder='Search Course...' className='bg-transparent pr-48 pl-5 placeholder-orange-500 border py-3 rounded-full'  />
                    <div className="flex items-center bg-[#4A2511] rounded-lg text-[#F49C18] px-4">
                     
                      <select
                        className="flex-grow py-2 bg-transparent focus:outline-none text-[#F49C18]"
                        defaultValue=""
                      >
                        <option value="" disabled className='bg-orange-500 text-orange-950 font-bold'>
                          Select a Course
                        </option>
                        <option value="web" className='bg-orange-500 text-orange-950 hover:bg-orange-950'>Web Development</option>
                        <option value="data" className='bg-orange-500 text-orange-950'>Data Science</option>
                        <option value="design" className='bg-orange-500 text-orange-950'>Graphic Design</option>
                      </select>
                    </div>
       
          </div>
          <CategoryGrid />
        </div>
      </div>
    </div>
  );
};

// Grid Component for larger screen
const CategoryGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 lg:gap-10 py-20">
    {Course.map((item, index) => (
      <div
        key={index}
        className="w-full sm:w-[350px] lg:w-[420px] h-auto bg-orange-500 rounded-3xl shadow-lg"
      >
        <div className="m-4">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-[200px] sm:h-[250px] lg:h-[350px] object-cover rounded-2xl"
          />
          <div className="flex justify-between mt-3">
            <div className="flex gap-1">
              <div className="flex mt-1">
                <IoMdStar className="text-yellow-500 text-xl" />
                <IoMdStar className="text-yellow-500 text-xl" />
                <IoMdStar className="text-yellow-500 text-xl" />
              </div>
              <span className="text-black mt-1">(5.0)</span>
            </div>
            <span className="text-black font-bold mt-1 text-lg">
              {item.rupees} /-
            </span>
          </div>
          <h1 className="text-black text-lg font-bold mt-4">{item.title}</h1>
        </div>
        <div className="m-4 flex justify-between flex-wrap gap-4">
          <div className="flex gap-1 text-black items-center">
            <FaRegUserCircle className="text-lg" />
            <span>By: Umair Farooqi</span>
          </div>
          <div className="flex gap-1 text-black items-center">
            <IoMdTime className="text-lg" />
            <span>{item.duration}:Month</span>
          </div>
          <div className="flex gap-1 text-black items-center">
            <FaRegUserCircle className="text-lg" />
            <span>Duration</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);
