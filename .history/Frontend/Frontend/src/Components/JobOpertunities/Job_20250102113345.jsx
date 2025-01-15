import React, { useState } from "react";

const JobOpportunities = () => {
  const [jobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "New York, USA",
      description: "Develop user-friendly web interfaces with React and Tailwind.",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CodeWave",
      location: "San Francisco, USA",
      description: "Design and maintain scalable backend services.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Design Studio",
      location: "London, UK",
      description: "Create intuitive and appealing designs for digital products.",
    },
  ]);

  return (
    <section className="bg-gray-50 py-10">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Job Opportunities</h1>
        <p className="text-gray-600 mt-2">
          Explore career options and find the perfect job for you.
        </p>
      </div>

      {/* Search/Filter Section */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-2/3 md:w-1/3 px-4 py-2 border rounded-l-lg focus:outline-none"
        />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600">
          Search
        </button>
      </div>

      {/* Job Listings Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {job.title}
            </h3>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500 text-sm">{job.location}</p>
            <p className="mt-4 text-gray-700">{job.description}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Highlight Section */}
      <div className="bg-blue-100 mt-12 py-8 text-center rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 mt-2">
          Trusted by top employers worldwide. Verified job listings to kickstart your career.
        </p>
      </div>
    </section>
  );
};

export default JobOpportunities;
