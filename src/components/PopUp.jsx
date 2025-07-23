import React, { useState } from "react";
import { X } from "lucide-react";

const Popup = ({popup}) => {

    console.log(popup);
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;


  return (
    <div className="fixed top-0 left-0 w-full z-[9999] flex justify-center px-2">
      <div className="w-full max-w-3xl bg-[#1e1e2f] text-white rounded-xl mt-4 px-6 py-5 flex items-center gap-4 shadow-2xl animate-slideDown relative">

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-white hover:text-yellow-400 transition"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <img
          src={popup?.images}
          alt="user"
          className="w-14 h-14 object-cover rounded-full border-2 border-yellow-400 shadow-lg"
        />

        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-1 text-yellow-400">{popup.tittle}</h2>
          <p className="text-xs text-white/90">
            {popup.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
