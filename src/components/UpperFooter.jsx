import React from "react";

const UpperFooter = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Get Started with Avvanz
            </h1>
            <p className="text-gray-600 mb-8">
              Order checks in minutes with our uniquely innovative multi-award
              platform at{" "}
              <a
                href="https://www.avvanz.com/screenglobal/"
                className="text-orange-500 hover:text-orange-600"
              >
                https://www.avvanz.com/screenglobal/
              </a>
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>NO lengthy onboarding</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>As easy as ordering an item on an eCommerce store</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>NO Setup Fees</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>NO Onboarding Fees</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>NO Minimum Commitment</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>NO Subscription Fees</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Pay-per-Use</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 flex flex-col justify-center items-center border-4 border-[#dfa934] rounded-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Consult with Us
            </h2>
            <button className="bg-[#dfa934] hover:text-[#dfa934] hover:bg-white text-white font-bold py-3 px-6 rounded-lg">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperFooter;
