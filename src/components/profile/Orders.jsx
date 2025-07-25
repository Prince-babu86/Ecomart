import React, { useEffect, useRef } from "react";
import { useData } from "../../context/DataContext";
import { CheckCircle, Clock } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Orders = () => {
  const { loggeduser } = useData();
  const { orders } = loggeduser || {};
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.querySelectorAll(".order-card"),
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  if (!orders || orders.length === 0) {
    return (
      <div className="text-center text-gray-500 py-16 text-xl font-medium">
        🛍️ You haven’t placed any orders yet.
      </div>
    );
  }

  return (
    <div
      className="p-5 sm:p-8 max-w-5xl mx-auto  pb-32 bg-[#f8f9fb] text-[#222] rounded-xl shadow-inner"
      ref={containerRef}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center tracking-tight">
        🧾 Your Orders
      </h2>

      <div className="space-y-6">
        {orders.reverse().map((order, index) => (
          <div
            key={index}
            className="order-card bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 overflow-hidden flex items-center gap-4 p-4 sm:p-6"
          >
            <img
              src={order.orderItem.image}
              alt={order.orderItem.name}
              className="w-24 h-24 object-cover rounded-2xl border border-gray-300 shadow-sm"
            />

            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {order.orderItem.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Quantity:{" "}
                <span className="font-medium text-gray-700">
                  {order.orderItem.qty}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Total:{" "}
                <span className="font-semibold text-blue-700">
                  ₹{order.price}
                </span>
              </p>
            </div>

            <div className="flex flex-col items-end gap-1">
              {order.status === "Delivered" ? (
                <CheckCircle size={22} className="text-green-500" />
              ) : (
                <Clock size={22} className="text-yellow-500" />
              )}
              <span
                className={`text-sm font-semibold ${
                  order.status === "Delivered"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
