import React, { useEffect, useRef } from "react";
import { useData } from "../../context/DataContext";
import { motion } from "framer-motion";
import gsap from "gsap";

const Wishlist = () => {
  const { loggeduser } = useData();
  const { wishlist } = loggeduser || {};
  const cardsRef = useRef([]);

  useEffect(() => {
    if (cardsRef.current.length) {
      cardsRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            delay: i * 0.1,
            duration: 0.8,
            ease: "power3.out",
          }
        );
      });
    }
  }, []);

  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="text-center text-gray-500 py-20 text-lg">
        ❤️ Your wishlist is currently empty.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Your Wishlist</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-x-hidden">
        {wishlist.map((product, index) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-200 group overflow-hidden"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="relative overflow-hidden h-60">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <p className="text-white text-sm">{product.name}</p>
              </motion.div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1 truncate">
                {product.description || "No description"}
              </p>
              <p className="text-blue-600 font-bold mt-2">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
