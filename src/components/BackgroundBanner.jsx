import React from "react";

const BackgroundChecksBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-64 flex items-center"
      style={{
        backgroundImage: "url('/assets/screenSubBg1-2.webp')",
      }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
      <div className="relative z-9 max-w-7xl ml-16">
        <h1 className="text-white text-4xl font-bold text-left">Background Checks</h1>
        <p className="text-yellow-400 mt-2 text-lg text-left">Know Who You’re Hiring</p>
      </div>
    </div>
  );
};

export default BackgroundChecksBanner;
