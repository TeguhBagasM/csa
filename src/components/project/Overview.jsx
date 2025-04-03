import React, { useEffect } from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import AOS from "aos";
import "aos/dist/aos.css";

const Overview = ({ project, darkMode }) => {

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <>
            <div className="space-y-8" data-aos="fade-right">
                <div
                    className={`rounded-xl p-6 ${darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"}`}
                >
                    <h2 className="text-2xl font-semibold mb-4">Tentang Proyek</h2>
                    <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        {project.description}
                    </p>
                </div>
            </div>
            <div className="space-y-8 mt-5" data-aos="fade-right">
                <div
                    className={`rounded-xl p-6 ${darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"}`}
                >
                    <h2 className="text-2xl font-semibold mb-4">Challanges & Solutions</h2>
                    {project.challenges.map((chall, challIndex) => (
                        <div
                            key={challIndex}
                            className='flex items-start gap-2 mb-3'
                        >
                            <FaCircleCheck className='text-green-500 text-base sm:text-lg md:text-xl lg:text-2xl flex-shrink-0 mt-1' />
                            <p className={`text-base sm:text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                {chall}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Overview