import React, { useEffect, useState } from "react";

const Reloader = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // 3 seconds
    const interval = 100; // update every 30ms
    const totalSteps = duration / interval;
    const step = 100 / totalSteps;

    const loader = setInterval(() => {
      start += step;
      if (start >= 99) {
        clearInterval(loader);
        start = 100;
      }
      setWidth(start);
    }, interval);

    return () => clearInterval(loader);
  }, []);

  return (
    <div className="w-[99%] h-1 fixed top-1 rounded-full z-[3200] bg-gray-200 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 transition-all"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default Reloader;
