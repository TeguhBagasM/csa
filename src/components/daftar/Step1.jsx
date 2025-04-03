import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaExclamationCircle } from "react-icons/fa";
import {
  validateNIM,
  validatePhone,
  validateBirthDate,
  checkEmailExists,
} from "../../api/sheetdbService";
import { toast } from "react-toastify";

const Step1 = ({ formData, handleChange, nextStep, darkMode }) => {
  const [errors, setErrors] = useState({
    email: "",
    nim: "",
    noTelp: "",
    tanggalLahir: "",
  });

  const [isCheckingEmail, setIsCheckingEmail] = useState(false);

  const today = new Date();
  const maxYearAllowed = today.getFullYear() - 15; // Maksimum usia 15 tahun
  const minYearAllowed = today.getFullYear() - 100; // Minimum usia 100 tahun

  const maxDate = new Date(maxYearAllowed, 11, 31).toISOString().split("T")[0];
  const minDate = new Date(minYearAllowed, 0, 1).toISOString().split("T")[0];

  // Validasi field secara real-time
  const validateField = async (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "email":
        if (!value) {
          errorMsg = "Email wajib diisi";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errorMsg = "Format email tidak valid";
        } else {
          // Periksa apakah email sudah ada di database
          setIsCheckingEmail(true);
          try {
            const exists = await checkEmailExists(value);
            if (exists) {
              errorMsg = "Email sudah terdaftar. Gunakan email lain.";
            }
          } catch (error) {
            console.error("Error memeriksa email:", error);
          } finally {
            setIsCheckingEmail(false);
          }
        }
        break;

      case "nim":
        if (!value) {
          errorMsg = "NIM wajib diisi";
        } else if (!validateNIM(value)) {
          errorMsg = "NIM harus berupa 8-12 digit angka";
        }
        break;

      case "noTelp":
        if (!value) {
          errorMsg = "No. whatsapp wajib diisi";
        } else if (!validatePhone(value)) {
          errorMsg =
            "Nomor WhatsApp tidak valid. Pastikan nomor diawali dengan 08 dan terdiri dari minimal 10 angka.";
        }
        break;
      case "tanggalLahir":
        if (!value) {
          errorMsg = "Tanggal lahir wajib diisi";
        } else if (!validateBirthDate(value)) {
          errorMsg = `Hanya diperbolehkan tahun lahir antara ${currentYear - 100} dan ${
            currentYear - 15
          }`;
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    return errorMsg === "";
  };

  // Handle perubahan pada input dengan validasi
  const handleValidatedChange = async (e) => {
    const { name, value } = e.target;

    // Jika field adalah NIM, hanya izinkan input angka
    if (name === "nim" && value && !/^\d*$/.test(value)) {
      return;
    }

    // Panggil handleChange asli dari props
    handleChange(e);

    // Validasi field
    await validateField(name, value);
  };

  // Validasi semua field sebelum lanjut ke langkah berikutnya
  const validateAllFields = async () => {
    const nimValid = await validateField("nim", formData.nim);
    const emailValid = await validateField("email", formData.email);
    const noTelpValid = await validateField("noTelp", formData.noTelp);
    const tanggalLahirValid = await validateField("tanggalLahir", formData.tanggalLahir);

    return nimValid && emailValid && noTelpValid && tanggalLahirValid;
  };

  // Handler untuk next step dengan validasi
  const handleNextStep = async () => {
    const allValid = await validateAllFields();

    if (allValid) {
      nextStep();
    } else {
      toast.error("Harap perbaiki semua kesalahan sebelum melanjutkan", {
        theme: darkMode ? "dark" : "light",
        position: "top-center",
      });
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Data Diri</h2>

      <div className="mb-3 sm:mb-4">
        <label className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleValidatedChange}
          className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg border ${
            errors.email
              ? "border-red-500"
              : darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-300"
          }`}
          placeholder="Masukkan email aktif"
          required
        />
        {isCheckingEmail && (
          <p className="text-yellow-500 text-xs mt-1">Memeriksa ketersediaan email...</p>
        )}
        {errors.email && (
          <p className="text-red-500 text-xs mt-1 flex items-center">
            <FaExclamationCircle className="mr-1" /> {errors.email}
          </p>
        )}
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
          NIM <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          name="nim"
          value={formData.nim}
          onChange={handleValidatedChange}
          className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg border ${
            errors.nim
              ? "border-red-500"
              : darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-300"
          }`}
          placeholder="Masukkan NIM (8-12 digit)"
          required
        />
        {errors.nim && (
          <p className="text-red-500 text-xs mt-1 flex items-center">
            <FaExclamationCircle className="mr-1" /> {errors.nim}
          </p>
        )}
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
          Nama Lengkap <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="namaLengkap"
          value={formData.namaLengkap}
          onChange={handleChange}
          className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg border ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
          }`}
          placeholder="Masukkan nama lengkap"
          required
        />
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
          Program Studi <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="prodi"
          value={formData.prodi}
          onChange={handleChange}
          className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg border ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
          }`}
          placeholder="Contoh: Teknik Informatika"
          required
        />
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
          Asal Sekolah/Instansi <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="asalSekolah"
          value={formData.asalSekolah}
          onChange={handleChange}
          className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg border ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
          }`}
          placeholder="Masukkan asal sekolah/instansi"
          required
        />
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
          Jurusan SMK (jika dari SMK)
        </label>
        <input
          type="text"
          name="smkJurusan"
          value={formData.smkJurusan}
          onChange={handleChange}
          className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg border ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
          }`}
          placeholder="Kosongkan jika bukan dari SMK"
        />
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
          Tanggal Lahir <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="tanggalLahir"
          value={formData.tanggalLahir}
          onChange={handleValidatedChange}
          min={minDate}
          max={maxDate}
          className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg border ${
            errors.tanggalLahir
              ? "border-red-500"
              : darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-300"
          }`}
          required
        />

        {errors.tanggalLahir && (
          <p className="text-red-500 text-xs mt-1 flex items-center">
            <FaExclamationCircle className="mr-1" /> {errors.tanggalLahir}
          </p>
        )}
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
          No WhatsApp <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          name="noTelp"
          value={formData.noTelp}
          onChange={handleValidatedChange}
          className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg border ${
            errors.noTelp
              ? "border-red-500"
              : darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-300"
          }`}
          placeholder="Contoh: 08xxxxxxxx"
          required
        />
        {errors.noTelp && (
          <p className="text-red-500 text-xs mt-1 flex items-center">
            <FaExclamationCircle className="mr-1" /> {errors.noTelp}
          </p>
        )}
      </div>

      <div className="mb-3 sm:mb-4">
        <label className="block mb-1 sm:mb-2 font-medium text-sm sm:text-base">
          Alamat Lengkap Sekarang <span className="text-red-500">*</span>
        </label>
        <textarea
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
          className={`w-full p-2 sm:p-3 text-sm sm:text-base rounded-lg border ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
          }`}
          placeholder="Masukkan alamat lengkap saat ini"
          rows={3}
          required
        />
      </div>

      <div className="flex justify-end mt-4 sm:mt-6">
        <button
          type="button"
          onClick={handleNextStep}
          disabled={isCheckingEmail}
          className={`px-4 cursor-pointer sm:px-6 py-2 sm:py-3 bg-blue-500 text-white text-sm sm:text-base rounded-lg hover:bg-blue-600 transition flex items-center gap-2 ${
            isCheckingEmail ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isCheckingEmail ? "Memeriksa..." : "Selanjutnya"}{" "}
          <FaArrowLeft className="rotate-180 text-xs sm:text-sm" />
        </button>
      </div>
    </div>
  );
};

export default Step1;
