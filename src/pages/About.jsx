import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-6 text-white text-center shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Learn more about who I am, what I do, and why I built Ecomart.
        </p>
      </div>

      {/* Profile & Info */}
      <div className="max-w-5xl mx-auto p-6 sm:p-12 bg-white rounded-3xl shadow-2xl mt-[-50px] relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Avatar */}
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocIOJ9F066FoeGbwHq4TGsrwuLtIRHUUVHyb6lWESMDni2r80s0t=s360-c-no"
            alt="Founder"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">Prince Babu</h2>
            <p className="text-blue-600 font-semibold mt-1">Founder, Developer & Designer</p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I'm a passionate full-stack developer with a vision to simplify e-commerce for
              everyone. Ecomart was born from the desire to build a smooth, beautiful, and fast
              shopping experience. I focus on clean code, seamless UI/UX, and performance-driven
              architecture.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-blue-700">3+</h3>
            <p className="text-sm text-gray-600 mt-1">Years of Experience</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-purple-700">20+</h3>
            <p className="text-sm text-gray-600 mt-1">Projects Completed</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-green-700">100%</h3>
            <p className="text-sm text-gray-600 mt-1">Client Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-20 pb-10">
        <p className="text-gray-600">Thank you for visiting Ecomart — built with ❤️ and React.</p>
      </div>
    </div>
  );
};

export default About;
