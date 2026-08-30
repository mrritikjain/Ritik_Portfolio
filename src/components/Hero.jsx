import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiGitBranchFill,
  RiWordpressFill,
} from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const Hero = () => {
  const ICONS = [
    { component: RiCss3Fill, name: "CSS3" },
    { component: RiHtml5Fill, name: "HTML5" },
    { component: RiJavascriptFill, name: "JavaScript" },
    { component: RiReactjsFill, name: "React" },
    { component: RiTailwindCssFill, name: "Tailwind CSS" },
    { component: RiGitBranchFill, name: "Git" },
    { component: FaNodeJs, name: "Node.js" },
    { component: SiExpress, name: "Express.js" },
    { component: RiWordpressFill, name: "WordPress" },
    { component: SiMongodb, name: "MongoDB" },
  ];
  const iconClass =
    "border border-gray-100 dark:border-gray-800 p-3 rounded-full cursor-pointer transition duration-300 hover:scale-110 hover:bg-[#4960d4] hover:border-[#4960d4] hover:text-[#fff] bg-white dark:bg-transparent shadow-sm hover:shadow-lg";

  return (
    <div
      id="home"
      className="flex flex-col justify-center gap-12 md:gap-20 min-h-[calc(100vh-80px)] w-full py-20 px-4 md:px-0"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
          <h4 className="text-base md:text-lg text-[#4960d4] font-bold mb-2 uppercase tracking-wide">
            Hello, I'm Ritik Jain
          </h4>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight my-4 text-gray-900 dark:text-white">
            Building digital <br className="hidden md:block"></br>experiences
            that <span className="text-[#4960d4]">matter.</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 md:mb-10 text-sm md:text-lg max-w-lg mx-auto md:mx-0">
            A passionate Web Developer based in Jaipur, specializing in creating
            high-performance, visually stunning websites and interactive web
            applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/#projects"
              className="px-8 py-3.5 bg-[#4960d4] text-white rounded-xl font-bold hover:bg-[#3b4ecc] transition-all shadow-lg hover:shadow-[#4960d44d] text-center"
            >
              View Projects
            </a>
            <a
              href="/Ritik_jain_resume.pdf"
              download="Ritik_Jain_Resume.pdf"
              className="px-8 py-3.5 border-2 border-[#4960d4] text-[#4960d4] rounded-xl font-bold hover:bg-[#4960d4] hover:text-white transition-all text-center"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
          <div className="bg-[#4960d4] relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden shadow-2xl ring-8 ring-[#4960d41a]">
            <img
              className="absolute w-full h-full object-cover"
              src="/mypic.png"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center md:justify-between items-center gap-5 md:gap-8 text-4xl md:text-5xl border-t border-gray-50 dark:border-gray-900 pt-12">
        {ICONS.map((item, i) => {
          const Icon = item.component;
          return (
            <div key={i} className="relative group/tooltip">
              <Icon className={iconClass} />
              <span className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 scale-95 opacity-0 group-hover/tooltip:-translate-y-1 group-hover/tooltip:scale-100 group-hover/tooltip:opacity-100 transition-all duration-200 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg border border-gray-800 dark:border-gray-200 z-30 whitespace-nowrap">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
