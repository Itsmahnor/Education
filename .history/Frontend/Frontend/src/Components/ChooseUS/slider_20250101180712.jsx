import React, { useState } from "react";

const Opportunities = () => {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (index) => {
    setOpenPanel(openPanel === index ? null : index);
  };

  const panelData = [
    {
      title: "Jobs Opportunities",
      content:
        "Explore job openings in various industries and connect with potential employers through our network.",
    },
    {
      title: "Internship Opportunities",
      content:
        "Find internships that match your skill set and gain hands-on experience in your desired field.",
    },
    {
      title: "Career Opportunities",
      content:
        "Receive career guidance and discover pathways to achieve your professional goals.",
    },
    {
      title: "Certification Opportunities",
      content:
        "Earn industry-recognized certifications that boost your credibility and expertise.",
    },
    {
      title: "Free Freelancing Course Opportunities",
      content:
        "Enroll in our free freelancing courses to learn skills that help you thrive in the freelance market.",
    },
    {
      title: "Free Courses & Workshops",
      content:
        "Attend free courses and workshops conducted by industry experts to enhance your knowledge.",
    },
  ];

  return (
    <section className="bg-orange-950 text-orange-500 py-16 px-6">
      <div className="container mx-auto">
        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-16">
          <div>
            <div className="text-4xl font-bold text-orange-500">4+</div>
            <p className="mt-2">Centres</p>
            <p className="text-sm text-orange-100">
              With over 4 local training centres worldwide.
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-400">20+</div>
            <p className="mt-2">Courses</p>
            <p className="text-sm text-orange-100">
              Our unique training, based on practical activity.
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-400">7</div>
            <p className="mt-2">Years</p>
            <p className="text-sm text-orange-100">
              Our heritage and longevity as a leading institute.
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-400">30K+</div>
            <p className="mt-2">Students</p>
            <p className="text-sm text-orange-100">
              Our heritage and longevity with over 30,000 students.
            </p>
          </div>
        </div>

        {/* Opportunities Section */}
        <div className="space-y-4">
          {panelData.map((panel, index) => (
            <div
              key={index}
              className="bg-orange-400 text-brown-900 rounded-lg shadow-lg"
            >
              <button
                onClick={() => togglePanel(index)}
                className="flex items-center justify-between w-full px-4 py-3 text-lg font-semibold"
              >
                <span>+ {panel.title}</span>
              </button>
              {openPanel === index && (
                <div className="bg-orange-300 text-brown-800 px-4 py-2 text-sm">
                  {panel.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
