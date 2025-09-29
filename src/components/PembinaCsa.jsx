import React, { useState, useEffect } from "react";
import { FaLinkedin, FaEnvelope, FaGraduationCap, FaAward, FaUsers, FaUser } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Pembina from "../assets/pembina.jpeg";
import Founders from "../assets/founders.png";

const PembinaFounder = ({ darkMode = false }) => {
  const [activeSection, setActiveSection] = useState("pembina");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pembinaData = {
    id: 1,
    name: "Adi Raharjo, S.Kom., M.M",
    position: "IT MANAGER",
    image: Pembina,
    bio: "Seorang akademisi berpengalaman dengan fokus pada pengembangan software dan teknologi informasi.",
    education: "S2 Magister Manajemen - Universitas Pendidikan Indonesia",
    experience: "15+ tahun",
    achievements: ["Research Excellence Award", "Community Service Recognition"],
    contact: {
      linkedin: "https://www.linkedin.com/in/adi-raharjo-1761ba67/",
    },
  };

  const foundersData = [
    {
      id: 1,
      name: "Diansyah, S.Kom",
      position: "Chief Executive Officer",
      image: Founders,
    },
    {
      id: 2,
      name: "Febri Ridwansyah, S.Kom",
      position: "HR Generalist",
      image: Founders,
    },
    {
      id: 3,
      name: "Kang Ilman",
      position: "-",
      image: Founders,
    },
    {
      id: 4,
      name: "Kang Fauzi",
      position: "-",
      image: Founders,
    },
    {
      id: 5,
      name: "Teh Yanti",
      position: "-",
      image: Founders,
    },
  ];

  const PembinaDetail = () => (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Profile Card */}
        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-2xl shadow-xl p-8 transition-all duration-500 group`}
          data-aos="fade-right"
        >
          <div className="text-center">
            <div className="relative mx-auto w-40 h-40 mb-6">
              <img
                src={pembinaData.image}
                alt={pembinaData.name}
                className="w-full h-full object-cover rounded-full shadow-lg ring-4 ring-blue-500/20 transition-all duration-500 group-hover:ring-blue-500/40"
              />
            </div>
            <h2 className={`text-3xl font-bold mb-2 ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
              {pembinaData.name}
            </h2>
            <p className="text-blue-500 text-xl font-medium mb-4">{pembinaData.position}</p>
          </div>
        </div>

        {/* Detail Information */}
        <div
          className={`p-6 rounded-xl shadow-lg ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
          }`}
          data-aos="fade-left"
        >
          {/* Bio */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-blue-500">Tentang</h4>
            <p className={`leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              {pembinaData.bio}
            </p>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
              <div className="flex items-center mb-2">
                <FaGraduationCap className="text-blue-500 mr-2" />
                <h5 className="font-semibold">Pendidikan</h5>
              </div>
              <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {pembinaData.education}
              </p>
            </div>
            <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
              <div className="flex items-center mb-2">
                <FaAward className="text-blue-500 mr-2" />
                <h5 className="font-semibold">Pengalaman</h5>
              </div>
              <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {pembinaData.experience}
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-wrap gap-3">
            <a
              href={pembinaData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              <FaLinkedin className="mr-2" size={16} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const FoundersGrid = () => (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foundersData.map((founder, index) => (
          <div
            key={founder.id}
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-2xl shadow-lg p-8 text-center transition-all duration-500 hover:shadow-xl`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Foto Founder */}
            <div className="relative mx-auto w-32 h-32 mb-6">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>

            {/* Nama Founder */}
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
              {founder.name}
            </h3>

            {/* Posisi/Jabatan */}
            <p className={`text-base font-medium ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
              {founder.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      className={`min-h-screen py-12 transition-all duration-500 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
      data-aos="fade"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-14 lg:px-14 xl:px-20">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1
            className={`text-3xl font-bold md:text-4xl mb-4 ${
              darkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Pembina & Founder CSA
          </h1>
          <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}>
            Bertemu dengan para mentor dan visioner yang membangun dan membimbing perjalanan Creative
            Student Association
          </p>
        </div>

        {/* Section Navigation */}
        <div className="flex justify-center mb-12" data-aos="fade-up">
          <div className={`flex rounded-lg p-1 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
            <button
              onClick={() => setActiveSection("pembina")}
              className={`flex items-center cursor-pointer px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                activeSection === "pembina"
                  ? "bg-blue-500 text-white shadow-md"
                  : darkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              }`}
            >
              <FaUser className="mr-2" size={16} />
              Pembina
            </button>
            <button
              onClick={() => setActiveSection("founders")}
              className={`flex cursor-pointer items-center px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                activeSection === "founders"
                  ? "bg-blue-500 text-white shadow-md"
                  : darkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              }`}
            >
              <FaUsers className="mr-2" size={16} />
              Founders
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="transition-all duration-500">
          {activeSection === "pembina" ? <PembinaDetail /> : <FoundersGrid />}
        </div>
      </div>
    </section>
  );
};

export default PembinaFounder;
