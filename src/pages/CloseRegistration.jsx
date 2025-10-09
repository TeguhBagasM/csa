import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/notfound/close.svg";

function CloseRegistration({ darkMode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={notFoundImage} alt="404 Not Found" className="w-72 h-72 mb-4" />
      <p className={`text-xl mb-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        Pendaftaran sudah ditutup, <i>See u next year!</i>
      </p>
      <Link to="/" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
        Kembali ke Beranda
      </Link>
    </div>
  );
}

export default CloseRegistration;
