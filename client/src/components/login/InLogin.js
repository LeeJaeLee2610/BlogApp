import React, { Fragment } from "react";
import DropdownUser from "../dropdown/DropdownUser";

const InLogin = () => {
  return (
    <Fragment>
      <div className="flex flex-row justify-center items-center border border-gray-400 cursor-pointer text-su font-semibold pt-[5px] pb-[5px] pl-[9px] pr-[9px] hover:bg-[#f1f1f2] hover:inset-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span className="text-[#161823] ml-1">Upload</span>
      </div>
      <div className="ml-[16px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-su cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div className="ml-[16px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-su cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </div>
      <DropdownUser></DropdownUser>
    </Fragment>
  );
};

export default InLogin;
