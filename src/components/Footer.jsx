import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0D3B66] text-white py-12">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Sitemap Section */}
        <div>
          <h3 className="text-lg font-bold mb-6">Sitemap</h3>
          <ul className="space-y-4">
            {[
              { name: "Contact Us", link: "#" },
              { name: "Privacy Policy", link: "#" },
              { name: "Cookie Policy", link: "#" },
              { name: "General Information Security Policy", link: "#" },
              { name: "Code of Conduct and Ethics Policy", link: "#" },
            ].map((item, index) => (
              <li key={index}>
                <a href={item.link} className="hover:text-[#FFD700] transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations Section */}
        <div>
          <h3 className="text-lg font-bold mb-6">Locations</h3>
          <ul className="space-y-4">
            {[
              "Singapore",
              "USA & LATAM",
              "Philippines",
              "Australia & NZ",
              "United Kingdom",
              "India",
            ].map((location, index) => (
              <li key={index}>{location}</li>
            ))}
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-bold mb-6">Social Media</h3>
          <p className="mb-4">Connect with us:</p>
          <div className="flex space-x-6">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
              { icon: <FaYoutube />, link: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFD700] hover:text-white transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom WhatsApp Icon */}
      <div className="fixed bottom-6 right-6">
        <a
          href="https://wa.me/6531652775"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#FFD700] p-4 rounded-full hover:bg-white transition"
        >
          <FaWhatsapp
            className="text-[#0D3B66] hover:text-[#0D3B66]"
            size={32}
          />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
