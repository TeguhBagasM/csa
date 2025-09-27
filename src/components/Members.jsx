import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import members from "../data/members";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";

const Members = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className={`mt-5 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold md:text-4xl text-center mb-10">Anggota CSA</h2>

        {/* Custom CSS untuk pagination yang responsive */}
        <style jsx="true">{`
          .custom-pagination {
            position: relative !important;
            margin-top: 20px !important;
            text-align: center !important;
          }

          .custom-bullet {
            width: 10px !important;
            height: 10px !important;
            background: ${darkMode ? "#6b7280" : "#d1d5db"} !important;
            border-radius: 50% !important;
            opacity: 1 !important;
            margin: 0 5px !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
          }

          .custom-bullet-active {
            background: ${darkMode ? "#3b82f6" : "#2563eb"} !important;
            transform: scale(1.2) !important;
          }

          /* Hover effect untuk desktop */
          .custom-bullet:hover {
            background: ${darkMode ? "#60a5fa" : "#3b82f6"} !important;
            transform: scale(1.1) !important;
          }

          /* Sembunyikan pagination di mobile */
          @media (max-width: 768px) {
            .custom-pagination {
              display: none !important;
            }
          }
        `}</style>

        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet custom-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
            el: ".custom-pagination",
          }}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {members.map((member, index) => (
            <SwiperSlide key={index}>
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`h-80 bg-${
                  darkMode ? "gray-800" : "gray-100"
                } rounded-lg shadow-lg overflow-hidden transition-transform transform flex flex-col justify-center items-center mx-4`}
              >
                <p
                  className={`text-lg font-semibold ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  } mb-2`}
                >
                  {member.position}
                </p>

                <div className="flex justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
                    {member.division}
                  </p>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
                    {member.batch}
                  </p>
                </div>

                <div className="flex justify-center space-x-4">
                  {member.socialMedia.instagram && (
                    <a
                      href={member.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram"
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      } transition-colors hover:text-blue-500`}
                    >
                      <FaInstagram size={20} />
                    </a>
                  )}
                  {member.socialMedia.linkedin && (
                    <a
                      href={member.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Linkedin"
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      } transition-colors hover:text-blue-500`}
                    >
                      <FaLinkedin size={20} />
                    </a>
                  )}
                  {member.socialMedia.email && (
                    <a
                      href={member.socialMedia.email}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Email"
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      } transition-colors hover:text-blue-500`}
                    >
                      <FaEnvelope size={20} />
                    </a>
                  )}
                  {member.socialMedia.facebook && (
                    <a
                      href={member.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Facebook"
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      } transition-colors hover:text-blue-500`}
                    >
                      <FaFacebookF size={20} />
                    </a>
                  )}
                  {member.socialMedia.twitter && (
                    <a
                      href={member.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Twitter"
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      } transition-colors hover:text-blue-500`}
                    >
                      <FaXTwitter size={20} />
                    </a>
                  )}
                  {member.socialMedia.tiktok && (
                    <a
                      href={member.socialMedia.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Tiktok"
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      } transition-colors hover:text-blue-500`}
                    >
                      <FaTiktok size={20} />
                    </a>
                  )}
                  {member.socialMedia.github && (
                    <a
                      href={member.socialMedia.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Github"
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      } transition-colors hover:text-blue-500`}
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {member.socialMedia.youtube && (
                    <a
                      href={member.socialMedia.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Youtube"
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      } transition-colors hover:text-blue-500`}
                    >
                      <FaYoutube size={20} />
                    </a>
                  )}
                  {member.socialMedia.portfolio && (
                    <a
                      href={member.socialMedia.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Personal Portfolio"
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      } transition-colors hover:text-blue-500`}
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination container */}
        <div className="custom-pagination"></div>
      </div>
    </div>
  );
};

export default Members;
