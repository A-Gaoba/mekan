import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Navigation Links */}
    
        {/* Copyright Notice */}
        <p className="text-center text-gray-500 font-medium text-sm">
          &copy; {new Date().getFullYear()} gaoba. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
