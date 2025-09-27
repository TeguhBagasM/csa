import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = ({ darkMode }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
    });

    window.addEventListener("scroll", () => {
      AOS.refresh();
    });

    const loadImages = async () => {
      const imagePromises = [];
      const totalImages = 12;

      for (let i = totalImages; i >= 1; i--) {
        const imagePromise = findWorkingImageFormat(i);
        imagePromises.push(imagePromise);
      }

      const loadedImages = await Promise.all(imagePromises);
      const validImages = loadedImages.filter((img) => img !== null);
      setImages(validImages);
    };

    loadImages();
  }, []);

  const findWorkingImageFormat = async (imageNumber) => {
    const formats = ["jpg", "jpeg", "JPG", "JPEG"];

    for (const format of formats) {
      const imagePath = `/images/gallery/${imageNumber}.${format}`;
      try {
        const exists = await checkImageExists(imagePath);
        if (exists) {
          return {
            original: imagePath,
            thumbnail: imagePath,
            // description: `Image ${imageNumber}`,
          };
        }
      } catch (error) {
        continue;
      }
    }

    return null;
  };

  // Fungsi untuk mengecek apakah gambar ada
  const checkImageExists = (imagePath) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = imagePath;
    });
  };

  return (
    <div className="container mx-auto px-4">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        className={`${
          darkMode ? "text-gray-100" : "text-gray-800"
        } text-3xl font-bold md:text-4xl text-center mb-10 mt-10`}
      >
        Program & Kegiatan CSA
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        className="gallery-container"
      >
        {images.length > 0 ? (
          <ImageGallery
            items={images}
            showPlayButton={true}
            showFullscreenButton={true}
            slideInterval={3000}
            slideOnThumbnailOver={true}
            showNav={true}
            lazyLoad={true}
          />
        ) : (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading gallery...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
