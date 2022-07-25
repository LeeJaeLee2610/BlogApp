import React, { Fragment } from "react";
import InLogin from "../login/InLogin";
// import Unlogin from "../unlogin/Unlogin";

const Header = () => {
  return (
    <Fragment>
      <header className="header sticky top-0 bg-white">
        <div className="flex flex-row w-[1200px] justify-center items-center mx-auto mr-auto">
          <div className="w-1/3 flex justify-start items-center p-3">
            <h1 className="font-bold text-[#ff9696] text-logo font-logofami">
              Social Network
            </h1>
          </div>
          <div className="w-1/3 flex justify-center items-center p-3">
            <div className="w-[361px] bg-[#f1f1f2] rounded-full flex flex-row items-center justify-center">
              <input
                type="text"
                className="bg-transparent w-[290px] p-3 focus:outline-none"
                autoComplete="off"
                placeholder="Search accounts and articles..."
              />
              <span className="border-r border-[#a1a2a7] w-[1px] h-[30px]"></span>
              <span className="flex justify-center items-center p-3 rounded-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#a1a2a7]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="w-1/3 flex justify-end items-center p-3">
            {/* <Unlogin></Unlogin> */}
            <InLogin></InLogin>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
