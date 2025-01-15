import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 h-auto text-orange-500 text-lg" style={{ backgroundColor: "#53291b" }}>
      {/* Footer Content */}
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between p-11">
          {/* Left Section: Logo and Description */}
          <div className="w-full md:w-1/3 mb-6">
            <div className="mb-3">
              <img
                src="https://skillseducation.pk/assets/skillsimages/nav-icons/skillsimages/mainlogo.png"
                alt="Skills Education Logo"
                className="w-1/2"
              />
            </div>
            <p className="mb-3">
              We work for the betterment of the society by training its people
              in the field of Information Technology and other technologies. We
              keep a vision of making this company an opportunity hub to reduce
              unemployment.
            </p>
            <p className="flex items-center mb-1">
              <i className="bi bi-telephone-fill mr-2"></i> +923276381819
            </p>
            <p className="flex items-center">
              <i className="bi bi-envelope-fill mr-2"></i> info@skillseducation.pk
            </p>
          </div>

          {/* Middle Section: Study Links */}
          <div className="w-full md:w-1/6 mb-6">
            <h5 className="text-warning mb-3">Study Links</h5>
            <ul className="list-none space-y-2">
              <li><a href="#" className="hover:underline">Opportunities</a></li>
              <li><a href="#" className="hover:underline">All Courses</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Become Tutor</a></li>
            </ul>
          </div>

          {/* Middle Section: Quick Links */}
          <div className="w-full md:w-1/6 mb-6">
            <h5 className="text-warning mb-3">Quick Links</h5>
            <ul className="list-none space-y-2">
              <li><a href="#" className="hover:underline">Community</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Terms | Privacy</a></li>
            </ul>
          </div>

          {/* Right Section: Trusted Institutes */}
          <div className="w-full md:w-1/3">
            <h5 className="text-warning mb-3">Trusted Institute:</h5>
            <p>Registered by FBR</p>
            <p>Registered by SECP</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-3" style={{ backgroundColor: "#fe9601" }}>
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-light mb-0">
            © 2024 SkillsEducation. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-light"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-light"><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
