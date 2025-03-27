import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageSwitcher = ({ images, interval = 10000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(imageInterval);
  }, [images.length, interval]);

  return (
    <div className="h-screen bg-gray-50 overflow-hidden relative">
      <AnimatePresence>
        <motion.div
          key={currentIndex} // Forces re-render for animation
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }} // Slow fade-in effect
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageSwitcher;
