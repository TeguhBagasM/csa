import quizzyCsa from "../assets/projects/pemrograman/quizzy.png";
import spendTvise from "../assets/projects/pemrograman/spendtvise.png";
import panoriCam from "../assets/projects/pemrograman/panori.png";
import csaTasktify from "../assets/projects/pemrograman/csa-tasktify.png";
import Thieverse from "../assets/projects/pemrograman/thieverse.png";
import csaLearnify from "../assets/projects/pemrograman/csa-learnify.jpeg";
import healthBooster from "../assets/projects/pemrograman/health-booster.jpeg";
import nisrina from "../assets/projects/pemrograman/nisrina.jpeg";
import clyn from "../assets/projects/pemrograman/clyn.png";
import jimlyai from "../assets/projects/pemrograman/jimly-ai.png";

import Mulmed1 from "../assets/projects/multimedia/mulmed1.png";
import Mulmed2 from "../assets/projects/multimedia/mulmed2.jpeg";
import Mulmed3 from "../assets/projects/multimedia/mulmed3.jpg";
import Mulmed4 from "../assets/projects/multimedia/mulmed4.png";
import Mulmed5 from "../assets/projects/multimedia/mulmed5.jpg";
import Mulmed6 from "../assets/projects/multimedia/mulmed6.jpeg";
import Mulmed7 from "../assets/projects/multimedia/mulmed7.jpeg";
import Mulmed8 from "../assets/projects/multimedia/mulmed8.jpeg";
import Mulmed9 from "../assets/projects/multimedia/mulmed9.jpeg";
import Mulmed10 from "../assets/projects/multimedia/mulmed10.jpeg";
import OrangeMilk from "../assets/projects/multimedia/orange-milk.jpg";
import Soda from "../assets/projects/multimedia/soda-syrup.jpg";
import Sushi from "../assets/projects/multimedia/sushi.jpg";
import streetfg from "../assets/projects/multimedia/mulmed-farhan.jpeg";
import panningfg from "../assets/projects/multimedia/mulmed-farhan2.jpeg";

import Thumbnail from "../assets/projects/multimedia/thumbnaill.jpg";

