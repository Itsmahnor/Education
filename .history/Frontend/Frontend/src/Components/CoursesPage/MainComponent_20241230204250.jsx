import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
 console.log(course)
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
    <div className="w-[100vw] flex flex-col items-center pt-16 bg-orange-950 text-orange-500">
      {/* Course Details Section */}
      {selectedCourse ? (
      <>
          {/* Course Header */}
          <div className="breadcrumb-wrapper w-full md:h-[50vh] flex justify-center items-center flex-col">
            <h1 className="text-orange-950 font-bold">{selectedCourse.header.title}</h1>
            <p className="w-[70vw]" dangerouslySetInnerHTML={{ __html: selectedCourse.header.description }}></p>
          </div>
  <div className="mt-8 w-[80vw] ">
    <div className="flex  gap-4">
        {/* Overview Section */}
        <div className="lg:w-[45%] w-full ">
          <div className="pt-7">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p>{selectedCourse.overview}</p>
          </div>

          <div className="lg:w-[35%] w-full lg:h-[35vh] bg-orange-500 rounded-lg flex flex-col justify-center items-center text-black font-bold md:text-[1.1rem] p-5 mt-8">
            <div className="w-full space-y-4">
              <div className="flex md:justify-between gap-2">
                <div className="flex items-center gap-2">
                  <p className="text-[1rem]">Duration:</p>
                </div>
                <p>{selectedCourse.details?.duration}</p>
              </div>
              <div className="flex justify-between">
                <p>Weekend Classes:</p>
                <p>{selectedCourse.details?.classHours}</p>
              </div>
              <div className="flex justify-between">
                <p>Student:</p>
                <p>{selectedCourse.details?.students}</p>
              </div>
              <div className="flex justify-between">
                <p>Course Type:</p>
                <p>{selectedCourse.details?.courseType}</p>
              </div>
            </div>
          </div>
        
          </div>
    </div>
  
       

          <div className="pt-7">
            <h2 className="text-xl font-semibold">Outline</h2>
            {selectedCourse.outline.map((item, index) => (
              <div key={index} className="mb-3">
                {/* Toggle Button for Outline Item */}
                <div
                  className="font-bold text-lg flex justify-between items-center cursor-pointer"
                  onClick={() => toggleOutlineItem(index)}
                >
                  <p className="text-orange-500">
                    Month {item.month}: {item.title}
                  </p>
                  <span>
                    {openOutlineItems[index] ? "▲" : "▼"} {/* Icon */}
                  </span>
                </div>

                {/* Conditional Rendering of Content */}
                {openOutlineItems[index] && (
                  <div className="pl-5">
                    <h3 className="font-bold text-lg">{item.subTitle1}</h3>
                    <p className="text-sm">{item.subTitle1Content}</p>
                    <h3 className="font-bold text-lg">{item.subTitle2}</h3>
                    <p className="text-sm">{item.subTitle2Content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


        </>
      ) : (
        <div className="text-center text-orange-500">Course not found.</div>
      )}
    </div>
    <Footer />
    </>
  );
};
