import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Name/Logo */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Ritik<span className="text-[#4960d4]">.</span>
        </h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
          <Link
            to="/#home"
            className="text-gray-600 dark:text-[#4960d4] hover:text-[#4960d4] dark:hover:text-white transition-colors font-medium text-sm md:text-base"
          >
            Home
          </Link>
          <Link
            to="/#projects"
            className="text-gray-600 dark:text-[#4960d4] hover:text-[#4960d4] dark:hover:text-white transition-colors font-medium text-sm md:text-base"
          >
            Projects
          </Link>
          <Link
            to="/#experience"
            className="text-gray-600 dark:text-[#4960d4] hover:text-[#4960d4] dark:hover:text-white transition-colors font-medium text-sm md:text-base"
          >
            Experience
          </Link>
        </nav>

        {/* Social Links */}
        <div className="flex gap-4 md:gap-6 mb-10">
          <a
            href="https://www.linkedin.com/in/ritikjain2112/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-gray-100 dark:bg-[#1a1c23] rounded-xl text-gray-700 dark:text-white hover:bg-[#4960d4] hover:text-white transition-all duration-300 shadow-sm"
          >
            <FaLinkedinIn className="text-lg md:text-xl" />
          </a>
          <a
            href="https://github.com/mrritikjain"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-gray-100 dark:bg-[#1a1c23] rounded-xl text-gray-700 dark:text-white hover:bg-[#4960d4] hover:text-white transition-all duration-300 shadow-sm"
          >
            <FaGithub className="text-lg md:text-xl" />
          </a>
          <a
            href="https://leetcode.com/u/jainritik0021/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-gray-100 dark:bg-[#1a1c23] rounded-xl text-gray-700 dark:text-white hover:bg-[#4960d4] hover:text-white transition-all duration-300 shadow-sm"
          >
            <SiLeetcode className="text-lg md:text-xl" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 dark:text-gray-500 text-xs md:text-sm">
          © Ritik Jain. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
