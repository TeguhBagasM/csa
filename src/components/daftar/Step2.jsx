import React, { useState } from "react";
import { FaArrowLeft, FaExclamationCircle } from "react-icons/fa";

const Step2 = ({ formData, handleChange, nextStep, prevStep, darkMode }) => {
  const divisionOptions = ["Pemrograman", "Multimedia", "IOT", "Game"];
  const [divisionError, setDivisionError] = useState(false);

  const handleNextStep = () => {
    if (!formData.divisi) {
      setDivisionError(true);
      // Scroll to the error
      document.getElementById("divisi-field").scrollIntoView({ behavior: "smooth" });
    } else {
      setDivisionError(false);
      nextStep();
    }
  };

  // Clear error when user selects a division
  const handleDivisionChange = (e) => {
    handleChange(e);
    if (e.target.value) {
      setDivisionError(false);
    }
  };

  // Apply darkMode class to the whole component to style select options
  const selectClass = `w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg border ${
    divisionError
      ? "border-red-500"
      : darkMode
      ? "bg-gray-800 border-gray-700"
      : "bg-white border-gray-300"
  } ${
    divisionError ? (darkMode ? "bg-red-900/20" : "bg-red-950") : darkMode ? "bg-gray-800" : "bg-white"
  } ${darkMode ? "text-white [&>option]:bg-gray-800 [&>option]:text-white" : ""}`;

  return (
    <div className="space-y-4">
      <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Informasi Divisi</h2>

      <div id="divisi-field" className="mb-3 sm:mb-4">
        <label className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
          Divisi yang Dipilih <span className="text-red-500">*</span>
        </label>
        <select
          name="divisi"
          value={formData.divisi}
          onChange={handleDivisionChange}
          className={selectClass}
          required
        >
          <option value="">Pilih Divisi</option>
          {divisionOptions.map((div, idx) => (
            <option key={idx} value={div}>
              {div}
            </option>
          ))}
        </select>
        {divisionError && (
          <div className="mt-2 text-red-500 text-sm flex items-center gap-1">
            <FaExclamationCircle />
            <span>Mohon pilih divisi terlebih dahulu</span>
          </div>
        )}
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
          Skala Pemahaman Divisi (1-4) <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-wrap gap-4">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-center">
              <input
                type="radio"
                id={`scale-${num}`}
                name="knowledgeScale"
                value={num}
                checked={parseInt(formData.knowledgeScale) === num}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={`scale-${num}`} className="text-sm sm:text-base">
                {num}
              </label>
            </div>
          ))}
        </div>
        <p className={`text-xs mt-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
          1: Pemula, 2: Dasar, 3: Menengah, 4: Mahir
        </p>
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
          Pengalaman di Divisi / Alasan Memilih Divisi <span className="text-red-500">*</span>
        </label>
        <textarea
          name="pengalaman"
          value={formData.pengalaman}
          onChange={handleChange}
          className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg border ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
          }`}
          placeholder="Ceritakan pengalaman Anda di divisi yang dipilih (jika ada) atau alasan memilih divisi tersebut"
          rows={4}
          required
        />
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
          Motivasi Bergabung CSA <span className="text-red-500">*</span>
        </label>
        <textarea
          name="motivasi"
          value={formData.motivasi}
          onChange={handleChange}
          className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg border ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
          }`}
          placeholder="Ceritakan motivasi Anda bergabung dengan Creative Student Association"
          rows={4}
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-4 sm:mt-6">
        <button
          type="button"
          onClick={prevStep}
          className={`px-4 sm:px-6 py-2 cursor-pointer sm:py-3 ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          } text-sm sm:text-base rounded-lg hover:opacity-90 transition flex items-center justify-center sm:justify-start gap-2`}
        >
          <FaArrowLeft className="text-xs sm:text-sm" /> Sebelumnya
        </button>
        <button
          type="button"
          onClick={handleNextStep}
          className="px-4 sm:px-6 py-2 cursor-pointer sm:py-3 bg-blue-500 text-white text-sm sm:text-base rounded-lg hover:bg-blue-600 transition flex items-center justify-center sm:justify-start gap-2"
        >
          Selanjutnya <FaArrowLeft className="rotate-180 text-xs sm:text-sm" />
        </button>
      </div>
    </div>
  );
};

export default Step2;
