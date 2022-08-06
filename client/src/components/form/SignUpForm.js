import React, { Fragment, useState } from "react";
import styled from "styled-components";
import useHandleChange from "../../hooks/useHanleChange";

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
  const [emptyUserName, setEmptyUserName] = useState("");
  const [emptyPass1, setEmptyPass1] = useState("");
  const [emptyPass2, setEmptyPass2] = useState("");
  const [duplicate, setDuplicate] = useState("");
  const [errUser, setErrUser] = useState("");
  const { values, handleChange } = useHandleChange({
    username: "",
    password: "",
    pass2: "",
  });
  const handleSignUp = () => {
    console.log(values);
    var ok = true;
    if (values.username === "") {
      ok = false;
      setEmptyUserName("Không được để trống username");
    } else {
      setEmptyUserName("");
    }
    if (values.password === "") {
      ok = false;
      setEmptyPass1("Khong duoc de trong");
    } else {
      setEmptyPass1("");
    }
    if (values.pass2 === "") {
      ok = false;
      setEmptyPass2("Khong duoc de trong");
    } else {
      setEmptyPass2("");
    }
    if (values.password !== values.pass2) {
      ok = false;
      setDuplicate("Mat khau khong khop");
    } else {
      setDuplicate("");
    }
    if (ok) {
      fetch("http://localhost:3030/users/getAllUsers")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          var ok1 = true;
          for (let i = 0; i < data.length; i++) {
            if (data[i].username === values.username) {
              ok1 = false;
              break;
            }
          }
          if (ok1 === false) {
            setErrUser("Trung");
          } else {
            setErrUser("");
            fetch("http://localhost:3030/users/addUser", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            })
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                alert(`Dang ki thanh cong tai khoan ${data.username}`);
                window.location.reload();
              });
          }
        });
    }
  };
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
            onChange={handleChange}
          />
          <span className="text-red-500 font-semibold">
            {emptyUserName !== "" && emptyUserName}
            {errUser !== "" && errUser}
          </span>
        </div>
        <div className="pass1 flex flex-col mb-3">
          <label htmlFor="" className="font-semibold text-li select-none">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password..."
            className="p-3 focus:outline-none border rounded-lg mb-2 mt-2 border-gray-400"
            onChange={handleChange}
          />
          <span className="text-red-500 font-semibold">
            {emptyPass1 !== "" && emptyPass1}
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
            {emptyPass2 !== "" && emptyPass2}
            {duplicate !== "" && duplicate}
          </span>
        </div>
        <button
          className="p-2 bg-[#ef2950] rounded-lg text-white font-semibold text-li pl-5 pr-5 cursor-pointer hover:bg-gradient-to-tr hover:from-[rgba(0,0,0,0.1)] hover:to-[rgba(0,0,0,0.1)]"
          onClick={handleSignUp}
        >
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
