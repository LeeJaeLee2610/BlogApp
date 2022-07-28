import React, { Fragment, useState } from "react";
import LoginModal from "../modal/LoginModal";

const Unlogin = () => {
  const [showLogin, setShowLogin] = useState(false);
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
      <div>
        <LoginModal
          open={showLogin}
          handleClose={() => setShowLogin(false)}
        ></LoginModal>
      </div>
      <button
        className="ml-[16px] mr-[16px] rounded-md bg-[#ef2950] text-[#ffffff] font-bold text-li pt-[6px] pb-[6px] pl-[27px] pr-[27px] hover:bg-gradient-to-tr hover:from-[rgba(0,0,0,0.1)] hover:to-[rgba(0,0,0,0.1)]"
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
    </Fragment>
  );
};

export default Unlogin;
