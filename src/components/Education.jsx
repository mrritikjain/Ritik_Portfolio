import React, { useState } from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const Education = () => {
  const [activeTab, setActiveTab] = useState("degree");

  const educationData = [
    {
      title: "Master's of Computer Application",
      institution: "Rajasthan Technical University",
      period: "2022 - 2024",
      icon: <FaGraduationCap />,
    },
    {
      title: "Bachelor of Computer Application",
      institution: "Mohan Lal Sukhadia University",
      period: "2018 - 2021",
      icon: <FaGraduationCap />,
    },
  ];

  const certificationData = [
    {
      title: "Tcs iON Career Edge - Interview & Job Readiness",
      institution: "Tcs iON",
      period: "Oct 2025",
      icon: <FaCertificate />,
    },
    {
      title: "Full Stack Web Development",
      institution: "GeeksforGeeks",
      period: "Jan 2026",
      icon: <FaCertificate />,
    },
  ];

  const currentData =
    activeTab === "degree" ? educationData : certificationData;

  return (
    <div
      id="education"
      className="flex flex-col justify-center items-center my-14 px-4"
    >
      <h3 className="text-4xl font-semibold leading-tight tracking-normal my-4 text-center">
        Education
      </h3>

      {/* Tabs */}
      <div className="flex gap-8 mb-10">
        <button
          onClick={() => setActiveTab("degree")}
          className={`text-lg font-medium cursor-pointer transition-colors duration-300 ${
            activeTab === "degree"
              ? "text-[#4960d4] border-b-2 border-[#4960d4]"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          Degree
        </button>
        <button
          onClick={() => setActiveTab("certificate")}
          className={`text-lg font-medium cursor-pointer transition-colors duration-300 ${
            activeTab === "certificate"
              ? "text-[#4960d4] border-b-2 border-[#4960d4]"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          Certification
        </button>
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl space-y-4">
        {currentData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 p-6 rounded-2xl bg-[#1a1c23] border border-gray-800 hover:border-[#4960d4] transition-all duration-300"
          >
            <div className="text-3xl text-[#4960d4] bg-[#4960d41a] p-4 rounded-xl">
              {item.icon}
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">{item.title}</h4>
              <p className="text-[#4960d4] font-medium">{item.institution}</p>
              <p className="text-sm text-gray-400 mt-1">{item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
