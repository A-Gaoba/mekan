import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Navigation Links */}
        <nav className="flex justify-center flex-wrap gap-6 text-gray-600 font-medium mb-6">
          <Link
            to="/"
            className="hover:text-gray-900 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-900 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-gray-900 transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-900 transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://wa.me/your_phone_number"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/whatsapp.png"
              alt="WhatsApp"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/twitter.png"
              alt="Twitter"
            />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="text-center text-gray-500 font-medium text-sm">
          &copy; {new Date().getFullYear()} Company Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
