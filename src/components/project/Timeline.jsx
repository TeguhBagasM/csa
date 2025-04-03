import React, { useEffect } from 'react'
import { FaCalendar } from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";

const Timeline = ({ project, darkMode }) => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);
    return (
        <div className="space-y-8" data-aos="fade-right">
            <div className={`rounded-xl p-6 ${darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"}`}>
                <h2 className="text-2xl font-semibold mb-4">Timeline Pengembangan</h2>
                <div className="flex flex-col gap-4">
                    {project.timeline.map((time, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-4 ${darkMode ? "bg-gray-700" : "bg-gray-200"} px-6 py-4 rounded-lg shadow`}
                        >
                            <FaCalendar className="text-blue-500 text-xl" />
                            <div>
                                <p className={`text-lg font-medium ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                                    {time.date}
                                </p>
                                <p className="text-sm text-gray-400">{time.milestone}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Timeline