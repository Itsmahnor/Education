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
    {
      id: 4,
      title: "Data Analyst",
      company: "Insight Corp",
      location: "Remote",
      description:
        "Analyze data trends and generate actionable insights using SQL and Python.",
      skills: ["Python", "SQL", "Data Visualization"],
    },
    {
      id: 5,
      title: "Digital Marketer",
      company: "GrowMore Agency",
      location: "Sydney, Australia",
      description:
        "Plan and execute online marketing strategies to enhance brand visibility.",
      skills: ["SEO", "Google Ads", "Content Marketing"],
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

  return (
    <section className="bg-orange-950 min-h-screen py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-500">Find Your Dream Job</h1>
        <p className="text-orange-300 text-lg mt-2">
          Explore exciting opportunities and grow your career.
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

      {/* Job Section Wrapper */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-orange-800 text-orange-200 rounded-lg shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-transform"
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
                  onClick={() => setOpenForm(job)}
                >
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-orange-300 col-span-full">
              No jobs found. Try a different search term!
            </p>
          )}
        </div>
      </div>

      {/* Application Modal */}
      {openForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-orange-800 text-orange-200 rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
            <button
              className="text-orange-500 font-bold text-xl absolute top-4 right-4"
              onClick={() => setOpenForm(null)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">
              Apply for {openForm.title}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Application submitted for ${openForm.title}`);
                setOpenForm(null);
              }}
            >
              <div className="mb-4">
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-orange-700 text-orange-100 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 bg-orange-700 text-orange-100 rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-2">Resume (optional)</label>
                <input
                  type="file"
                  className="w-full px-4 py-2 bg-orange-700 text-orange-100 rounded focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default JobOpportunities;
