import React, { useState } from "react";
import { IoStar, IoTimeOutline } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { SiStudyverse } from "react-icons/si";
import { Link } from "react-router-dom"; // Ensure correct router import
import Data from "./Content.json"; // JSON for course outline

export const MainContent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col items-center pt-16 bg-[#04211e] text-[#ffffff]">
      <div className="md:w-[80vw] w-[95vw] flex lg:flex-row flex-col gap-7 justify-between">
        <div className="lg:w-[60%]">
          <p className="text-lg text-[#b8b8b8]">Full Stack Development</p>
          <h1 className="font-bold text-2xl lg:text-3xl text-[#098E68]">
            Master Mobile App Development with Flutter and Dart
          </h1>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex gap-1 text-[#098E68]">
              <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar />
            </div>
            <span className="text-[#b8b8b8]">(5.0)</span>
          </div>

          {/* Overview */}
          <div className="pt-7">
            <h2 className="text-xl font-semibold text-[#098E68]">Overview</h2>
            <p className="text-justify">
              Dive into the world of mobile app development with our comprehensive <strong>Flutter and Dart</strong> course. Learn how to design, build, and deploy high-performance mobile applications for both Android and iOS using <strong>Flutter</strong>, a powerful cross-platform framework, and <strong>Dart</strong>, the language that powers Flutter. Whether you're an aspiring developer or a professional, this course will equip you with the skills to create visually stunning and responsive mobile apps.
            </p>
          </div>

          {/* What You Will Learn */}
          <div className="pt-7">
            <h2 className="text-xl font-semibold text-[#098E68]">What You Will Learn</h2>
            <ul className="list-disc pl-5">
              <li>Introduction to Flutter and Dart</li>
              <li>Setting up the Flutter development environment</li>
              <li>Building UIs with Flutter widgets and layouts</li>
              <li>Managing state in Flutter apps</li>
              <li>Integrating APIs and handling data with Dart</li>
              <li>Adding animations and custom UI components</li>
              <li>Debugging and testing Flutter applications</li>
              <li>Deploying apps to Google Play and the App Store</li>
            </ul>
          </div>

          {/* Course Outline */}
          <div className="bg-[#021711] py-12 px-6 mt-7 rounded-lg">
            <h1 className="text-3xl font-bold mb-8 text-[#098E68]">Outline</h1>
            <div>
              {Data.outline.map((monthData, index) => (
                <div key={index} className="mb-8 text-[#ffffff]">
                  <button
                    className="w-full bg-[#098E68] text-[#04211e] transition-all duration-500 overflow-hidden font-semibold text-left px-6 py-3 rounded-t-lg shadow-md"
                    onClick={() => toggleSection(index)}
                  >
                    {monthData.month}: {monthData.title}
                  </button>
                  {activeIndex === index && (
                    <div className="bg-[#021711] p-6 rounded-b-lg">
                      {monthData.topics.map((topic, topicIndex) => (
                        <div
                          key={topicIndex}
                          className="mb-4 border-b border-[#098E68] pb-4 last:border-none last:pb-0"
                        >
                          <h2 className="text-lg font-semibold text-[#098E68]">{topic.heading}</h2>
                          <p className="text-sm text-[#b8b8b8]">{topic.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-8">
                <h3 className="text-lg font-bold text-[#098E68]">
                  {Data.additionalInfo.question}
                </h3>
                <p className="text-[#b8b8b8]">{Data.additionalInfo.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-[35%] w-full lg:h-[35vh] bg-[#098E68] rounded-lg flex flex-col justify-center items-center text-[#04211e] font-bold p-5">
          <div className="w-full space-y-4">
            <div className="flex md:justify-between gap-2">
              <div className="flex items-center gap-2">
                <GiDuration />
                <p className="text-[1rem]">Duration:</p>
              </div>
              <p>6 Months</p>
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
                <p>Students:</p>
              </div>
              <p>3504 Students</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <SiStudyverse />
                <p>Course Type:</p>
              </div>
              <p>100% Online</p>
            </div>
            <Link to="/register">
              <div className="bg-[#04211e] rounded-lg text-[#098E68] p-3 text-center cursor-pointer">
                Course Enrollment
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
