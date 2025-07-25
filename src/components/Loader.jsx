import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const [counter, setCounter] = useState(0);

  // Counter animation
  useEffect(() => {
    let interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // GSAP animations
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1.3,
        opacity: 1,
        duration: 2,
        ease: "power4.out",
      }
    );

    gsap.to(textRef.current, {
      scale: 1,
      duration: 1.2,
      delay: 2.2,
      ease: "expo.out",
    });

    gsap.to(loaderRef.current, {
      scale: 0.8,
      opacity: 0,
      delay: 7.5,
      duration: 1,
      ease: "power2.inOut",
      onComplete: onComplete || (() => {}),
    });

    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        ref={loaderRef}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center text-gray-800"
        style={{
          background: "linear-gradient(135deg, #f0f4f8, #ffffff, #fef3c7)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Background animated divs */}
        <div className="absolute w-full h-full overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-yellow-300/10"
              style={{
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                top: `${10 + i * 12}%`,
                left: `${20 + i * 10}%`,
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Main Logo Text */}
        <div
          ref={textRef}
          className="text-6xl md:text-8xl font-extrabold drop-shadow-lg z-10 text-yellow-500"
        >
          ECOMART
        </div>

        {/* Sub Text */}
        <motion.p
          className="mt-4 text-xl md:text-2xl z-10 text-gray-700"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.2, duration: 1.2, ease: "easeOut" }}
        >
          Premium Shopping Experience
        </motion.p>

        {/* Counter */}
        <motion.div
          className="mt-6 text-2xl md:text-3xl font-semibold z-10 text-pink-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {counter}%
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
