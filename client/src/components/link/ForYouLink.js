import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

const ForYouLink = () => {
  const [forYou, setForYou] = useState(false);
  return (
    <Fragment>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? setForYou(true) : setForYou(false)
        }
      >
        {forYou ? (
          <div className="flex flex-row justify-start items-center p-[8px] cursor-pointer hover:bg-[#f8f8f8]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 48 48"
              fill="rgba(254, 44, 85, 1.0)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z"
              ></path>
            </svg>
            <span className="ml-3 font-bold text-btn_login text-[#fe2c55]">
              For You
            </span>
          </div>
        ) : (
          <div className="flex flex-row justify-start items-center p-[8px] cursor-pointer hover:bg-[#f8f8f8]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 48 48"
              fill="rgba(22, 24, 35, 1.0)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.0484 7.84003C23.6014 7.38666 24.3975 7.38666 24.9504 7.84001L41.051 21.04C41.5411 21.4418 41.7258 22.1082 41.5125 22.705C41.2991 23.3017 40.7338 23.7 40.1 23.7H37.769L36.5769 36.7278C36.4592 38.0149 35.3798 39 34.0873 39H13.9127C12.6202 39 11.5409 38.0149 11.4231 36.7278L10.231 23.7H7.89943C7.2657 23.7 6.70035 23.3017 6.487 22.705C6.27364 22.1083 6.45833 21.4418 6.9484 21.04L23.0484 7.84003ZM23.9995 10.9397L12.0948 20.7H12.969L14.369 36H22.4994V28.3138C22.4994 27.7616 22.9471 27.3138 23.4994 27.3138H24.4994C25.0517 27.3138 25.4994 27.7616 25.4994 28.3138V36H33.631L35.031 20.7H35.9045L23.9995 10.9397Z"
              ></path>
            </svg>
            <span className="ml-3 font-bold text-btn_login">For You</span>
          </div>
        )}
      </NavLink>
    </Fragment>
  );
};

export default ForYouLink;