// src/components/SmoothScroll.jsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35, // balanced smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -12 * t)), // exponential ease-out
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: true,
      touchMultiplier: 1.2, // slight boost to touch scroll
    });

    let animationFrame;

    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
