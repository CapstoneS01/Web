import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../assests/skyhunt-logo.png";

function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <header className="absolute top-0 right-0 flex items-center justify-between w-full px-4 py-3 content-center">
        <img src={logo} width={250} alt="SkyHunt Logo" className="my-auto" />
        <a
          className="text-gray-100 hover:text-gray-300 mb-2"
          href="https://github.com/CapstoneS01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Star on GitHub"
        >
          <FaGithub size={28} />
        </a>
      </header>
      <div className="flex flex-col items-center justify-center py-20 bg-white rounded-lg px-5">
        <h2 className="text-lg font-medium text-gray-900 text-center">
          Enabling drones with computer vision and object detection, optimized
          for missing person searches
        </h2>
        <Link
          to="/login"
          className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:shadow-outline-blue"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
