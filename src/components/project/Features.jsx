import React, { useEffect } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import AOS from "aos";
import "aos/dist/aos.css";

const Features = ({ project, darkMode }) => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);
    return (
        <div className="space-y-8" data-aos="fade-right">
            <div className={`rounded-xl p-6 ${darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"}`}>
                <h2 className="text-2xl font-semibold mb-4">Fitur Utama</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feat, featIndex) => (
                        <div key={featIndex} className={`flex items-center gap-2 ${darkMode ? "bg-gray-700" : "bg-gray-200"} px-4 sm:px-6 py-3 rounded-lg`}>
                            <FaCircleCheck className='text-green-500 text-base sm:text-lg md:text-xl flex-shrink-0' />
                            <p className={`text-sm sm:text-base md:text-lg ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                                {feat}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;