import React from "react";
import { FaArrowLeft, FaCheck } from "react-icons/fa";

const Step0 = ({ nextStep, darkMode, agreedToTerms, setAgreedToTerms }) => {
  const handleAgreementChange = (e) => {
    setAgreedToTerms(e.target.checked);
  };

  return (
    <div className="space-y-4">
      <div className={`p-3 sm:p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
        <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Langkah-langkah Pendaftaran:</h3>

        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start">
            <div
              className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm ${
                darkMode ? "bg-blue-600" : "bg-blue-500"
              } text-white`}
            >
              1
            </div>
            <div>
              <h4 className="font-medium text-sm sm:text-base">Data Diri</h4>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-xs sm:text-sm`}>
                Isi informasi pribadi seperti nama, NIM, program studi, dan kontak
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div
              className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm ${
                darkMode ? "bg-blue-600" : "bg-blue-500"
              } text-white`}
            >
              2
            </div>
            <div>
              <h4 className="font-medium text-sm sm:text-base">Informasi Divisi</h4>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-xs sm:text-sm`}>
                Pilih divisi yang diminati, tingkat pemahaman, dan motivasi bergabung
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div
              className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm ${
                darkMode ? "bg-blue-600" : "bg-blue-500"
              } text-white`}
            >
              3
            </div>
            <div>
              <h4 className="font-medium text-sm sm:text-base">Konfirmasi Media Sosial</h4>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} text-xs sm:text-sm`}>
                Konfirmasi bahwa Anda telah mengikuti media sosial CSA (Instagram, YouTube, dan
                WhatsApp)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`p-3 sm:p-4 rounded-lg border ${
          darkMode ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-gray-50"
        }`}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <input
              type="checkbox"
              id="agreement"
              checked={agreedToTerms}
              onChange={handleAgreementChange}
              className={`mt-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 cursor-pointer rounded ${
                darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
              }`}
            />
          </div>
          <div className="ml-1 text-xs sm:text-sm">
            Dengan melanjutkan pendaftaran, saya menyetujui untuk memberikan data diri saya dan
            bersedia mengikuti seluruh kegiatan CSA sesuai dengan divisi yang dipilih. Saya juga
            bersedia mengikuti media sosial resmi CSA sebagai bagian dari syarat pendaftaran.
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4 sm:mt-6">
        <button
          type="button"
          onClick={nextStep}
          disabled={!agreedToTerms}
          className={`px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white text-sm sm:text-base rounded-lg transition flex items-center gap-2 
                        ${
                          agreedToTerms
                            ? "hover:bg-blue-600 cursor-pointer"
                            : "opacity-50 cursor-not-allowed"
                        }`}
        >
          Mulai Pendaftaran <FaArrowLeft className="rotate-180 text-xs sm:text-sm" />
        </button>
      </div>
    </div>
  );
};

export default Step0;
