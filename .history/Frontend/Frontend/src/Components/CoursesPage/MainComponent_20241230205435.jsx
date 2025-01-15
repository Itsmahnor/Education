import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TopNav } from "../Navbar/TopNav";
import { BottomNav } from "../Navbar/BottomNav";
import Footer from "../Footer/Footer";

export const MainContent = ({ courses }) => {
  const { courseId } = useParams();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openOutlineItems, setOpenOutlineItems] = useState({});

  useEffect(() => {
    const course = courses.find((course) => course.courseId === courseId);
    setSelectedCourse(course);
  }, [courseId, courses]);

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
      <div className="w-full bg-orange-950 text-orange-500">
        {/* Course Details Section */}
        {selectedCourse ? (
          <>
           

            {/* Course Header */}
            <div className="breadcrumb-wrapper w-full md:h-[50vh] flex justify-center items-center flex-col bg-gradient-to-r from-orange-800 via-orange-950 to-orange-800 p-8 text-center">
              <h1 className="text-4xl font-extrabold text-white">{selectedCourse.header.title}</h1>
              <p className="text-lg text-gray-200 mt-4" dangerouslySetInnerHTML={{ __html: selectedCourse.header.description }}></p>
            </div>

            {/* Main Content Section */}
            <div className="mt-10 w-full md:w-4/5 mx-auto px-6">
              <div className="flex flex-wrap  justify-between">
                {/* Overview and Course Details Side by Side */}
                <div className="lg:w-2/3 w-full">
 {/* First Heading Section */}
 <div className="pt-10 text-center bg-gradient-to-r from-orange-800 via-orange-950 to-orange-800 py-10">
              <h1 className="text-4xl font-extrabold text-white">{selectedCourse.firstHeading}</h1>
              <p className="text-lg text-gray-200 mt-4">{selectedCourse.firstHeadingDescription}</p>
            </div>
                  <div className="pt-7">
                    <h2 className="text-2xl font-semibold text-white">Overview</h2>
                    <p className="text-lg mt-4">{selectedCourse.overview}</p>
                          {/* What You Will Learn Section */}
            <div className="mt-10 w-full md:w-4/5 mx-auto px-6">
              <h2 className="text-2xl font-semibold text-white">What You Will Learn</h2>
              <ul className="list-disc list-inside mt-6 text-lg text-gray-200">
                {selectedCourse.whatYouWillLearn.map((learningPoint, index) => (
                  <li key={index}>{learningPoint}</li>
                ))}
              </ul>
            </div>
                  </div>
                </div>

                <div className="lg:w-1/3 w-full bg-orange-600 rounded-lg p-6 text-white">
                  <h3 className="text-xl font-semibold">Course Details</h3>
                  <div className="space-y-4 mt-6">
                    <div className="flex justify-between">
                      <p className="font-bold">Duration:</p>
                      <p>{selectedCourse.details?.duration}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-bold">Weekend Classes:</p>
                      <p>{selectedCourse.details?.classHours}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-bold">Students:</p>
                      <p>{selectedCourse.details?.students}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-bold">Course Type:</p>
                      <p>{selectedCourse.details?.courseType}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outline Section */}
              <div className="mt-10">
                <h2 className="text-2xl font-semibold text-white">Course Outline</h2>
                {selectedCourse.outline.map((item, index) => (
                  <div key={index} className="mb-4">
                    {/* Toggle Button for Outline Item */}
                    <div
                      className="font-semibold text-lg text-orange-400 flex justify-between items-center cursor-pointer"
                      onClick={() => toggleOutlineItem(index)}
                    >
                      <p>Month {item.month}: {item.title}</p>
                      <span>{openOutlineItems[index] ? "▲" : "▼"}</span>
                    </div>

                    {/* Conditional Rendering of Content */}
                    {openOutlineItems[index] && (
                      <div className="pl-6 pt-3 space-y-3">
                        <div>
                          <h3 className="font-bold text-lg">{item.subTitle1}</h3>
                          <p className="text-sm text-gray-200">{item.subTitle1Content}</p>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{item.subTitle2}</h3>
                          <p className="text-sm text-gray-200">{item.subTitle2Content}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center text-white mt-16">Course not found.</div>
        )}
      </div>
      <Footer />
    </>
  );
};
