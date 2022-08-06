import React, { Fragment, useState } from "react";
import InfoUserDropDown from "../dropdown/InfoUserDropDown";
import { NavLink } from "react-router-dom";
import useSWR from "swr";
import { fetcher, getUserApi } from "../../config";

const UnLogSideBar = () => {
  const [see, setSee] = useState(true);

  const { data: infos3SA } = useSWR(getUserApi.get3InfoSA, fetcher);
  const { data: infos10SA } = useSWR(getUserApi.get10InfoSA, fetcher);

  return (
    <Fragment>
      <div className="pt-[15px] pb-[12px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex flex-row justify-start items-center p-[8px] cursor-pointer hover:bg-[#f8f8f8] text-[#fe2c55]"
              : "flex flex-row justify-start items-center p-[8px] cursor-pointer hover:bg-[#f8f8f8]"
          }
        >
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
          <span className="ml-3 font-bold text-btn_login">For You</span>
        </NavLink>
        <NavLink
          to="/following"
          className={({ isActive }) =>
            isActive
              ? "flex flex-row justify-start items-center p-[8px] cursor-pointer hover:bg-[#f8f8f8] text-[#fe2c55]"
              : "flex flex-row justify-start items-center p-[8px] cursor-pointer hover:bg-[#f8f8f8]"
          }
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 48 48"
            fill="rgba(254, 44, 85, 1.0)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M25.5 17C25.5 21.1421 22.1421 24.5 18 24.5C13.8579 24.5 10.5 21.1421 10.5 17C10.5 12.8579 13.8579 9.5 18 9.5C22.1421 9.5 25.5 12.8579 25.5 17Z"></path>
            <path d="M7.10396 34.7906C8.78769 30.2189 12.8204 27 18.0009 27C23.1818 27 27.2107 30.2213 28.8958 34.7898C29.3075 35.906 28.6141 37 27.5 37H8.5C7.38629 37 6.69289 35.9067 7.10396 34.7906Z"></path>
            <path d="M40.6308 37H32C31.2264 34.1633 30.0098 31.5927 28.144 29.7682C29.5384 28.9406 31.1829 28.5 33 28.5C37.239 28.5 40.536 30.8992 41.9148 35.0108C42.2516 36.0154 41.5423 37 40.6308 37Z"></path>
            <path d="M33 26.5C36.0376 26.5 38.5 24.0376 38.5 21C38.5 17.9624 36.0376 15.5 33 15.5C29.9624 15.5 27.5 17.9624 27.5 21C27.5 24.0376 29.9624 26.5 33 26.5Z"></path>
          </svg>
          <div className="ml-3 font-bold text-btn_login">Following</div>
        </NavLink>
        <div className="flex flex-row justify-start items-center p-[8px] cursor-pointer hover:bg-[#f8f8f8]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="rgba(254, 44, 85, 1.0)"
            viewBox="0 0 24 24"
            // stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          <div className="ml-3 font-bold text-btn_login ">
            Featured Articles
          </div>
        </div>
      </div>
      <div className="border-t border-[#f1f1f2] pt-[20px] pb-[20px] border-b mx-auto my-auto mr-2 ml-2">
        <span className="text-[#8a8B91] text-base text-left">
          Log in to follow creators, like articles and view cmts.
        </span>
        <button className="min-w-[376px] border border-[#ef2c55] font-semibold text-[#ef2c55] text-btn_login rounded-md pt-[6px] pb-[6px] pl-[8px] pr-[8px] min-h-[48px] mt-[20px] hover:bg-gradient-to-br hover:from-[#fff3f5] hover:to-[#fff3f5]">
          Log in
        </button>
      </div>
      <div className="pt-[16px] pb-[16px]">
        <p className="text-sa text-sac pl-2 pb-4">Suggested accounts</p>
        {see ? (
          <>
            {infos3SA &&
              infos3SA.map((item) => (
                <InfoUserDropDown key={item._id} item={item}></InfoUserDropDown>
              ))}
            <span
              className="cursor-pointer text-[#fe2c55] pl-1"
              onClick={() => {
                setSee(false);
              }}
            >
              See more
            </span>
          </>
        ) : (
          <>
            {infos10SA &&
              infos10SA.map((item) => (
                <InfoUserDropDown key={item._id} item={item}></InfoUserDropDown>
              ))}
            <span
              className="cursor-pointer text-[#fe2c55] pl-1"
              onClick={() => {
                setSee(true);
              }}
            >
              See less
            </span>
          </>
        )}
      </div>
      <div className="border-t border-[#f1f1f2] border-b pb-3 mr-2">
        <p className="text-sa text-sac pl-2 pb-4 pt-[15px]">Discover</p>
        <div className="w-full flex flex-wrap">
          <div className="flex flex-row items-center justify-center mr-3 bg-transparent rounded-2xl p-[5px] border border-black mb-2">
            <svg
              className="tiktok-1hy6k9f-StyledNumber eikhr9j9"
              width="16"
              height="16"
              viewBox="0 0 48 48"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.4263 15L16.9566 3.95205C16.9822 3.41902 17.4218 2.99999 17.9554 2.99999H19.9494C20.5202 2.99999 20.9752 3.47701 20.9483 4.04718L20.4308 15H28.4263L28.9566 3.95205C28.9822 3.41902 29.4218 2.99999 29.9554 2.99999H31.9494C32.5202 2.99999 32.9752 3.47701 32.9483 4.04718L32.4308 15H43C43.5523 15 44 15.4477 44 16V18C44 18.5523 43.5523 19 43 19H32.2404L31.8118 28H42C42.5523 28 43 28.4477 43 29V31C43 31.5523 42.5523 32 42 32H31.6213L31.0434 44.0479C31.0178 44.581 30.5782 45 30.0446 45H28.0507C27.4798 45 27.0248 44.523 27.0518 43.9528L27.6168 32H19.6213L19.0434 44.0479C19.0178 44.581 18.5782 45 18.0446 45H16.0507C15.4798 45 15.0248 44.523 15.0518 43.9528L15.6168 32H5C4.44772 32 4 31.5523 4 31V29C4 28.4477 4.44772 28 5 28H15.8073L16.2358 19H6C5.44772 19 5 18.5523 5 18V16C5 15.4477 5.44772 15 6 15H16.4263ZM20.2404 19L19.8118 28H27.8073L28.2358 19H20.2404Z"
              ></path>
            </svg>
            <p className="text-sa ml-2">Content</p>
          </div>
          <div className="flex flex-row items-center justify-center mr-3 bg-transparent rounded-2xl p-[5px] border border-black mb-2">
            <svg
              className="tiktok-1hy6k9f-StyledNumber eikhr9j9"
              width="16"
              height="16"
              viewBox="0 0 48 48"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.4263 15L16.9566 3.95205C16.9822 3.41902 17.4218 2.99999 17.9554 2.99999H19.9494C20.5202 2.99999 20.9752 3.47701 20.9483 4.04718L20.4308 15H28.4263L28.9566 3.95205C28.9822 3.41902 29.4218 2.99999 29.9554 2.99999H31.9494C32.5202 2.99999 32.9752 3.47701 32.9483 4.04718L32.4308 15H43C43.5523 15 44 15.4477 44 16V18C44 18.5523 43.5523 19 43 19H32.2404L31.8118 28H42C42.5523 28 43 28.4477 43 29V31C43 31.5523 42.5523 32 42 32H31.6213L31.0434 44.0479C31.0178 44.581 30.5782 45 30.0446 45H28.0507C27.4798 45 27.0248 44.523 27.0518 43.9528L27.6168 32H19.6213L19.0434 44.0479C19.0178 44.581 18.5782 45 18.0446 45H16.0507C15.4798 45 15.0248 44.523 15.0518 43.9528L15.6168 32H5C4.44772 32 4 31.5523 4 31V29C4 28.4477 4.44772 28 5 28H15.8073L16.2358 19H6C5.44772 19 5 18.5523 5 18V16C5 15.4477 5.44772 15 6 15H16.4263ZM20.2404 19L19.8118 28H27.8073L28.2358 19H20.2404Z"
              ></path>
            </svg>
            <p className="text-sa ml-2">Content</p>
          </div>
          <div className="flex flex-row items-center justify-center mr-3 bg-transparent rounded-2xl p-[5px] border border-black mb-2">
            <svg
              className="tiktok-1hy6k9f-StyledNumber eikhr9j9"
              width="16"
              height="16"
              viewBox="0 0 48 48"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.4263 15L16.9566 3.95205C16.9822 3.41902 17.4218 2.99999 17.9554 2.99999H19.9494C20.5202 2.99999 20.9752 3.47701 20.9483 4.04718L20.4308 15H28.4263L28.9566 3.95205C28.9822 3.41902 29.4218 2.99999 29.9554 2.99999H31.9494C32.5202 2.99999 32.9752 3.47701 32.9483 4.04718L32.4308 15H43C43.5523 15 44 15.4477 44 16V18C44 18.5523 43.5523 19 43 19H32.2404L31.8118 28H42C42.5523 28 43 28.4477 43 29V31C43 31.5523 42.5523 32 42 32H31.6213L31.0434 44.0479C31.0178 44.581 30.5782 45 30.0446 45H28.0507C27.4798 45 27.0248 44.523 27.0518 43.9528L27.6168 32H19.6213L19.0434 44.0479C19.0178 44.581 18.5782 45 18.0446 45H16.0507C15.4798 45 15.0248 44.523 15.0518 43.9528L15.6168 32H5C4.44772 32 4 31.5523 4 31V29C4 28.4477 4.44772 28 5 28H15.8073L16.2358 19H6C5.44772 19 5 18.5523 5 18V16C5 15.4477 5.44772 15 6 15H16.4263ZM20.2404 19L19.8118 28H27.8073L28.2358 19H20.2404Z"
              ></path>
            </svg>
            <p className="text-sa ml-2">Content</p>
          </div>
          <div className="flex flex-row items-center justify-center mr-3 bg-transparent rounded-2xl p-[5px] border border-black mb-2">
            <svg
              className="tiktok-1hy6k9f-StyledNumber eikhr9j9"
              width="16"
              height="16"
              viewBox="0 0 48 48"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.4263 15L16.9566 3.95205C16.9822 3.41902 17.4218 2.99999 17.9554 2.99999H19.9494C20.5202 2.99999 20.9752 3.47701 20.9483 4.04718L20.4308 15H28.4263L28.9566 3.95205C28.9822 3.41902 29.4218 2.99999 29.9554 2.99999H31.9494C32.5202 2.99999 32.9752 3.47701 32.9483 4.04718L32.4308 15H43C43.5523 15 44 15.4477 44 16V18C44 18.5523 43.5523 19 43 19H32.2404L31.8118 28H42C42.5523 28 43 28.4477 43 29V31C43 31.5523 42.5523 32 42 32H31.6213L31.0434 44.0479C31.0178 44.581 30.5782 45 30.0446 45H28.0507C27.4798 45 27.0248 44.523 27.0518 43.9528L27.6168 32H19.6213L19.0434 44.0479C19.0178 44.581 18.5782 45 18.0446 45H16.0507C15.4798 45 15.0248 44.523 15.0518 43.9528L15.6168 32H5C4.44772 32 4 31.5523 4 31V29C4 28.4477 4.44772 28 5 28H15.8073L16.2358 19H6C5.44772 19 5 18.5523 5 18V16C5 15.4477 5.44772 15 6 15H16.4263ZM20.2404 19L19.8118 28H27.8073L28.2358 19H20.2404Z"
              ></path>
            </svg>
            <p className="text-sa ml-2">Content</p>
          </div>
          <div className="flex flex-row items-center justify-center mr-3 bg-transparent rounded-2xl p-[5px] border border-black mb-2">
            <svg
              className="tiktok-1hy6k9f-StyledNumber eikhr9j9"
              width="16"
              height="16"
              viewBox="0 0 48 48"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.4263 15L16.9566 3.95205C16.9822 3.41902 17.4218 2.99999 17.9554 2.99999H19.9494C20.5202 2.99999 20.9752 3.47701 20.9483 4.04718L20.4308 15H28.4263L28.9566 3.95205C28.9822 3.41902 29.4218 2.99999 29.9554 2.99999H31.9494C32.5202 2.99999 32.9752 3.47701 32.9483 4.04718L32.4308 15H43C43.5523 15 44 15.4477 44 16V18C44 18.5523 43.5523 19 43 19H32.2404L31.8118 28H42C42.5523 28 43 28.4477 43 29V31C43 31.5523 42.5523 32 42 32H31.6213L31.0434 44.0479C31.0178 44.581 30.5782 45 30.0446 45H28.0507C27.4798 45 27.0248 44.523 27.0518 43.9528L27.6168 32H19.6213L19.0434 44.0479C19.0178 44.581 18.5782 45 18.0446 45H16.0507C15.4798 45 15.0248 44.523 15.0518 43.9528L15.6168 32H5C4.44772 32 4 31.5523 4 31V29C4 28.4477 4.44772 28 5 28H15.8073L16.2358 19H6C5.44772 19 5 18.5523 5 18V16C5 15.4477 5.44772 15 6 15H16.4263ZM20.2404 19L19.8118 28H27.8073L28.2358 19H20.2404Z"
              ></path>
            </svg>
            <p className="text-sa ml-2">Content</p>
          </div>
        </div>
      </div>
      <div className="mt-[20px] mb-[20px]">
        <p className="text-sa text-sac">&#64; Sosical Đông Anh</p>
      </div>
    </Fragment>
  );
};

export default UnLogSideBar;
