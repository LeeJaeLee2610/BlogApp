import React, { Fragment } from "react";

const SignInForm = ({ handleClose1 = () => {} }) => {
  return (
    <Fragment>
      <div className="flex flex-col max-h-[400px] overflow-auto touch-auto p-3 border-b border-gray-300">
        <h1 className="font-bold text-login text-center mb-6 select-none">
          Log in to Social Network
        </h1>
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
            type="password"
            name="pass1"
            id="pass1"
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
            type="password"
            name="pass2"
            id="pass2"
            placeholder="Enter re-password..."
            className="p-3 focus:outline-none border rounded-lg mb-2 mt-2 border-gray-400"
          />
          {/* <span className="text-red-500 font-semibold">error</span> */}
        </div>
        <div className="flex flex-row justify-end mb-3">
          <input type="checkbox" name="checkbox" id="check1" className="mr-3" />
          <label htmlFor="check1" className="select-none">
            Remember Password?
          </label>
        </div>
        <button className="p-2 bg-[#ef2950] rounded-lg text-white font-semibold text-li pl-5 pr-5 cursor-pointer hover:bg-gradient-to-tr hover:from-[rgba(0,0,0,0.1)] hover:to-[rgba(0,0,0,0.1)]">
          Sign In
        </button>
      </div>
      <div className="flex justify-center items-center mt-3">
        <span className="mr-3">Don't have an account?</span>
        <span
          className="text-[#ef2950] font-semibold cursor-pointer hover:underline hover:decoration-1"
          onClick={handleClose1}
        >
          Sign up
        </span>
      </div>
    </Fragment>
  );
};

export default SignInForm;