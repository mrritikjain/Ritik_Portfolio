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
      category: "Work Experience",
    },
    {
      image: "../../public/arisecapital.png",
      title: "Arise Capital",
      desc: "Investment platform for institutional and HNW investors.",
      stack: ["WordPress", "Elementor"],
      url: "https://arisecapinvest.net/",
      category: "Work Experience",
    },
    {
      image: "../../public/alltimehealthclub.png",
      title: "All Time Health Club",
      desc: "A modern fitness club website developed using WordPress and Elementor",
      stack: ["WordPress", "Elementor"],
      url: "https://alltimehealthclub.com/",
      category: "Learning",
    },
    {
      image: "../../public/gatsby.png",
      title: "Gatsby India",
      desc: "Curated grooming products platform for style-conscious men.",
      stack: ["HTML", "CSS", "JS"],
      url: "https://gatsbyindia.com/",
      category: "Work Experience",
    },
    {
      image: "../../public/Focus_analytics.png",
      title: "Focus Analytics",
      desc: "A data analytics dashboard built with modern web technologies, visualizing key metrics and performance insights.",
      stack: ["React", "Custom Hook", "CSS"],
      url: "https://focusanalytics.netlify.app/",
      category: "Learning",
    },
    {
      image: "../../public/job_tracker.png",
      title: "Job Tracker",
      desc: "A JavaScript-powered job tracker app that helps users organize and manage job applications efficiently.",
      stack: ["HTML", "CSS", "JS"],
      url: "https://jobtrackerjs.netlify.app/",
      category: "Learning",
    },
    {
      image: "../../public/vincent.png",
      title: "Vincent Infratech",
      desc: "A WordPress website for an infrastructure services company, designed with industry-focused content.",
      stack: ["WordPress", "Elementor"],
      url: "https://vincentinfratech.com/",
      category: "Work Experience",
    },
    {
      image: "../../public/velnourishpharma.png",
      title: "Velnourish Pharma",
      desc: "A professional WordPress site for a pharmaceutical business, showcasing products, company information.",
      stack: ["WordPress", "Elementor"],
      url: "https://velnourishpharma.com/",
      category: "Learning",
    },
  ]);
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center py-14 overflow-hidden w-full"
    >
      <h3 className="text-4xl font-semibold leading-tight tracking-normal my-4 text-center text-gray-900 dark:text-white px-4">
        Selected Projects
      </h3>
      <h4 className="text-lg theme-color font-semibold mb-8 text-center px-4">
        Cases of my work
      </h4>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 px-4">
        {["All", "Work Experience", "Learning"].map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`px-6 md:px-8 py-2 md:py-2.5 rounded-full border border-[#4960d4] text-sm md:text-base font-medium transition-all duration-300 transform cursor-pointer
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
        <div className="mt-10 flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-10 pb-8 px-4 md:px-0 designer-scroll scrollbar-hide">
          {projects
            .filter(
              (project) => project.category === active || active === "All",
            )
            .map((project) => (
              <div
                key={project.title}
                className="min-w-[85vw] md:min-w-[65%] w-[85vw] md:w-[65%] h-auto snap-start bg-white dark:bg-[#1a1c23] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col group/card transition-all duration-300 flex-shrink-0"
              >
                {/* Image Section */}
                <div className="relative w-full h-48 md:h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-[#4960d4]/5 dark:bg-[#4960d4]/10 mix-blend-overlay z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 md:grayscale group-hover/card:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-black/80 text-[#4960d4] backdrop-blur-sm shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 w-full flex flex-col justify-between grow">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                        {project.title}
                      </h3>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-[#4960d4]/10 dark:bg-[#4960d4]/20 text-[#4960d4] hover:bg-[#4960d4] hover:text-white transition-all duration-300 group-hover/card:rotate-45 shadow-sm"
                      >
                        <svg
                          className="w-5 h-5 md:w-6 md:h-6"
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

                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base lg:text-lg mb-6 line-clamp-3 md:line-clamp-none">
                      {project.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] md:text-xs font-semibold px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-transparent group-hover/card:border-[#4960d4]/30 transition-all"
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
