import React from "react";
import TabProject from "../components/project/TabProject";
import Footer from "../components/layouts/Footer";

const Project = ({ darkMode }) => {
  return (
    <>
      <div className="mt-10">
        <TabProject darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </>
  );
};

export default Project;
