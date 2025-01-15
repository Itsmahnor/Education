import React, { useState } from "react";

const InstructorFormSection = () => {
  const [activeSection, setActiveSection] = useState("");

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? "" : section);
  };

  return (
    <div className="bg-orange-500 text-orange-900 flex justify-center items-start py-10 px-6">
      {/* Left Button Section */}
      <div className="space-y-4 w-1/3">
        <button
          className={`w-full py-4 px-6 bg-orange-900 text-orange-400 font-bold text-lg hover:bg-orange-700 transition ${
            activeSection === "profile" && "underline"
          }`}
          onClick={() => toggleSection("profile")}
        >
          Create Your Profile
        </button>
        <button
          className="w-full py-4 px-6 bg-orange-900 text-orange-400 font-bold text-lg hover:bg-orange-700 transition"
          onClick={() => toggleSection("course")}
        >
          Set Up Your Course
        </button>
        <button
          className="w-full py-4 px-6 bg-orange-900 text-orange-400 font-bold text-lg hover:bg-orange-700 transition"
          onClick={() => toggleSection("teach")}
        >
          Teach and Earn
        </button>
        <button
          className="w-full py-4 px-6 bg-orange-900 text-orange-400 font-bold text-lg hover:bg-orange-700 transition"
          onClick={() => toggleSection("grow")}
        >
          Get Paid and Grow
        </button>
      </div>

      {/* Right Content Section */}
      <div className="w-2/3 bg-orange-900 p-6 rounded-md shadow-lg">
        {activeSection === "profile" && (
          <div className="text-orange-400">
            <h2 className="text-2xl font-bold mb-4">Create Your Profile</h2>
            <form className="space-y-4">
              <div>
                <label className="block font-bold">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-2 bg-orange-700 text-orange-200 rounded"
                />
              </div>
              <div>
                <label className="block font-bold">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 bg-orange-700 text-orange-200 rounded"
                />
              </div>
              <div>
                <label className="block font-bold">Phone Number</label>
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="w-full p-2 bg-orange-700 text-orange-200 rounded"
                />
              </div>
              <div>
                <label className="block font-bold">Course Expertise</label>
                <input
                  type="text"
                  placeholder="Your Course Expertise"
                  className="w-full p-2 bg-orange-700 text-orange-200 rounded"
                />
              </div>
              <div>
                <label className="block font-bold">Brief Bio</label>
                <textarea
                  placeholder="Write a brief bio about yourself"
                  className="w-full p-2 bg-orange-700 text-orange-200 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-orange-900 font-bold py-2 px-4 rounded hover:bg-orange-400 transition"
              >
                Enroll Now
              </button>
            </form>
          </div>
        )}

        {activeSection === "course" && (
          <div className="text-orange-400">
            <h2 className="text-2xl font-bold mb-4">Set Up Your Course</h2>
            <p>
              Learn how to set up your course with engaging content, videos,
              quizzes, and resources for students to enjoy and learn.
            </p>
          </div>
        )}

        {activeSection === "teach" && (
          <div className="text-orange-400">
            <h2 className="text-2xl font-bold mb-4">Teach and Earn</h2>
            <p>
              Teach students across the globe and earn competitive pay while
              sharing your knowledge and expertise.
            </p>
          </div>
        )}

        {activeSection === "grow" && (
          <div className="text-orange-400">
            <h2 className="text-2xl font-bold mb-4">Get Paid and Grow</h2>
            <p>
              Receive payments regularly and grow your professional reputation
              with SkillsEducation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorFormSection;
