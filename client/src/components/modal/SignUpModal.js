import React from "react";
import ReactDOM from "react-dom";

const SignUpModal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div
      className={`modal fixed inset-0 z-50 flex items-center justify-center ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="overlay absolute inset-0 bg-black opacity-20"
        onClick={handleClose}
      ></div>
      <div className="modal-content relative w-full bg-white z-10 p-5 rounded-lg max-w-[460px]">
        Oi bnj oi
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default SignUpModal;
