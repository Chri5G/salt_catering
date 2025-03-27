import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEye, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import useIsMobile from "../isMobile";

const InfiniteCarousel = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const duplicatedImages = [...images, ...images];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Carousel */}
      <div className="overflow-hidden w-full py-4">
        <motion.div
          className="flex gap-6"
          animate={{ x: isMobile ? ["0%", "-300%", "0%"] : ["0%", "-200%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 50,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {duplicatedImages.map((img, idx) => (
            <div
              key={idx}
              className="relative min-w-[80vw] md:min-w-[300px] h-[300px] rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={img}
                alt={`carousel-item-${idx}`}
                className="w-full h-full object-cover"
              />
              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center cursor-pointer"
                onClick={() => openModal(idx % images.length)}
              >
                <FaEye className="text-white opacity-0 group-hover:opacity-100 w-8 h-8 transform group-hover:scale-110 transition duration-300" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-11/12 max-w-3xl">
            {/* Main Image */}
            <img
              src={images[currentIndex]}
              alt="modal-img"
              className="w-full h-[500px] object-cover rounded-2xl"
            />

            {/* Close */}
            <button
              className="absolute top-1 right-1 bg-black bg-opacity-50 text-gray-50"
              onClick={closeModal}
            >
              <FaTimes size={28} />
            </button>

            {/* Arrows */}
            <button
              className="absolute top-1/2 left-1 -translate-y-1/2 bg-black bg-opacity-50 text-gray-50"
              onClick={prevImage}
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              className="absolute top-1/2 right-1 -translate-y-1/2 bg-black bg-opacity-50 text-gray-50"
              onClick={nextImage}
            >
              <FaArrowRight size={20} />
            </button>

            {/* Thumbnail Row */}
            <div className="mt-4 flex gap-2 overflow-x-auto scrollbar-hide justify-center">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={`w-20 h-16 rounded-lg overflow-hidden cursor-pointer border-2 ${
                    idx === currentIndex
                      ? "border-white"
                      : "border-transparent hover:border-white"
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                >
                  <img
                    src={img}
                    alt={`thumb-${idx}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default InfiniteCarousel;
