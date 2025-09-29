import quizzyCsa from "../assets/projects/pemrograman/quizzy.png";
import spendTvise from "../assets/projects/pemrograman/spendtvise.png";
import panoriCam from "../assets/projects/pemrograman/panori.png";
import csaTasktify from "../assets/projects/pemrograman/csa-tasktify.png";

import Mulmed1 from "../assets/projects/multimedia/mulmed1.png";
import Mulmed2 from "../assets/projects/multimedia/mulmed2.jpeg";
import Mulmed3 from "../assets/projects/multimedia/mulmed3.jpg";
import Mulmed4 from "../assets/projects/multimedia/mulmed4.png";

const projects = {
  programming: [
    {
      id: "csatasktify",
      title: "CSA Tasktify",
      description:
        "CSA Tasktify, sebuah website To-Do List App yang dibangun menggunakan React.js, Tailwind CSS, dan Supabase sebagai backend database. Aplikasi ini dirancang untuk membantu pengguna mengelola aktivitas secara terstruktur melalui sistem kategori, task, dan subtask, serta dilengkapi dengan fitur notes untuk mencatat detail penting setiap task.",
      image: csaTasktify,
      techStack: ["React.js", "Typescript", "Tailwind", "Supabase"],
      year: "2025",
      demoUrl: "https://csa-tasktify.vercel.app/",
      isRepo: false,
      //   githubUrl: "https://github.com/TeguhBagasM/csa-quizzy",
      status: "Completed",
    },
    {
      id: "panoricam",
      title: "Panoricam",
      description:
        "Panoricam adalah layanan photobooth modern yang menghadirkan pengalaman berfoto seru dan kekinian untuk segala jenis acara.",
      image: panoriCam,
      techStack: ["Laravel", "Tailwind"],
      year: "2025",
      // demoUrl: "https://app.panoricam.fun/",
      isRepo: false,
      //   githubUrl: "https://github.com/TeguhBagasM/csa-quizzy",
      status: "Completed",
    },
    {
      id: "csa_quizzy",
      title: "CSA Quizzy",
      description:
        "CSA Quizzy adalah aplikasi kuis berbasis web yang dibangun dengan Next.js, TypeScript, dan Tailwind CSS. Aplikasi ini memungkinkan pengguna untuk mengikuti berbagai kuis bertema teknologi.",
      image: quizzyCsa,
      techStack: ["Next.js", "TypeScript", "Tailwind"],
      year: "2024",
      demoUrl: "https://csa-quizzy.vercel.app",
      isRepo: false,
      //   githubUrl: "https://github.com/TeguhBagasM/csa-quizzy",
      status: "Completed",
    },
    {
      id: "spendtvise",
      title: "Spendtvise",
      description:
        "Spendtvise adalah aplikasi atau sistem yang digunakan untuk mencatat, mengelola, dan menganalisis pengeluaran seseorang atau bisnis.",
      image: spendTvise,
      techStack: ["React.js", "Express.js", "TailwindCSS", "Node.js"],
      year: "2025",
      demoUrl: "https://spendtvise.vercel.app/",
      isRepo: false,
      status: "Completed",
    },
  ],
  multimedia: [
    {
      id: "poster_infografis",
      title: "Poster Infografis",
      hasDetail: false,
      creator: "Siti Auliya",
      description:
        "Poster ini menggunakan kombinasi elemen visual (ilustrasi kartun, ikon, warna) dan teks singkat untuk menyajikan informasi yang kompleks secara ringkas, padat, dan menarik. Poster ini dibuat untuk memberikan pengetahuan dan pemahaman kepada audiens mengenai apa itu Emotional Intelligence, mengapa itu penting di dunia kerja, dan bagaimana cara meningkatkannya.",
      image: Mulmed4,
      techStack: ["Canva"],
      // demoUrl: "-",
      category: "Poster",
      year: "2025",
    },
    {
      id: "hot_chocolate",
      title: "Hot Chocolate",
      hasDetail: false,
      creator: "Muhammad Sidqi R",
      description:
        "Hot Chocolate adalah proyek animasi 3D yang dibuat menggunakan Blender dan dirancang untuk menampilkan kehangatan suasana saat menikmati secangkir cokelat panas. Melalui animasi ini, penonton diajak merasakan sensasi nyaman dan estetika visual yang lembut, dipadukan dengan pencahayaan dan tekstur realistis yang memperkuat suasana cozy.",
      image: Mulmed2,
      techStack: ["Blender"],
      demoUrl: "https://youtube.com/shorts/531_L_YFIIU?si=vG3gbvwHzA7We1Ow",
      category: "Animasi",
      year: "2025",
    },
    {
      id: "poster_promosi",
      title: "Poster Promosi",
      hasDetail: false,
      creator: "Muhammad Sidqi R",
      description:
        "Poster Promosi adalah proyek desain grafis yang dibuat menggunakan Adobe Illustrator dengan tujuan membantu perusahaan di bidang jasa dalam mempromosikan layanan mereka secara menarik dan profesional. Melalui poster ini, pembelajar menonjolkan kemampuan dalam mengolah elemen visual seperti tipografi, warna, dan komposisi untuk menciptakan desain yang komunikatif dan estetis",
      image: Mulmed3,
      techStack: ["Adobe Ilustrator"],
      // demoUrl: "-",
      category: "Poster",
      year: "2025",
    },
    {
      id: "ppdb_al_fadilah",
      title: "PPDB MA Al-Fadilah Cipatat",
      description:
        "Perancangan antarmuka pengguna (UI/UX) untuk website PPDB MA Al-Fadilah Cipatat. Proyek ini mencakup desain navigasi utama, tata letak halaman, dan identitas visual yang menarik dan responsif untuk meningkatkan pengalaman pengguna.",
      image: Mulmed1,
      techStack: ["Figma"],
      demoUrl:
        "https://www.figma.com/proto/RtIb7yHoLK2tDGd7UmTYta/mockup-1?node-id=2206-87&scaling=scale-down&content-scaling=fixed&page-id=2162%3A353&starting-point-node-id=2256%3A825",
      category: "UI/UX Design",
    },
  ],
};

export default projects;
