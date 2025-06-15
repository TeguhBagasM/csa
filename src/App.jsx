import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import PemrogramanProjectDetail from "./components/project/PemrogramanProjectDetail";
import MulmedProjectDetail from "./components/project/MulmedProjectDetail";
import Daftar from "./components/daftar/Daftar";
import SimpleChatbaseWidget from "./components/SimpleChatbaseWidget";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  return (
    <Router>
      <ScrollToTop />
      <ToastContainer limit={3} />
      <div
        className={`min-h-screen transition-colors duration-200 ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <div className="p-4">
          <Routes>
            <Route
              path="/"
              element={<Home darkMode={darkMode} isRegistrationOpen={isRegistrationOpen} />}
            />
            <Route path="/project" element={<Project darkMode={darkMode} />} />
            <Route path="/blog" element={<Blog darkMode={darkMode} />} />
            {/* <Route path="/daftar" element={<Daftar darkMode={darkMode} />} /> */}
            <Route
              path="/project-pemrograman/:id"
              element={<PemrogramanProjectDetail darkMode={darkMode} />}
            />
            <Route
              path="/project-multimedia/:id"
              element={<MulmedProjectDetail darkMode={darkMode} />}
            />
            <Route path="*" element={<NotFound darkMode={darkMode} />} />
          </Routes>
        </div>
        <SimpleChatbaseWidget darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;
