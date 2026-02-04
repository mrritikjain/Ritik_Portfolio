import React from "react";
import { useState } from "react";
const Experience = () => {
  const [Experience] = useState([
    {
      company: "Edge Forex",
      role: "Frontend Developer",
      duration: "Sept 2023 - Present",
      description:
        "Developed core frontend components for financial platforms, ensuring high performance and responsive design.",
    },
    {
      company: "Vizy Print",
      role: "Web Developer Intern",
      duration: "May 2021 - Jan 2022",
      description:
        "Assisted in building responsive websites and learning modern web development workflows.",
    },
  ]);
  return (
    <div
      id="experience"
      className="flex flex-col justify-center items-center my-14 px-4 md:px-8 max-w-6xl mx-auto"
    >
      <h3 className="text-4xl font-semibold leading-tight tracking-normal my-4 text-center text-gray-900 dark:text-white">
        Work Experience
      </h3>
      <div className="w-full max-w-4xl">
        {Experience.map((experience) => (
          <div
            className="flex flex-col md:flex-row justify-between my-12 gap-4"
            key={experience.company}
          >
            <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-6 relative">
              <h3 className="text-2xl font-semibold leading-tight tracking-normal mb-2 text-gray-900 dark:text-white before:content-[''] before:absolute before:left-[-9px] before:top-2 before:w-4 before:h-4 before:bg-[#4960d4] before:rounded-full">
                {experience.company}
              </h3>
              <h4 className="text-lg theme-color font-semibold mb-2">
                {experience.role}
              </h4>
              <p className="text-base text-gray-600 dark:text-gray-400">
                {experience.description}
              </p>
            </div>

            <p className="text-base text-gray-500 dark:text-gray-500 font-medium whitespace-nowrap">
              {experience.duration}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
