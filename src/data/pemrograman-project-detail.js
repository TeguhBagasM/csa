import projectImage1 from "../assets/projects/pemrograman/quizzy.png";
import projectImage2 from "../assets/projects/pemrograman/spendwise.png";

const projectsData = {
  csa_quizzy: {
    title: "CSA Quizzy",
    description:
      "CSA Quizzy adalah aplikasi kuis berbasis web yang dibangun menggunakan Next.js, TypeScript, dan Tailwind CSS. Aplikasi ini menyediakan berbagai kuis interaktif dengan topik seputar teknologi dan pengembangan web, seperti HTML, CSS, PHP, JavaScript, dan Laravel. Pengguna dapat memilih kategori kuis, menjawab soal pilihan ganda, melihat jawaban benar atau salah secara langsung, serta mendapatkan skor akhir berdasarkan jumlah jawaban yang benar.",
    image: projectImage1,
    demoLink: "https://csa-quizzy.vercel.app",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    features: [
      "Pilihan kategori kuis",
      "Soal pilihan ganda dengan feedback langsung",
      "Penghitungan skor secara otomatis",
      "Tampilan responsif dan interaktif",
      "Mode gelap (Dark Mode)",
    ],
    team: [{ name: "Teguh Bagas M", role: "Ketua CSA" }],

    timeline: [
      { date: "November 2024", milestone: "Inisiasi Proyek" },
      { date: "Desember 2024", milestone: "Pengembangan MVP" },
      { date: "Desember 2024", milestone: "Uji Coba" },
      { date: "Januari 2024", milestone: "Rilis Publik" },
    ],
    challenges: [
      "Membuat sistem penilaian kuis secara otomatis",
      "Menyesuaikan tampilan agar responsif di berbagai perangkat",
      "Mengoptimalkan performa aplikasi untuk pengalaman pengguna yang lebih baik",
    ],
  },
  spendtvise: {
    title: "Spendtvise",
    description:
      "Spendtvise adalah aplikasi atau sistem yang digunakan untuk mencatat, mengelola, dan menganalisis pengeluaran seseorang atau bisnis.",
    image: projectImage2,
    demoLink: "https://spendtvise.vercel.app/",
    tech: ["React.js", "Express.js", "TailwindCSS", "Node.js"],
    features: [
      "Pencatatan Transaksi",
      "Menampilkan ringkasan pengeluaran dalam bentuk grafik atau tabel.",
      "Penghitungan saldo dengan Tepat",
      "Tampilan responsif dan interaktif",
      "Mode gelap (Dark Mode)",
    ],
    team: [
      { name: "Teguh Bagas M", role: "Ketua CSA" },
      { name: "Fiko Abdigusti", role: "Angkatan 8" },
    ],

    timeline: [
      { date: "Maret 2025", milestone: "Inisiasi Proyek" },
      { date: "Maret 2024", milestone: "Uji Coba" },
      { date: "Maret 2024", milestone: "Rilis Publik" },
    ],
    challenges: [
      "Menyusun algoritma pencatatan transaksi yang efisien dan akurat untuk memastikan saldo selalu terhitung dengan benar.",
      "Mengembangkan fitur analisis pengeluaran dalam bentuk grafik interaktif yang mudah dipahami",
      "Menyesuaikan tampilan agar responsif di berbagai perangkat",
      "Mengintegrasikan backend dengan frontend secara optimal untuk performa yang lebih cepat dan stabil.",
    ],
  },
};

export default projectsData;
