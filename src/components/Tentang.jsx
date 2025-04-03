import React, { useState, useEffect } from "react";
import Hero from "../assets/tentang-kami.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const Tentang = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("sejarah");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
    });

    window.addEventListener("scroll", () => {
      AOS.refresh();
    });
  }, []);

  const tabContent = {
    sejarah: (
      <div key="sejarah" data-aos="fade-up" data-aos-duration="1000">
        Berawal dari non-aktifnya Unit Kegiatan Mahasiswa yang berfokus pada Pemrograman, yaitu HMJ IF.
        Maka, di akhir tahun 2017, sekumpulan mahasiswa kreatif memiliki ide untuk mengaktifkan kembali
        organisasi yang berfokus pada Pemrograman dan Informatika.
      </div>
    ),
    visi: (
      <div key="visi" data-aos="fade-up" data-aos-duration="1000">
        <p>
          Menjadikan CSA sebagai komunitas kreatif dan inovatif yang mendorong kolaborasi lintas divisi
          untuk menghasilkan karya unggulan yang berdampak positif, relevan dengan perkembangan
          teknologi, serta memberikan kontribusi nyata bagi kampus, masyarakat, dan dunia industri.
        </p>
      </div>
    ),
    misi: (
      <div key="misi" data-aos="fade-up" data-aos-duration="1000">
        <ul className="list-disc list-inside space-y-1">
          <li>Mengembangkan Potensi Anggota secara Kreatif</li>
          <li>Mendorong Inovasi Lewat Proyek Kolaboratif</li>
          <li>Memperkenalkan Karya Anggota</li>
          <li>Menciptakan Lingkungan Kolaboratif yang Inspiratif</li>
          <li>Menguatkan Solidaritas Antaranggota</li>
        </ul>
      </div>
    ),
  };

  const TabSection = () => (
    <div
      className={`max-w-3xl mx-auto p-4 sm:p-6 rounded-lg shadow-md mt-6 sm:mt-8 overflow-hidden ${
        darkMode ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <div className="flex mb-4 overflow-x-auto">
        {["sejarah", "visi", "misi"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 cursor-pointer sm:px-4 py-2 text-base sm:text-lg font-semibold capitalize transition-all duration-200 whitespace-nowrap ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={`overflow-hidden ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
        {tabContent[activeTab]}
      </div>
    </div>
  );

  const AboutContent = () => (
    <div>
      <h2
        className={`text-3xl sm:text-4xl font-bold ${
          darkMode ? "text-gray-200" : "text-gray-700"
        } text-center lg:text-left`}
      >
        Tentang CSA
      </h2>
      <p
        className={`${
          darkMode ? "text-gray-300" : "text-gray-600"
        } text-center lg:text-left mt-2 text-sm sm:text-base`}
      >
        CSA (Creative Student Association) yaitu, suatu organisasi berbasis IT yang bertempat di STMIK
        Mardira Indonesia. Organisasi ini menyangkut semua hal tentang IT seperti Pemrograman dan
        Multimedia.
      </p>
    </div>
  );

  return (
    <section
      data-aos="fade"
      data-aos-duration="1000"
      className="container mx-auto px-4 sm:px-6 md:px-14 lg:px-14 xl:px-20 py-12 sm:py-12"
    >
      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-row items-center gap-8">
        <div data-aos="fade-right" data-aos-duration="1000" className="w-1/2">
          <AboutContent />
          <TabSection />
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" className="w-1/2 max-w-lg">
          <img src={Hero} alt="About CSA" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex lg:hidden flex-col items-center">
        <div data-aos="fade-up" data-aos-duration="1000" className="w-full">
          <AboutContent />
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" className="w-full sm:w-3/4 max-w-lg mt-8">
          <img src={Hero} alt="About CSA" className="w-full h-auto rounded-lg shadow-md" />
        </div>

        <div data-aos="fade-up" data-aos-duration="1000" className="w-full mt-8">
          <TabSection />
        </div>
      </div>
    </section>
  );
};

export default Tentang;
