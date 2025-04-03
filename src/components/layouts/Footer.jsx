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
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      } py-12 mt-10 border-t ${darkMode ? "border-gray-700" : "border-gray-300"}`}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="flex flex-col items-start md:items-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src={logo} alt="Logo" className="h-14 w-auto mb-4" />
            <h2 className="font-bold text-2xl tracking-tight">Creative Student Association</h2>
            <p className="text-md mt-1 opacity-80">STMIK Mardira Indonesia</p>
          </div>

          <div
            className="flex flex-col items-center md:items-start"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter to get the latest updates.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className={`p-2 rounded border ${
                  darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
                }`}
              />
              <button
                type="submit"
                className="cursor-pointer bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div
            className="flex flex-col items-center md:items-start"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://instagram.com/csa_stmikmi"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform hover:scale-110"
              >
                <FaInstagram
                  className={`${
                    darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                  size={24}
                />
              </a>
              <a
                href="https://tiktok.com/@we_csa01?_t=8peEbgVBEof&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform hover:scale-110"
              >
                <FaTiktok
                  className={`${
                    darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                  size={24}
                />
              </a>
              <a
                href="https://facebook.com/profile.php?id=100078881016780"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform hover:scale-110"
              >
                <FaFacebookF
                  className={`${
                    darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                  size={24}
                />
              </a>
              <a
                href="https://www.youtube.com/@csaworks143"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform hover:scale-110"
              >
                <FaYoutube
                  className={`${
                    darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                  size={24}
                />
              </a>
              <a
                href="mailto:csaworks2017@gmail.com"
                className="transform transition-transform hover:scale-110"
              >
                <FaEnvelope
                  className={`${
                    darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                  size={24}
                />
              </a>
            </div>

            <h3 className="font-semibold text-lg mb-4">Kontak Kami</h3>
            <div className="space-y-2">
              <a
                href="https://wa.me/6285795686906"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
              >
                <FaWhatsapp className={`${darkMode ? "text-gray-300" : "text-gray-600"}`} size={18} />
                <span>Humas I: +62 857 9568 6906</span>
              </a>

              <a
                href="https://wa.me/6282126619180"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
              >
                <FaWhatsapp className={`${darkMode ? "text-gray-300" : "text-gray-600"}`} size={18} />
                <span>Humas II: +62 821 2661 9180</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className={`mt-8 pt-6 text-center border-t ${
            darkMode ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <p className="text-md flex items-center justify-center gap-2">
            © 2025 Made with <FaHeart className="text-red-500" /> by
            <span className={`font-semibold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
              CSA
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
