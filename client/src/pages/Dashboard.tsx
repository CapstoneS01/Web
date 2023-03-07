import React from "react";
import { Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Sidebar } from "../components/Sidebar";

const Dashboard = () => {
  async function submitImage(file: any) {
    // submit image function
    //      <input type="file" onChange={(e) => submitImage(e!.target!.files![0])} />
    const data = new FormData();
    data.append("file", file);

    await fetch("http://localhost:3030/upload", {
      credentials: "same-origin",
      method: "POST",
      body: data,
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjAxR1FTWkMwMFJYSDdXTUJUMlhIWENTMEdaIiwiaWF0IjoxNjc0ODM1MjYzfQ.yneN_EBmUNPFK9zsPuXQHlZTn-FWRkERXBC0hd6-Bi8",
      },
    });
  }

  return (
    <div className="w-full">
      <Sidebar />
      <div className="ml-60 p-5">
        <div className="flex flex-col w-full">
          <div className="flex-1 text-center font-mono w-full">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
