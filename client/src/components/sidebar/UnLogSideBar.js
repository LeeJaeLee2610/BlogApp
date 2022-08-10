import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import useSWR from "swr";
import { fetcher, getApi } from "../../config";
import UnInfoUserDropDown from "../dropdown/UnInfoUserDropDown";
import LoginModal from "../modal/LoginModal";

const UnLogSideBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [see, setSee] = useState(true);

  const { data: infos3SA } = useSWR(getApi.get3InfoSA, fetcher);
  const { data: infos10SA } = useSWR(getApi.get10InfoSA, fetcher);

  const [forYou, setForYou] = useState(true);
  const [following, setFollowing] = useState(false);

  function handleForYou() {
    console.log(forYou);
    setForYou(true);
    setFollowing(false);
  }

  function handleFollowing() {
    console.log(following);
    setForYou(false);
    setFollowing(true);
  }

  return (
    <Fragment>
      <LoginModal
        open={showLogin}
        handleClose={() => setShowLogin(false)}
      ></LoginModal>
      <div className="pt-[15px] pb-[12px]">
        <NavLink
          to="/"
          className="flex flex-row justify-start items-center p-[8px] cursor-pointer hover:bg-[#f8f8f8]"
          onClick={handleForYou}
        >
          {forYou ? (
            <>
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
            </>
          ) : (
            <>
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
            </>
          )}
        </NavLink>
        <NavLink
          to="/following"
          className="flex flex-row justify-start items-center p-[8px] cursor-pointer hover:bg-[#f8f8f8]"
          onClick={handleFollowing}
        >
          {following ? (
            <>
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
              <div className="ml-3 font-bold text-btn_login text-[#fe2c55]">
                Following
              </div>
            </>
          ) : (
            <>
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
                  d="M18 12.5C15.5897 12.5 13.5849 14.5018 13.5849 17.0345C13.5849 19.5672 15.5897 21.569 18 21.569C20.4103 21.569 22.4151 19.5672 22.4151 17.0345C22.4151 14.5018 20.4103 12.5 18 12.5ZM10.5849 17.0345C10.5849 12.9017 13.8766 9.5 18 9.5C22.1234 9.5 25.4151 12.9017 25.4151 17.0345C25.4151 21.1673 22.1234 24.569 18 24.569C13.8766 24.569 10.5849 21.1673 10.5849 17.0345ZM18 29.8793C14.0801 29.8793 10.7403 32.5616 9.69697 36.2673C9.5473 36.7989 9.03833 37.1708 8.49337 37.0811L7.50662 36.9189C6.96166 36.8292 6.58837 36.3131 6.72325 35.7776C8.00732 30.6788 12.5509 26.8793 18 26.8793C23.449 26.8793 27.9927 30.6788 29.2767 35.7776C29.4116 36.3131 29.0383 36.8292 28.4934 36.9189L27.5066 37.0811C26.9617 37.1708 26.4527 36.7989 26.303 36.2673C25.2597 32.5616 21.9199 29.8793 18 29.8793Z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33 31.5371C32.2445 31.5371 31.5198 31.668 30.8447 31.9093C30.3246 32.0951 29.7189 31.9243 29.4549 31.4392L28.9769 30.5608C28.713 30.0757 28.8907 29.463 29.4009 29.2516C30.513 28.791 31.7285 28.5371 33 28.5371C37.4554 28.5371 41.1594 31.6303 42.2706 35.7812C42.4135 36.3147 42.0386 36.8308 41.4935 36.9196L40.5065 37.0804C39.9614 37.1692 39.4546 36.7956 39.2894 36.2686C38.4217 33.5 35.91 31.5371 33 31.5371Z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33 18.5C31.6193 18.5 30.5 19.6193 30.5 21C30.5 22.3807 31.6193 23.5 33 23.5C34.3807 23.5 35.5 22.3807 35.5 21C35.5 19.6193 34.3807 18.5 33 18.5ZM27.5 21C27.5 17.9624 29.9624 15.5 33 15.5C36.0376 15.5 38.5 17.9624 38.5 21C38.5 24.0376 36.0376 26.5 33 26.5C29.9624 26.5 27.5 24.0376 27.5 21Z"
                ></path>
              </svg>
              <div className="ml-3 font-bold text-btn_login">Following</div>
            </>
          )}
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
