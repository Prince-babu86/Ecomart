import React from "react";

const NewsletterSignup = () => {
  return (
    <div className="w-full px-4 md:px-16 py-16 bg-gradient-to-r from-[#fefce8] via-[#fef9f9] to-[#ecfdf5] text-gray-800">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 md:p-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
          Stay in the Loop
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-600">
          Subscribe to get exclusive offers, trends, and updates from Ecomart.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[300px] px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <button className="px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
