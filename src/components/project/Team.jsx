import React, { useEffect } from 'react';
import { FaFileAlt, FaLaptopCode, FaUserTie } from 'react-icons/fa';
import { FaCode, FaPalette, FaDatabase, FaUser } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const roleIcons = {
    "Lead Developer": <FaUserTie className="text-blue-500 text-xl" />,
    "UI/UX Designer": <FaPalette className="text-pink-500 text-xl" />,
    "Backend Developer": <FaDatabase className="text-orange-500 text-xl" />,
    "Front-End Developer": <FaLaptopCode className="text-green-500 text-xl" />,
    "Content Manager": <FaFileAlt className="text-yellow-500 text-xl" />,
};

const Team = ({ project, darkMode }) => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);
    return (
        <div className="space-y-8" data-aos="fade-right">
            <div className={`rounded-xl p-6 ${darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"}`}>
                <h2 className="text-2xl font-semibold mb-4">Tim Pengembang</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.team.map((member, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-4 ${darkMode ? "bg-gray-700" : "bg-gray-200"} px-6 py-4 rounded-lg shadow`}
                        >
                            {roleIcons[member.role] || <FaUser className="text-gray-500 text-xl" />}
                            <div>
                                <p className={`text-lg font-medium ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                                    {member.name}
                                </p>
                                <p className="text-sm text-gray-400">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Team;
