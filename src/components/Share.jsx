import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Copy,
  Check,
  Share2,
  X as CloseIcon,
  MessageSquare,
} from "lucide-react";
import { useData } from "../context/DataContext";

const ShareComponent = () => {
  let url = window.location.href;
  let {setpopup} =  useData()

  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(false);

  const copyToClipboard = async () => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      // Modern clipboard API
      await navigator.clipboard.writeText(url);
    } else {
      // Fallback for mobile or insecure context
      const textArea = document.createElement("textarea");
      textArea.value = url;
      textArea.style.position = "fixed"; // prevent scroll jump
      // textArea.style.left = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }

    setCopied(true);
    setpopup({ tittle: "Link copied to clipboard" });
    setTimeout(() => {
      setCopied(false);
      setpopup(null);
    }, 2000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};


  const shareOptions = [
    {
      name: "WhatsApp",
      icon: <MessageSquare className="w-5 h-5" />,
      link: `https://wa.me/?text=${encodeURIComponent(url)}`,
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      link: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div className="relative w-full flex justify-start">
      <button
        onClick={() => setShow(!show)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 mt-4 text-black rounded-full shadow-lg hover:bg-gray-200 transition-all"
      >
        <Share2 className="w-4 h-4" />
        <span className="text-sm font-medium">Share</span>
      </button>

      {show && (
        <div className="fixed bottom-2 left-0 w-full items-center justify-center flex j gap-5 backdrop-blur-md bg-white/70 border border-gray-200 shadow-xl px-6 py-3 rounded-2xl transition-all z-[2000]">
          <button
            onClick={() => setShow(false)}
            className="absolute top-2 right-2"
          >
            <CloseIcon className="w-4 h-4 text-gray-500 hover:text-black" />
          </button>

          <button
            // key={copied ? "copied" : "copy"}
            onClick={copyToClipboard}
            className="flex flex-col items-center gap-1 text-sm text-gray-800 hover:text-black transition-all"
          >
            <div className="p-2 rounded-full bg-white shadow-sm hover:scale-105">
              {copied ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </div>
            {copied ? "Copied!" : "Copy Link"}
          </button>

          {shareOptions.map((option) => (
            <a
              key={option.name}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-sm text-gray-800 hover:text-black transition-all"
            >
              <div className="p-2 rounded-full bg-white shadow-sm hover:scale-105">
                {option.icon}
              </div>
              {option.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShareComponent;
