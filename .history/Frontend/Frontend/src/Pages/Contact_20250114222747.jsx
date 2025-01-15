import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
    city: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (!/^[a-zA-Z\s]*$/.test(formData.fullName)) {
      newErrors.fullName = 'Name should contain only letters (A-Z)';
    } else if (formData.fullName.length <= 2) {
      newErrors.fullName = 'Name is too short';
    }

    if (!formData.email.trim() || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Valid Email is required';
    }

    if (!formData.phoneNumber.trim() || !/^\d{10,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Valid Phone Number is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Contact form submitted successfully');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#04211e] overflow-hidden">
      <div className="w-full max-w-md bg-[#098E68] p-8 rounded-lg shadow-lg">
        <h1 className="text-center text-3xl font-bold text-[#ffffff] mb-6">CONTACT US</h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="flex flex-col">
            <div className="flex items-center bg-[#ffff] rounded-lg text-[#04211e] px-4">
              <FaUser className="text-xl mr-3" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="flex-grow py-2 bg-transparent placeholder-[#b8b8b8] focus:outline-none"
              />
            </div>
            {errors.fullName && <span className="text-white text-sm mt-1">{errors.fullName}</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <div className="flex items-center bg-[#ffff] rounded-lg text-[#04211e] px-4">
              <FaEnvelope className="text-xl mr-3" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="flex-grow py-2 bg-transparent placeholder-[#b8b8b8] focus:outline-none"
              />
            </div>
            {errors.email && <span className="text-white text-sm mt-1">{errors.email}</span>}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <div className="flex items-center bg-[#ffff] rounded-lg text-[#04211e] px-4">
              <FaPhone className="text-xl mr-3" />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="flex-grow py-2 bg-transparent placeholder-[#b8b8b8] focus:outline-none"
              />
            </div>
            {errors.phoneNumber && <span className="text-white text-sm mt-1">{errors.phoneNumber}</span>}
          </div>

          {/* City */}
          <div className="flex flex-col">
            <div className="flex items-center bg-[#ffff] rounded-lg text-[#04211e] px-4">
              <FaMapMarkerAlt className="text-xl mr-3" />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="flex-grow py-2 bg-transparent placeholder-[#b8b8b8] focus:outline-none"
              />
            </div>
            {errors.city && <span className="text-white text-sm mt-1">{errors.city}</span>}
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <div className="flex items-center bg-[#ffff] rounded-lg text-[#04211e] px-4">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="flex-grow py-2 bg-transparent placeholder-[#b8b8b8] focus:outline-none"
                rows="4"
              ></textarea>
            </div>
            {errors.message && <span className="text-white text-sm mt-1">{errors.message}</span>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-[#04211e] text-[#098E68] rounded-lg font-bold hover:bg-[#031a15] transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
