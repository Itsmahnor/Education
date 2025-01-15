import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-wrapper footer-layout py-4 h-[100vh]" style={{ backgroundColor: "#53291b" }}>
      {/* Footer Content */}
      <div className="container">
        <div className="row justify-content-between">
          {/* Left Section: Logo and Description */}
          <div className="col-md-4">
            <div className="footer-logo">
              <img
                src="https://skillseducation.pk/assets/skillsimages/nav-icons/skillsimages/mainlogo.png"
                alt="Skills Education Logo"
                className="img-fluid mb-3 w-[50%]"
              />
            </div>
            <p className="text-light">
              We work for the betterment of the society by training its people
              in the field of Information Technology and other technologies. We
              keep a vision of making this company an opportunity hub to reduce
              unemployment.
            </p>
            <p className="text-light">
              <i className="bi bi-telephone-fill"></i> +923276381819
            </p>
            <p className="text-light">
              <i className="bi bi-envelope-fill"></i> info@skillseducation.pk
            </p>
          </div>

          {/* Middle Section: Study Links */}
          <div className="col-md-2">
            <h5 className="text-warning">Study Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Opportunities</a></li>
              <li><a href="#" className="text-light">All Courses</a></li>
              <li><a href="#" className="text-light">About Us</a></li>
              <li><a href="#" className="text-light">Become Tutor</a></li>
            </ul>
          </div>

          {/* Middle Section: Quick Links */}
          <div className="col-md-2">
            <h5 className="text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Community</a></li>
              <li><a href="#" className="text-light">Support</a></li>
              <li><a href="#" className="text-light">Terms | Privacy</a></li>
            </ul>
          </div>

          {/* Right Section: Trusted Institutes */}
          <div className="col-md-4">
            <h5 className="text-warning">Trusted Institute:</h5>
            <div className="trusted-logos">
              <img
                src="/path-to-fbr-logo.png"
                alt="Registered by FBR"
                className="img-fluid mb-2"
              />
              <img
                src="/path-to-secp-logo.png"
                alt="Registered by SECP"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="copyright-wrap py-3" style={{ backgroundColor: "#fe9601" }}>
        <div className="container d-flex justify-content-between align-items-center">
          <p className="text-light mb-0">
            © 2024 SkillsEducation. All Rights Reserved.
          </p>
          <div className="social-icons">
            <a href="#" className="text-light mx-2"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-light mx-2"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-light mx-2"><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
