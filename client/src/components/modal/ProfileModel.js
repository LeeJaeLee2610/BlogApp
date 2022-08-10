import React from "react";
import ReactDom from "react-dom";

const ProfileModel = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDom.createPortal(
    <div
      className={`fixed inset-0 z-50 transition-all delay-150 flex items-center justify-center ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div className="overlay absolute inset-0 bg-black opacity-20 "></div>
      <div className="top-0, right-0 w-full bg-white z-10 p-5 rounded-lg max-w-[460px]"></div>
    </div>,
    document.querySelector("body")
  );
};

export default ProfileModel;
