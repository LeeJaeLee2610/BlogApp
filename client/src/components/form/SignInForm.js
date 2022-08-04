import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { fetcher, getUserApi } from "../../config";
import useHandleChange from "../../hooks/useHanleChange";
import useSWR from "swr";

const SignInScroll = styled.div`
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

const SignInForm = ({ handleClose1 = () => {}, handleClose }) => {
  const [inLogIn, setInLogIn] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [duplicate, setDuplicate] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPass, setErrorPass] = useState("");

  const { values, handleChange } = useHandleChange({
    username: "",
    pass1: "",
    pass2: "",
  });

  // useEffect(() => {
  //   if (values.username !== "") {
  //     fetch(getUserApi.getUserByUserName(values.username))
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((res) => {})
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [values]);

  const handleSignIn = () => {
    console.log(values);
    if (values.username !== "") {
      fetch(getUserApi.getUserByUserName(values.username))
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setInLogIn(true);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // useEffect(() => {
  //   if (debounceValue) {
  //     fetch(getUserApi.getUserByUserName(debounceValue.username))
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((user) => {
  //         // fetch(getUserApi.setSessionUser(user._id));
  //       })
  //       .catch((error) => {
  //         console.log("No data");
  //       });
  //   }
  // }, [debounceValue]);
  return (
    <Fragment>
      <SignInScroll>
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
            id="username"
            placeholder="Enter your username..."
            className="p-3 focus:outline-none border rounded-lg mb-2 mt-2 border-gray-400"
            onChange={handleChange}
          />
          {/* <span className="text-red-500 font-semibold">
            {errorEmpty.username}
          </span> */}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
          {/* <span className="text-red-500 font-semibold">error</span> */}
        </div>
        <div className="flex flex-row justify-end mb-3">
          <input type="checkbox" name="checkbox" id="check1" className="mr-3" />
          <label htmlFor="check1" className="select-none">
            Remember Password?
          </label>
        </div>
        {inLogIn ? (
          <button
            className="p-2 bg-[#ef2950] rounded-lg text-white font-semibold text-li pl-5 pr-5 cursor-pointer hover:bg-gradient-to-tr hover:from-[rgba(0,0,0,0.1)] hover:to-[rgba(0,0,0,0.1)]"
            onClick={handleClose}
          >
            Sign In
          </button>
        ) : (
          <button
            className="p-2 bg-[#ef2950] rounded-lg text-white font-semibold text-li pl-5 pr-5 cursor-pointer hover:bg-gradient-to-tr hover:from-[rgba(0,0,0,0.1)] hover:to-[rgba(0,0,0,0.1)]"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        )}
      </SignInScroll>
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
