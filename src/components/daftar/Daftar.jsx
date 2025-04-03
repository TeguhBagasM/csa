import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import StepIndicator from "./StepIndicator";
import { submitToSheetDB } from "../../api/sheetdbService";

const Daftar = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    email: "",
    nim: "",
    namaLengkap: "",
    prodi: "",
    asalSekolah: "",
    smkJurusan: "",
    tanggalLahir: "",
    noTelp: "",
    alamat: "",
    divisi: "",
    knowledgeScale: 1,
    pengalaman: "",
    motivasi: "",
    igProof: false,
    youtubeProof: false,
    waProof: false,
  });

  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const nextStep = () => {
    if (step === 0) {
      if (!agreedToTerms) {
        toast.error("Anda harus menyetujui syarat pendaftaran terlebih dahulu", {
          theme: darkMode ? "dark" : "light",
          position: "top-center",
        });
        return;
      }
    } else if (step === 1) {
      if (
        !formData.email ||
        !formData.nim ||
        !formData.namaLengkap ||
        !formData.prodi ||
        !formData.asalSekolah ||
        !formData.tanggalLahir ||
        !formData.noTelp ||
        !formData.alamat
      ) {
        toast.error("Harap isi semua data diri dengan lengkap", {
          theme: darkMode ? "dark" : "light",
          position: "top-center",
        });
        return;
      }
    } else if (step === 2) {
      if (!formData.divisi || !formData.pengalaman || !formData.motivasi) {
        toast.error("Harap isi semua informasi divisi dengan lengkap", {
          theme: darkMode ? "dark" : "light",
          position: "top-center",
        });
        return;
      }
    }

    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!formData.igProof || !formData.youtubeProof || !formData.waProof) {
      toast.error("Harap konfirmasi bahwa Anda telah mengikuti semua media sosial CSA", {
        theme: darkMode ? "dark" : "light",
        position: "top-center",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await submitToSheetDB(formData);

      if (response && response.created) {
        // Tampilkan toast sukses
        toast.success("Pendaftaran berhasil!", {
          theme: darkMode ? "dark" : "light",
          position: "top-center",
          autoClose: 5000, // Tetap tampil selama 5 detik
        });

        // Set status sukses
        setSuccessSubmit(true);

        // Tunggu 3 detik sebelum redirect
        setTimeout(() => {
          window.location.href = "/";

          // Reset form (meskipun akan redirect, ini adalah praktik yang baik)
          setFormData({
            email: "",
            nim: "",
            namaLengkap: "",
            prodi: "",
            asalSekolah: "",
            smkJurusan: "",
            tanggalLahir: "",
            noTelp: "",
            alamat: "",
            divisi: "",
            knowledgeScale: 1,
            pengalaman: "",
            motivasi: "",
            igProof: false,
            youtubeProof: false,
            waProof: false,
          });
          setStep(0);
          setAgreedToTerms(false);
          setSuccessSubmit(false);
        }, 3000); // Delay 3 detik
      } else if (response && response.error) {
        // Tangani error spesifik dari API
        toast.error(response.error, {
          theme: darkMode ? "dark" : "light",
          position: "top-center",
        });
        setLoading(false);
      } else {
        throw new Error("Respons tidak valid dari server");
      }
    } catch (error) {
      console.error("Error saat mengirim formulir:", error);
      toast.error("Terjadi kesalahan saat mengirim data. Silakan coba lagi.", {
        theme: darkMode ? "dark" : "light",
        position: "top-center",
      });
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <Step0
            nextStep={nextStep}
            darkMode={darkMode}
            agreedToTerms={agreedToTerms}
            setAgreedToTerms={setAgreedToTerms}
          />
        );
      case 1:
        return (
          <Step1
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            darkMode={darkMode}
          />
        );
      case 2:
        return (
          <Step2
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
            darkMode={darkMode}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            handleChange={handleChange}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
            loading={loading}
            successSubmit={successSubmit}
            darkMode={darkMode}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`min-h-screen pt-24 sm:pt-20 md:pt-24 pb-12 sm:pb-16 px-4 md:px-6 lg:px-0 overflow-hidden ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className={`inline-flex items-center gap-2 mb-4 sm:mb-6 ${
              darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-800"
            } transition-colors text-sm sm:text-base`}
          >
            <FaArrowLeft className="text-xs sm:text-sm" /> Kembali ke Beranda
          </Link>

          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-xl p-4 sm:p-6 md:p-8 shadow-lg`}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
              Pendaftaran Anggota CSA
            </h1>
            <p
              className={`mb-6 sm:mb-8 text-sm sm:text-base ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Lengkapi formulir di bawah ini untuk bergabung dengan Creative Student Association
            </p>

            {step > 0 && <StepIndicator step={step} darkMode={darkMode} />}

            <form onSubmit={handleSubmit}>{renderStep()}</form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
