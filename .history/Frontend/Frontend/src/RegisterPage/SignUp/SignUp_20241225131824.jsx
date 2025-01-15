import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import { BsCalendarDate } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#4A2511]">
      <div className="w-full max-w-md bg-[#F49C18] p-8 rounded-lg shadow-lg">
        <h1 className="text-center text-3xl font-bold text-[#4A2511] mb-6">SIGN UP</h1>
        <form className="space-y-5">
          {/* Full Name */}
          <div className="flex items-center bg-[#4A2511] rounded-lg text-[#F49C18] px-4">
            <FaUser className="text-xl mr-3" />
            <input
              type="text"
              placeholder="Full Name"
              className="flex-grow py-2 bg-transparent focus:outline-none text-[#F49C18]"
            />
          </div>
          {/* Email */}
          <div className="flex items-center bg-[#4A2511] rounded-lg text-[#F49C18] px-4">
            <FaEnvelope className="text-xl mr-3" />
            <input
              type="email"
              placeholder="Email"
              className="flex-grow py-2 bg-transparent focus:outline-none text-[#F49C18]"
            />
          </div>
          {/* Phone Number */}
          <div className="flex items-center bg-[#4A2511] rounded-lg text-[#F49C18] px-4">
            <FaPhone className="text-xl mr-3" />
            <input
              type="text"
              placeholder="Phone Number"
              className="flex-grow py-2 bg-transparent focus:outline-none text-[#F49C18]"
            />
          </div>
          {/* City */}
          <div className="flex items-center bg-[#4A2511] rounded-lg text-[#F49C18] px-4">
            <FaMapMarkerAlt className="text-xl mr-3" />
            <input
              type="text"
              placeholder="City"
              className="flex-grow py-2 bg-transparent focus:outline-none text-[#F49C18]"
            />
          </div>
          {/* Age */}
          <div className="flex items-center bg-[#4A2511] rounded-lg text-[#F49C18] px-4">
            <BsCalendarDate className="text-xl mr-3" />
            <input
              type="number"
              placeholder="Age"
              className="flex-grow py-2 bg-transparent focus:outline-none text-[#F49C18]"
            />
          </div>
          {/* Qualification */}
          <div className="flex items-center bg-[#4A2511] rounded-lg text-[#F49C18] px-4">
            <FaGraduationCap className="text-xl mr-3" />
            <input
              type="text"
              placeholder="Qualification"
              className="flex-grow py-2 bg-transparent focus:outline-none text-[#F49C18]"
            />
          </div>
          {/* Select Gender */}
          <div className="flex items-center bg-[#4A2511] rounded-lg text-[#F49C18] px-4">
            <IoMdArrowDropdown className="text-xl mr-3" />
            <select
              className="flex-grow py-2 bg-transparent focus:outline-none text-[#F49C18]"
              defaultValue=""
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {/* Programming Background */}
          <div className="flex items-center bg-[#4A2511] rounded-lg text-[#F49C18] px-4">
            <IoMdArrowDropdown className="text-xl mr-3" />
            <select
              className="flex-grow py-2 bg-transparent focus:outline-none text-[#F49C18]"
              defaultValue=""
            >
              <option value="" disabled>
                Do you have Programming Background?
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          {/* Select Course */}
          <div className="flex items-center bg-[#4A2511] rounded-lg text-[#F49C18] px-4">
            <IoMdArrowDropdown className="text-xl mr-3" />
            <select
              className="flex-grow py-2 bg-transparent focus:outline-none text-[#F49C18]"
              defaultValue=""
            >
              <option value="" disabled>
                Select a Course
              </option>
              <option value="web">Web Development</option>
              <option value="data">Data Science</option>
              <option value="design">Graphic Design</option>
            </select>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-[#4A2511] text-[#F49C18] rounded-lg font-bold hover:bg-[#3e210e] transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
