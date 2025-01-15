import React, { useState } from "react";

const InstructorFormSection = () => {
  const [activeSection, setActiveSection] = useState("");

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? "" : section);
  };

  return (
    <div className="bg-orange-500 text-orange-900 flex flex-wrap justify-center items-start py-10 px-6 ">
      {/* Left Button Section */}
      <div className="space-y-4 w-full md:w-1/3">
        <div>
          <button
            className={`w-full py-4 px-6 bg-orange-900 text-orange-400 font-bold text-lg hover:bg-orange-700 transition ${
              activeSection === "profile" ? "underline" : ""
            }`}
            onClick={() => toggleSection("profile")}
          >
            Create Your Profile
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === "profile" ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } bg-orange-900 text-orange-400 p-4 rounded-md mt-2`}
          >
            <h2 className="text-xl font-bold mb-2">Create Your Profile</h2>
            <p>
              Provide your personal details, expertise, and a brief bio to
              create a professional instructor profile.
            </p>
          </div>
        </div>

        <div>
          <button
            className="w-full py-4 px-6 bg-orange-900 text-orange-400 font-bold text-lg hover:bg-orange-700 transition"
            onClick={() => toggleSection("course")}
          >
            Set Up Your Course
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === "course" ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } bg-orange-900 text-orange-400 p-4 rounded-md mt-2`}
          >
            <h2 className="text-xl font-bold mb-2">Set Up Your Course</h2>
            <p>
              Add engaging content, quizzes, and resources to set up your
              course.
            </p>
          </div>
        </div>

        <div>
          <button
            className="w-full py-4 px-6 bg-orange-900 text-orange-400 font-bold text-lg hover:bg-orange-700 transition"
            onClick={() => toggleSection("teach")}
          >
            Teach and Earn
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === "teach" ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } bg-orange-900 text-orange-400 p-4 rounded-md mt-2`}
          >
            <h2 className="text-xl font-bold mb-2">Teach and Earn</h2>
            <p>
              Teach students across the globe and get rewarded for sharing your
              expertise.
            </p>
          </div>
        </div>

        <div>
          <button
            className="w-full py-4 px-6 bg-orange-900 text-orange-400 font-bold text-lg hover:bg-orange-700 transition"
            onClick={() => toggleSection("grow")}
          >
            Get Paid and Grow
          </button>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              activeSection === "grow" ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } bg-orange-900 text-orange-400 p-4 rounded-md mt-2`}
          >
            <h2 className="text-xl font-bold mb-2">Get Paid and Grow</h2>
            <p>
              Receive payments on time and grow your reputation with
              SkillsEducation.
            </p>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-2/3 bg-orange-900 p-6 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-orange-400 mb-4">
          Create Your Instructor Profile
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block font-bold text-orange-400">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-2 bg-orange-700 text-orange-200 rounded"
            />
          </div>
          <div>
            <label className="block font-bold text-orange-400">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 bg-orange-700 text-orange-200 rounded"
            />
          </div>
          <div>
            <label className="block font-bold text-orange-400">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Your Phone Number"
              className="w-full p-2 bg-orange-700 text-orange-200 rounded"
            />
          </div>
          <div>
            <label className="block font-bold text-orange-400">
              Course Expertise
            </label>
            <input
              type="text"
              placeholder="Your Course Expertise"
              className="w-full p-2 bg-orange-700 text-orange-200 rounded"
            />
          </div>
          <div>
            <label className="block font-bold text-orange-400">Brief Bio</label>
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
    </div>
  );
};

export default InstructorFormSection;
