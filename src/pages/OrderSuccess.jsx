import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  const checkRef = useRef(null);
  const textRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      checkRef.current,
      { scale: 0, rotate: 360 },
      { scale: 1, rotate: 0, duration: 1, ease: "back.out(1.7)" }
    );

    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      boxRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 text-gray-900 px-4">
      <div
        ref={boxRef}
        className="bg-white border border-gray-200 rounded-3xl p-8 max-w-md w-full shadow-xl text-center transition-all duration-300"
      >
        <div ref={checkRef} className="flex justify-center mb-6">
          <CheckCircle size={80} className="text-green-500" />
        </div>
        <h2 ref={textRef} className="text-2xl font-bold mb-2">
          Order Placed Successfully!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for shopping with us. Your order has been confirmed and is being processed.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded-full font-semibold transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
