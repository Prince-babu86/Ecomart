import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md text-center">
        <h1 className="text-[80px] font-extrabold text-gray-900">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </p>
        <p className="text-gray-500 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white bg-black hover:bg-gray-800 transition-all shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Go to Homepage
        </button>

        <div className="mt-10">
          <img
            src="https://illustrations.popsy.co/gray/error-404.svg"
            alt="404 Illustration"
            className="w-full max-w-xs mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
