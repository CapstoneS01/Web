import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { signOut } from "firebase/auth";

const Dashboard = () => {
  const [user, setUser] = React.useState(auth.currentUser);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // if no authenticated user, navigate to login page using react-router-dom
    <div>
      {!user && <Navigate to="/login" />}
      <p>Welcome to the dashboard</p>
      <a onClick={handleSignOut}>Logout</a>
    </div>
  );
};

export default Dashboard;
