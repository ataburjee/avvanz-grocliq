import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Dropdown = ({ label, items, isOpen, onMouseEnter, onMouseLeave }) => (
  <div
    className="relative group"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <button
      className="flex items-center text-black hover:text-yellow-500 font-medium focus:outline-none"
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      {label}
      <FaChevronDown className="ml-1 text-sm" />
    </button>
    {isOpen && (
      <div
        className="absolute left-0 bg-white border border-gray-200 rounded-md shadow-lg z-10"
        style={{ whiteSpace: "nowrap", width: "auto" }}
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block left-0 px-4 py-2 text-sm hover:bg-yellow-400"
          >
            {item.label}
          </a>
        ))}
      </div>
    )}
  </div>
);


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleMouseEnter = (menu) => setDropdownOpen(menu);
  const handleMouseLeave = () => setDropdownOpen(null);

  const menuItems = [
    {
      label: "ABOUT US",
      items: [
        { label: "Workplace Safety and Health Guideline", href: "#" },
        { label: "Environmental, Social and Governance", href: "#" },
        { label: "Join Avvanz", href: "#" },
      ],
    },
    {
      label: "SCREEN",
      items: [
        { label: "Background Screening", href: "#" },
        { label: "ScreenChain", href: "#" },
        { label: "Singapore Work Passes", href: "#" },
        { label: "Company Due Diligence", href: "#" },
        { label: "Partnership Integration", href: "#" },
      ],
    },
    {
      label: "DEVELOP",
      items: [
        { label: "Star Trainers", href: "#" },
        { label: "Learn Global", href: "#" },
        { label: "Nibble & Learn", href: "#" },
      ],
    },
    {
      label: "RESOURCES",
      items: [
        { label: "Blog", href: "#" },
        { label: "Newsletter", href: "#" },
        { label: "Industry Reports", href: "#" },
        { label: "Webinar & Video", href: "#" },
        { label: "Press & Media", href: "#" },
      ],
    },
    {
      label: "GLOBAL",
      items: [
        { label: "APAC", href: "#" },
        { label: "Americas", href: "#" },
        { label: "EMEA", href: "#" },
      ],
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img src="/assets/avvanzLogo.webp" alt="Avvanz Logo" className="h-8" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 z-10">
            {menuItems.map((menu, index) => (
              <Dropdown
                key={index}
                label={menu.label}
                items={menu.items}
                isOpen={dropdownOpen === menu.label}
                onMouseEnter={() => handleMouseEnter(menu.label)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
            <a href="#" className="text-black hover:text-yellow-500 font-medium">
              CONTACT US
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-black focus:outline-none"
              aria-label="Toggle menu"
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
            {menuItems.map((menu, index) => (
              <details key={index} className="group">
                <summary className="block text-black hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                  {menu.label}
                </summary>
                <div className="pl-4">
                  {menu.items.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-400"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </details>
            ))}
            <a
              href="#"
              className="block w-full text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
            >
              RESOURCES
            </a>
            <a
              href="#"
              className="block w-full text-black hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
            >
              CONTACT US
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
