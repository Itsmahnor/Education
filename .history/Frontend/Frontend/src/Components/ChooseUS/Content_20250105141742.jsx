import React from "react";

const WhyChoose = () => {
  return (
    <section className="bg-[#04211e] text-[#ffffff] py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image and Key Features */}
        <div className="md:w-1/2 relative">
          <div className="bg-[#04211e] rounded-lg p-6 shadow-lg">
            <img
              src="https://cdn.vectorstock.com/i/500p/55/61/why-choose-us-speech-bubble-vector-24175561.jpg"
              alt="Why Choose Us"
              className="rounded-lg transition-transform duration-300 hover:scale-105 brightness-75 hover:brightness-100"
            />
            <h3 className="text-[#098E68] text-lg mt-4">Key Features</h3>
            <ul className="text-sm text-[#b8b8b8] space-y-2 mt-3">
              <li>✓ Scholarships</li>
              <li>✓ Flexible Time Slots</li>
              <li>✓ Career Counseling</li>
              <li>✓ Modern Methodologies</li>
              <li>✓ Digital Connectivity</li>
              <li>✓ Lifetime Support</li>
            </ul>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-[#098E68] text-3xl font-bold">
            Skills Education and Training
          </h2>
          <h3 className="text-[#098E68] text-xl font-semibold mt-4">
            Online Courses Web Development & App Development
          </h3>
          <p className="text-[#b8b8b8] mt-4 leading-relaxed">
            Our institute provides high-quality online development courses in
            marketing and app development, designed to equip you with the
            latest skills in the industry. Whether you are looking to build a
            career in digital marketing or mobile app development, our
            specialized certifications and programs offer practical knowledge
            and hands-on experience to help you succeed.
          </p>
          <ul className="mt-6 space-y-2 text-[#b8b8b8]">
            <li>✓ Specialized certifications in marketing and app development</li>
            <li>✓ Flexible online programs for busy professionals</li>
            <li>✓ Accelerated learning pathways to fast-track your career</li>
            <li>✓ Dual degree and certification options</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
