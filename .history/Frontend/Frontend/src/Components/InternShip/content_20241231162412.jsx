import React from 'react';

const InternshipCertificationProgram = () => {
  return (
    <div className="bg-orange-400 text-black">
      {/* Top Section */}
      <div className="px-8 py-6 text-center">
        <p className="text-lg">
          Enhance your learning experience with an exciting{' '}
          <span className="font-bold text-orange-600">Internship Offer</span> at leading companies. 
          This internship will provide you hands-on experience with real-world projects, improving your skills 
          and building your professional network. Join our internship program to apply your learning, 
          gain practical exposure, and kickstart your career in web development.
        </p>
      </div>

      {/* Certification Section */}
      <div className="bg-orange-900 text-orange-400 px-8 py-10">
        <h2 className="text-2xl font-bold uppercase mb-4">Certificate</h2>
        <h3 className="text-3xl font-bold mb-6">Internship Certification Program</h3>
        <ul className="text-lg space-y-3">
          <li className="flex items-center">
            <span className="text-green-400 mr-2">✔</span> Web Development
          </li>
          <li className="flex items-center">
            <span className="text-green-400 mr-2">✔</span> Marketing
          </li>
          <li className="flex items-center">
            <span className="text-green-400 mr-2">✔</span> App Development
          </li>
          <li className="flex items-center">
            <span className="text-green-400 mr-2">✔</span> Graphic Designing
          </li>
          <li className="flex items-center">
            <span className="text-green-400 mr-2">✔</span> Freelancing
          </li>
          <li className="flex items-center">
            <span className="text-green-400 mr-2">✔</span> AI
          </li>
          <li className="flex items-center">
            <span className="text-green-400 mr-2">✔</span> Game Development
          </li>
          <li className="flex items-center">
            <span className="text-green-400 mr-2">✔</span> Programming
          </li>
        </ul>
        <p className="text-orange-500 mt-6 font-bold">
          Guaranteed Certification on Completion
        </p>
      </div>
    </div>
  );
};

export default InternshipCertificationProgram;
