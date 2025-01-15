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

  const toggleForm = (id) => {
    setOpenForm(openForm === id ? null : id);
  };

  return (
    <section className="bg-black py-10">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-orange-500">Job Opportunities</h1>
        <p className="text-orange-300 mt-2">
          Discover your next career move with our verified job listings.
        </p>
      </div>

      {/* Search Section */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search jobs by title, company, or location..."
          className="w-2/3 md:w-1/3 px-4 py-2 bg-black border border-orange-500 text-orange-300 rounded-l-lg focus:outline-none"
          onChange={handleSearch}
        />
        <button className="bg-orange-500 text-black px-6 py-2 rounded-r-lg hover:bg-orange-600">
          Search
        </button>
      </div>

      {/* Job Listings Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-orange-900 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition transform duration-300"
          >
            <h3 className="text-xl font-semibold text-orange-500">
              {job.title}
            </h3>
            <p className="text-orange-300">{job.company}</p>
            <p className="text-orange-400 text-sm">{job.location}</p>
            <p className="mt-4 text-orange-200">{job.description}</p>
            <ul className="mt-2 text-sm text-orange-300">
              <strong>Skills:</strong>
              {job.skills.map((skill, index) => (
                <li key={index}>- {skill}</li>
              ))}
            </ul>
            <button
              className="mt-4 bg-orange-500 text-black px-4 py-2 rounded-lg hover:bg-orange-600"
              onClick={() => toggleForm(job.id)}
            >
              Apply Now
            </button>

            {/* Application Form */}
            {openForm === job.id && (
              <form
                className="mt-4 bg-orange-800 p-4 rounded-lg text-orange-100"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Application submitted for ${job.title}`);
                }}
              >
                <h4 className="text-lg font-semibold">Apply for {job.title}</h4>
                <div className="mt-2">
                  <label className="block text-sm">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 bg-orange-700 border border-orange-600 rounded focus:outline-none"
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 py-2 bg-orange-700 border border-orange-600 rounded focus:outline-none"
                  />
                </div>
                <div className="mt-2">
                  <label className="block text-sm">Resume (optional)</label>
                  <input
                    type="file"
                    className="w-full px-3 py-2 bg-orange-700 border border-orange-600 rounded focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 bg-orange-600 text-black px-4 py-2 rounded-lg hover:bg-orange-700"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobOpportunities;
