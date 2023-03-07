import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../assests/skyhunt-logo.png";

function Welcome() {
  return (
    <div className="flex flex-col items-center p-3 bg-[#f3f6f4]">
      <header className="absolute top-0 right-0 flex items-center justify-between w-full px-5 py-5 content-center">
        <a href="">
          <img src={logo} width={150} alt="SkyHunt Logo" className="my-auto" />
        </a>
        <a
          className="text-gray-100 hover:text-gray-300 mb-2"
          href="https://github.com/CapstoneS01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Star on GitHub"
        >
          <FaGithub size={28} color="black" />
        </a>
      </header>
      <div className="font-bold font-lg text-black text-8xl text-center font-black p-9 mt-[10%] leading-tight">
        <h1 className="">Join the Search with</h1>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Drone Technology
        </h1>
      </div>
      <p className="text-gray-700 text-center text-lg font-medium text-center">
        {" "}
        Revolutionizing the search for missing persons with computer
        vision-enabled drones.
      </p>
      <Link
        to="/login"
        className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg shadow-md focus:outline-none focus:shadow-outline-blue"
      >
        Get Started
      </Link>
      <div className="mt-20">
        <iframe
          src="https://www.youtube.com/embed/E7wJTI-1dvQ"
          allow="autoplay; encrypted-media"
          title="video"
          width={640}
          height={360}
        />
      </div>
    </div>
  );
}

export default Welcome;
