import React from "react";
import { Sidebar } from "../components/Sidebar";

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

  return (
    <div className="w-full">
      <Sidebar />
      <div className="ml-60 p-5 flex justify-center items-center">
        <div className="flex flex-col w-full ">
          <div className="flex-1 text-center font-mono w-full">
            <h1 className="text-3xl font-semibold">Generate Encoding</h1>
          </div>
          <div className="form-div w-full">
            <form className="flex flex-col">
              <div className="flex flex-col mt-10 w-full justify-center items-center">
                <label htmlFor="name">Encoding Name</label>
                <input
                  className="px-3 py-3 placeholder-slate-400 text-slate-700 relative bg-white rounded text-sm border border-slate-100 shadow focus:outline-none focus:ring w-2/5"
                  type="text"
                  onChange={(e) => {
                    setEncodingName(e.target.value);
                  }}
                  name="name"
                  id="name"
                />
              </div>
              <div className="flex justify-center px-3 py-5">
                <div className="rounded-lg shadow-xl bg-gray-50 md:w-1/2">
                  <div className="m-4">
                    <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
                      {message}
                    </span>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex cursor-pointer flex-col w-full h-32 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300">
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
                            <i
                              onClick={() => {
                                removeImage(file.name);
                              }}
                              className="mdi mdi-close absolute right-1 hover:text-white cursor-pointer"
                            ></i>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
