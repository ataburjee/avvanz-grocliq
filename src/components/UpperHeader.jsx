import React from "react";
import { MdEmail } from "react-icons/md"; // Import the email icon

const Header = () => {
  return (
    <div className="bg-gray-800 ">

    <div className="container m-auto text-white flex flex-wrap items-center justify-between p-4">
      {/* Left Section - Email */}
      <div className="flex items-center ml-4">
        <MdEmail className="text-yellow-400 text-lg mr-2" /> {/* Email Icon */}
        <a
          href="mailto:consult@avvanz.com"
          className="text-sm sm:text-base hover:underline"
        >
          consult@avvanz.com
        </a>
      </div>

      {/* Right Section - Logins */}
      <div className="flex space-x-4 text-sm sm:text-base h-7">
      <button className="px-2 py-4 text-yellow-400 text-center rounded-md hover:text-white hover:bg-yellow-400 flex justify-center items-center">
        SCREENGLOBAL LOGIN
      </button>
      {/* p-2 text-blue-400 rounded-md hover:text-white hover:bg-blue-400 */}
        <button className="px-2 py-4 text-blue-400 text-center rounded-md hover:text-white hover:bg-blue-400 flex justify-center items-center">
          CDDGLOBAL LOGIN
        </button>
        {/* p-2 text-teal-400 rounded-md hover:text-white hover:bg-teal-400 */}
        <button className="px-2 py-4 text-teal-400 text-center rounded-md hover:text-white hover:bg-teal-400 flex justify-center items-center">
          LEARNGLOBAL LOGIN
        </button>
      </div>
    </div>
    </div>
  );
};

export default Header;
