import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="pt-8 text-orange-500 text-lg" style={{ backgroundColor: "#53291b" }}>
      {/* Footer Content */}
      <div className="container mx-auto p-10">
        <div className="flex flex-wrap justify-between">
          {/* Left Section: Logo and Description */}
          <div className="w-full md:w-1/3 mb-8">
            <div className="mb-4">
              <img
                src="https://skillseducation.pk/assets/skillsimages/nav-icons/skillsimages/mainlogo.png"
                alt="Skills Education Logo"
                className="w-1/2"
              />
            </div>
            <p className="mb-4">
              We work for the betterment of the society by training its people
              in the field of Information Technology and other technologies. We
              keep a vision of making this company an opportunity hub to reduce
              unemployment.
            </p>
            <p className="flex items-center mb-2">
              <i className="bi bi-telephone-fill mr-2"></i> +923276381819
            </p>
            <p className="flex items-center">
              <i className="bi bi-envelope-fill mr-2"></i> info@skillseducation.pk
            </p>
          </div>

          {/* Middle Section: Study Links */}
          <div className="w-full md:w-1/6 mb-8">
            <h5 className=" space-y-4 text-warning mb-4 ml-5">Study Links</h5>
            <ul className="list-none space-y-3">
              <li><a href="#" className="text-orange-500 hover:text-orange-400">Opportunities</a></li>
              <li><a href="#" className="text-orange-500 hover:text-orange-400">All Courses</a></li>
              <li><a href="#" className="text-orange-500 hover:text-orange-400">About Us</a></li>
              <li><a href="#" className="text-orange-500 hover:text-orange-400">Become Tutor</a></li>
            </ul>
          </div>

          {/* Middle Section: Quick Links */}
          <div className="w-full md:w-1/6 mb-8">
            <h5 className=" text-warning mb-4 ml-5">Quick Links</h5>
            <ul className="list-none space-y-3">
              <li><a href="#" className="text-orange-500 hover:text-orange-400">Community</a></li>
              <li><a href="#" className="text-orange-500 hover:text-orange-400">Support</a></li>
              <li><a href="#" className="text-orange-500 hover:text-orange-400">Terms | Privacy</a></li>
            </ul>
          </div>

          {/* Right Section: Trusted Institutes */}
          <div className="w-full md:w-1/3">
  <h5 className="text-warning mb-4">Trusted Institute:</h5>
  
  {/* FBR Section */}
  <div className="flex items-center gap-2 mb-4">
    <div className="flex-shrink-0 w-16 sm:w-24 md:w-28 lg:w-32">
      <img
        src="https://skillseducation.pk/assets/skillsimages/nav-courses-images/fbr%20logo.png"
        alt="img"
        className="w-full h-auto"
      />
    </div>
    <p className="m-0">Registered by FBR</p>
  </div>

  {/* SECP Section */}
  <div className="flex items-center gap-3">
    <div className="flex-shrink-0 w-16 sm:w-24 md:w-28 lg:w-28">
      <img
        src="https://skillseducation.pk/assets/skillsimages/nav-courses-images/sssss.png"
        alt="img"
        className="w-full h-auto"
      />
    </div>
    <p className="m-0">Registered by SECP</p>
  </div>
</div>


        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-4" style={{ backgroundColor: "#fe9601" }}>
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-white mb-0">
            © 2024 SkillsEducation. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className=" hover:text-gray-300"><FaFacebook /> </a>
            <a href="#" className=" hover:text-gray-300"><FaInstagramSquare /></a>
            <a href="#" className=" hover:text-gray-300"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
