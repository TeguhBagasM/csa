import React from "react";
import Hero from "../components/Hero";
import MengapaKami from "../components/MengapaKami";
import Tentang from "../components/Tentang";
import Gallery from "../components/Gallery";
import Footer from "../components/layouts/Footer";
import Members from "../components/Members";
import Divisions from "./Divisions";

const Home = ({ isRegistrationOpen, darkMode }) => {
  return (
    <>
      <div className="overflow-hidden">
        <Hero darkMode={darkMode} isRegistrationOpen={isRegistrationOpen} />
        <MengapaKami darkMode={darkMode} />
        <Tentang darkMode={darkMode} />
        <Members darkMode={darkMode} />
        <Divisions darkMode={darkMode} />
        <Gallery darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </>
  );
};

export default Home;
