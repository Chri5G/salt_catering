import { motion, useScroll, useTransform } from "framer-motion";

export default function MultiLayerParallax() {
  const { scrollY } = useScroll();

  // Background moves slowest
  const bgY = useTransform(scrollY, [0, 500], [0, -100]);
  // Middle moves faster
  const midY = useTransform(scrollY, [0, 500], [0, -50]);
  // Foreground moves the fastest
  const fgY = useTransform(scrollY, [0, 500], [0, 0]);

  return (
    <div className="relative h-screen">
      {/* Background */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/imgs/logo_black.jpg')", y: bgY }}
      />
      {/* Midground */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center -z-5"
        style={{ backgroundImage: "url('/imgs/logo_white.jpg')", y: midY }}
      />
      {/* Foreground */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/logo_trans.png')", y: fgY }}
      />
    </div>
  );
}
