import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TopNav } from "../Navbar/TopNav";
import { BottomNav } from "../Navbar/BottomNav";
import Footer from "../Footer/Footer";
import CareerOpportunities from "../CareerOpertunities";

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
        {selectedCourse ? (
          <>
            <div className="breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col">
              <h1 className="text-orange-950 font-bold text-4xl">{selectedCourse.header.title}</h1>
              <p
                className="w-[70vw] text-lg text-orange-950 mt-4 text-center"
                dangerouslySetInnerHTML={{ __html: selectedCourse.header.description }}
              ></p>
            </div>

            <div className="w-[100vw] flex justify-center items-center pt-16 bg-orange-950 text-orange-500 flex-col">
              <div className="md:w-[80vw] w-[95vw] flex lg:flex-row flex-col gap-7 justify-between">
                <div className="lg:w-[60%]">
                  <h1 className="text-4xl font-extrabold ">{selectedCourse.firstHeading}</h1>
                  <p className="text-lg text-gray-200 mt-4">{selectedCourse.firstHeadingDescription}</p>

                  <div className="pt-7">
                    <h2 className="text-2xl font-semibold ">Overview</h2>
                    <p className="text-lg mt-4">{selectedCourse.overview}</p>

                    <div className="pt-7">
                      <h2 className="text-xl font-semibold ">What You Will Learn</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        {selectedCourse.whatYouWillLearn.map((learningPoint, index) => (
                          <li key={index}>{learningPoint}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h2 className="text-2xl font-semibold border-b-2 border-orange-500 pb-2">Course Outline</h2>
                    {selectedCourse.outline.map((item, index) => (
                      <div key={index} className="mt-4">
                        <div
                          className="font-semibold text-lg text-orange-400 bg-orange-800 py-3 px-4 rounded-lg flex justify-between items-center cursor-pointer shadow-md hover:bg-orange-700 transition-all"
                          onClick={() => toggleOutlineItem(index)}
                        >
                          <p>{item.month}: {item.title}</p>
                          <span
                            className={`transition-transform duration-300 ${
                              openOutlineItems[index] ? "rotate-180" : "rotate-0"
                            }`}
                          >
                            ▲
                          </span>
                        </div>

                        {openOutlineItems[index] && (
                          <div className="pl-6 pt-3 space-y-3 bg-orange-900 p-4 rounded-lg shadow-lg">
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

                {/* Right Column */}
                <div className="lg:w-[35%] w-full lg:h-[40vh] bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg flex flex-col justify-center items-center text-black font-bold p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold mb-6">Course Details</h3>
                  <div className="w-full space-y-6">
                    {[
                      ["Duration", selectedCourse.details?.duration],
                      ["Weekend Classes", selectedCourse.details?.classHours],
                      ["Students", selectedCourse.details?.students],
                      ["Course Type", selectedCourse.details?.courseType],
                    ].map(([label, value], index) => (
                      <div key={index} className="flex justify-between text-lg">
                        <p className="font-semibold">{label}:</p>
                        <p>{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
            

                <div className="lg:w-[35%] w-full lg:h-[35vh] bg-orange-500 rounded-lg flex flex-col justify-center items-center text-black font-bold md:text-[1.1rem] p-5 shadow-lg">
                  <div className="w-full space-y-4">
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
              </div>
            </div>
          </>
        ) : (
          <div className="text-center text-white mt-16">Course not found.</div>
        )}
      </div>
      <CareerOpportunities />
      <Footer />
    </>
  );
};
