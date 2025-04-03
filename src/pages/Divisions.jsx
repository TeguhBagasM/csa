import React, { useEffect, useState } from "react";
import { FaCode, FaPhotoVideo, FaArrowLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import logoPemrograman from "../assets/divisions/pemrograman.png";
import logoMulmed from "../assets/divisions/mulmed.png";

const Divisions = ({ darkMode }) => {
  const [openBook, setOpenBook] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
      once: false,
      easing: "ease-in-out-cubic",
    });

    const refreshAOS = () => AOS.refresh();
    window.addEventListener("scroll", refreshAOS);
    return () => window.removeEventListener("scroll", refreshAOS);
  }, []);

  const divisions = [
    {
      id: 1,
      name: "Divisi Pemrograman",
      iconSrc: logoPemrograman,
      description:
        "Divisi Pemrograman Web fokus pada pengembangan aplikasi berbasis web dengan teknologi terkini. Anggota akan belajar tentang front-end, back-end, dan fullstack development.",
      skills: ["HTML/CSS", "PHP", "JavaScript", "React", "Laravel", "Node.js"],
      color: "blue",
    },
    {
      id: 2,
      name: "Divisi Multimedia",
      iconSrc: logoMulmed,
      description:
        "Divisi Multi Media mengembangkan keterampilan desain grafis, editing video, animasi, dan konten visual. Anggota akan belajar membuat konten kreatif untuk berbagai platform.",
      skills: ["Desain Grafis", "Editing Video", "3D Animasi", "Fotografi"],
      color: "cyan",
    },
  ];

  const handleBookClick = (id) => {
    setOpenBook(openBook === id ? null : id);
  };

  return (
    <div className={`py-10 ${darkMode ? "bg-gray-900" : "bg-white"} transition-colors duration-500`}>
      <div className="container mx-auto px-4">
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className={`${darkMode ? "text-gray-100" : "text-gray-800"} 
            text-3xl font-bold md:text-4xl text-center mb-10 mt-5 relative`}
        >
          <span className="relative inline-block mb-5">Divisi CSA</span>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          {divisions.map((division) => (
            <div
              key={division.id}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={200 + division.id * 100}
              className="relative w-full md:w-96 h-[420px] [perspective:1000px]"
            >
              {/* Closed Book (Cover) */}
              <div
                onClick={() => handleBookClick(division.id)}
                className={`absolute inset-0 cursor-pointer transition-all duration-1000 ease-in-out origin-left
                  ${openBook === division.id
                    ? "[transform:rotateY(180deg)] opacity-0 pointer-events-none"
                    : "[transform:rotateY(0deg)]"
                  } 
                  ${darkMode
                    ? division.color === "blue"
                      ? "bg-blue-900"
                      : "bg-cyan-900"
                    : division.color === "blue"
                      ? "bg-blue-600"
                      : "bg-cyan-600"
                  } 
                  rounded-xl shadow-xl flex flex-col items-center justify-center px-8 py-10 
                  hover:shadow-2xl overflow-hidden group`}
                style={{
                  backfaceVisibility: "hidden",
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.1)",
                  transition:
                    "transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.5s ease 0.3s",
                }}
              >
                <div className="absolute w-40 h-40 -top-20 -left-20 bg-white opacity-5 rounded-full"></div>
                <div className="absolute w-40 h-40 -bottom-20 -right-20 bg-white opacity-5 rounded-full"></div>

                <div
                  className={`flex items-center justify-center mb-6 
                    transform transition-transform duration-300 group-hover:scale-110 `}
                >
                  <img
                    src={division.iconSrc}
                    alt={division.name}
                    className={` ${division.iconSrc === logoPemrograman
                      ? "w-36 h-36"
                      : division.iconSrc === logoMulmed
                        ? "w-28 h-28"
                        : "w-24 h-24"
                      }`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-white transform transition-transform duration-300 group-hover:scale-105">
                  {division.name}
                </h3>
                <p className="text-center text-white text-opacity-90 font-light mt-2">
                  (Klik untuk membuka)
                </p>

                {/* Book spine */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-6 rounded-l-xl 
                    ${division.color === "blue"
                      ? darkMode
                        ? "bg-blue-700"
                        : "bg-blue-500"
                      : darkMode
                        ? "bg-cyan-700"
                        : "bg-cyan-500"
                    }`}
                ></div>

                {/* Page edges */}
                <div className="absolute right-0 top-6 bottom-6 w-2 bg-white bg-opacity-20 rounded-r"></div>

                {/* Page lines */}
                <div className="absolute inset-y-10 right-4 w-1 bg-white bg-opacity-10"></div>
                <div className="absolute inset-y-12 right-6 w-1 bg-white bg-opacity-10"></div>
                <div className="absolute inset-y-14 right-8 w-1 bg-white bg-opacity-10"></div>
              </div>

              {/* Open Book (Content) */}
              <div
                className={`absolute inset-0 transition-all duration-1000 ease-in-out
                  ${openBook === division.id
                    ? "[transform:rotateY(0deg)] opacity-100"
                    : "[transform:rotateY(180deg)] opacity-0 pointer-events-none"
                  } 
                  ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"} 
                  rounded-xl shadow-2xl p-8 overflow-auto`}
                style={{
                  backfaceVisibility: "hidden",
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), -5px 5px 15px rgba(0, 0, 0, 0.05)",
                  transition:
                    "transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.5s ease 0.3s",
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.05)",
                }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenBook(null);
                  }}
                  className={`flex items-center space-x-2 mb-6 py-1 px-3 rounded-full cursor-pointer
                    ${division.color === "blue"
                      ? darkMode
                        ? "bg-blue-900 text-blue-300"
                        : "bg-blue-100 text-blue-600"
                      : darkMode
                        ? "bg-cyan-900 text-cyan-300"
                        : "bg-cyan-100 text-cyan-600"
                    } 
                    hover:bg-opacity-80 transition-colors duration-300 text-sm`}
                >
                  <FaArrowLeft size={12} />
                  <span>Kembali</span>
                </button>

                <h3
                  className={`text-2xl font-bold mb-6 
                    ${division.color === "blue" ? "text-blue-500" : "text-cyan-500"}`}
                >
                  {division.name}
                </h3>

                <div className="space-y-6">
                  <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                    {division.description}
                  </p>

                  <div className="mt-6">
                    <h4
                      className={`text-lg font-medium mb-3 
                      ${division.color === "blue" ? "text-blue-400" : "text-cyan-500"}`}
                    >
                      Keterampilan:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {division.skills.map((skill, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm 
                            ${division.color === "blue"
                              ? darkMode
                                ? "bg-blue-900 text-blue-200"
                                : "bg-blue-100 text-blue-700"
                              : darkMode
                                ? "bg-cyan-900 text-cyan-200"
                                : "bg-cyan-100 text-cyan-700"
                            }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`mt-6 p-4 rounded-lg 
                    ${division.color === "blue"
                        ? darkMode
                          ? "bg-blue-900/30"
                          : "bg-blue-100"
                        : darkMode
                          ? "bg-cyan-900/30"
                          : "bg-cyan-100"
                      }`}
                  >
                    <h4
                      className={`text-lg font-medium mb-2
                      ${division.color === "blue" ? "text-blue-400" : "text-cyan-500"}`}
                    >
                      Bergabung dengan CSA!
                    </h4>
                    <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-sm`}>
                      Dapatkan pengalaman dan keterampilan baru bersama mahasiswa kreatif.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Divisions;
