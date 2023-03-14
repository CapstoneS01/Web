import React from "react";
import { Sidebar } from "../components/Sidebar";
import { InfoCard } from "../components/InfoCard";

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
          <h2 className="text-2xl font-semibold mb-4">Search Information</h2>
          <div className="flex flex-wrap justify-center">
            <InfoCard title="Drone Name" value="DJI Tello" />
            <InfoCard title="Camera Resolution" value="4K" />
            <InfoCard title="Time Elapsed" value="00:04:23" />
            <InfoCard title="Battery Level" value="54%" />
            <InfoCard title="Matches Found" value="3" />
            <InfoCard title="Encodings Loaded" value="5" />
          </div>
        </div>
      </div>
    </div>
  );
};
