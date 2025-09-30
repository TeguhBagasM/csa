import React, { useState, useEffect } from "react";
import dataPemrograman from "../../data/projects";
import Nodata from "../../assets/nodata.png";
import { FiExternalLink, FiX } from "react-icons/fi";
import { FaGithub, FaRegEye, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectPemrograman = ({ darkMode }) => {
  const projects = dataPemrograman.programming || [];
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const [modalProject, setModalProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const INITIAL_DISPLAY_COUNT = 6;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      offset: 50,
    });

    const refreshTimeout = setTimeout(() => {
      AOS.refresh();
    }, 100);

    return () => clearTimeout(refreshTimeout);
  }, []);

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

  const openModal = (project) => {
    setModalProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalProject(null);
    document.body.style.overflow = "unset";
  };

  // Close modal when clicking outside
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && modalProject) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [modalProject]);

  // Fungsi untuk mengecek apakah project memiliki halaman detail
  const hasDetailPage = (project) => {
    // Jika hasDetail tidak didefinisikan, default ke true (ada tombol detail)
    // Jika hasDetail: false, maka tidak ada tombol detail
    return project.hasDetail !== false && project.id;
  };

  // Tentukan project yang akan ditampilkan
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMoreProjects = projects.length > INITIAL_DISPLAY_COUNT;

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
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project, index) => {
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
                  {project.isRepo && (
                    <a
                      href={project.isRepo}
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
                    className={`text-xl font-bold mb-2 ${
                      darkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {project.title}
                  </h3>
                  {/* Tombol detail atau modal berdasarkan hasDetailPage */}
                  {hasDetailPage(project) ? (
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
                  ) : (
                    <button
                      onClick={() => openModal(project)}
                      className={`${
                        darkMode
                          ? "text-gray-400 hover:bg-gray-600 hover:text-white"
                          : "text-gray-500 hover:bg-gray-200 hover:text-black"
                      } px-3 py-1 rounded text-sm flex cursor-pointer items-center gap-1`}
                    >
                      <FaEye /> Lihat
                    </button>
                  )}
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

      {/* Tombol Tampilkan Lebih Banyak / Sembunyikan */}
      {hasMoreProjects && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`
              px-6 py-3 rounded-lg font-medium cursor-pointer transition-all duration-300
              ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }
              shadow-md hover:shadow-lg transform hover:scale-105
            `}
          >
            {showAll
              ? "Sembunyikan"
              : `Tampilkan Lebih Banyak (${projects.length - INITIAL_DISPLAY_COUNT} lainnya)`}
          </button>
        </div>
      )}

      {/* Modal untuk menampilkan project detail */}
      {modalProject && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={handleModalClick}
        >
          <div
            className={`
              relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg
              ${darkMode ? "bg-gray-800" : "bg-white"}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className={`
                absolute cursor-pointer top-4 right-4 z-10 p-2 rounded-full
                ${
                  darkMode
                    ? "bg-gray-700 text-white hover:bg-gray-600"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }
                shadow-lg transition-colors
              `}
            >
              <FiX className="text-xl" />
            </button>

            {/* Modal content */}
            <div className="p-6">
              {/* Image */}
              <div className="mb-6">
                <img
                  src={modalProject.image}
                  alt={modalProject.title}
                  className="w-full h-auto max-h-96 object-contain rounded-lg"
                />
              </div>

              {/* Project info */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-start gap-4">
                  <h2
                    className={`text-lg sm:text-xl md:text-2xl font-bold flex-1 ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {modalProject.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {modalProject.demoUrl && (
                      <a
                        href={modalProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg 
                        hover:bg-blue-600 transition-colors font-medium"
                      >
                        <FiExternalLink />
                        Demo
                      </a>
                    )}
                    {modalProject.isRepo && (
                      <a
                        href={modalProject.isRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg 
                        hover:bg-gray-600 transition-colors font-medium"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* Team info */}
                {modalProject.team && (
                  <div
                    className={`flex items-center gap-2 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <span className="font-medium">Tim:</span>
                    <span className={`${darkMode ? "text-blue-300" : "text-blue-600"} font-medium`}>
                      {Array.isArray(modalProject.team)
                        ? modalProject.team.join(", ")
                        : modalProject.team}
                    </span>
                  </div>
                )}

                {/* Timeline info */}
                {modalProject.timeline && (
                  <div
                    className={`flex items-center gap-2 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <span className="font-medium">Timeline:</span>
                    <span className={`${darkMode ? "text-green-300" : "text-green-600"} font-medium`}>
                      {modalProject.timeline}
                    </span>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-3">
                  {modalProject.year && (
                    <span
                      className={`
                        text-sm px-3 py-1 rounded-full
                        ${
                          darkMode ? "bg-purple-500/20 text-purple-300" : "bg-purple-100 text-blue-600"
                        }
                      `}
                    >
                      {modalProject.year}
                    </span>
                  )}

                  {modalProject.status && (
                    <span
                      className={`
                        text-sm px-3 py-1 rounded-full
                        ${
                          modalProject.status === "Completed"
                            ? darkMode
                              ? "bg-green-500/20 text-green-300"
                              : "bg-green-100 text-green-600"
                            : darkMode
                            ? "bg-yellow-500/20 text-yellow-300"
                            : "bg-yellow-100 text-yellow-600"
                        }
                      `}
                    >
                      {modalProject.status}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {modalProject.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`
                        text-sm px-3 py-1 rounded-full
                        ${darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"}
                      `}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p
                  className={`text-base leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {modalProject.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPemrograman;
