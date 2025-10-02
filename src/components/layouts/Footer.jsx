import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaHeart,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/logo-csa.png";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900"
      } py-16 mt-10 relative overflow-hidden`}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo & About Section */}
          <div className="flex flex-col items-start" data-aos="fade-up" data-aos-delay="100">
            <img src={logo} alt="Logo CSA" className="h-16 w-auto mb-4" />
            <h2 className="font-bold text-2xl tracking-tight">Creative Student Association</h2>
            <p className={`text-md mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              STMIK Mardira Indonesia
            </p>
            <p
              className={`text-sm leading-relaxed mt-4 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } max-w-xs`}
            >
              Organisasi mahasiswa yang fokus pada pengembangan kreativitas, teknologi, dan inovasi di
              lingkungan kampus.
            </p>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-start" data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
              Follow Us
            </h3>
            <div className="grid grid-cols-5 gap-4 mb-8">
              <a
                href="https://instagram.com/csa_stmikmi"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-xl ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600"
                    : "bg-gray-100 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500"
                } flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
              >
                <FaInstagram
                  className={`${
                    darkMode
                      ? "text-gray-300 group-hover:text-white"
                      : "text-gray-600 group-hover:text-white"
                  } transition-colors`}
                  size={20}
                />
              </a>
              <a
                href="https://tiktok.com/@we_csa01?_t=8peEbgVBEof&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-xl ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900"
                    : "bg-gray-100 hover:bg-gradient-to-br hover:from-gray-800 hover:to-black"
                } flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
              >
                <FaTiktok
                  className={`${
                    darkMode
                      ? "text-gray-300 group-hover:text-white"
                      : "text-gray-600 group-hover:text-white"
                  } transition-colors`}
                  size={20}
                />
              </a>
              <a
                href="https://facebook.com/profile.php?id=100078881016780"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-xl ${
                  darkMode ? "bg-gray-800 hover:bg-blue-600" : "bg-gray-100 hover:bg-blue-500"
                } flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
              >
                <FaFacebookF
                  className={`${
                    darkMode
                      ? "text-gray-300 group-hover:text-white"
                      : "text-gray-600 group-hover:text-white"
                  } transition-colors`}
                  size={20}
                />
              </a>
              <a
                href="https://www.youtube.com/@csaworks143"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-xl ${
                  darkMode ? "bg-gray-800 hover:bg-red-600" : "bg-gray-100 hover:bg-red-500"
                } flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
              >
                <FaYoutube
                  className={`${
                    darkMode
                      ? "text-gray-300 group-hover:text-white"
                      : "text-gray-600 group-hover:text-white"
                  } transition-colors`}
                  size={20}
                />
              </a>
              <a
                href="mailto:csaworks2017@gmail.com"
                className={`w-12 h-12 rounded-xl ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-600"
                    : "bg-gray-100 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500"
                } flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
              >
                <FaEnvelope
                  className={`${
                    darkMode
                      ? "text-gray-300 group-hover:text-white"
                      : "text-gray-600 group-hover:text-white"
                  } transition-colors`}
                  size={20}
                />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-start" data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
              Kontak Kami
            </h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/6285795686906"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-xl ${
                  darkMode ? "bg-gray-800 hover:bg-gray-750" : "bg-gray-100 hover:bg-gray-200"
                } transition-all duration-300 hover:scale-105 group`}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="text-white" size={20} />
                </div>
                <div>
                  <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"} mb-1`}>
                    Humas I
                  </p>
                  <p className="text-sm font-medium">+62 857 9568 6906</p>
                </div>
              </a>

              <a
                href="https://wa.me/6282126619180"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-xl ${
                  darkMode ? "bg-gray-800 hover:bg-gray-750" : "bg-gray-100 hover:bg-gray-200"
                } transition-all duration-300 hover:scale-105 group`}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="text-white" size={20} />
                </div>
                <div>
                  <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"} mb-1`}>
                    Humas II
                  </p>
                  <p className="text-sm font-medium">+62 821 2661 9180</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`pt-8 border-t ${darkMode ? "border-gray-800" : "border-gray-200"}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm flex items-center gap-2">
              © 2025 Made with <FaHeart className="text-red-500 animate-pulse" /> by
              <span className={`font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                Creative Student Association
              </span>
            </p>
            <div className={`flex gap-6 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              <p className="hover:text-blue-500 transition-colors">Privacy Policy</p>
              <p className="hover:text-blue-500 transition-colors">Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
