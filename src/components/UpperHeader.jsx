import React from "react";
import { MdEmail } from "react-icons/md"; // Import the email icon

const Header = () => {
  return (
    <div className="bg-gray-800 text-white flex flex-wrap items-center justify-between p-4">
      {/* Left Section - Email */}
      <div className="flex items-center">
        <MdEmail className="text-yellow-400 text-lg mr-2" /> {/* Email Icon */}
        <a
          href="mailto:consult@avvanz.com"
          className="text-sm sm:text-base hover:underline"
        >
          consult@avvanz.com
        </a>
      </div>

      {/* Right Section - Logins */}
      <div className="flex space-x-4 text-sm sm:text-base mt-2 sm:mt-0">
        <button className="p-2 text-yellow-400 rounded-md hover:text-white hover:bg-yellow-400">
          SCREENGLOBAL LOGIN
        </button>
        <button className="p-2 text-blue-400 rounded-md hover:text-white hover:bg-blue-400">
          CDDGLOBAL LOGIN
        </button>
        <button className="p-2 text-teal-400 rounded-md hover:text-white hover:bg-teal-400">
          LEARNGLOBAL LOGIN
        </button>
      </div>
    </div>
  );
};

export default Header;
