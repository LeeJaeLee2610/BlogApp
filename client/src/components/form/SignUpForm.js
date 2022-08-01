import React, { Fragment } from "react";
import styled from "styled-components";

const SignUpScroll = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f1f1f2;
    border-radius: 150px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  padding: 12px;
  border-bottom: 1px solid gray;
  transition: all;
  transition-delay: 200ms;
`;

const SignUpForm = ({ handleClose2 = () => {} }) => {
  return (
    <Fragment>
      <SignUpScroll>
        <h1 className="font-bold text-login text-center mb-6 select-none">
          Sign up for Social Network
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
        <button className="p-2 bg-[#ef2950] rounded-lg text-white font-semibold text-li pl-5 pr-5 cursor-pointer hover:bg-gradient-to-tr hover:from-[rgba(0,0,0,0.1)] hover:to-[rgba(0,0,0,0.1)]">
          Sign Up
        </button>
      </SignUpScroll>
      <div className="flex justify-center items-center mt-3">
        <span className="mr-3">Already have an account?</span>
        <span
          className="text-[#ef2950] font-semibold cursor-pointer hover:underline hover:decoration-1"
          onClick={handleClose2}
        >
          Log In
        </span>
      </div>
    </Fragment>
  );
};

export default SignUpForm;
