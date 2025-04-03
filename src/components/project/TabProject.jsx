import React, { useState, useEffect } from "react";
import ProjectMulmed from "./ProjectMulmed";
import ProjectPemrograman from "./ProjectPemrograman";
import AOS from "aos";
import "aos/dist/aos.css";

const TabProject = ({ darkMode }) => {
    const [activeTab, setActiveTab] = useState("programming");

    useEffect(() => {
        // Initialize AOS with configuration
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            offset: 50
        });

        // Force AOS refresh after a short delay to ensure content is loaded
        const refreshTimeout = setTimeout(() => {
            AOS.refresh();
        }, 100);

        // Cleanup timeout
        return () => clearTimeout(refreshTimeout);
    }, []);

    // Refresh AOS when tab changes
    useEffect(() => {
        AOS.refresh();
    }, [activeTab]);

    // Refresh AOS when dark mode changes
    useEffect(() => {
        AOS.refresh();
    }, [darkMode]);

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-transparent mt-18 sm:mt-16 lg:mt-20">
            <h1
                className={`text-3xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 ${darkMode ? "text-white" : "text-black"
                    }`}
                data-aos="fade-down"
            >
                Karya CSA
            </h1>

            <div
                className="flex gap-8 lg:gap-40 mb-6 justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <button
                    className={`
                        px-2 sm:px-6 py-2 font-medium relative
                        transition-all duration-300 text-sm cursor-pointer sm:text-base
                        ${activeTab === "programming"
                            ? "text-blue-500"
                            : darkMode
                                ? "text-gray-300 hover:text-blue-500"
                                : "text-gray-700 hover:text-blue-500"
                        }
                    `}
                    onClick={() => setActiveTab("programming")}
                >
                    Divisi Pemrograman
                    <div
                        className={`
                        absolute bottom-0 left-0 w-full h-0.5
                        transform origin-left transition-transform duration-300
                        bg-blue-500
                        ${activeTab === "programming" ? "scale-x-100" : "scale-x-0"}
                    `}
                    />
                </button>
                <button
                    className={`
                        px-2 sm:px-6 py-2 font-medium relative
                        transition-all duration-300 cursor-pointer text-sm sm:text-base
                        ${activeTab === "multimedia"
                            ? "text-blue-500"
                            : darkMode
                                ? "text-gray-300 hover:text-blue-500"
                                : "text-gray-700 hover:text-blue-500"
                        }
                    `}
                    onClick={() => setActiveTab("multimedia")}
                >
                    Divisi Multimedia
                    <div
                        className={`
                        absolute bottom-0 left-0 w-full h-0.5
                        transform origin-left transition-transform duration-300
                        bg-blue-500
                        ${activeTab === "multimedia" ? "scale-x-100" : "scale-x-0"}
                    `}
                    />
                </button>
            </div>

            <div className="mt-6 sm:mt-10">
                {activeTab === "programming" ? (
                    <ProjectPemrograman darkMode={darkMode} />
                ) : (
                    <ProjectMulmed darkMode={darkMode} />
                )}
            </div>
        </div>
    );
};

export default TabProject;