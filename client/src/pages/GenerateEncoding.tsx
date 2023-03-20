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

  const removeImage = (name: string) => {
    const filteredFiles = files.filter((file) => file.name !== name);
    setFiles(filteredFiles);
  };

  async function submitImages(e: any) {
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
    for (let i = 0; i < files.length; i++) {
      data.append("files", files[i]);
    }

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
            <div className="w-full flex flex-col justify-center items-center mb-10 mt-10">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter encoding name"
                className="w-2/5 px-3 py-3 placeholder-slate-400 text-slate-700 bg-white rounded text-sm border border-slate-100 shadow focus:outline-none focus:ring"
                onChange={(e) => setEncodingName(e.target.value)}
              />
            </div>
            <div className="w-full flex justify-center mb-10">
              <div className="rounded-lg shadow-xl bg-gray-50 w-full md:w-1/2">
                <div className="m-4">
                  <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
                    {message}
                  </span>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="image"
                      className="flex items-center justify-center p-40 flex-col w-full h-32 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300 cursor-pointer"
                    >
                      <div className="flex flex-col items-center justify-center pt-7">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-12 h-12 text-gray-400 group-hover:text-gray-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                          Select a photo
                        </p>
                      </div>
                      <input
                        type="file"
                        id="image"
                        name="files[]"
                        className="opacity-0"
                        multiple={true}
                        onChange={handleFile}
                      />
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {files.map((file, key) => (
                      <div key={key} className="overflow-hidden relative">
                        <img
                          className="h-20 w-20 rounded-md"
                          src={URL.createObjectURL(file)}
                          alt="Selected Image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center mb-10">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded"
                onClick={(e) => submitImages(e)}
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
