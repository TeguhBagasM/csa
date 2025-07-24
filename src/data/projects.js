import quizzyCsa from "../assets/projects/pemrograman/quizzy.png";
import spendWise from "../assets/projects/pemrograman/spendwise.png";

import Mulmed1 from "../assets/projects/multimedia/mulmed1.png";

const projects = {
  programming: [
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
      //   githubUrl: "https://github.com/username/csa-quizzy",
      status: "Completed",
    },
    {
      id: "spendtvise",
      title: "Spendtvise",
      description:
        "Spendtvise adalah aplikasi atau sistem yang digunakan untuk mencatat, mengelola, dan menganalisis pengeluaran seseorang atau bisnis.",
      image: spendWise,
      techStack: ["React.js", "Express.js", "TailwindCSS", "Node.js"],
      year: "2025",
      demoUrl: "https://spendtvise.vercel.app/",
      isRepo: false,
      status: "Completed",
    },
  ],
  multimedia: [
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
