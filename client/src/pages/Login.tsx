import React, { useEffect } from "react";
import logo from "../assests/skyhunt-logo.png";
import { OAuthLogin } from "../auth/OAuthLogin";
import { auth } from "../auth/firebase";
import { Navigate } from "react-router-dom";

function Login() {
  const [user, setUser] = React.useState(auth.currentUser);

  return (
    <div className="flex h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="bg-white m-auto rounded-lg h-full w-full lg:w-4/12 lg:h-2/3 ">
        <div className="flex text-left px-3 py-5">
          <img src={logo} alt="SkyHunt" className="h-10 m-auto" />
        </div>
        <div className="header-text px-10 py-7">
          <h1 className="text-2xl font-bold text-gray-700">Get Started</h1>
          <h3 className="text-base text-gray-500 pt-1">Continue to SkyHunt</h3>
        </div>
        <div className="login-methods flex mt-20">
          <OAuthLogin />
        </div>
      </div>
    </div>
  );
}

export default Login;