const projects = {
  programming: [
    {
      id: "csa_learnify",
      title: "CSA Learnify",
      description:
        "CSA Learnify merupakan platform pembelajaran internal yang dirancang untuk memfasilitasi anggota CSA agar dapat belajar di mana saja dan kapan saja. Platform ini dibagi ke dalam beberapa kelas yang disesuaikan dengan tingkat kemampuan anggota, serta dilengkapi dengan mentor dari setiap divisi yang siap membimbing dalam proses pembelajaran.",
      image: csaLearnify,
      techStack: ["React Native", "Node JS", "Mysql"],
      year: "2025",
      demoUrl: "https://youtu.be/ZG5iya_eYJE",
      githubUrl: "https://github.com/Noptzy/csa-learnify",
      team: ["Tegar Dinar H.I", "Nida Mutmainah"],
      timeline: "August 2025 - September 2025",
      status: "Completed",
      hasDetail: false,
    },
    {
      id: "Web_Tracking_Baca",
      title: "Website Tracking Bacaan",
      hasDetail: false,
      creator: "Nisrina Nur Azizah",
      description: "Website ini adalah website berbasis CSS dan PHP dasar untuk merekam jejak bacaan buku pengguna. Pengguna dapat login dan memanfaatkan website ini untuk menambahkan buku ke koleksi. Setelah itu, pengguna dapat menyimpan buku tersebut ke kategori buku yang belum dibaca, sedang dibaca, atau telah dibaca. Dengan website sederhana ini, tracking bacaan akan jadi lebih mudah sehingga kegiatan membaca pun akan jadi lebih menyenangkan.",
      image: nisrina,
      techStack: ["PHP", "CSS"],
      // demoUrl: "-",
      category: "Website",
      year: "2025"
    },
      {
      id: "CLYN",
      title: "CLYN - Color Accessibility Platform",
      hasDetail: false,
      creator: "Nida Mutmainah",
      description: "CLYN adalah platform yang membantu orang dengan gangguan penglihatan warna mengenali warna pada benda sehari-hari melalui fitur pemindaian warna (Scan Color) dan eksplorasi warna berdasarkan kode warna. Platform ini dirancang untuk meningkatkan aksesibilitas warna dan membantu pengguna memahami warna dengan lebih mudah. CLYN mengutamakan privasi pengguna dengan pemrosesan di sisi perangkat tanpa backend.",
      image: clyn,
      techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      demoUrl: "https://withclyn.vercel.app/",
      category: "Website",
      year: "2026"
    },
    {
      id: "Jimly_AI",
      title: "Jimly AI - Chatbot Hukum",
      hasDetail: false,
      creator: "Nida Mutmainah",
      description: "Jimly AI adalah chatbot hukum yang membantu pengguna memahami konsep dan persoalan hukum melalui penjelasan dengan bahasa yang sederhana dan mudah dipahami. Basis pengetahuannya mengacu pada buku-buku karya Prof. Jimly Asshiddiqie, sehingga pengguna dapat mengeksplorasi wawasan hukum dengan lebih mudah melalui interaksi percakapan.",
      image: jimlyai,
      techStack: [
        "Astro",
        "React",
        "Tailwind CSS",
        "Neon",
        "Drizzle ORM",
        "Better Auth",
        "Vercel"
      ],
      demoUrl: "https://jimly-ai.vercel.app/",
      category: "AI",
      year: "2026"
    },
    {
      id: "lp_healthbooster",
      title: "Health Booster",
      team: "Nida Mutmainah",
      description:
        "Landing page Health Booster merupakan demo websiteyang dirancang khusus untuk mempromosikan dan menjual berbagai menu salad dan makanan sehat lainnya",
      image: healthBooster,
      techStack: ["HTML, CSS, Javascript"],
      demoUrl: "https://mutmainahnida.github.io/Health-Booster/",
      timeline: "June 2024 - July 2024",
      year: "2025",
      status: "Completed",
      hasDetail: false,
    },
    {
      id: "thieverse",
      title: "Thieverse",
      description:
        "Thieverse adalah website personal portfolio sekaligus blog teknologi yang menampilkan karya dan tulisan seputar dunia IT. Dibangun dengan Next.js 14, Velite, Tailwind CSS, Shadcn/ui, dan TypeScript, Thieverse menghadirkan tampilan modern, performa cepat, dan pengalaman pengguna yang nyaman",
      image: Thieverse,
      techStack: ["Next.js", "TypeScript", "TailwindCSS", "Velite", "Shadcn/ui"],
      year: "2024",
      demoUrl: "https://thieverse.vercel.app/",
      githubUrl: false,
      team: "Teguh Bagas M",
      timeline: "Maret 2024 - Juni 2024",
      status: "Completed",
      hasDetail: false,
    },
    {
      id: "csa_tasktify",
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
      hasDetail: true,
    },
  ],
  multimedia: [
    {
      id: "3d_Sushi",
      title: "3D Sushi",
      hasDetail: false,
      creator: "Cellomita Rahdianti Putri",
      description: "Karya 3D modeling berupa visualisasi sushi yang disajikan di atas nampan berwarna coklat gelap. Objek menampilkan tiga potong sushi dengan detail tekstur nasi dan topping ikan, dilengkapi mangkuk kecil berisi saus serta sumpit sebagai pelengkap. Latar belakang merah muda dan pencahayaan yang terarah menghasilkan tampilan produk makanan yang estetik dan menarik. Seluruh visual dibuat menggunakan Blender dengan fokus pada pemodelan bentuk, material, tekstur, dan rendering.",
      image: Sushi,
      techStack: ["Blender"],
      // demoUrl: "-",
      category: "3D Modeling",
      year: "2026"
    },
    {
      id: "3d_SodaSyrup",
      title: "3D Soda Syrup",
      hasDetail: false,
      creator: "Cellomita Rahdianti Putri",
      description: "Karya 3D modeling berupa visualisasi soda syrup dalam gelas kaca transparan dengan perpaduan warna hijau dan biru. Desain menampilkan cairan berlapis warna, potongan es transparan di bagian atas, serta efek refleksi dan pembiasan cahaya pada permukaan kaca. Proses pembuatan menggunakan Blender dengan pengaturan material, pencahayaan, dan rendering untuk menghasilkan visual produk yang menarik dan realistis.",
      image: Soda,
      techStack: ["Blender"],
      // demoUrl: "-",
      category: "3D Modeling",
      year: "2026"
    },
    {
      id: "3d_OrangeMilk",
      title: "3D Orange Milk",
      hasDetail: false,
      creator: "Cellomita Rahdianti Putri",
      description: "Karya 3D modeling berupa visualisasi produk Orange Milk dengan konsep segar dan modern. Objek menampilkan kemasan minuman transparan berisi cairan berwarna oranye, buah jeruk, percikan cairan, dan tetesan air yang memberikan kesan dingin serta menyegarkan. Perpaduan warna oranye dan latar belakang merah muda, didukung material transparan dan pencahayaan lembut, menghasilkan visual produk bergaya komersial menggunakan Blender.",
      image: OrangeMilk,
      techStack: ["Blender"],
      // demoUrl: "-",
      category: "3D Modeling",
      year: "2026"
    },
    {
      id: "photostrip_design",
      title: "Photostrip Design - OSMARU SMTIK MI 2025",
      hasDetail: false,
      creator: ["Nur", "Sidqi", "Riski", "Mita", "Mima", "Iasha"],
      description:
        "Photostrip Design ini merupakan rancangan frame foto yang digunakan untuk booth photo atau photobooth 'Panoricam'. Desain ini dibuat secara khusus untuk memeriahkan acara OSMARU SMTIK MI 2025, dengan tujuan memberikan pengalaman berfoto yang lebih seru, estetik, dan berkesan bagi para peserta.",
      image: Mulmed6,
      techStack: ["Adobe Illustrator", "Canva"],
      // demoUrl: "-",
      category: "Design",
      year: "2025",
    },
    {
      id: "Photography",
      title: "Photography Panning Shoot",
      hasDetail: false,
      creator: "Asep Farhan Pratama",
      description: "Photography dengan teknik pengambilan gambar panning shoot .",
      image: panningfg,
      techStack: ["Adobe Photoshop"],
      // demoUrl: "-",
      category: "Photography",
      year: "2026"
    },
    {
      id: "Photography",
      title: "Street Photography",
      hasDetail: false,
      creator: "Asep Farhan Pratama",
      description: "Street Photography.",
      image: streetfg,
      techStack: ["Adobe Photoshop"],
      // demoUrl: "-",
      category: "photography",
      year: "2026"
    },
    {
      id: "ui_logistik_mau_maju",
      title: "UI Mobile Perusahaan Logistik 'Mau Maju'",
      hasDetail: false,
      creator: "Cellomita Rahdianti Putri",
      description:
        "UI mobile ini merupakan hasil perancangan sistem informasi untuk perusahaan logistik 'Mau Maju'. Desain dibuat menggunakan Figma dengan fokus pada kemudahan pengguna dalam melakukan pelacakan pengiriman, input data pengiriman, dan monitoring status barang secara real-time. Tampilan dirancang menggunakan kombinasi warna merah dan putih untuk memberikan kesan profesional, tegas, serta sesuai dengan identitas brand. Prototype ini menampilkan alur mulai dari login, dashboard pengiriman, form input, hingga detail tracking berbasis peta.",
      image: Mulmed8,
      techStack: ["Figma"],
      demoUrl:
        "https://www.figma.com/proto/fZNR87gsaOlfJaZ8nv4B7W/PERANCANGAN-SISTEM-INFORMASI---UI-MAU-MAJU-LOGISTIK?node-id=62-2&t=l9IfaFpqKu6tf5lM-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=62%3A2",
      category: "UI/UX Design",
      year: "2025",
    },
    {
      id: "3d_dessert_model",
      title: "3D Dessert Model",
      hasDetail: false,
      creator: "Cellomita Rahdianti Putri",
      description:
        "3D model ini dibuat menggunakan Blender dengan konsep dessert manis berupa pudding berlapis saus cokelat, dihiasi dengan sebatang cokelat, dua stik wafer, dan sebuah ceri di atasnya. Desain ini menonjolkan gaya minimalis dengan warna cerah dan kontras untuk memberikan kesan playful serta menggugah selera. Visual yang sederhana namun detail ini dapat digunakan sebagai aset ilustrasi digital, materi promosi, atau elemen dekoratif pada media kreatif.",
      image: Mulmed9,
      techStack: ["Blender"],
      // demoUrl: "-",
      category: "3D Design",
      year: "2025",
    },
    {
      id: "3d_mushroom_house",
      title: "3D Mushroom House",
      hasDetail: false,
      creator: "Cellomita Rahdianti Putri",
      description:
        "3D model ini dibuat menggunakan Blender dengan konsep rumah jamur bergaya fantasi. Desain menampilkan sebuah rumah berbentuk jamur berwarna merah dengan bintik putih, dilengkapi pintu kayu, pagar sederhana, bebatuan, dan jalan setapak di atas rumput hijau. Model ini mengusung gaya low poly yang minimalis namun tetap detail, sehingga cocok digunakan untuk aset game, ilustrasi, atau proyek visual kreatif bertema dongeng dan fantasi.",
      image: Mulmed10,
      techStack: ["Blender"],
      // demoUrl: "-",
      category: "3D Design",
      year: "2025",
    },
    {
      id: "banner_Promisi",
      title: "Banner Promosi",
      hasDetail: false,
      creator: "Muhamad Riski R",
      description:
        "Banner promosi ini adalah hasil desain grafis menggunakan CorelDRAW dengan tujuan mempromosikan produk sepatu terbaru dari KIISAJA Footwear. Desain ini menampilkan koleksi sepatu eksklusif dengan gaya modern Visual menggunakan kombinasi warna biru dengan tipografi tegas untuk menonjolkan brand identity, serta tata letak produk yang rapi agar pesan promosi tersampaikan secara jelas, menarik, dan profesional.",
      image: Mulmed7,
      techStack: ["CorelDRAW"],
      // demoUrl: "-",
      category: "Banner",
      year: "2025",
    },
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
      id: "video_iklan_literasi",
      title: "Video Iklan Layanan Masyarakat - Literasi",
      hasDetail: false,
      creator: ["Nur Auliya Putri", "Siti Auliya", "Evi Febryanti"],
      description:
        "Video Iklan Layanan Masyarakat ini mengangkat tema literasi dengan menampilkan perjalanan pengetahuan yang menginspirasi. Melalui visual dan narasi, karya ini menggambarkan bahwa setiap langkah dalam kehidupan dapat menjadi kesempatan untuk menumbuhkan semangat membaca dan memperluas wawasan.",
      image: Thumbnail,
      techStack: ["Adobe Premiere"],
      demoUrl: "https://youtu.be/E-62OxOWfpw?si=mvJCkYaEgxkhqoUq",
      category: "Video",
      year: "2023",
    },
    {
      id: "iklan_literasi",
      title: "Poster Iklan Layanan Masyarakat",
      hasDetail: false,
      creator: "Nur Auliya Putri",
      description:
        "Poster Iklan Layanan Masyarakat ini mengangkat tema literasi dengan pesan bahwa 'the world belongs to those who read'. Poster ini dibuat untuk mengingatkan pentingnya budaya membaca sebagai pintu menuju pengetahuan dan masa depan yang lebih baik. Desain dikerjakan menggunakan Adobe Photoshop dengan fokus pada penyusunan elemen visual yang komunikatif dan inspiratif.",
      image: Mulmed5,
      techStack: ["Adobe Photoshop"],
      // demoUrl: "-",
      category: "Poster",
      year: "2023",
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
