import React from "react";
import { useState } from "react";
const Experience = () => {
  const [Experience] = useState([
    {
      company: "Freelance",
      role: "Freelance Web Developer",
      duration: "June 2026 - Present",
      description: [
        "Engineered custom full-stack MERN (MongoDB, Express, React, Node.js) applications tailored to client business requirements.",
        "Created responsive, high-fidelity frontend user interfaces with Tailwind CSS and modular React hooks, increasing user interaction by 25%.",
        "Developed and customized premium WordPress platforms and WooCommerce e-commerce stores with custom REST API integrations.",
        "Consulted directly with clients to translate designs (Figma/Adobe XD) into clean-code, search-engine-optimized web products."
      ],
    },
    {
      company: "Edge Forex",
      role: "Web Developer",
      duration: "Sept 2023 - April 2026",
      description: [
        "Developed and maintained WordPress-based websites for a fintech/market-data platform serving 50,000+ monthly users.",
        "Improved site performance — reduced LCP by 35% and CLS by 40% via lazy loading, script deferring, and asset compression.",
        "Built custom JavaScript/HTML/CSS widgets to fetch and display real-time market data via third-party APIs.",
        "Designed SEO-optimized, conversion-focused landing pages, improving organic search ranking.",
        "Conducted Lighthouse and Chrome DevTools audits to resolve Core Web Vitals issues.",
        "Managed Apache/HTTP servers for hosting and staging environments to ensure maximum uptime and secure configurations."
      ],
    },
    {
      company: "Vizy Print",
      role: "Intern",
      duration: "Jan 2021 - Dec 2022",
      description: [
        "Built responsive web pages using HTML5, CSS3, and JavaScript for multiple client projects.",
        "Customized UI components across 10+ web products, improving cross-browser compatibility."
      ],
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
              <ul className="list-disc pl-5 text-sm md:text-base text-gray-600 dark:text-gray-400 space-y-2 mt-2">
                {experience.description.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
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
