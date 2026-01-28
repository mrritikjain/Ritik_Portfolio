import React, { useState } from "react";

const Projects = () => {
  const [active, setActive] = useState("All");
  const [projects] = useState([
    {
      image: "../../public/ministryofmane.png",
      title: "Ministry Of Mane",
      desc: "Luxury haircare e-commerce platform built with WordPress and WooCommerce.",
      stack: ["WordPress", "WooCommerce", "Elementor"],
      url: "https://ministryofmane.com/",
      category: "Freelance",
    },
    {
      image: "../../public/arisecapital.png",
      title: "Arise Capital",
      desc: "Investment platform for institutional and HNW investors.",
      stack: ["WordPress", "Elementor"],
      url: "https://arisecapinvest.net/",
      category: "Freelance",
    },
    {
      image: "../../public/project1.png",
      title: "Task Management App",
      desc: "A powerful task manager with drag-and-drop functionality built with React.",
      stack: ["React", "Redux", "Node.js"],
      url: "#",
      category: "Learning",
    },
    {
      image: "../../public/gatsby.png",
      title: "Gatsby India",
      desc: "Curated grooming products platform for style-conscious men.",
      stack: ["HTML", "CSS", "JS"],
      url: "https://gatsbyindia.com/",
      category: "Freelance",
    },
    {
      image: "../../public/project2.png",
      title: "Weather Dashboard",
      desc: "Real-time weather application using OpenWeatherMap API.",
      stack: ["JavaScript", "Fetch API", "Tailwind"],
      url: "#",
      category: "Learning",
    },
    {
      image: "../../public/bigcatadventures.png",
      title: "Big Cat Adventures",
      desc: "Wildlife safari booking and exploration platform.",
      stack: ["WordPress", "CMS"],
      url: "https://bigcatsadventures.com/",
      category: "Freelance",
    },
  ]);
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-4xl font-semibold leading-tight tracking-normal my-2">
        Selected Projects
      </h3>
      <h4 className="text-lg theme-color font-semibold">Cases of my work</h4>
      <div className="flex flex-wrap justify-center gap-4 my-10">
        {["All", "Freelance", "Learning"].map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`px-8 py-2.5 rounded-full border border-[#4960d4] text-base font-medium transition-all duration-300 transform
              ${
                active === category
                  ? "bg-[#4960d4] text-white shadow-lg -translate-y-1 scale-105 ring-2 ring-[#4960d4] ring-offset-2"
                  : "bg-transparent text-[#4960d4] hover:bg-[#4960d4] hover:text-white hover:-translate-y-1 hover:shadow-md"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="w-full relative group pb-10">
        <div className="mt-10 flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 px-4 designer-scroll">
          {projects
            .filter(
              (project) => project.category === active || active === "All",
            )
            .map((project) => (
              <div
                key={project.title}
                className="min-w-[85vw] md:min-w-[500px] lg:min-w-[600px] snap-center bg-gray-50 dark:bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col group/card transition-all duration-300"
              >
                {/* Image Section - Top */}
                <div className="relative w-full h-48 md:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-[#4960d4]/10 dark:bg-[#4960d4]/20 mix-blend-overlay z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 grayscale-0 md:grayscale group-hover/card:grayscale-0"
                  />
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-black/80 text-[#4960d4] backdrop-blur-sm shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Section - Bottom */}
                <div className="p-6 flex flex-col justify-between flex-grow relative">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white leading-tight">
                        {project.title}
                      </h3>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-[#4960d4]/10 dark:bg-[#4960d4]/20 text-[#4960d4] hover:bg-[#4960d4] hover:text-white transition-all duration-300 group-hover/card:rotate-45"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h14M12 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-semibold px-2 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-transparent group-hover/card:border-[#4960d4]/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
