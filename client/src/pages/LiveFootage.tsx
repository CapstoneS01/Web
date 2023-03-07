import React from "react";
import { Sidebar } from "../components/Sidebar";

const DroneInfoCard = (props: { title: string; value: string }) => {
  return (
    <div className="w-72 mx-4 my-2 rounded-lg shadow-lg bg-gray-800 text-white overflow-hidden">
      <div className="px-4 py-2">
        <h3 className="text-lg font-medium">{props.title}</h3>
        <p className="mt-1 text-sm">{props.value}</p>
      </div>
    </div>
  );
};

export const LiveFootage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Sidebar />
      <div className="flex-1 ml-60 p-5">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold">Live Feed</h1>
          <div className="video-container w-4/5 h-5/6 mt-24 mb-14">
            <video
              className="w-full h-full"
              src="https://www.youtube.com/watch?v=9bZkp7q19f0"
              controls
              autoPlay
              muted
              loop
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Drone Information</h2>
          <div className="flex flex-wrap justify-center">
            <DroneInfoCard title="Drone Name" value="DJI Tello" />
            <DroneInfoCard title="Camera Resolution" value="4K" />
            <DroneInfoCard title="Time Elapsed" value="00:04:23" />
            <DroneInfoCard title="Battery Level" value="54%" />
            <DroneInfoCard title="Matches Found" value="3" />
            <DroneInfoCard title="Encodings Loaded" value="5" />
          </div>
        </div>
      </div>
    </div>
  );
};
