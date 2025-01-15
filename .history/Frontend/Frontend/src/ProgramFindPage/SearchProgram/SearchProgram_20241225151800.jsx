import React from 'react';
import Course from './Search.json';
import { IoMdStar } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';

export const SearchProgram = () => {
  return (
    <div className="w-full h-auto md:pt-20 bg-orange-950 flex justify-center text-orange-500">
      <div className="w-[90%] h-auto flex flex-wrap justify-around gap-10">
        <div className="lg:w-[80%] w-full">
          <input type="Search Course" />
          <CategoryGrid />
        </div>
      </div>
    </div>
  );
};

// Grid Component for larger screens
const CategoryGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 lg:gap-10">
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
