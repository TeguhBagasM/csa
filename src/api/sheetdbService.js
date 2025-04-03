import axios from "axios";

const SHEETDB_API_URL = "https://sheetdb.io/api/v1/ii4bl74nq2i73";

export const checkEmailExists = async (email) => {
  try {
    const response = await axios.get(`${SHEETDB_API_URL}/search?email=${email}`);

    return response.data && response.data.length > 0;
  } catch (error) {
    console.error("Error saat memeriksa email:", error);
    throw error;
  }
};

export const submitToSheetDB = async (formData) => {
  try {
    // Periksa apakah email sudah ada
    const emailExists = await checkEmailExists(formData.email);

    if (emailExists) {
      return {
        created: false,
        error: "Email sudah terdaftar. Gunakan email lain."
      };
    }

    let dataToSubmit = { ...formData };

    // Tambahkan timestamp
    dataToSubmit.timestamp = new Date().toISOString();

    const response = await axios.post(SHEETDB_API_URL, {
      data: [dataToSubmit],
    });

    return response.data;
  } catch (error) {
    console.error("Error saat mengirim data ke SheetDB:", error);
    throw error;
  }
};

// Fungsi untuk validasi NIM
export const validateNIM = (nim) => {
  const nimPattern = /^\d{8,12}$/;
  return nimPattern.test(nim);
};

// Fungsi untuk validasi nomor telepon
export const validatePhone = (phone) => {
  const phonePattern = /^(08|\+628)[0-9]{8,12}$/;
  return phonePattern.test(phone);
};

// Fungsi untuk validasi tanggal lahir
export const validateBirthDate = (date) => {
  const selectedDate = new Date(date);
  const currentYear = new Date().getFullYear();

  const minYear = currentYear - 15; // Batas maksimum usia 15 tahun
  const maxYear = currentYear - 100; // Batas minimum usia 100 tahun

  const year = selectedDate.getFullYear();
  return year <= minYear && year >= maxYear;
};
