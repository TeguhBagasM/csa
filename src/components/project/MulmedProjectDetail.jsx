import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { projectDetailData } from "../../data/mulmed-detail-project";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../layouts/Footer";

const ProjectDetail = ({ darkMode }) => {
  const { id } = useParams();
  const project = projectDetailData[id];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link to="/projects" className="text-blue-500 hover:text-blue-600 flex items-center gap-2">
            <FiArrowLeft /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen mt-15 overflow-hidden ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/project"
          className={`inline-flex items-center gap-2 mb-8 ${
            darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-800"
          }`}
        >
          <FiArrowLeft /> Kembali
        </Link>

        {/* Header Section */}
        <div className="mb-12" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                darkMode ? "bg-blue-500/20 text-blue-300" : "bg-blue-100 text-blue-600"
              }`}
            >
              {project.projectDetails.client}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"
              }`}
            >
              {project.projectDetails.duration}
            </span>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600"
              >
                <FiExternalLink /> Lihat Desain
              </a>
            )}
          </div>
          <p className="text-lg leading-relaxed">{project.description}</p>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
          <div data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-6">Project Details</h2>
            <div className={`rounded-lg p-6 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
              <div className="grid gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Team</h3>
                  {project.projectDetails.team.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Role</h3>
                  <p>{project.projectDetails.role}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tools Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.projectDetails.tools.map((tool, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 rounded-full text-sm ${
                          darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Deliverables</h3>
                  <ul className="list-disc list-inside">
                    {project.projectDetails.deliverables.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div data-aos="fade-left">
            <h2 className="text-2xl font-bold mb-6">Features</h2>
            <div className="grid gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-6 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
                >
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6">Design Process</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {project.processSteps.map((step, index) => (
              <div key={index} className={`rounded-lg p-6 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
                <h3 className="font-semibold mb-2">{step.phase}</h3>
                <p className="text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6">Project Outcomes</h2>
          <div className={`rounded-lg p-6 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
            <ul className="list-disc list-inside space-y-2">
              {project.outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default ProjectDetail;
