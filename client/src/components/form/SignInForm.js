import React, { Fragment, useState } from "react";
import styled from "styled-components";
import useHandleChange from "../../hooks/useHanleChange";

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
  const [errorEmptyUserName, setErrorEmptyUserName] = useState("");
  const [errorEmptyPass1, setErrorEmptyPass1] = useState("");
  const [errorEmptyPass2, setErrorEmptyPass2] = useState("");
  const [duplicate, setDuplicate] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPass, setErrorPass] = useState("");

  const { values, handleChange } = useHandleChange({
    username: "",
    pass1: "",
    pass2: "",
  });

  const handleSignIn = () => {
    // console.log(values);
    sessionStorage.setItem("username", "");
    var ok = true;
    if (values.username === "") {
      setErrorEmptyUserName("Vui lòng nhập Username");
      ok = false;
    } else {
      setErrorEmptyUserName("");
    }
    if (values.pass1 === "") {
      setErrorEmptyPass1("Vui lòng nhập Password");
      ok = false;
    } else {
      setErrorEmptyPass1("");
    }
    if (values.pass2 === "") {
      setErrorEmptyPass2("Vui lòng nhập lại Password");
      ok = false;
    } else {
      setErrorEmptyPass2("");
    }
    if (values.pass1 !== values.pass2) {
      setDuplicate("Không trùng mật khẩu");
      ok = false;
    } else {
      setDuplicate("");
    }
    if (ok === true) {
      fetch(`http://localhost:3030/users/getUserByUserName/${values.username}`)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((res) => {
          setErrorUserName("");
          if (values.pass1 !== res.password) {
            setErrorPass("Sai mật khẩu");
          } else {
            setErrorPass("");
            sessionStorage.setItem("username", res.username);
            sessionStorage.setItem("uid", res._id);
            localStorage.setItem("username", res.username);
            localStorage.setItem("username", res._id);
            window.location.reload();
          }
        })
        .catch((err) => {
          setErrorUserName("Sai tài khoản hoặc mật khẩu");
        });
    }
  };

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
          <span className="text-red-500 font-semibold">
            {errorEmptyUserName !== "" && errorEmptyUserName}
            {errorUserName !== "" && errorUserName}
          </span>
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
          <span className="text-red-500 font-semibold">
            {errorEmptyPass1 !== null && errorEmptyPass1}
            {errorPass !== null && errorPass}
          </span>
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
          <span className="text-red-500 font-semibold">
            {errorEmptyPass2 !== null && errorEmptyPass2}
            {duplicate !== null && duplicate}
          </span>
        </div>
        <div className="flex flex-row justify-end mb-3">
          <input type="checkbox" name="checkbox" id="check1" className="mr-3" />
          <label htmlFor="check1" className="select-none">
            Remember Password?
          </label>
        </div>
        <button
          className="p-2 bg-[#ef2950] rounded-lg text-white font-semibold text-li pl-5 pr-5 cursor-pointer hover:bg-gradient-to-tr hover:from-[rgba(0,0,0,0.1)] hover:to-[rgba(0,0,0,0.1)]"
          onClick={handleSignIn}
        >
          Sign In
        </button>
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
