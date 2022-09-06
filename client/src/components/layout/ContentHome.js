import React, { useState } from "react";
import styled from "styled-components";

const ContentPageStyle = styled.div`
  float: right;
  width: 800px;
  margin-top: 20px;
  z-index: 1;
`;

const ContentHome = () => {
  const [following, setFollowing] = useState(false);
  function handleFollow(uid) {
    setFollowing(true);
    fetch(
      `http://localhost:3030/users/updateFollow/${sessionStorage.getItem(
        "uid"
      )}/${uid}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ following: "OK" }),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      });
    // .catch((err) => {
    //   console.log(err);
    // });
  }
  function handleFollowing(uid) {
    setFollowing(false);
    fetch(
      `http://localhost:3030/users/updateFollow/${sessionStorage.getItem(
        "uid"
      )}/${uid}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unfollow: "OK" }),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      });
    // .catch((err) => {
    //   console.log(err);
    // });
  }

  return (
    <ContentPageStyle>
      <div className="flex flex-row w-full pl-3 pr-3 pb-3 border-b border-[#1618230f] ml-3 mb-6">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/19271835/media/68c947aa286ed6573929bc2655acff49.png"
          alt=""
          className="basis-[56px] h-[56px] object-cover rounded-full overflow-hidden"
        />
        <div className="basis-[600px] ml-3 mr-3">
          <div className="flex cursor-pointer">
            <div className="font-bold hover:underline hover:decoration-solid hover:decoration-black text-btn_login inline-block mr-[4px]">
              blogID
            </div>
            <div className="font-normal text-name inline-block">
              firstname + lastname
            </div>
          </div>
          <div className="flex mb-3">
            <div className="font-normal">story</div>
            <div className="ml-2 hover:underline hover:decoration-solid hover:decoration-black font-semibold cursor-pointer">
              hashtag
            </div>
          </div>
          <div className="flex h-[600px] items-end">
            <div className="w-[300px] h-full mr-6">
              <img
                src="https://cdn.dribbble.com/users/2400293/screenshots/19271835/media/68c947aa286ed6573929bc2655acff49.png"
                alt=""
                className="w-full h-full rounded-xl overflow-hidden object-cover"
              />
            </div>
            <div className="w-[48px]">
              <button>
                <span className="flex justify-center items-center rounded-full bg-[#1618230f] w-[48px] h-[48px] mt-[8px] mb-[6px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="rgba(22, 24, 35, 1.0)"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#HeartFill_clip0)">
                      <g filter="url(#HeartFill_filter0_d)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.5 2.25C10.5 2.25 12 4.25 12 4.25C12 4.25 13.5 2.25 16.5 2.25C20 2.25 22.5 4.99999 22.5 8.5C22.5 12.5 19.2311 16.0657 16.25 18.75C14.4095 20.4072 13 21.5 12 21.5C11 21.5 9.55051 20.3989 7.75 18.75C4.81949 16.0662 1.5 12.5 1.5 8.5C1.5 4.99999 4 2.25 7.5 2.25Z"
                        ></path>
                      </g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.40179 12.1998C3.58902 14.6966 5.7592 16.9269 7.74989 18.75C9.5504 20.3989 10.9999 21.5 11.9999 21.5C12.9999 21.5 14.4094 20.4072 16.2499 18.75C19.231 16.0657 22.4999 12.5 22.4999 8.49997C22.4999 8.41258 22.4983 8.32566 22.4952 8.23923C20.5671 13.6619 13.6787 18.5 11.75 18.5C10.3127 18.5 5.61087 15.8131 2.40179 12.1998Z"
                        fillOpacity="0.03"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="HeartFill_filter0_d"
                        x="-0.9"
                        y="1.05"
                        width="25.8"
                        height="24.05"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="1.2"></feOffset>
                        <feGaussianBlur stdDeviation="1.2"></feGaussianBlur>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                        ></feColorMatrix>
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        ></feBlend>
                      </filter>
                      <clipPath id="HeartFill_clip0">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <strong className="text-[#161823bf] text-fn text-center font-bold">
                  10K
                </strong>
              </button>
              <button>
                <span className="flex justify-center items-center rounded-full w-[48px] h-[48px] mt-[8px] mb-[6px] bg-[#1618230f]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#BubbleEllipsisRightFill_clip0)">
                      <g
                        opacity="1"
                        filter="url(#BubbleEllipsisRightFill_filter0_d)"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.0393 14.7137C17.75 13 18.75 11.215 18.75 9.13662C18.75 4.91897 14.8887 1.49997 10.125 1.49997C5.36129 1.49997 1.5 4.91897 1.5 9.13675C1.5 13.3545 5.48622 16.25 10.25 16.25V17.6487C10.25 18.0919 10.7095 18.3771 11.0992 18.1659C12.3166 17.5062 14.5725 16.183 16.0393 14.7137ZM5.93527 8.10679C6.61608 8.10679 7.16797 8.65471 7.16797 9.32962C7.16797 10.0059 6.61608 10.5538 5.93527 10.5538C5.2556 10.5538 4.70368 10.0059 4.70368 9.32962C4.70368 8.65471 5.2556 8.10679 5.93527 8.10679ZM11.3572 9.32962C11.3572 8.65471 10.8055 8.10679 10.125 8.10679C9.44459 8.10679 8.89289 8.65471 8.89289 9.32962C8.89292 10.0059 9.44462 10.5538 10.125 10.5538C10.8055 10.5538 11.3572 10.0059 11.3572 9.32962ZM14.3146 8.10679C14.9953 8.10679 15.5464 8.65471 15.5464 9.32962C15.5464 10.0059 14.9953 10.5538 14.3146 10.5538C13.6339 10.5538 13.082 10.0059 13.0821 9.32962C13.0821 8.65471 13.6339 8.10679 14.3146 8.10679Z"
                        ></path>
                      </g>
                      <path
                        opacity="0.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.25 16.2499C10.25 16.2499 15.0278 15.8807 17.025 13.3234C15.0278 16.1364 13.0307 17.6708 11.2831 18.1822C9.53561 18.6937 10.25 16.2499 10.25 16.2499Z"
                        fill="url(#BubbleEllipsisRightFill_paint0_linear)"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="BubbleEllipsisRightFill_filter0_d"
                        x="0.5"
                        y="1.49997"
                        width="19.25"
                        height="18.737"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
                        <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                        ></feColorMatrix>
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        ></feBlend>
                      </filter>
                      <linearGradient
                        id="BubbleEllipsisRightFill_paint0_linear"
                        x1="8.50426"
                        y1="15.6957"
                        x2="9.29499"
                        y2="18.1805"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop></stop>
                        <stop offset="1" stop-opacity="0.01"></stop>
                      </linearGradient>
                      <clipPath id="BubbleEllipsisRightFill_clip0">
                        <rect width="20" height="20" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <strong className="text-[#161823bf] text-fn text-center font-bold">
                  10k
                </strong>
              </button>
              <button>
                <span className="flex justify-center items-center rounded-full w-[48px] h-[48px] mt-[8px] mb-[6px] bg-[#1618230f]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M26.4588 3.90871C25.3403 2.86068 23.4902 3.64074 23.4902 5.16041V13.0502C20.4499 14.1752 11.3194 18.1407 6.6047 26.6176C-1.49677 42.1311 3.82522 43.478 5.77105 39.7411C13.2467 29.1857 20.8146 30.4298 23.4902 31.3209V38.2274C23.4902 39.7114 25.2658 40.5055 26.4023 39.5298L43.3681 24.9655C44.9268 23.6274 44.9791 21.2608 43.4811 19.8573L26.4588 3.90871Z"
                    ></path>
                  </svg>
                </span>
                <strong className="text-[#161823bf] text-fn text-center font-bold">
                  10k
                </strong>
              </button>
            </div>
          </div>
        </div>
        <div className="basis-[144px] flex justify-end items-start">
          {following ? (
            <button
              className="min-w-[99px] pt-[5px] pb-[5px] pl-[8px] pr-[8px] border border-[#888888] rounded-lg text-black bg-transparent font-semibold outline-none"
              onClick={() => {
                handleFollowing(11);
              }}
            >
              Following
            </button>
          ) : (
            <button
              className="min-w-[100px] pt-[6px] pb-[6px] pl-[8px] pr-[8px] bg-[#ef2950] text-white rounded-lg font-semibold text-su"
              onClick={() => {
                handleFollow(11);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
    </ContentPageStyle>
  );
};

export default ContentHome;
