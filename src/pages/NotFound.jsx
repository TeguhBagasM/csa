import React from "react";
import notFoundImage from "../assets/notfound/404.svg";

function NotFound({ darkMode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src={notFoundImage} alt="404 Not Found" className="w-60 h-60 mb-4" />
      <p className={`text-xl mb-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
        Halaman tidak ditemukan
      </p>
      <a href="/" className="text-blue-500 hover:text-blue-700">
        Kembali ke Beranda
      </a>
    </div>
  );
}

export default NotFound;
