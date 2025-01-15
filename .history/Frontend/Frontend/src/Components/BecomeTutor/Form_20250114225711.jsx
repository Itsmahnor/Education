import React, { useState } from "react";

const InstructorFormSection = () => {
  const [activeSection, setActiveSection] = useState("");

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? "" : section);
  };

  return (
    <div className="bg-[#04211e] text-[#ffffff] flex flex-wrap justify-center items-start py-10 px-6 gap-6">
      {/* Left Button Section */}
      <div className="space-y-4 w-full md:w-1/3">
        <button
          className={`w-full py-4 px-6 bg-[#098E68] text-[#ffffff] font-bold text-lg hover:bg-[#06694e] transition ${
            activeSection === "profile" ? "underline" : ""
          }`}
          onClick={() => toggleSection("profile")}
        >
          Create Your Profile
        </button>
        <button
          className="w-full py-4 px-6 bg-[#098E68] text-[#ffffff] font-bold text-lg hover:bg-[#06694e] transition"
          onClick={() => toggleSection("course")}
        >
          Set Up Your Course
        </button>
        <button
          className="w-full py-4 px-6 bg-[#098E68] text-[#ffffff] font-bold text-lg hover:bg-[#06694e] transition"
          onClick={() => toggleSection("teach")}
        >
          Teach and Earn
        </button>
        <button
          className="w-full py-4 px-6 bg-[#098E68] text-[#ffffff] font-bold text-lg hover:bg-[#06694e] transition"
          onClick={() => toggleSection("grow")}
        >
          Get Paid and Grow
        </button>

        {/* Display Additional Info */}
        <div className="mt-6">
          {activeSection === "profile" && (
            <div className="text-[#b8b8b8] bg-[#06694e] p-4 rounded-md">
              <h2 className="text-xl font-bold text-white mb-2">Create Your Profile</h2>
              <p>Provide your personal details, expertise, and a brief bio to create a professional instructor profile.</p>
            </div>
          )}
          {activeSection === "course" && (
            <div className="text-[#b8b8b8] bg-[#06694e] p-4 rounded-md">
              <h2 className="text-xl font-bold text-white mb-2">Set Up Your Course</h2>
              <p>Add engaging content, quizzes, and resources to set up your course.</p>
            </div>
          )}
          {activeSection === "teach" && (
            <div className="text-[#b8b8b8] bg-[#06694e] p-4 rounded-md">
              <h2 className="text-xl font-bold text-white mb-2">Teach and Earn</h2>
              <p>Teach students across the globe and get rewarded for sharing your expertise.</p>
            </div>
          )}
          {activeSection === "grow" && (
            <div className="text-[#b8b8b8] bg-[#06694e] p-4 rounded-md">
              <h2 className="text-xl font-bold text-white mb-2">Get Paid and Grow</h2>
              <p>Receive payments on time and grow your reputation with SkillsEducation.</p>
            </div>
          )}
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/3 bg-[#06694e] p-6 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Create Your Instructor Profile</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-bold text-white">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-2 bg-[#04211e] text-[#ffffff] placeholder-[#b8b8b8] rounded"
            />
          </div>
          <div>
            <label className="block font-bold text-white">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 bg-[#04211e] text-[#ffffff] placeholder-[#b8b8b8] rounded"
            />
          </div>
          <div>
            <label className="block font-bold text-white">Phone Number</label>
            <input
              type="text"
              placeholder="Your Phone Number"
              className="w-full p-2 bg-[#04211e] text-[#ffffff] placeholder-[#b8b8b8] rounded"
            />
          </div>
          <div>
            <label className="block font-bold text-white">Course Expertise</label>
            <input
              type="text"
              placeholder="Your Course Expertise"
              className="w-full p-2 bg-[#04211e] text-[#ffffff] placeholder-[#b8b8b8] rounded"
            />
          </div>
          <div>
            <label className="block font-bold text-white">Brief Bio</label>
            <textarea
              placeholder="Write a brief bio about yourself"
              className="w-full p-2 bg-[#04211e] text-[#ffffff] placeholder-[#b8b8b8] rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#098E68] text-[#ffffff] font-bold py-2 px-4 rounded hover:bg-[#06694e] transition"
          >
            Enroll Now
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default InstructorFormSection;
