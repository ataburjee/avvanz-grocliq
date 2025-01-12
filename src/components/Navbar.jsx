import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/assets/avvanzLogo.webp"
                alt="Avvanz Logo"
                className="h-8"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("about")}
                className="flex items-center text-black hover:text-yellow-500 font-medium"
              >
                ABOUT US{" "}
                {dropdownOpen === "about" ? (
                  <FaChevronUp className="ml-1 text-sm" />
                ) : (
                  <FaChevronDown className="ml-1 text-sm" />
                )}
              </button>
              {/* Dropdown */}
              {dropdownOpen === "about" && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Careers
                  </a>
                </div>
              )}
            </div>
            <a
              href="#"
              className="text-black hover:text-yellow-500 font-medium"
            >
              SCREEN
            </a>
            <a
              href="#"
              className="text-black hover:text-yellow-500 font-medium"
            >
              DEVELOP
            </a>
            <a href="#" className="text-yellow-500 font-medium">
              RESOURCES
            </a>
            <a
              href="#"
              className="text-black hover:text-yellow-500 font-medium"
            >
              CONTACT US
            </a>
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("global")}
                className="flex items-center text-black hover:text-yellow-500 font-medium"
              >
                GLOBAL{" "}
                {dropdownOpen === "global" ? (
                  <FaChevronUp className="ml-1 text-sm" />
                ) : (
                  <FaChevronDown className="ml-1 text-sm" />
                )}
              </button>
              {/* Dropdown */}
              {dropdownOpen === "global" && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Region 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Region 2
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-black focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => toggleDropdown("about")}
              className="flex items-center justify-between w-full text-black hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
            >
              ABOUT US
              {dropdownOpen === "about" ? (
                <FaChevronUp className="text-sm" />
              ) : (
                <FaChevronDown className="text-sm" />
              )}
            </button>
            {dropdownOpen === "about" && (
              <div className="pl-6 space-y-1">
                <a
                  href="#"
                  className="block text-gray-700 hover:text-yellow-500"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-yellow-500"
                >
                  Careers
                </a>
              </div>
            )}
            <a
              href="#"
              className="block text-black hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
            >
              SCREEN
            </a>
            <a
              href="#"
              className="block text-black hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
            >
              DEVELOP
            </a>
            <a
              href="#"
              className="block text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
            >
              RESOURCES
            </a>
            <a
              href="#"
              className="block text-black hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
            >
              CONTACT US
            </a>
            <button
              onClick={() => toggleDropdown("global")}
              className="flex items-center justify-between w-full text-black hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
            >
              GLOBAL
              {dropdownOpen === "global" ? (
                <FaChevronUp className="text-sm" />
              ) : (
                <FaChevronDown className="text-sm" />
              )}
            </button>
            {dropdownOpen === "global" && (
              <div className="pl-6 space-y-1">
                <a
                  href="#"
                  className="block text-gray-700 hover:text-yellow-500"
                >
                  Region 1
                </a>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-yellow-500"
                >
                  Region 2
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
