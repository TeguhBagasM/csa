import React, { useState, useEffect } from "react";
import dataPemrograman from "../../data/projects";
import Nodata from "../../assets/nodata.png";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub, FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectPemrograman = ({ darkMode }) => {
  const projects = dataPemrograman.programming || [];
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS when component mounts
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 50,
    });

    // Force refresh after a short delay to ensure content is loaded
    const refreshTimeout = setTimeout(() => {
      AOS.refresh();
    }, 100);

    // Cleanup
    return () => clearTimeout(refreshTimeout);
  }, []);

  // Refresh AOS when projects data changes
  useEffect(() => {
    if (projects.length > 0) {
      AOS.refresh();
    }
  }, [projects]);

  useEffect(() => {
    AOS.refresh();
  }, [darkMode]);

  const handleDetail = (projectId) => {
    navigate(`/karya-pemrograman/${projectId}`);
  };

  const handleProjectPress = (index) => {
    setActiveProjectIndex(activeProjectIndex === index ? null : index);
  };

  if (projects.length === 0) {
    return (
      <div
        className={`
        flex flex-col justify-center items-center h-48 sm:h-64 rounded-lg p-4 
        ${darkMode ? "bg-transparent text-gray-200" : "bg-white text-gray-800 border-gray-600"}
        ${darkMode ? "shadow-lg shadow-gray-900/50" : "shadow-md"}
      `}
      >
        <img
          src={Nodata}
          alt="No Data Available"
          className="w-24 sm:w-32 md:w-40 mb-3 object-contain"
        />
        <p className="text-lg sm:text-xl font-semibold text-center">Data Tidak Tersedia</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => {
        const isExpanded = expandedIndex === index;
        const isActive = activeProjectIndex === index;

        return (
          <div
            key={index}
            className={`
              relative rounded-lg overflow-hidden border
              ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
              transition-all duration-300 ease-in-out shadow-md
            `}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div
              className="relative"
              onClick={() => handleProjectPress(index)}
              onMouseEnter={() => setActiveProjectIndex(index)}
              onMouseLeave={() => setActiveProjectIndex(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out"
              />
              <div
                className={`
                  absolute inset-0 bg-black/50 flex flex-col 
                  items-center justify-center gap-4
                  transition-all duration-300 ease-in-out
                  ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-100%]"}
                  sm:group-hover:opacity-100 sm:group-hover:translate-y-0
                `}
              >
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg flex items-center gap-2 text-gray-100 px-4 
                    rounded-full font-medium transition-colors hover:text-blue-500
                    active:text-blue-600"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink className="text-lg" />
                    Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg flex items-center gap-2 text-gray-100 px-4
                    rounded-full font-medium transition-colors hover:text-blue-500
                    active:text-blue-600"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="text-lg" />
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="px-4 py-6">
              <div className="flex justify-between items-start mb-3">
                <h3
                  className={`text-xl font-bold mb-2 ${darkMode ? "text-gray-200" : "text-gray-800"}`}
                >
                  {project.title}
                </h3>
                <button
                  onClick={() => handleDetail(project.id)}
                  className={`${
                    darkMode
                      ? "text-gray-400 hover:bg-gray-600 hover:text-white"
                      : "text-gray-500 hover:bg-gray-200 hover:text-black"
                  } px-3 py-1 rounded text-sm flex cursor-pointer items-center gap-1`}
                >
                  <FaRegEye /> Detail
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`
                      text-xs px-2 py-1 rounded-full
                      ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"}
                    `}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {isExpanded ? project.description : `${project.description.slice(0, 100)}...`}
              </p>
              {project.description.length > 100 && (
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="text-blue-500 text-sm mt-2 cursor-pointer"
                >
                  {isExpanded ? "Sembunyikan" : "Baca selengkapnya"}
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectPemrograman;
