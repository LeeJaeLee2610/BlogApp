import React, { Fragment } from "react";

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
      
    </Fragment>
  );
};

export default InLogin;
