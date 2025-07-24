import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

const PremiumBanner = () => {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonGroupRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(bannerRef.current, { opacity: 0, scale: 1.1, duration: 1.3 })
      .from(titleRef.current, { y: 80, opacity: 0, duration: 1 }, "-=0.8")
      .from(subtitleRef.current, { y: 50, opacity: 0, duration: 0.8 }, "-=0.7")
      .from(buttonGroupRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.5");
  }, []);

  return (
    <div
      ref={bannerRef}
      className="swipper_banner relative w-full h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-cover bg-center font-mono"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1600&q=80')", // ⬅ Replace with your preferred premium image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 max-w-6xl">
        <h1
          ref={titleRef}
          className="text-white text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl"
        >
          Redefine <span className="text-yellow-400">Style</span>, Live <span className="text-purple-400">Premium</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-white text-lg md:text-2xl mt-5 font-medium max-w-2xl"
        >
          Discover fashion that speaks luxury, confidence, and class. Curated just for you.
        </p>

        <div
          ref={buttonGroupRef}
          className="mt-10 flex flex-wrap gap-6"
        >
          <NavLink to={`/products`} className="bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full hover:scale-105 hover:shadow-yellow-300/50 hover:shadow-xl transition-all duration-300">
            Shop Now
          </NavLink>
          <NavLink to={`/`} className="border border-white text-white bg-white/10 backdrop-blur-md font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-md">
            Explore More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PremiumBanner;
