import React, { Fragment, useEffect, useState } from "react";
import InLogin from "../login/InLogin";
import Unlogin from "../login/Unlogin";
import { Outlet } from "react-router-dom";

const Header = () => {
  const [showUnLog, setShowUnLog] = useState(true);
  const [showX, setShowX] = useState(false);

  const handleSearchChange = (e) => {
    if (e.target.value === "") {
      setShowX(false);
    } else {
      setShowX(true);
    }
  };

  useEffect(() => {
    fetch(
      `http://localhost:3030/users/getUserByUserName/${sessionStorage.getItem(
        "username"
      )}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setShowUnLog(false);
      })
      .catch((err) => {
        setShowUnLog(true);
      });
  });
  return (
    <Fragment>
      <header className="header sticky top-0 bg-white shadow-md">
        <div className="flex flex-row w-[1200px] justify-center items-center mx-auto mr-auto">
          <div className="w-1/3 flex justify-start items-center p-3">
            <h1 className="font-bold text-[#ff9696] text-logo font-logofami">
              Social Network
            </h1>
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <div className="w-[361px] bg-[#f1f1f2] rounded-full flex flex-row items-center justify-center relative">
              <input
                type="text"
                className="bg-transparent w-[290px] p-3 focus:outline-none"
                id="search"
                autoComplete="off"
                placeholder="Search accounts and articles..."
                onChange={handleSearchChange}
              />
              <span className="border-r border-[#a1a2a7] w-[1px] h-[30px]"></span>
              <span className="flex justify-center items-center p-3 rounded-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#a1a2a7]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              {showX && (
                <span
                  className="bg-[#a6a7ab] rounded-full cursor-pointer p-[2px] absolute left-[280px] flex items-center justify-center"
                  onClick={() => {
                    document.getElementById("search").value = "";
                    setShowX(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-2 w-2"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </div>
          </div>
          <div className="w-1/3 flex justify-end items-center p-3">
            {showUnLog ? <Unlogin></Unlogin> : <InLogin></InLogin>}
          </div>
        </div>
      </header>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Header;
