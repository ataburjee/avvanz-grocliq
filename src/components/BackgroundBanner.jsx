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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-4xl font-bold">Background Checks</h1>
        <p className="text-yellow-400 mt-2 text-lg">Know Who You’re Hiring</p>
      </div>
    </div>
  );
};

export default BackgroundChecksBanner;
