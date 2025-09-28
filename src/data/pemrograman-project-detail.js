import projectImage1 from "../assets/projects/pemrograman/quizzy.png";
import projectImage2 from "../assets/projects/pemrograman/spendtvise.png";
import projectImage3 from "../assets/projects/pemrograman/panori.png";
import projectImage4 from "../assets/projects/pemrograman/csa-tasktify.png";

const projectsData = {
  csatasktify: {
    title: "CSA Tasktify",
    description:
      "CSA Tasktify adalah aplikasi To-Do List berbasis web yang dibangun menggunakan React.js, Tailwind CSS, dan Supabase. Aplikasi ini dirancang untuk membantu pengguna mengelola aktivitas secara terorganisir melalui sistem kategori, task, dan subtask. Setiap task dapat memiliki catatan (notes) untuk menyimpan detail penting, menjadikan CSA Tasktify solusi efektif dalam mengatur kegiatan seperti kuliah, magang, maupun proyek pribadi dengan tampilan yang modern, intuitif, dan responsif.",
    image: projectImage4,
    demoLink: "https://csa-tasktify.vercel.app/",
    tech: ["React.js", "TailwindCSS", "Supabase"],
    features: [
      "Manajemen kategori (kuliah, magang, proyek, dll)",
      "Pembuatan task dan subtask yang terstruktur",
      "Fitur notes untuk mencatat detail tambahan",
      "Antarmuka modern, ringan, dan responsif",
      "Sinkronisasi data real-time menggunakan Supabase",
    ],
    team: [{ name: "Teguh Bagas M", role: "Ketua CSA" }],
    timeline: [
      { date: "September 2025", milestone: "Perancangan fitur dan struktur database" },
      { date: "Oktober 2025", milestone: "Uji coba dan optimalisasi Rilis versi publik" },
    ],
    challenges: [
      "Membangun relasi dinamis antara kategori, task, dan subtask di Supabase",
      "Mengimplementasikan sistem notes yang efisien per task",
      "Menjaga performa dan responsivitas UI di berbagai perangkat",
    ],
  },
  panoricam: {
    title: "Panoricam",
    description:
      "Panoricam adalah layanan photobooth modern berbasis web yang dibangun menggunakan Laravel dan Tailwind CSS. Aplikasi ini memungkinkan pengguna mengabadikan momen spesial dengan mudah dan cepat melalui antarmuka yang responsif dan tampilan modern. Setiap foto langsung dihasilkan secara digital dan dapat diakses atau dibagikan secara instan.",
    image: projectImage3,
    demoLink: "https://app.panoricam.fun/",
    tech: ["Laravel", "TailwindCSS"],
    features: [
      "Pengambilan foto otomatis",
      "Galeri digital instan",
      "Desain responsif dan modern",
      "Antarmuka mudah digunakan",
    ],
    team: [
      { name: "Fiko Abdigusti", role: "Angkatan 8" },
      { name: "Naura Khoirunnisa", role: "Angkatan 8" },
      { name: "Rendi Gumilar Saputra", role: "Angkatan 8" },
      { name: "Dwi Rosa Handayani", role: "Angkatan 8" },
      { name: "Alan Krisna Difa Yana", role: "Tim Kelompok" },
    ],
    timeline: [
      { date: "April 2025", milestone: "Inisiasi dan perancangan sistem" },
      { date: "Mei 2025", milestone: "Pengembangan MVP" },
      { date: "Juni 2025", milestone: "Uji Coba" },
      { date: "Juli 2025", milestone: "Rilis dan implementasi" },
    ],
    challenges: [
      "Membuat sistem photobooth otomatis berbasis web",
      "Mengelola performa dan kecepatan akses di hosting shared (Niagahoster)",
      "Menyesuaikan tampilan agar optimal di berbagai perangkat",
    ],
  },
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
