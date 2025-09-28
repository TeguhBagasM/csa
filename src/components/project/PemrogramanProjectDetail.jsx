import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { FaGithub, FaCalendarAlt, FaUsers, FaLaptopCode } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BsStack } from "react-icons/bs";
import projectsData from "../../data/pemrograman-project-detail";
import Overview from "./Overview";
import Features from "./Features";
import Team from "./Team";
import Timeline from "./Timeline";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../layouts/Footer";

const ProjectDetail = ({ darkMode }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
    });

    window.addEventListener("scroll", () => {
      AOS.refresh();
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [darkMode]);

  const project = projectsData[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  const MobileView = () => (
    <div className="block md:hidden w-full min-h-screenpt-20 px-4 mt-24">
      <button
        onClick={() => navigate("/karya")}
        data-aos="fade-right"
        className={`mb-4 flex items-center gap-2 transition-colors ${
          darkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
        }`}
      >
        <IoArrowBack className="text-xl" />
        <span>Kembali</span>
      </button>

      <div className="relative h-64 rounded-xl overflow-hidden mb-6">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-100 mb-3">{project.title}</h1>
            <div className="flex flex-col gap-2">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-4 py-2 rounded-full font-medium"
              >
                <FiExternalLink className="text-lg" />
                Live Demo
              </a>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full font-medium ${
                    darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-800 text-gray-100"
                  }`}
                >
                  <FaGithub className="text-lg" />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex overflow-x-auto gap-4 mb-6 border-b scrollbar-hide ${
          darkMode ? "border-gray-800" : ""
        }`}
        style={{
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* IE and Edge */,
          WebkitOverflowScrolling: "touch",
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {["overview", "features", "team", "timeline"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 font-medium capitalize whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mb-6">
        {activeTab === "overview" && <Overview project={project} darkMode={darkMode} />}
        {activeTab === "features" && <Features project={project} darkMode={darkMode} />}
        {activeTab === "team" && <Team project={project} darkMode={darkMode} />}
        {activeTab === "timeline" && <Timeline project={project} darkMode={darkMode} />}
      </div>
      <div className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} rounded-xl p-4 mb-6`}>
        <h3
          className={`text-lg font-semibold mb-3 flex items-center gap-2 ${
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <BsStack className="text-blue-500" />
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm ${
                darkMode ? "bg-blue-500/20 text-blue-300" : "bg-blue-100 text-blue-600"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} rounded-xl p-4 mb-6`}>
        <h3 className={`text-lg font-semibold mb-3 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
          Quick Stats
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <FaUsers className="text-blue-500 text-xl" />
            <div>
              <p className={`text-sm ${darkMode ? "text-gray-100" : "text-gray-900"}`}>Team Size</p>
              <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                {project.team.length} Members
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaLaptopCode className="text-blue-500 text-xl" />
            <div>
              <p className={`text-sm ${darkMode ? "text-gray-100" : "text-gray-900"}`}>Features</p>
              <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                {project.features.length} Core Features
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DesktopView = () => (
    <div className="hidden md:block w-full min-h-screen pt-34 mt-6 px-4 relative overflow-hidden">
      <button
        onClick={() => navigate("/karya")}
        data-aos="fade-right"
        className={`absolute top-20 cursor-pointer left-8 flex items-center gap-2 transition-colors ${
          darkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
        }`}
      >
        <IoArrowBack className="text-xl" />
        <span>Kembali</span>
      </button>

      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-100 mb-4">{project.title}</h1>
              <div className="flex gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-100 text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  <FiExternalLink className="text-lg" />
                  Live Demo
                </a>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-colors ${
                      darkMode
                        ? "bg-gray-800 text-gray-100 hover:bg-gray-800"
                        : "bg-gray-800 text-gray-100 hover:bg-gray-800"
                    }`}
                  >
                    <FaGithub className="text-lg" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex gap-4 mb-8 border-b ${darkMode ? "border-gray-800" : ""}`}
          data-aos="fade-up"
        >
          {["overview", "features", "team", "timeline"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium capitalize transition-colors cursor-pointer ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : `${
                      darkMode
                        ? "text-gray-400 hover:text-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                    }`
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2" data-aos="fade-right">
            {activeTab === "overview" && <Overview project={project} darkMode={darkMode} />}
            {activeTab === "features" && <Features project={project} darkMode={darkMode} />}
            {activeTab === "team" && <Team project={project} darkMode={darkMode} />}
            {activeTab === "timeline" && <Timeline project={project} darkMode={darkMode} />}
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <div className={`rounded-xl p-6 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
              <h3
                className={`text-xl font-semibold mb-4 flex items-center gap-2 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                <BsStack className="text-blue-500" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} rounded-xl p-6`}
              data-aos="fade-left"
            >
              <h3
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaUsers className="text-blue-500 text-xl" />
                  <div>
                    <p className={`text-sm ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
                      Team Size
                    </p>
                    <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                      {project.team.length} Members
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaLaptopCode className="text-blue-500 text-xl" />
                  <div>
                    <p className={`text-sm ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
                      Features
                    </p>
                    <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                      {project.features.length} Core Features
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <MobileView />
      <DesktopView />
      <Footer darkMode={darkMode} />
    </>
  );
};

export default ProjectDetail;
