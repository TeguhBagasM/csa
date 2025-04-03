import React from "react";
import {
  FaArrowLeft,
  FaPaperPlane,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaCheck,
} from "react-icons/fa";

const Step3 = ({
  formData,
  handleChange,
  prevStep,
  handleSubmit,
  loading,
  darkMode,
  successSubmit,
}) => {
  const handleSocialMediaConfirmation = (e) => {
    const { name, checked } = e.target;
    handleChange({
      target: {
        name,
        checked,
        type: "checkbox",
      },
    });
  };

  // Function to render social media card for reusability
  const renderSocialMediaCard = (icon, name, label, url, proofKey) => {
    const IconComponent = icon;
    const iconColors = {
      FaInstagram: darkMode ? "text-pink-400" : "text-pink-600",
      FaYoutube: darkMode ? "text-red-400" : "text-red-600",
      FaWhatsapp: darkMode ? "text-green-400" : "text-green-600",
    };

    return (
      <div
        className={`p-4 rounded-lg border ${
          darkMode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"
        } mb-4`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center">
            <IconComponent className={`mr-3 text-xl ${iconColors[icon.name]}`} />
            <div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm ${formData[proofKey] ? "opacity-50" : ""} ${
                  darkMode ? "text-blue-400" : "text-blue-600"
                }`}
                onClick={(e) => formData[proofKey] && e.preventDefault()}
              >
                {name}
              </a>
            </div>
          </div>
          <div className="flex items-center mt-2 sm:mt-0">
            <input
              type="checkbox"
              id={proofKey}
              name={proofKey}
              checked={formData[proofKey] || false}
              onChange={handleSocialMediaConfirmation}
              className={`mr-2 h-5 w-5 cursor-pointer rounded ${
                darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
              }`}
            />
            <label htmlFor={proofKey} className={`${formData[proofKey] ? "font-medium" : ""}`}>
              {formData[proofKey] ? (
                <span className="flex items-center text-green-500">
                  <FaCheck className="mr-1" /> {label}
                </span>
              ) : (
                `Saya sudah ${label.toLowerCase()}`
              )}
            </label>
          </div>
        </div>
      </div>
    );
  };

  const isFormComplete = formData.igProof && formData.youtubeProof && formData.waProof;

  return (
    <div className="space-y-4 px-2 sm:px-0">
      <h2 className="text-xl font-bold mb-6">Konfirmasi Media Sosial</h2>
      <p className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
        Klik tautan di bawah ini untuk mengikuti akun media sosial CSA. Setelah itu, centang kotak di
        bawah untuk mengonfirmasi bahwa kamu sudah mengikuti:
      </p>

      {renderSocialMediaCard(
        FaInstagram,
        "instagram.com/csa_stmikmi",
        "Sudah Follow",
        "https://www.instagram.com/csa_stmikmi/",
        "igProof"
      )}

      {renderSocialMediaCard(
        FaYoutube,
        "youtube.com/@csaworks143",
        "Sudah Subscribe",
        "https://www.youtube.com/@csaworks143",
        "youtubeProof"
      )}

      {renderSocialMediaCard(
        FaWhatsapp,
        "whatsapp.com/grup-angkatan-viii",
        "Sudah Gabung",
        "https://chat.whatsapp.com/E1ZrShm3oKg7QdQpOVgFF8",
        "waProof"
      )}

      <div
        className={`p-4 rounded-lg border ${
          darkMode ? "border-gray-700 bg-gray-800/60" : "border-gray-200 bg-gray-50"
        } mt-6`}
      >
        <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          <strong>Catatan:</strong> Dengan mencentang kotak di atas, Anda menyatakan bahwa anda telah
          mengikuti seluruh media sosial CSA sebagai syarat pendaftaran. Informasi ini akan
          diverifikasi oleh tim kami.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
        <button
          type="button"
          onClick={prevStep}
          className={`px-6 py-3 cursor-pointer ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          } rounded-lg hover:opacity-90 transition flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto`}
          disabled={loading || successSubmit}
        >
          <FaArrowLeft /> <span>Sebelumnya</span>
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading || successSubmit || !isFormComplete}
          className={`px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto
            ${
              loading || successSubmit || !isFormComplete
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
        >
          {loading ? (
            <>
              Mengirim... <span className="animate-spin ml-1">⟳</span>
            </>
          ) : successSubmit ? (
            <>
              <FaCheck className="mr-1" /> Berhasil Mendaftar
            </>
          ) : (
            <>
              Kirim Pendaftaran <FaPaperPlane />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Step3;
