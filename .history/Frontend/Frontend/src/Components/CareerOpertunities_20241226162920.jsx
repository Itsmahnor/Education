// CareerOpportunities.js
import React from "react";
import "./CareerOpportunities.css"; // CSS file for styling (optional)

const CareerOpportunities = () => {
  // Data for career opportunities
  const opportunities = [
    { title: "Full Stack Developer", salary: "PKR:60,000/Month", icon: "🖥️" },
    { title: "Frontend Developer", salary: "PKR:10,0000/Month", icon: "💻" },
    { title: "Backend Developer", salary: "PKR:20,000/Month", icon: "🔧" },
    { title: "Database Developer", salary: "PKR:150,000/Month", icon: "📊" },
  ];

  return (
    <div className="career-section">
      <h2>Career Opportunities & Earning Potential After Completing the Course</h2>
      <div className="career-grid">
        {opportunities.map((opportunity, index) => (
          <div key={index} className="career-card">
            <span className="icon">{opportunity.icon}</span>
            <h3>{opportunity.title}</h3>
            <p>{opportunity.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerOpportunities;
