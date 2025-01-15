import React, { useState } from "react";

const Opportunities = () => {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (index) => {
    setOpenPanel(openPanel === index ? null : index);
  };

  return (
    <section className="bg-brown-900 text-orange-200 py-16 px-6">
      <div className="container mx-auto">
        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-16">
          <div>
            <div className="text-4xl font-bold text-orange-400">4+</div>
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
          {[
            "Jobs Opportunities",
            "Internship Opportunities",
            "Career Opportunities",
            "Certification Opportunities",
            "Free Freelancing Course Opportunities",
            "Free Courses & Workshops",
          ].map((title, index) => (
            <div
              key={index}
              className="bg-orange-400 text-brown-900 rounded-lg shadow-lg"
            >
              <button
                onClick={() => togglePanel(index)}
                className="flex items-center justify-between w-full px-4 py-3 text-lg font-semibold"
              >
                <span>+ {title}</span>
              </button>
              {openPanel === index && (
                <div className="bg-orange-300 text-brown-800 px-4 py-2 text-sm">
                  Detailed information about {title.toLowerCase()} goes here.
                  You can customize this text as per your requirements.
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
