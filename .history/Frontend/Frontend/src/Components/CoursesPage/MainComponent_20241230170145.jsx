import React, { useState } from "react";

// MainContent component that accepts data from props
export const MainContent = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Function to toggle course visibility
  const fetchCourse = (id) => {
    if (selectedCourse?.id === id) {
      setSelectedCourse(null); // Deselect if the same course is clicked
    } else {
      const course = courses.find((course) => course.id === id);
      setSelectedCourse(course);
    }
  };

  return (
    <div className="w-[100vw] flex flex-col items-center pt-16 bg-orange-950 text-orange-500">
      {/* Course Selection Section */}
      <div className="w-[80vw] flex justify-center space-x-4">
        {courses.map((course) => (
          <button
            key={course.id}
            className="bg-orange-500 text-black px-4 py-2 rounded"
            onClick={() => fetchCourse(course.id)}
          >
            {course.title}
          </button>
        ))}
      </div>

      {/* Course Details Section */}
      {selectedCourse && (
        <div className="mt-8 w-[80vw]">
          {/* Header Section */}
          <div className="breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col">
            <h1 className="text-orange-950 font-bold">{selectedCourse.header.title}</h1>
            <p className="w-[70vw]" dangerouslySetInnerHTML={{ __html: selectedCourse.header.description }}></p>
          </div>

          {/* Overview Section */}
          <div className="pt-7">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p>{selectedCourse.overview}</p>
          </div>

          {/* What You Will Learn Section */}
          <div className="pt-7">
            <h2 className="text-xl font-semibold">What You Will Learn</h2>
            <ul className="list-disc pl-5">
              {selectedCourse.whatYouWillLearn.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Outline Section */}
          <div className="pt-7">
            <h2>Outline</h2>
            {selectedCourse.outline.map((item, index) => (
              <div key={index} className="mb-3">
                <p className="font-semibold text-orange-500">Month: {item.month}</p>
                <p className="font-bold text-lg">{item.title}</p>
                <div className="pl-5">
                  <h3 className="font-bold text-lg">{item.subTitle1}</h3>
                  <p className="text-sm">{item.subTitle1Content}</p>
                  <h3 className="font-bold text-lg">{item.subTitle2}</h3>
                  <p className="text-sm">{item.subTitle2Content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Details Section */}
          <div className="lg:w-[35%] w-full lg:h-[35vh] bg-orange-500 rounded-lg flex flex-col justify-center items-center text-black font-bold md:text-[1.1rem] p-5 mt-8">
            <div className="w-full space-y-4">
              <div className="flex md:justify-between gap-2">
                <div className="flex items-center gap-2">
                  <p className="text-[1rem]">Duration:</p>
                </div>
                <p>{selectedCourse.details.duration}</p>
              </div>
              <div className="flex justify-between">
                <p>Weekend Classes:</p>
                <p>{selectedCourse.details.classHours}</p>
              </div>
              <div className="flex justify-between">
                <p>Student:</p>
                <p>{selectedCourse.details.students}</p>
              </div>
              <div className="flex justify-between">
                <p>Course Type:</p>
                <p>{selectedCourse.details.courseType}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
