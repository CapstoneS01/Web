import React from "react";

export const InfoCard = (props: { title: string; value: string }) => {
  return (
    <div className="w-72 mx-4 my-2 rounded-lg shadow-lg bg-gray-800 text-white overflow-hidden">
      <div className="px-4 py-2">
        <h3 className="text-lg font-medium">{props.title}</h3>
        <p className="mt-1 text-sm">{props.value}</p>
      </div>
    </div>
  );
};
