import React from "react";

const TutorCard = ({
  name,
  title,
  batchesCompleted,
  projects,
  experience,
  image,
}) => {
  return (
    <div className="bg-brown-500 rounded-md p-4 m-4 shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-bold text-yellow-500 mt-4 text-center">
        {name}
      </h2>
      <p className="text-sm text-yellow-500 text-center mt-2">{title}</p>
      <div className="text-center mt-4">
        <p className="text-sm text-yellow-500">
          {batchesCompleted} Batches Completed
        </p>
        <p className="text-sm text-yellow-500 mt-2">
          {projects}+ /Projects
        </p>
        <p className="text-sm text-yellow-500">{experience} years experience</p>
        <div className="flex justify-center items-center mt-2">
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
        </div>
      </div>
    </div>
  );
};

const TutorList = () => {
  const tutors = [
    {
      name: "Umair Farooqi",
      title: "WEB, APPS AND AI TUTOR",
      batchesCompleted: "70+",
      projects: "300+",
      experience: "7+",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwa - XNzY3fDB8fHx8fHwxNjYyMjY0NzY0&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Sara Khan",
      title: "DATA SCIENCE TUTOR",
      batchesCompleted: "50+",
      projects: "150+",
      experience: "5+",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaXNzY3Y3fDB8fHx8fHwxNjYyMjY0NzY0&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {tutors.map((tutor, index) => (
        <TutorCard key={index} {...tutor} />
      ))}
    </div>
  );
};

export default TutorList;