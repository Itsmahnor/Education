import React from "react";

const WhyChoose = () => {
  return (
    <div className="bg-orange-200 py-10 px-6 md:px-16">
      {/* Key Features Section */}
      <div className="flex flex-col md:flex-row items-center bg-orange-900 text-white rounded-lg shadow-lg">
        {/* Left Image */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="path-to-image.jpg"
            alt="About Img"
            className="w-full rounded-t-lg md:rounded-l-lg md:rounded-t-none transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-0 left-0 p-4">
            <p className="text-sm font-semibold uppercase">
              Don’t Just Use Teach
            </p>
            <h3 className="text-lg font-bold">Master it</h3>
          </div>
        </div>
        {/* Right Features */}
        <div className="w-full md:w-1/2 p-6">
          <h3 className="text-2xl font-bold mb-4">Key Features</h3>
          <ul className="space-y-2">
            {[
              "Scholarships",
              "Flexible Time Slot",
              "Co-operative Trainers",
              "Extra Time For Studies",
              "Modern Methodologies",
              "Individual Learning",
              "Professional's Guide",
              "Business Counseling",
              "Entrepreneurship",
              "Master Classes",
              "Online Seminar",
              "Career Counseling",
              "Portfolio Creation",
              "Meetup With Experts",
              "Digital Connectivity",
              "Internship Opportunity",
              "Job Opportunity",
              "Life Time Support",
              "Ethics Classes",
              "Lifetime Support",
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-green-400">✔</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-orange-900 mb-4">
          Skills Education and Training
        </h2>
        <h3 className="text-2xl font-bold text-orange-700 mb-4">
          Online Courses Web Development & App Development
        </h3>
        <p className="text-orange-800 leading-relaxed">
          Our institute provides high-quality online development courses in
          marketing and app development, designed to equip you with the latest
          skills in the industry. Whether you are looking to build a career in
          digital marketing or mobile app development, our specialized
          certifications and programs offer practical knowledge and hands-on
          experience to help you succeed.
        </p>
        <ul className="mt-4 space-y-2 text-orange-800">
          <li>✔ Specialized certifications in marketing and app development</li>
          <li>✔ Flexible online programs for busy professionals</li>
          <li>✔ Accelerated learning pathways to fast-track your career</li>
          <li>✔ Dual degree and certification options</li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChoose;
