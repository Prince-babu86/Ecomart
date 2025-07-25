import React, { useState } from "react";
import { X } from "lucide-react";

const Popup = ({ popup }) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] flex justify-center px-3 sm:px-6">
      <div className="w-full max-w-3xl bg-white text-gray-900 rounded-xl mt-4 px-5 py-4 flex items-center gap-4 shadow-2xl border border-gray-200 animate-slideDown relative transition-all duration-300">

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-gray-500 hover:text-yellow-500 transition"
        >
          <X size={20} />
        </button>

        {/* Image */}
        {popup?.images && (
          <img
            src={popup.images}
            alt="popup"
            className="w-14 h-14 object-cover rounded-full border-2 border-yellow-400 shadow-md"
          />
        )}

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-1 text-yellow-500">
            {popup?.tittle || "Notification"}
          </h2>
          <p className="text-sm text-gray-700">
            {popup?.message || "Something new has arrived!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
