import React, { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
    });

    window.addEventListener("scroll", () => {
      AOS.refresh();
    });
  }, []);

  const images = Array.from({ length: 12 }, (_, index) => ({
    original: `/images/gallery/${index + 1}.jpeg`,
    thumbnail: `/images/gallery/${index + 1}.jpeg`,
  }));

  return (
    <div className="container mx-auto px-4">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        className={`${darkMode ? "text-gray-100" : "text-gray-800"
          } text-3xl font-bold md:text-4xl text-center mb-10 mt-10`}
      >
        Gallery CSA
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        className="gallery-container"
      >
        <ImageGallery
          items={images}
          showPlayButton={true}
          showFullscreenButton={true}
          slideInterval={3000}
          slideOnThumbnailOver={true}
          showNav={true}
        />
      </div>
    </div>
  );
};

export default Gallery;
