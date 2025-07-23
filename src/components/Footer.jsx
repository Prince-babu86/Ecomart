import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-r  from-blue-900 via-blue-700 to-blue-900 text-white p-10 mt-20 z-[100] rounded-t-3xl shadow-2xl"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Ecomart</h2>
          <p className="text-sm opacity-80">
            Your premium fashion & lifestyle destination. Discover the best in clothing and accessories.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <span>support@ecomart.com</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white text-blue-800 p-2 rounded-full shadow-lg cursor-pointer hover:bg-blue-100"
              >
                <Icon size={20} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-sm text-gray-300 mt-10 border-t border-blue-800 pt-5">
        © {new Date().getFullYear()} Ecomart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
