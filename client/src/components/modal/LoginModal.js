import React, { useState } from "react";
import ReactDOM from "react-dom";
import SignInForm from "../form/SignInForm";
import SignUpForm from "../form/SignUpForm";
// import { useNavigate } from "react-router-dom";

const LoginModal = ({ open = false, handleClose = () => {} }) => {
  // const navigate = useNavigate();
  const [showSignIn, setShowSignIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div
      className={`modal fixed inset-0 z-50 flex items-center justify-center ${
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
        {showSignIn && (
          <SignInForm
            handleClose1={() => {
              setShowSignUp(true);
              setShowSignIn(false);
            }}
          ></SignInForm>
        )}
        {showSignUp && (
          <SignUpForm
            handleClose2={() => {
              setShowSignUp(false);
              setShowSignIn(true);
            }}
          ></SignUpForm>
        )}
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default LoginModal;
