// input inspired by https://bbbootstrap.com/snippets/multiple-image-upload-preview-83255717

import React from "react";
import { Sidebar } from "../components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GenerateEncoding = () => {
  const [encodingName, setEncodingName] = React.useState<string>("");
  const [files, setFiles] = React.useState<File[]>([]);
  const [message, setMessage] = React.useState("");

  const handleFile = (e: any) => {
    const files = e.target.files;
    const filesArr = Array.prototype.slice.call(files);
    const filesLength = filesArr.length;

    if (filesLength > 10) {
      setMessage("You can upload a maximum of 10 images");
      return;
    }
    if (filesLength < 5) {
      setMessage("You must upload a minimum of 5 images");
      return;
    }
    setMessage("");
    setFiles(filesArr);
  };

  const generate = async (e: any) => {
    console.log("did not work");
    return;
  };

  async function generateEncoding(e: any) {
    e.preventDefault();

    if (files.length < 5 || files.length > 10) {
      toast.error(
        "You must upload a minimum of 5, and maximum of 10 images ⚠️",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      return;
    }
    if (encodingName === "") {
      toast.error("You must enter an encoding name ⚠️", {
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
    data.append("name", encodingName);
    files.forEach((file: any) => {
      data.append("files", file);
    });

    await fetch("http://localhost:3030/upload", {
      credentials: "same-origin",
      method: "POST",
      body: data,
      headers: {
        token: "",
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
            <div className="w-full flex flex-col justify-center items-center mt-20">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter encoding name"
                className="w-2/5 px-3 py-3 placeholder-slate-400 text-slate-700 bg-white rounded text-sm border border-slate-100 shadow focus:outline-none focus:ring"
                onChange={(e) => setEncodingName(e.target.value)}
              />
              <div className="flex justify-center items-center p-5">
                <div className="rounded-lg shadow-xl bg-gray-50">
                  <div className="m-4">
                    <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
                      {message}
                    </span>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex cursor-pointer flex-col w-full h-60 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300 justify-center items-center px-20">
                        <div className="flex flex-col items-center justify-center pt-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Select a photo
                          </p>
                        </div>
                        <input
                          type="file"
                          onChange={handleFile}
                          className="opacity-0"
                          multiple={true}
                          name="files[]"
                        />
                      </label>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {files.map((file, key) => {
                        return (
                          <div key={key} className="overflow-hidden relative">
                            <img
                              className="h-20 w-20 rounded-md"
                              src={URL.createObjectURL(file)}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded"
                onClick={(e) => generateEncoding(e)}
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
