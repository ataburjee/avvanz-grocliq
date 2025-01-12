import React from "react";

const BackgroundCheck = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What types of background checks are offered?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Combat resume discrepancies with{" "}
            <span className="font-semibold">Avanz's</span> comprehensive
            background check solutions. Ensure trustworthy hires and protect
            your organization’s assets with both pre-employment and
            in-employment screening.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/assets/backgroundcheck.webp"
            alt="Background Check"
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundCheck;
