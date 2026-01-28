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
    "border p-3 rounded-full cursor-pointer transition duration-300 hover:scale-110 hover:bg-[#4960d4] hover:border-[#4960d4] hover:text-[#fff]";

  return (
    <div className="flex flex-col justify-center gap-20 h-[calc(100vh-40px)] w-full">
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <h4 className="text-lg theme-color font-semibold">
            Hello, I'm Ritik Jain
          </h4>
          <h2 className="text-6xl font-semibold leading-tight tracking-normal my-2">
            Building digital <br></br>experiences that{" "}
            <span className="theme-color">matter.</span>
          </h2>
          <p className="text-[var(--color-light-theme)] dark:text-[var(--color-dark-theme)] mb-10 text-md">
            A passionate Web Developer based in Jaipur, specializing in creating
            high-performance, visually stunning websites and interactive web
            applications.
          </p>

          <div className="flex gap-6 ">
            <a href="" className="theme-btn_Primary">
              View Projects
            </a>
            <a href="" className="theme-btn_Secondary">
              Download CV
            </a>
          </div>
        </div>
        <div className=" m-auto  w-1/3 flex justify-center">
          <div className="bg-[#4960d4] relative w-[320px] h-[320px] rounded-full overflow-hidden shadow-[var(--shadow)]">
            <img className="absolute" src="./public/mypic.png" alt="Profile" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-5  h-11 text-5xl">
        {ICONS.map((Icon, i) => (
          <Icon key={i} className={iconClass} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
