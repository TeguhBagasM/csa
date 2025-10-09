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
  const [modalProjects, setModalProjects] = useState(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
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

  // Fungsi untuk grouping projects berdasarkan team dan hasDetail: false
  const groupProjects = (projectsList) => {
    const grouped = {};

    projectsList.forEach((project) => {
      // Hanya group jika hasDetail: false dan ada team
      if (project.hasDetail === false && project.team) {
        // Normalisasi team (array atau string)
        const teamKey = Array.isArray(project.team) ? project.team.sort().join(", ") : project.team;

        const key = `${teamKey}|||${project.hasDetail}`;

        if (!grouped[key]) {
          grouped[key] = [];
        }
        grouped[key].push(project);
      }
    });

    // Pisahkan karya yang di-group dan yang tidak
    const groupedArray = [];
    const ungroupedProjects = [];

    projectsList.forEach((project) => {
      const teamKey = Array.isArray(project.team) ? project.team.sort().join(", ") : project.team;
      const key = `${teamKey}|||${project.hasDetail}`;

      // Jika bukan hasDetail: false dengan team, masukkan ke ungrouped
      if (!(project.hasDetail === false && project.team)) {
        ungroupedProjects.push({ ...project, isGroup: false });
      }
    });

    // Convert grouped ke array
    Object.values(grouped).forEach((group) => {
      if (group.length === 1) {
        groupedArray.push({ ...group[0], isGroup: false });
      } else {
        groupedArray.push({
          isGroup: true,
          projects: group,
          team: group[0].team,
          hasDetail: group[0].hasDetail,
          image: group[0].image,
          title: `${Array.isArray(group[0].team) ? group[0].team.join(", ") : group[0].team} - Karya`,
          techStack: [...new Set(group.flatMap((p) => p.techStack))],
          description: `${group.length} karya pemrograman`,
          year: group[0].year,
        });
      }
    });

    // Gabungkan ungrouped dan grouped, urutkan berdasarkan index asli
    return [...ungroupedProjects, ...groupedArray];
  };

  const groupedProjects = groupProjects(projects);

  const handleDetail = (projectId) => {
    navigate(`/karya-pemrograman/${projectId}`);
  };

  const handleProjectPress = (index) => {
    setActiveProjectIndex(activeProjectIndex === index ? null : index);
  };

  const openModal = (projectOrGroup) => {
    if (projectOrGroup.isGroup) {
      setModalProjects(projectOrGroup.projects);
    } else {
      setModalProjects([projectOrGroup]);
    }
    setActiveTabIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalProjects(null);
    setActiveTabIndex(0);
    document.body.style.overflow = "unset";
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && modalProjects) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [modalProjects]);

  const hasDetailPage = (project) => {
    return project.hasDetail !== false && project.id;
  };

  const displayedProjects = showAll
    ? groupedProjects
    : groupedProjects.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMoreProjects = groupedProjects.length > INITIAL_DISPLAY_COUNT;

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
          className="w-32 sm:w-40 md:w-72 mb-3 object-contain"
        />
        <p className="text-lg sm:text-xl font-semibold text-center">Data Tidak Tersedia</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((item, index) => {
          const isExpanded = expandedIndex === index;
          const isActive = activeProjectIndex === index;
          const isGroup = item.isGroup;

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
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out"
                />
                {/* Badge untuk group */}
                {isGroup && (
                  <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {item.projects.length} Karya
                  </div>
                )}
                <div
                  className={`
                    absolute inset-0 bg-black/50 flex flex-col 
                    items-center justify-center gap-4
                    transition-all duration-300 ease-in-out
                    ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-100%]"}
                    sm:group-hover:opacity-100 sm:group-hover:translate-y-0
                  `}
                >
                  {!isGroup && item.demoUrl && (
                    <a
                      href={item.demoUrl}
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
                  {!isGroup && item.isRepo && (
                    <a
                      href={item.isRepo}
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
                    {item.title}
                  </h3>
                  {!isGroup && hasDetailPage(item) ? (
                    <button
                      onClick={() => handleDetail(item.id)}
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
                      onClick={() => openModal(item)}
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
                  {item.techStack.map((tech, techIndex) => (
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
                  {isExpanded ? item.description : `${item.description.slice(0, 100)}...`}
                </p>
                {item.description.length > 100 && (
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
              : `Tampilkan Lebih Banyak (${groupedProjects.length - INITIAL_DISPLAY_COUNT} lainnya)`}
          </button>
        </div>
      )}

      {/* Modal dengan Tab Navigation */}
      {modalProjects && (
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

            {/* Tab Navigation - Only show if multiple projects */}
            {modalProjects.length > 1 && (
              <div className={`border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                <div className="flex overflow-x-auto p-4 gap-2">
                  {modalProjects.map((project, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTabIndex(idx)}
                      className={`
                        px-4 py-2 rounded-lg whitespace-nowrap transition-all cursor-pointer
                        ${
                          activeTabIndex === idx
                            ? darkMode
                              ? "bg-blue-600 text-white"
                              : "bg-blue-500 text-white"
                            : darkMode
                            ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }
                      `}
                    >
                      {project.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Modal content */}
            <div className="p-6">
              {modalProjects[activeTabIndex] && (
                <>
                  <div className="mb-6">
                    <img
                      src={modalProjects[activeTabIndex].image}
                      alt={modalProjects[activeTabIndex].title}
                      className="w-full h-auto max-h-96 object-contain rounded-lg"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap items-start gap-4">
                      <h2
                        className={`text-lg sm:text-xl md:text-2xl font-bold flex-1 ${
                          darkMode ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {modalProjects[activeTabIndex].title}
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {modalProjects[activeTabIndex].demoUrl && (
                          <a
                            href={modalProjects[activeTabIndex].demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg 
                            hover:bg-blue-600 transition-colors font-medium"
                          >
                            <FiExternalLink />
                            Demo
                          </a>
                        )}
                        {modalProjects[activeTabIndex].isRepo && (
                          <a
                            href={modalProjects[activeTabIndex].isRepo}
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

                    {modalProjects[activeTabIndex].team && (
                      <div
                        className={`flex items-center gap-2 ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <span className="font-medium">Tim:</span>
                        <span
                          className={`${darkMode ? "text-blue-300" : "text-blue-600"} font-medium`}
                        >
                          {Array.isArray(modalProjects[activeTabIndex].team)
                            ? modalProjects[activeTabIndex].team.join(", ")
                            : modalProjects[activeTabIndex].team}
                        </span>
                      </div>
                    )}

                    {modalProjects[activeTabIndex].timeline && (
                      <div
                        className={`flex items-center gap-2 ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <span className="font-medium">Timeline:</span>
                        <span
                          className={`${darkMode ? "text-green-300" : "text-green-600"} font-medium`}
                        >
                          {modalProjects[activeTabIndex].timeline}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-3">
                      {modalProjects[activeTabIndex].year && (
                        <span
                          className={`
                            text-sm px-3 py-1 rounded-full
                            ${
                              darkMode
                                ? "bg-purple-500/20 text-purple-300"
                                : "bg-purple-100 text-blue-600"
                            }
                          `}
                        >
                          {modalProjects[activeTabIndex].year}
                        </span>
                      )}

                      {modalProjects[activeTabIndex].status && (
                        <span
                          className={`
                            text-sm px-3 py-1 rounded-full
                            ${
                              modalProjects[activeTabIndex].status === "Completed"
                                ? darkMode
                                  ? "bg-green-500/20 text-green-300"
                                  : "bg-green-100 text-green-600"
                                : darkMode
                                ? "bg-yellow-500/20 text-yellow-300"
                                : "bg-yellow-100 text-yellow-600"
                            }
                          `}
                        >
                          {modalProjects[activeTabIndex].status}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {modalProjects[activeTabIndex].techStack.map((tech, techIndex) => (
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
                      {modalProjects[activeTabIndex].description}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPemrograman;
