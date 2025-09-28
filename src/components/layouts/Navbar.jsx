import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CSA from "../../assets/logo-csa.png";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "../ThemeToggle";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-duration="800"
        data-aos-offset="0"
        className="w-full fixed z-10"
      >
        <nav
          className={`w-full border-b
            ${darkMode ? "border-b-gray-700" : "border-b-gray-200"}
            ${
              isScrolled
                ? darkMode
                  ? "bg-gray-900/70 backdrop-blur-md"
                  : "bg-white/70 backdrop-blur-md"
                : darkMode
                ? "bg-gray-900"
                : "bg-white"
            }`}
        >
          <div className="flex justify-between items-center p-5">
            {/* Desktop Menu */}
            <div className="max-md:hidden md:flex justify-between items-center w-full">
              <div className="flex items-center">
                <img src={CSA} alt="csa" width={160} height={160} className="mx-4" />
                <ul
                  className={`hidden md:flex gap-5 ml-10 ${
                    darkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {["Beranda", "Karya"].map((item) => (
                    <li key={item} className="relative group">
                      <Link
                        to={item === "Beranda" ? "/" : `/${item.toLowerCase()}`}
                        className="relative"
                      >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mr-14">
                <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden max-md:flex items-center justify-between w-full">
              <img src={CSA} alt="csa" width={120} height={120} className="mx-4" />
              <div className="flex items-center gap-4">
                <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />

                <button
                  className={`md:hidden p-2 rounded-xl cursor-pointer 
                    ${darkMode ? "hover:bg-gray-700 text-white" : "hover:bg-gray-200 text-black"}`}
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  <HiMenu size={24} className={darkMode ? "text-white" : "text-black"} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={toggleMenu} />
          <div
            data-aos="slide-left"
            data-aos-duration="300"
            data-aos-offset="0"
            className={`md:hidden fixed right-0 top-0 h-screen w-64 z-50
              ${darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-500"}`}
          >
            <div className="w-full h-16 relative flex flex-col">
              <button
                onClick={toggleMenu}
                className={`p-1 absolute top-2 right-2 rounded-lg cursor-pointer 
                  ${darkMode ? "hover:bg-gray-700 text-white" : "hover:bg-gray-200 text-black"}`}
              >
                <HiX size={20} className={darkMode ? "text-white" : "text-black"} />
              </button>
              <img
                src={CSA}
                alt="csa"
                width={120}
                height={120}
                className="mx-4 absolute bottom-2 left-0"
              />
            </div>

            <ul className="flex flex-col px-4">
              {["Beranda", "Project"].map((item) => (
                <li key={item} className="py-3" onClick={toggleMenu}>
                  <Link
                    to={item === "Beranda" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
