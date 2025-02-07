import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { SiStudyverse } from "react-icons/si";
import { Link } from "react-router";
import Data  from "./Content.json";

export const MainContent = () => {
  const[visible,setvisible]=useState({});
  console.log(visible)
  const Change=(index)=>{
setvisible((prev)=>{
  return {
    ...prev, [index]: !prev[index]
  }
})
  }
  
  return (
    <div className="w-[100vw] flex justify-center items-center pt-16 bg-orange-950 text-orange-500 flex-col">
      <div className="md:w-[80vw] w-[95vw] flex lg:flex-row flex-col gap-7 justify-between">
        {/* Left Section */}
        <div className="lg:w-[60%]">
          <p className="text-lg">Full Stack Development</p>
          <h1 className="font-bold text-2xl lg:text-3xl">
            Master MERN Stack Development
          </h1>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex gap-1 text-yellow-500">
              <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar />
            </div>
            <span className="text-white">(5.0)</span>
          </div>

          {/* Overview */}
          <div className="pt-7">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="text-justify">
            Dive into the exciting world of full-stack development with our comprehensive MERN Stack course. Learn to build high-performance, scalable, and responsive web applications using MongoDB, Express.js, React, and Node.js. This course covers everything from front-end to back-end development, preparing you to excel as a full-stack developer.
            </p>
          </div>

          {/* What You Will Learn */}
          <div className="pt-7">
            <h2 className="text-xl font-semibold">What You Will Learn</h2>
            <ul className="list-disc pl-5">
              <li>Core concepts of JavaScript and ES6+ features</li>
              <li>Front-end development with React.js</li>
              <li>Back-end development with Node.js and Express.js</li>
              <li>Database management with MongoDB</li>
              <li>Building RESTful APIs and integrating with React</li>
              <li>Deploying full-stack applications on cloud platforms</li>
            </ul>
          </div>
          <div className="pt-7">
      <h2>Outline</h2>
      <div className="pt-7">
        {/* Map through the Data array */}
        {Data.map((item, index) => (
          <div key={index} className="mb-3">
            {/* Title */}
            <p className="font-semibold text-orange-500">Month: {item.month}</p>
            <p
              className="outline rounded-sm p-3 font-bold text-lg cursor-pointer"
              onClick={() => Change(index)}
            >
              {item.title}
            </p>

            {/* Conditional Content with Transition */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                visible[index] ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className=" p-3 rounded">
              <div className="pt-3 text-orange-400">
               

                <div className="pt-2">
                  <h3 className="font-bold text-lg ">{item.subTitle1}</h3>
                  <p className="text-sm">{item.subTitle1Content}</p>
                </div>

                <div className="pt-2">
                  <h3 className="font-bold text-lg">{item.subTitle2}</h3>
                  <p className="text-sm">{item.subTitle2Content}</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-[35%]   w-full lg:h-[35vh] bg-orange-500 rounded-lg flex flex-col justify-center items-center text-black font-bold md:text-[1.1rem] p-5">
          <div className="w-full space-y-4">
            <div className="flex md:justify-between gap-2  ">
              <div className="flex items-center gap-2">
                <GiDuration />
                <p className="text-[1rem]">Duration:</p>
              </div>
              <p>6 Month</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <IoTimeOutline />
                <p>Weekend Classes:</p>
              </div>
              <p>4 Hours</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <PiStudent />
                <p>Student:</p>
              </div>
              <p>3504 Students</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <SiStudyverse />
                <p>Course Type:</p>
              </div>
              <p>100% online</p>
            </div>
            <Link to="register">
              <div className="bg-orange-950 rounded-lg text-orange-500 p-3 text-center cursor-pointer">
                Course Enrollment
              </div>
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
};
