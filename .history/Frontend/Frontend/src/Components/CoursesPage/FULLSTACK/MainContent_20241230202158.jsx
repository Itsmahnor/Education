import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";
import { IoTimeOutline } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { SiStudyverse } from "react-icons/si";
import { TopNav } from "../Navbar/TopNav";
import { BottomNav } from "../Navbar/BottomNav";
import Footer from "../Footer/Footer";

// The MainContent component now fetches course based on URL params
export const MainContent = ({ courses }) => {
  const { courseId } = useParams(); // Get the courseId from URL params

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openOutlineItems, setOpenOutlineItems] = useState({});

  useEffect(() => {
    // Find the course based on courseId from the URL params
    const course = courses.find((course) => course.courseId === courseId);
    setSelectedCourse(course); // Set the selected course
  }, [courseId, courses]);

  // Toggle visibility for the selected course's outline
  const toggleOutlineItem = (index) => {
    setOpenOutlineItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
      <TopNav />
      <BottomNav />
      <div className="w-full flex justify-center items-center pt-16 bg-gray-800 text-gray-100">
        <div className="md:w-4/5 w-11/12 flex lg:flex-row flex-col gap-8">
          {/* Left Section */}
          <div className="lg:w-2/3 w-full">
            {/* Course Title and Rating */}
            <p className="text-lg text-orange-500">Full Stack Development</p>
            <h1 className="font-semibold text-3xl mt-2">Master MERN Stack Development</h1>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex gap-1 text-yellow-400">
                <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar />
              </div>
              <span>(5.0)</span>
            </div>

            {/* Overview */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Overview</h2>
              <p className="text-justify mt-3">
                Dive into the exciting world of full-stack development with our comprehensive MERN Stack course. Learn to build high-performance, scalable, and responsive web applications using MongoDB, Express.js, React, and Node.js. This course covers everything from front-end to back-end development, preparing you to excel as a full-stack developer.
              </p>
            </div>

            {/* What You Will Learn */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold">What You Will Learn</h2>
              <ul className="list-disc pl-5 mt-3">
                <li>Core concepts of JavaScript and ES6+ features</li>
                <li>Front-end development with React.js</li>
                <li>Back-end development with Node.js and Express.js</li>
                <li>Database management with MongoDB</li>
                <li>Building RESTful APIs and integrating with React</li>
                <li>Deploying full-stack applications on cloud platforms</li>
              </ul>
            </div>

            {/* Course Outline */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Outline</h2>
              {selectedCourse && selectedCourse.outline?.map((item, index) => (
                <div key={index} className="mb-6">
                  <p className="font-semibold text-orange-400">Month: {item.month}</p>
                  <p
                    className="outline text-lg font-bold cursor-pointer hover:text-orange-300"
                    onClick={() => toggleOutlineItem(index)}
                  >
                    {item.title}
                  </p>
                  <div
                    className={`transition-all duration-500 mt-2 ${openOutlineItems[index] ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="pl-4">
                      <div className="pt-2">
                        <h3 className="font-semibold text-lg">{item.subTitle1}</h3>
                        <p>{item.subTitle1Content}</p>
                      </div>
                      <div className="pt-2">
                        <h3 className="font-semibold text-lg">{item.subTitle2}</h3>
                        <p>{item.subTitle2Content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Course Details */}
          <div className="lg:w-1/3 w-full bg-gray-800 rounded-lg p-5 text-gray-200 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <GiDuration className="text-xl text-orange-400" />
              <div>
                <p className="font-bold">Duration:</p>
                <p>{selectedCourse?.details?.duration}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <IoTimeOutline className="text-xl text-orange-400" />
              <div>
                <p className="font-bold">Weekend Classes:</p>
                <p>{selectedCourse?.details?.classHours}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <PiStudent className="text-xl text-orange-400" />
              <div>
                <p className="font-bold">Students:</p>
                <p>{selectedCourse?.details?.students}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <SiStudyverse className="text-xl text-orange-400" />
              <div>
                <p className="font-bold">Course Type:</p>
                <p>{selectedCourse?.details?.courseType}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
