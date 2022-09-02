import React, { Fragment, useState } from "react";
import LoginModal from "../modal/LoginModal";

const UnLogin = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <Fragment>
      <LoginModal
        open={showLogin}
        handleClose={() => setShowLogin(false)}
      ></LoginModal>
      <div className="flex flex-row items-center">
        <div className="min-w-[110px] pl-[16px] pr-[16px] h-[36px] border rounded-sm flex items-center justify-center cursor-pointer">
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
          <span
            className="text-[#161823] font-semibold text-su not-italic"
            onClick={() => setShowLogin(true)}
          >
            Upload
          </span>
        </div>
        <button
          className="min-w-[100px] ml-[16px] mr-[16px] text-base font-bold cursor-pointer pt-[6px] pb-[6px] pl-[8px] pr-[8px] border-none rounded-md bg-[#fe2c55] flex justify-center items-center text-white"
          onClick={() => setShowLogin(true)}
        >
          Log in
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </div>
    </Fragment>
  );
};

export default UnLogin;
