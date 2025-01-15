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
                  <h1 className="text-4xl font-extrabold text-white">{selectedCourse.firstHeading}</h1>
                  <p className="text-lg text-gray-200 mt-4">{selectedCourse.firstHeadingDescription}</p>

                  <div className="pt-7">
                    <h2 className="text-2xl font-semibold text-white">Overview</h2>
                    <p className="text-lg mt-4">{selectedCourse.overview}</p>

                    <div className="pt-7">
                      <h2 className="text-xl font-semibold">What You Will Learn</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        {selectedCourse.whatYouWillLearn.map((learningPoint, index) => (
                          <li key={index}>{learningPoint}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h2 className="text-2xl font-semibold text-white">Course Outline</h2>
                    {selectedCourse.outline.map((item, index) => (
                      <div key={index} className="m-4">
                        <div
                          className="font-semibold text-lg text-orange-400  outline py-2  px-2 rounded  flex justify-between items-center cursor-pointer"
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
      <Footer />
    </>
  );
};
