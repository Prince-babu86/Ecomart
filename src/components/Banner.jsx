import React, { useEffect, useRef } from "react";
import "../style/Banner.css";
import { motion } from "framer-motion";
import gsap from "gsap";

const Banner = () => {
  const bannerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        xPercent: -50,
        duration: 20,
        ease: "linear",
        repeat: -1,
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      className="banner-wrapper mt-7 overflow-hidden bg-gradient-to-r from-[#fefefe] to-[#f6f6f6] shadow-inner rounded-xl"
      ref={bannerRef}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="banner-track whitespace-nowrap py-4">
        <div
          ref={textRef}
          className="banner-text text-xl sm:text-2xl font-semibold text-gray-800 tracking-wide flex gap-8"
        >
          <span>🔥 Welcome to Ecomart — Shop Smart, Live Better!</span>
          <span>🛒 Trending Deals • New Arrivals • Fast Delivery</span>
          <span>💎 Premium Quality | 📦 Hassle-Free Returns</span>
          <span>🔥 Welcome to Ecomart — Shop Smart, Live Better!</span>
          <span>🛒 Trending Deals • New Arrivals • Fast Delivery</span>
          <span>💎 Premium Quality | 📦 Hassle-Free Returns</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
