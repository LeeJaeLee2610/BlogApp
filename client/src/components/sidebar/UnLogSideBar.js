import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import useSWR from "swr";
import { fetcher, getApi } from "../../config";
import UnInfoUserDropDown from "../dropdown/UnInfoUserDropDown";
import FeaturedArticles from "../link/FeaturedArticles";
import FollowingLink from "../link/FollowingLink";
import ForYouLink from "../link/ForYouLink";
import LoginModal from "../modal/LoginModal";

const UnLogSideBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [see, setSee] = useState(true);

  const { data: infos3SA } = useSWR(getApi.get3InfoSA, fetcher);
  const { data: infos10SA } = useSWR(getApi.get10InfoSA, fetcher);

  return (
    <Fragment>
      <LoginModal
        open={showLogin}
        handleClose={() => setShowLogin(false)}
      ></LoginModal>
      <div className="pt-[15px] pb-[12px]">
        <ForYouLink></ForYouLink>
        <FollowingLink></FollowingLink>
        <FeaturedArticles></FeaturedArticles>
      </div>
      <div className="border-t border-[#f1f1f2] pt-[20px] pb-[20px] border-b mx-auto my-auto mr-2 ml-2">
        <span className="text-[#8a8B91] text-base text-left">
          Log in to follow creators, like articles and view cmts.
        </span>
        <button
          className="min-w-[376px] border border-[#ef2c55] font-semibold text-[#ef2c55] text-btn_login rounded-md pt-[6px] pb-[6px] pl-[8px] pr-[8px] min-h-[48px] mt-[20px] hover:bg-gradient-to-br hover:from-[#fff3f5] hover:to-[#fff3f5]"
          onClick={() => {
            setShowLogin(true);
          }}
        >
          Log in
        </button>
      </div>
      <div className="pt-[16px] pb-[16px]">
        <p className="text-sa text-sac pl-2 pb-4">Suggested accounts</p>
        {see ? (
          <>
            {infos3SA &&
              infos3SA.map((item) => (
                <UnInfoUserDropDown
                  key={item._id}
                  item={item}
                ></UnInfoUserDropDown>
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
                <UnInfoUserDropDown
                  key={item._id}
                  item={item}
                ></UnInfoUserDropDown>
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
