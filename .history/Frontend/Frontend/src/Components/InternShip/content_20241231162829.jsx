import React from 'react';

const InternshipCertificationProgram = () => {
  return (
    <div className="bg-orange-900 text-black w-[100vw] py-10 flex justify-center items-center">
     
      {/* Certification Section */}
      <div className="bg-orange-900 text-orange-400 px-8 py-10 w-[70vw]">
        <h2 className="text-2xl font-bold uppercase mb-4">Certificate</h2>
        <h3 className="text-3xl font-bold mb-6">Internship Certification Program</h3>
        <ul className="text-lg space-y-3">
          <li className="flex items-center">
            <span className="text-black mr-2">✔</span> Web Development
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
        <p className="text-orange-500 mt-6 font-bold bg-gray-300 justify-self-end">
          Guaranteed Certification on Completion
        </p>
      </div>
    </div>
  );
};

export default InternshipCertificationProgram;
