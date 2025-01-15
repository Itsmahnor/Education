import React, { useState } from "react";

const JobOpportunities = () => {
  const [jobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "New York, USA",
      description:
        "Develop responsive and user-friendly web interfaces with React, Tailwind CSS, and modern web technologies.",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CodeWave",
      location: "San Francisco, USA",
      description:
        "Design and maintain scalable backend services with a focus on performance and security.",
      skills: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Design Studio",
      location: "London, UK",
      description:
        "Create user-centered designs for web and mobile applications using Figma and Adobe XD.",
      skills: ["Figma", "Wireframing", "Prototyping"],
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [openForm, setOpenForm] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm) ||
      job.company.toLowerCase().includes(searchTerm) ||
      job.location.toLowerCase().includes(searchTerm)
  );

  const toggleForm = (id) => {
    setOpenForm(openForm === id ? null : id);
  };

  return (
    <section className="bg-orange-950 min-h-screen py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-500">Find Your Dream Job</h1>
        <p className="text-orange-300 text-lg mt-2">
          Explore exciting opportunities and grow your career.
        </p>
      </div>

      {/* "Why Join Us" Section */}
      <div className="bg-orange-800 text-orange-300 p-8 rounded-lg shadow-lg mb-10">
        <h2 className="text-3xl font-bold text-orange-400">Why Join Us?</h2>
        <p className="mt-4">
          At our company, we value innovation, creativity, and collaboration. Join
          a team that is committed to excellence and helping you achieve your
          career goals.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search jobs by title, company, or location..."
          className="w-3/4 md:w-1/2 px-4 py-3 bg-orange-950 border border-orange-500 text-orange-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          onChange={handleSearch}
        />
        <button className="bg-orange-500 px-8 py-3 rounded-r-full text-black font-bold hover:bg-orange-600 transition-all">
          Search
        </button>
      </div>

      {/* Job Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-orange-800 text-orange-200 rounded-lg shadow-lg p-6 transition-transform"
            >
              <h3 className="text-2xl font-semibold text-orange-400 mb-2">
                {job.title}
              </h3>
              <p className="text-orange-300 font-medium">{job.company}</p>
              <p className="text-sm text-orange-400">{job.location}</p>
              <p className="mt-4">{job.description}</p>
              <div className="mt-4 text-sm">
                <strong>Skills:</strong>
                <ul className="list-disc list-inside mt-1">
                  {job.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <button
                className="mt-6 bg-orange-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all"
                onClick={() => toggleForm(job.id)}
              >
                {openForm === job.id ? "Close Form" : "Apply Now"}
              </button>

              {/* Application Form */}
              <div
                className={`mt-6 bg-orange-700 p-4 rounded-lg overflow-hidden transition-all duration-300 ${
                  openForm === job.id ? "max-h-screen" : "max-h-0"
                }`}
              >
                {openForm === job.id && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert(`Application submitted for ${job.title}`);
                    }}
                  >
                    <h4 className="text-lg font-semibold text-orange-300">
                      Apply for {job.title}
                    </h4>
                    <div className="mt-3">
                      <label className="block text-sm text-orange-200">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 bg-orange-600 text-orange-100 rounded focus:outline-none"
                      />
                    </div>
                    <div className="mt-3">
                      <label className="block text-sm text-orange-200">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 bg-orange-600 text-orange-100 rounded focus:outline-none"
                      />
                    </div>
                    <div className="mt-3">
                      <label className="block text-sm text-orange-200">
                        Resume (optional)
                      </label>
                      <input
                        type="file"
                        className="w-full px-3 py-2 bg-orange-600 text-orange-100 rounded focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-4 bg-orange-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all"
                    >
                      Submit Application
                    </button>
                  </form>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-orange-300 col-span-full">
            No jobs found. Try a different search term!
          </p>
        )}
      </div>
    </section>
  );
};

export default JobOpportunities;
