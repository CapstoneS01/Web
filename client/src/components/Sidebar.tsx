// https://flowbite.com/docs/components/sidebar/
import React from "react";
import droneLogo from "../assests/drone-logo.png";

export const Sidebar = () => {
  return (
    <div className="font-mono font-sm">
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gradient-to-b from-slate-800 to-slate-900">
          <ul className="space-y-2">
            <li className="pb-3">
              <a
                href="/dashboard"
                className="flex text-lg font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 items-center"
              >
                <img className="h-8" src={droneLogo} />
                <span className="ml-3 font-bold ">Sky Hunt</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-xs font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 21H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v9"
                    stroke="#f3f6f4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011M19.5 22v-6m0 0L17 18.5m2.5-2.5l2.5 2.5"
                    stroke="#f3f6f4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Generate an Encoding
                </span>
              </a>
            </li>
            <li className="">
              <a
                href="/live"
                className="flex items-center p-2 text-xs font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  width="24px"
                  height="24px"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 12v4.4a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6h10.8a.6.6 0 01.6.6V12zm0 0l5.016-4.18a.6.6 0 01.984.461v7.438a.6.6 0 01-.984.46L15 12z"
                    stroke="#f3f6f4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Live Footage
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-xs font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-300"
                >
                  <path
                    d="M7 14a3 3 0 101 5.83M4.264 15.605a4 4 0 01-.874-6.636M3.42 8.888A2.5 2.5 0 017 5.5M7.238 5.565A2.5 2.5 0 1112 4.5V20M8 20a2 2 0 104 0M12 7a3 3 0 003 3M20.61 8.969A3.99 3.99 0 0122 12c0 .703-.181 1.364-.5 1.938M20.58 8.888A2.5 2.5 0 0017 5.5M12 4.5a2.5 2.5 0 114.762 1.065M14 22a2 2 0 01-2-2M20.5 20.5L22 22M16 18.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z"
                    stroke="#f3f6f4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Search Video
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-xs font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-300"
                >
                  <path
                    d="M7 14a3 3 0 101 5.83M4.264 15.605a4 4 0 01-.874-6.636M3.42 8.888A2.5 2.5 0 017 5.5M7.238 5.565A2.5 2.5 0 1112 4.5V20M8 20a2 2 0 104 0M12 7a3 3 0 003 3M20.61 8.969A3.99 3.99 0 0122 12c0 .703-.181 1.364-.5 1.938M20.58 8.888A2.5 2.5 0 0017 5.5M12 4.5a2.5 2.5 0 114.762 1.065M14 22a2 2 0 01-2-2M20.5 20.5L22 22M16 18.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z"
                    stroke="#f3f6f4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Search Image
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-xs font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  width="24px"
                  height="24px"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 20v-1a7 7 0 017-7v0a7 7 0 017 7v1M12 12a4 4 0 100-8 4 4 0 000 8z"
                    stroke="#f3f6f4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
