import React, { useEffect, useState } from "react";
import logo from "../assests/skyhunt-logo.png";
import { Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [isLoading, setisLoading] = useState(false);

  async function sendLink(e: { preventDefault: () => void }) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3030/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error("Unable to log in");
      setisLoading(true);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-r from-cyan-400 to-blue-500">
      <div className="bg-white m-auto rounded-lg h-full w-full lg:w-4/12 lg:h-2/5 ">
        <div className="flex text-left px-3 py-5">
          <img src={logo} alt="SkyHunt" className="h-10 m-auto" />
        </div>
        <div className="header-text px-10 py-4 text-center">
          <h1 className="text-2xl font-bold text-gray-700">Get Started</h1>
          <h3 className="text-base text-gray-500 pt-1">Continue to SkyHunt</h3>
        </div>
        <div className="flex md:w-4/5 mx-auto my-3">
          <input
            className="px-3 py-3 placeholder-slate-400 text-slate-700 relative bg-white rounded text-sm border border-slate-100 shadow focus:outline-none focus:ring w-full"
            placeholder="Email"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="flex md:w-full my-3">
          <button
            onClick={sendLink}
            type="button"
            disabled={isLoading}
            className=" w-2/3 mx-auto mt-7 text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <span className="font-semibold">Send Link</span>
          </button>
          {isLoading ? "Sending..." : "Send Login Link"}
        </div>
      </div>
    </div>
  );
}

export default Login;
