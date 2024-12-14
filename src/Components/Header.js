import React from "react";
import { Link } from "react-router-dom";
// import logo from "../Assets/logo.svg";
const Header = () => {
  return (
    <header className="py-4 border-b z-10 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          {/* <img src={logo} alt="" /> */}
          <h1 className=" font-bold text-3xl first-letter:text-violet-900 text-white">
            Mekan
          </h1>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to=""
            className="hover:text-violet-900 transition text-white"
          >
            Login
          </Link>
          <Link
            to=""
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
