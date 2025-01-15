import React, { useState } from "react";

const InstructorFormSection = () => {
  const [activeSection, setActiveSection] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    courseExpertise: "",
    bio: "",
  });
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    courseExpertise: "",
    bio: "",
  });

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? "" : section);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.fullName) {
      errors.fullName = "Full name is required";
      isValid = false;
    }

    if (!formData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
      isValid = false;
    }

    if (!formData.courseExpertise) {
      errors.courseExpertise = "Course expertise is required";
      isValid = false;
    }

    if (!formData.bio) {
      errors.bio = "Bio is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <div className="bg-[#04211e] text-[#ffffff] flex flex-wrap justify-center items-start py-10 px-6 gap-6">
      {/* Left Button Section */}
      <div className="space-y-4 w-full md:w-1/3">
        <button
          className={`w-full py-4 px-6 bg-[#098E68] text-[#ffffff] font-bold text-lg hover:bg-[#06694e] transition ${activeSection === "profile" ? "underline" : ""}`}
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-bold text-white">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full p-2 bg-[#04211e] text-[#ffffff] placeholder-[#b8b8b8] rounded"
            />
            {formErrors.fullName && <p className="text-white text-sm">{formErrors.fullName}</p>}
          </div>
          <div>
            <label className="block font-bold text-white">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full p-2 bg-[#04211e] text-[#ffffff] placeholder-[#b8b8b8] rounded"
            />
            {formErrors.email && <p className="text-white text-sm">{formErrors.email}</p>}
          </div>
          <div>
            <label className="block font-bold text-white">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Your Phone Number"
              className="w-full p-2 bg-[#04211e] text-[#ffffff] placeholder-[#b8b8b8] rounded"
            />
            {formErrors.phoneNumber && <p className="text-white text-sm">{formErrors.phoneNumber}</p>}
          </div>
          <div>
            <label className="block font-bold text-white">Course Expertise</label>
            <input
              type="text"
              name="courseExpertise"
              value={formData.courseExpertise}
              onChange={handleInputChange}
              placeholder="Your Course Expertise"
              className="w-full p-2 bg-[#04211e] text-[#ffffff] placeholder-[#b8b8b8] rounded"
            />
            {formErrors.courseExpertise && <p className="text-white text-sm">{formErrors.courseExpertise}</p>}
          </div>
          <div>
            <label className="block font-bold text-white">Brief Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="Write a brief bio about yourself"
              className="w-full p-2 bg-[#04211e] text-[#ffffff] placeholder-[#b8b8b8] rounded"
            />
            {formErrors.bio && <p className="text-white text-sm">{formErrors.bio}</p>}
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
