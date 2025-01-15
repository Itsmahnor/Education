import React from "react";

export const MainContent = ({ data }) => {
  return (
    <div>
      {/* Header Section */}
      <div className="breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col">
        <h1 className="text-orange-950 font-bold text-3xl">{data.header.title}</h1>
        <p className="w-[70vw] text-center mt-4 text-gray-700">
          {data.header.description.split(" ").map((word, index) => {
            const isHighlighted = data.header.highlightedTexts.includes(
              word.replace(/[^a-zA-Z]/g, "")
            );
            return isHighlighted ? (
              <span key={index} className="bg-orange-950 text-orange-500 p-1">
                {word}{" "}
              </span>
            ) : (
              word + " "
            );
          })}
        </p>
      </div>

      {/* Main Content Section */}
      <div className="content-wrapper mt-8 px-6">
        {/* What You Will Learn */}
        <div>
          <h2 className="text-orange-950 font-bold text-2xl mb-4">
            What You Will Learn
          </h2>
          <ul className="list-disc pl-6">
            {data.whatYouWillLearn.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Course Outline */}
        <div className="mt-8">
          <h2 className="text-orange-950 font-bold text-2xl mb-4">
            Course Outline
          </h2>
          {data.outline.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-orange-950 font-semibold text-xl">
                Month {section.month}: {section.title}
              </h3>
              <p className="mt-2 text-gray-700">
                <span className="font-semibold">{section.subTitle1}: </span>
                {section.subTitle1Content}
              </p>
              <p className="mt-2 text-gray-700">
                <span className="font-semibold">{section.subTitle2}: </span>
                {section.subTitle2Content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



