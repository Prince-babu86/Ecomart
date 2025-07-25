import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

const PremiumBanner = () => {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const signatureRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonGroupRef = useRef(null);
  const discountRef = useRef(null);
  const bigTextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(bannerRef.current, { opacity: 0, scale: 1.05, duration: 1.3 })
      .from(bigTextRef.current, { y: 100, opacity: 0, duration: 1.1 }, "-=1.2")
      .from(titleRef.current, { y: 70, opacity: 0, duration: 1 }, "-=0.9")
      .from(subtitleRef.current, { y: 50, opacity: 0, duration: 0.8 }, "-=0.7")
      .from(discountRef.current, { y: 40, opacity: 0, duration: 0.7 }, "-=0.6")
      .from(buttonGroupRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.5")
      .fromTo(
        signatureRef.current,
        { color: "#000000" },
        {
          color: "#facc15",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        },
        "-=0.8"
      );
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative w-full h-[60vh] md:h-[90vh] rounded-xl overflow-hidden shadow-2xl bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1603808033192-082d6919d195?auto=format&fit=crop&w=1600&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/70 backdrop-blur-sm z-0" />

      <div className="relative z-10 h-full flex flex-col justify-center items-start px-5 sm:px-10 md:px-20 max-w-7xl mx-auto">
        <h2
          ref={bigTextRef}
          className="text-[13vw] md:text-[10vw] font-black tracking-tighter leading-none text-yellow-500 drop-shadow-[0_2px_20px_rgba(255,204,0,0.8)] hover:text-yellow-400 transition-all duration-300"
        >
          ECOMART
        </h2>

        <h1
          ref={titleRef}
          className="font-semibold font-mono tracking-tighter  text-[7vw] sm:text-[5vw] md:text-[2.8rem] mt-2 text-gray-900"
        >
          Your{" "}
          <span
            ref={signatureRef}
            className="transition-all duration-500"
          >
            Signature
          </span>{" "}
          Look
        </h1>

        <p
          ref={subtitleRef}
          className="text-gray-800 text-[4vw] sm:text-xl md:text-2xl mt-4 md:mt-6 max-w-2xl font-light transition-colors duration-300 hover:text-black"
        >
          Curated pieces that define your unique style. Comfort and luxury, redefined.
        </p>

        <p
          ref={discountRef}
          className="mt-4 md:mt-6 text-pink-600 text-[5vw] sm:text-2xl md:text-3xl font-semibold animate-pulse"
        >
          ✨ Exclusive Drop: Flat 50% Off for First 100 Customers!
        </p>

        <div ref={buttonGroupRef} className="mt-6 md:mt-10 flex gap-4 sm:gap-6 flex-wrap">
          <NavLink
            to="/products"
            className="bg-black text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full hover:scale-105 hover:bg-yellow-400 hover:text-black shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            Shop Now
          </NavLink>
          <NavLink
            to="/"
            className="border border-black text-black bg-white/60 backdrop-blur-md font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-lg text-sm sm:text-base"
          >
            Learn More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PremiumBanner;
