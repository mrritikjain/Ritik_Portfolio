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
    <div className="flex flex-col justify-center items-center my-14">
      <h3 className="text-4xl font-semibold leading-tight tracking-normal my-2">
        Work Experience
      </h3>
      <div>
        {Experience.map((experience) => (
          <div className="flex justify-between my-14" key={experience.company}>
            <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-4 relative">
              <h3 className="text-2xl font-semibold leading-tight tracking-normal my-2 exp before:content-[''] before:absolute before:left-[-9px] before:top-0 before:w-4 before:h-4 before:bg-[#4960d4] before:rounded-full">
                {experience.company}
              </h3>
              <h4 className="text-lg theme-color font-semibold">
                {experience.role}
              </h4>
              <p className="text-base text-gray-500 dark:text-gray-400 font-semibold exp">
                {experience.description}
              </p>
            </div>

            <p className="text-base text-gray-500 dark:text-gray-600 font-semibold">
              {experience.duration}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
