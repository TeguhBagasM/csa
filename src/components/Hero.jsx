import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import GifHero from "../assets/hero-bg.gif";
import { FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

const Hero = ({ isRegistrationOpen, darkMode }) => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [randomQuote, setRandomQuote] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  const dataQuotes = [
    { quote: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    {
      quote: "Your most unhappy customers are your greatest source of learning.",
      author: "Bill Gates",
    },
    { quote: "Move fast and break things.", author: "Mark Zuckerberg" },
    { quote: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { quote: "Work hard, have fun, make history.", author: "Jeff Bezos" },
  ];

  const handleRegistration = () => {
    if (isDisabled) return;

    if (!isRegistrationOpen) {
      toast.error("Pendaftaran sudah ditutup! Silakan cek kembali nanti.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: darkMode ? "dark" : "light",
      });
      return;
    }

    setIsDisabled(true);

    // Arahkan ke halaman pendaftaran
    navigate("/daftar");

    // Reset disabled state setelah navigasi
    setTimeout(() => {
      setIsDisabled(false);
    }, 1000);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
    });

    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * dataQuotes.length);
      return dataQuotes[randomIndex];
    };
    setRandomQuote(getRandomQuote());

    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <>
      {/* web side */}
      <div
        className={`max-lg:hidden lg:block h-screen w-full flex items-center justify-center overflow-x-hidden ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="w-1/2 flex flex-col justify-center ml-10 xl:ml-24"
          >
            <p className="text-5xl font-bold">Creative Student Association</p>
            <div className="text-2xl font-bold text-blue-400 mt-5">
              <TypeAnimation
                sequence={[
                  "Be Creative",
                  2000,
                  "",
                  100,
                  "Be Productive",
                  2000,
                  "",
                  100,
                  "Be Innovative",
                  2000,
                  "",
                  100,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                deletionSpeed={50}
              />
            </div>

            <div
              className={`mt-5 text-lg italic ${
                darkMode ? "text-gray-300" : "text-gray-700"
              } border-l-4 border-blue-500 pl-5 py-3`}
            >
              <p className="font-medium">{randomQuote.quote}</p>
              <p className="text-sm mt-2"> - {randomQuote.author}</p>
            </div>

            <button
              data-aos="fade-up"
              data-aos-delay="200"
              onClick={handleRegistration}
              disabled={isDisabled}
              className={`mt-5 w-52 px-5 py-2 rounded-3xl transition-all text-white flex justify-center items-center gap-2 font-semibold
        ${
          isDisabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 hover:scale-105 cursor-pointer"
        }`}
            >
              <FaExternalLinkAlt />
              Daftar Sekarang
            </button>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="w-1/2 flex items-center justify-end mr-5"
          >
            <img src={GifHero} alt="hero" className="w-full rounded-2xl" />
          </div>
        </div>
      </div>

      {/* mobile side */}
      <div
        className={`lg:hidden max-lg:block w-full min-h-[70vh] flex items-center justify-center mt-28 text-center ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="w-full h-full flex flex-col justify-center items-center"
        >
          <div className="transition-all duration-1000">
            <p className="text-4xl font-bold">Creative Student Association</p>
            <div className="text-xl font-bold text-blue-400 mt-5">
              <TypeAnimation
                sequence={[
                  "Be Creative",
                  2000,
                  "",
                  100,
                  "Be Productive",
                  2000,
                  "",
                  100,
                  "Be Innovative",
                  2000,
                  "",
                  100,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                deletionSpeed={50}
              />
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className={`w-full flex items-center justify-center mt-10 transition-all duration-1000`}
          >
            <img src={GifHero} alt="hero" className="w-3/4 rounded-2xl" />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className={`mt-5 text-lg italic ${
              darkMode ? "text-gray-300" : "text-gray-700"
            } pl-5 py-3 transition-all duration-1000`}
          >
            <p className="font-medium">{randomQuote.quote}</p>
            <p className="text-sm mt-2"> - {randomQuote.author}</p>
          </div>

          <button
            data-aos="fade-up"
            data-aos-delay="200"
            onClick={handleRegistration}
            disabled={isDisabled}
            className={`mt-5 w-52 px-5 py-2 rounded-3xl transition-all text-white flex justify-center items-center gap-2 font-semibold
        ${
          isDisabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 hover:scale-105 cursor-pointer"
        }`}
          >
            <FaExternalLinkAlt />
            Daftar Sekarang
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
