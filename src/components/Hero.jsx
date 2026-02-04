import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiGitBranchFill,
  RiWordpressFill,
  RiCodeSSlashFill,
} from "react-icons/ri";

const Hero = () => {
  const ICONS = [
    RiCss3Fill,
    RiHtml5Fill,
    RiJavascriptFill,
    RiReactjsFill,
    RiTailwindCssFill,
    RiGitBranchFill,
    RiWordpressFill,
    RiCodeSSlashFill,
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
        {ICONS.map((Icon, i) => (
          <Icon key={i} className={iconClass} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
