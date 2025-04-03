import React, { useEffect } from "react";
import Banner from "../assets/bg.jpg";
import Hero from "../assets/mengapa-kami.jpeg";
import { FaFlag, FaUserFriends } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 200}
      className={`w-full flex items-center gap-3 p-3 lg:p-5 ${
        title === "Platform untuk Inovasi & Kolaborasi" ? `border-y border-white/70` : ``
      } hover:bg-white/10 transition-all duration-300`}
    >
      <div className="min-w-12 h-12 border-2 border-white/80 bg-transparent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
        <Icon className="max-sm:text-xl sm:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="max-sm:text-sm sm:text-xl lg:text-sm xl:text-xl 2xl:text-2xl font-semibold">
          {title}
        </p>
        <p className="max-sm:text-xs sm:text-xs lg:text-[0.60rem] xl:text-sm 2xl:text-base text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const MengapaKami = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
    });

    window.addEventListener("scroll", () => {
      AOS.refresh();
    });
  }, []);

  const features = [
    {
      icon: MdLaptopChromebook,
      title: "Komunitas Teknologi & Kreativitas Terdepan",
      description:
        "CSA (Creative Student Association) adalah pilihan utama bagi mahasiswa yang ingin berkembang di bidang IT dan kreativitas.",
    },
    {
      icon: FaUserFriends,
      title: "Wadah Kolaborasi & Pengembangan Skill",
      description: "Menyediakan wadah untuk inovasi serta kolaborasi lintas divisi.",
    },
    {
      icon: FaFlag,
      title: "Dukungan dari STMIK Mardira Indonesia",
      description:
        "Didukung oleh STMIK Mardira Indonesia untuk memfasilitasi pertukaran ide dan pengembangan anggota.",
    },
  ];

  const MobileVersion = (
    <div className="lg:hidden w-full min-h-screen flex items-center justify-center px-4">
      <div
        data-aos="fade-up"
        style={{ backgroundImage: `url(${Banner})` }}
        className="w-full h-full rounded-3xl bg-cover bg-center shadow-2xl overflow-hidden py-10 max-sm:mt-15 sm:mt-15"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-full max-sm:px-5 sm:px-20 flex flex-col items-center justify-center"
        >
          <h2 className="max-sm:text-3xl sm:text-4xl font-bold text-white mb-3 text-center">
            Mengapa CSA?
          </h2>
          <p className="max-sm:text-sm sm:text-xl text-gray-300 text-center">
            Bergabunglah dengan komunitas teknologi dan kreativitas yang mendukung pengembangan
            keterampilan, inovasi, serta kolaborasi lintas disiplin.
          </p>
        </div>

        <div className="w-full flex flex-col items-center px-4 gap-6 mt-8">
          <div data-aos="zoom-in" data-aos-delay="300" className="w-11/12">
            <img src={Hero} alt="CSA Hero" className="w-full h-full rounded-2xl shadow-lg" />
          </div>

          <div className="w-11/12 text-white">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const DesktopVersion = (
    <div className="max-lg:hidden lg:flex w-full min-h-screen items-center justify-center p-4">
      <div
        data-aos="fade-up"
        style={{ backgroundImage: `url(${Banner})` }}
        className="w-11/12 h-full pb-5 rounded-2xl bg-cover bg-center shadow-2xl overflow-hidden"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-3/5 mx-auto flex flex-col items-center justify-center pt-8"
        >
          <h2 className="max-sm:text-4xl sm:text-4xl font-bold text-white mb-3 text-center">
            Mengapa CSA?
          </h2>
          <p className="max-sm:text-sm sm:text-xl text-gray-300 text-center">
            Bergabunglah dengan komunitas teknologi dan kreativitas yang mendukung pengembangan
            keterampilan, inovasi, serta kolaborasi lintas disiplin.
          </p>
        </div>

        <div className="w-full h-full flex items-center justify-center mt-8 px-14 gap-10 pb-8">
          <div data-aos="zoom-in" data-aos-delay="300" className="w-1/2">
            <img src={Hero} alt="CSA Hero" className="w-full h-full rounded-xl shadow-lg" />
          </div>

          <div className="w-1/2 text-white">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {MobileVersion}
      {DesktopVersion}
    </>
  );
};

export default MengapaKami;
