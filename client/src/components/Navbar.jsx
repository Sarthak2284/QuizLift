import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Logo - Left */}
      <Link
        to="/"
        className="text-2xl font-extrabold text-blue-600 tracking-tight hover:text-blue-700 transition-colors"
        aria-label="QuizLift Home"
      >
        QuizLift <span className="text-lg animate-bounce">🚀</span>
      </Link>

      {/* Centered Navigation */}
      <div className="flex-1 flex justify-center">
        <div className="flex gap-8">
          <Link
            to="/about"
            className="text-gray-700 font-medium hover:text-blue-600 focus:text-blue-800 transition-colors"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-gray-700 font-medium hover:text-blue-600 focus:text-blue-800 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 font-medium hover:text-blue-600 focus:text-blue-800 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Get Started Button - Right */}
      <Link
        to="/register"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition-all shadow"
      >
        Get Started
      </Link>
    </nav>
  );
};

export default Navbar;
