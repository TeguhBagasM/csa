import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaGraduationCap,
  FaAward,
  FaQuoteLeft,
  FaUsers,
  FaUser,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Pembina from "../assets/pembina.jpeg";

const PembinaFounder = ({ darkMode = false }) => {
  const [activeSection, setActiveSection] = useState("pembina");
  const [selectedFounder, setSelectedFounder] = useState(null);

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
    position: "Pembina CSA",
    image: Pembina,
    bio: "Seorang akademisi berpengalaman dengan fokus pada pengembangan software dan teknologi informasi.",
    expertise: [
      "IT Infrastructure Management",
      "Project Management",
      "IT Service Management",
      "Enterprise Network",
    ],
    education: "S2 Magister Manajemen - Universitas Pendidikan Indonesia",
    experience: "15+ tahun",
    quote:
      "Teknologi adalah alat, tetapi kreativitas dan kolaborasi adalah kekuatan yang mengubah dunia.",
    achievements: ["Research Excellence Award", "Community Service Recognition"],
    contact: {
      email: "adiraharjo@stmik-mi.ac.id",
      linkedin: "https://www.linkedin.com/in/adi-raharjo-1761ba67/",
    },
  };

  // Data Founder (4 orang)
  const foundersData = [
    {
      id: 1,
      name: "Ahmad Rizki",
      position: "Co-Founder & Tech Lead",
      batch: "Angkatan 2017",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Visioner di balik terbentuknya CSA. Memiliki passion dalam full-stack development dan memimpin berbagai proyek teknologi.",
      expertise: ["Full-Stack Development", "System Architecture", "Team Leadership"],
      currentRole: "Senior Software Engineer",
      quote: "Inovasi dimulai dari keberanian untuk bermimpi besar.",
      socialMedia: {
        instagram: "https://instagram.com/ahmadrizki",
        linkedin: "https://linkedin.com/in/ahmadrizki",
        github: "https://github.com/ahmadrizki",
        email: "ahmad.rizki@email.com",
      },
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      position: "Co-Founder & Creative Director",
      batch: "Angkatan 2017",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Arsitek kreatif CSA yang menciptakan identitas visual dan pengalaman user yang menawan. Spesialis dalam UI/UX dan branding.",
      expertise: ["UI/UX Design", "Branding", "Creative Strategy"],
      currentRole: "Senior UI/UX Designer",
      quote: "Desain yang baik adalah desain yang bisa dipahami dan dirasakan oleh semua orang.",
      socialMedia: {
        instagram: "https://instagram.com/sitinurhaliza",
        linkedin: "https://linkedin.com/in/sitinurhaliza",
        email: "siti.nurhaliza@email.com",
      },
    },
    {
      id: 3,
      name: "Dedi Kurniawan",
      position: "Co-Founder & Operations Manager",
      batch: "Angkatan 2017",
      image:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
      bio: "Mastermind di balik operasional CSA. Memastikan semua program berjalan lancar dan menciptakan sistem yang efisien.",
      expertise: ["Project Management", "Business Operations", "Strategic Planning"],
      currentRole: "Operations Manager",
      quote: "Organisasi yang kuat dibangun dari sistem yang solid dan tim yang kompak.",
      socialMedia: {
        instagram: "https://instagram.com/dedikurniawan",
        linkedin: "https://linkedin.com/in/dedikurniawan",
        email: "dedi.kurniawan@email.com",
      },
    },
    {
      id: 4,
      name: "Maya Sari",
      position: "Co-Founder & Community Builder",
      batch: "Angkatan 2017",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face",
      bio: "Jantung komunitas CSA. Membangun jaringan yang kuat dan menciptakan lingkungan yang mendukung perkembangan setiap anggota.",
      expertise: ["Community Management", "Event Planning", "Public Relations"],
      currentRole: "Community Manager",
      quote: "Komunitas terbaik adalah tempat di mana setiap individu bisa tumbuh bersama.",
      socialMedia: {
        instagram: "https://instagram.com/mayasari",
        linkedin: "https://linkedin.com/in/mayasari",
        github: "https://github.com/mayasari",
        email: "maya.sari@email.com",
      },
    },
  ];

  // Pembina Detail Component
  const PembinaDetail = () => (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Profile Card */}
        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-2xl shadow-xl p-8 transition-all duration-500 hover:shadow-2xl group`}
          data-aos="fade-right"
        >
          <div className="text-center">
            <div className="relative mx-auto w-40 h-40 mb-6">
              <img
                src={pembinaData.image}
                alt={pembinaData.name}
                className="w-full h-full object-cover rounded-full shadow-lg ring-4 ring-blue-500/20 transition-all duration-500 group-hover:ring-blue-500/40 group-hover:scale-105"
              />
            </div>
            <h2 className={`text-3xl font-bold mb-2 ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
              {pembinaData.name}
            </h2>
            <p className="text-blue-500 text-xl font-medium mb-4">{pembinaData.position}</p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className={`p-3 rounded-lg ${darkMode ? "bg-gray-700" : "bg-blue-50"}`}>
                <div className="text-2xl font-bold text-blue-500">{pembinaData.experience}</div>
                <div className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Pengalaman
                </div>
              </div>
              <div className={`p-3 rounded-lg ${darkMode ? "bg-gray-700" : "bg-blue-50"}`}>
                <div className="text-2xl font-bold text-blue-500">{pembinaData.expertise.length}</div>
                <div className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Keahlian
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detail Information */}
        <div
          className={`p-6 rounded-xl shadow-lg ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
          }`}
          data-aos="fade-left"
        >
          {/* Quote */}
          <div
            className={`mb-6 p-4 rounded-lg border-l-4 border-blue-500 ${
              darkMode ? "bg-gray-700" : "bg-blue-50"
            }`}
          >
            <FaQuoteLeft className="text-blue-500 mb-2" size={20} />
            <p className="italic">"{pembinaData.quote}"</p>
          </div>

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

          {/* Expertise */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-blue-500">Keahlian</h4>
            <div className="flex flex-wrap gap-2">
              {pembinaData.expertise.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    darkMode ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${pembinaData.contact.email}`}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              <FaEnvelope className="mr-2" size={16} />
              <span className="text-sm">Email</span>
            </a>
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

  // Founders Grid Component
  const FoundersGrid = () => (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {foundersData.map((founder, index) => (
          <div
            key={founder.id}
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-xl shadow-lg p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer group`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            onClick={() => setSelectedFounder(founder)}
          >
            <div className="text-center">
              <div className="relative mx-auto w-24 h-24 mb-4">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover rounded-full shadow-lg ring-4 ring-blue-500/20 transition-all duration-500 group-hover:ring-blue-500/40"
                />
              </div>
              <h3 className={`text-lg font-bold mb-1 ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
                {founder.name}
              </h3>
              <p className="text-blue-500 text-sm font-medium mb-2">{founder.position}</p>
              <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                {founder.batch}
              </p>

              <div className="mt-4 flex justify-center space-x-2">
                {founder.socialMedia.instagram && (
                  <a
                    href={founder.socialMedia.instagram}
                    className="text-gray-400 hover:text-pink-500 transition-colors"
                  >
                    <FaInstagram size={16} />
                  </a>
                )}
                {founder.socialMedia.linkedin && (
                  <a
                    href={founder.socialMedia.linkedin}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <FaLinkedin size={16} />
                  </a>
                )}
                {founder.socialMedia.github && (
                  <a
                    href={founder.socialMedia.github}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FaGithub size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Founder Detail Modal */}
      {selectedFounder && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedFounder(null)}
        >
          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-2xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <img
                src={selectedFounder.image}
                alt={selectedFounder.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 ring-4 ring-blue-500/20"
              />
              <h2
                className={`text-2xl font-bold mb-2 ${darkMode ? "text-gray-100" : "text-gray-800"}`}
              >
                {selectedFounder.name}
              </h2>
              <p className="text-blue-500 text-lg font-medium">{selectedFounder.position}</p>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                {selectedFounder.batch}
              </p>
            </div>

            <div
              className={`mb-6 p-4 rounded-lg border-l-4 border-blue-500 ${
                darkMode ? "bg-gray-700" : "bg-blue-50"
              }`}
            >
              <FaQuoteLeft className="text-blue-500 mb-2" size={16} />
              <p className="italic text-sm">"{selectedFounder.quote}"</p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 text-blue-500">Tentang</h4>
              <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {selectedFounder.bio}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-blue-500">Keahlian</h4>
              <div className="flex flex-wrap gap-2">
                {selectedFounder.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      darkMode ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 text-blue-500">Peran Saat Ini</h4>
              <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {selectedFounder.currentRole}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {selectedFounder.socialMedia.email && (
                <a
                  href={`mailto:${selectedFounder.socialMedia.email}`}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  <FaEnvelope className="mr-2" size={16} />
                  <span className="text-sm">Email</span>
                </a>
              )}
              {selectedFounder.socialMedia.linkedin && (
                <a
                  href={selectedFounder.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 hover:scale-105"
                >
                  <FaLinkedin className="mr-2" size={16} />
                  <span className="text-sm">LinkedIn</span>
                </a>
              )}
              {selectedFounder.socialMedia.instagram && (
                <a
                  href={selectedFounder.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white transition-all duration-300 hover:scale-105"
                >
                  <FaInstagram className="mr-2" size={16} />
                  <span className="text-sm">Instagram</span>
                </a>
              )}
            </div>

            <button
              onClick={() => setSelectedFounder(null)}
              className={`mt-6 w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-gray-300"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
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
            className={`text-4xl sm:text-5xl font-bold mb-4 ${
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
              className={`flex items-center px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
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
              className={`flex items-center px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
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
