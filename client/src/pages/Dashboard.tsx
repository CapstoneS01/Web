import React from "react";
import { Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Dashboard = () => {
  // const [user, setUser] = React.useState(auth.currentUser);

  return (
    // if no authenticated user, navigate to login page using react-router-dom
    <div>
      {/* {!user && <Navigate to="/login" />} */}
      <p>Welcome to the dashboard</p>
      <a onClick={() => null}>Logout</a>
    </div>
  );
};

export default Dashboard;
