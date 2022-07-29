import React from "react";
import ReactDOM from "react-dom";

const LoginModal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div
      className={`modal fixed inset-0 z-50 flex items-center justify-center p-5 ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-20 overlay"
        onClick={handleClose}
      ></div>
      <div className="modal-content relative w-full bg-white z-10 p-5 rounded-lg max-w-[460px]">
        <span
          className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full translate-x-2/4 -translate-y-2/4 cursor-pointer"
          onClick={handleClose}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
              fill="#84878B"
            />
          </svg>
        </span>
        <h1 className="font-bold text-login text-center mb-6 select-none">
          Log in to Social Network
        </h1>
        <div className="flex flex-col max-h-[360px] overflow-auto touch-auto p-2">
          <div className="username flex flex-col mb-3">
            <label htmlFor="" className="font-semibold text-li select-none">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username..."
              className="p-3 focus:outline-none border rounded-lg mb-2 mt-2 border-gray-400"
            />
            {/* <span className="text-red-500 font-semibold">error</span> */}
          </div>
          <div className="pass1 flex flex-col mb-3">
            <label htmlFor="" className="font-semibold text-li select-none">
              Password
            </label>
            <input
              type="Password"
              name="pass1"
              placeholder="Enter your password..."
              className="p-3 focus:outline-none border rounded-lg mb-2 mt-2 border-gray-400"
            />
            {/* <span className="text-red-500 font-semibold">error</span> */}
          </div>
          <div className="pass2 flex flex-col mb-3">
            <label htmlFor="" className="font-semibold text-li select-none">
              Retype password
            </label>
            <input
              type="Password"
              name="pass2"
              placeholder="Enter re-password..."
              className="p-3 focus:outline-none border rounded-lg mb-2 mt-2 border-gray-400"
            />
            {/* <span className="text-red-500 font-semibold">error</span> */}
          </div>
          <div className="flex flex-row justify-end">
            <input
              type="checkbox"
              name="checkbox"
              id="check1"
              className="mr-3"
            />
            <label htmlFor="check1" className="select-none">
              Remember Password?
            </label>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4">
          <div className="flex flex-row justify-between items-center pl-3 pr-3 w-[300px]">
            <button className="p-2 bg-[#ef2950] rounded-lg text-white font-semibold text-li pl-5 pr-5 cursor-pointer hover:bg-gradient-to-tr hover:from-[rgba(0,0,0,0.1)] hover:to-[rgba(0,0,0,0.1)]">
              Sign Up
            </button>
            <button className="p-2 bg-[#ef2950] rounded-lg text-white font-semibold text-li pl-5 pr-5 cursor-pointer hover:bg-gradient-to-tr hover:from-[rgba(0,0,0,0.1)] hover:to-[rgba(0,0,0,0.1)]">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default LoginModal;
