import React, { Fragment, useState } from "react";
import DropdownUser from "../dropdown/DropdownUser";

const InLogin = () => {
  const [showMes, setShowMes] = useState(false);
  const [showInbox, setShowInbox] = useState(false);
  return (
    <Fragment>
      <div className="flex flex-row justify-center items-center border border-gray-400 cursor-pointer text-su font-semibold pt-[5px] pb-[5px] pl-[9px] pr-[9px] hover:bg-[#f1f1f2] hover:inset-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span className="text-[#161823] ml-1">Upload</span>
      </div>
      <div className="ml-[16px]">
        <div
          className="relative"
          onMouseOver={() => setShowMes(true)}
          onMouseOut={() => setShowMes(false)}
        >
          <svg
            className="tiktok-9oofjg-StyledIcon e1nx07zo1"
            width="25"
            height="25"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"
            ></path>
          </svg>
          {showMes && (
            <div className="absolute flex flex-col justify-center items-center left-[-30px] z-10">
              <i
                className="fa-solid fa-caret-up"
                style={{
                  color: "#5f5f5f",
                }}
              ></i>
              <span className="p-2 bg-[#5f5f5f] mt-[-6px] rounded-lg text-white">
                Messages
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="ml-[16px]">
        <div
          className="relative"
          onMouseOver={() => setShowInbox(true)}
          onMouseOut={() => setShowInbox(false)}
        >
          <svg
            className="tiktok-1g0p6jv-StyledInboxIcon e18kkhh41"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
            ></path>
          </svg>
          {showInbox && (
            <div className="absolute flex flex-col justify-center items-center left-[-27px] mt-[-3px] z-10">
              <i
                className="fa-solid fa-caret-up"
                style={{
                  color: "#5f5f5f",
                }}
              ></i>
              <span className="p-2 bg-[#5f5f5f] mt-[-6px] rounded-lg text-white">
                Messages
              </span>
            </div>
          )}
        </div>
      </div>
      <DropdownUser></DropdownUser>
    </Fragment>
  );
};

export default InLogin;
