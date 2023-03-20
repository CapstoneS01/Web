import React from "react";
import { Sidebar } from "../components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SearchVideo = () => {
  const [encodingFile, setEncodingFile] = React.useState<File>();
  const [videoFile, setVideoFile] = React.useState<File>();

  const handleFile = (e: any) => {
    const file = e.target.files;
  };

  async function searchVideo(e: any) {
    e.preventDefault();
    if (!videoFile) {
      toast.error("You must upload a video file ⚠️", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    if (!encodingFile) {
      toast.error("You must upload an encoding ⚠️", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return;
    }

    const data = new FormData();
    data.append("encoding-file", encodingFile);
    data.append("video-file", videoFile);

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
    <div className="w-full flex">
      <Sidebar />
      <div className="flex-1 ml-60 p-5 flex flex-col justify-center items-center">
        <div className="w-full">
          <h1 className="text-3xl font-semibold text-center mb-10">
            Generate Encoding
          </h1>
          <form className="flex flex-col justify-center items-center">
            <div className="w-1/2 flex flex-col justify-center items-center mb-10 mt-10">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="large_size"
              >
                Encoding File
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="large_size"
                type="file"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center mb-10">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="large_size"
              >
                Video File
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="large_size"
                type="file"
              />
            </div>
            <div className="w-full flex justify-center mb-10">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded"
                onClick={(e) => searchVideo(e)}
              >
                Generate
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
