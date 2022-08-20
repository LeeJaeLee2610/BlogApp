import React from "react";
import styled from "styled-components";

const ContentProfileStyle = styled.div`
  width: 85%;
  float: right;
  z-index: 1;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 32px;
  padding-bottom: 32px;
`;

const ContentProfile = () => {
  function handleMOVideos() {
    const tmp = document.querySelector(".truot");
    // console.log(tmp);
    tmp.style.transform = "translateX(0%)";
    tmp.style.transition = "all 0.5s";
  }
  function handleMOLiked() {
    const tmp = document.querySelector(".truot");
    // console.log(tmp);
    tmp.style.transform = "translateX(100%)";
    tmp.style.transition = "all 0.5s";
  }
  return (
    <ContentProfileStyle>
      <div className="mb-[20px]">
        <div className="flex flex-row">
          <div className="flex flex-row w-[540px] cursor-pointer">
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16630840/media/ed6af0d38d460ff9ee426ad69e6435ea.png?compress=1&resize=1000x750&vertical=top"
              alt=""
              className="w-[116px] h-[116px] object-cover rounded-full overflow-hidden"
            />
            <div className="ml-[20px]">
              <div>
                <h2 className="font-bold text-pbi overflow-hidden text-left pb-[4px] cursor-pointer">
                  leejaele2610
                </h2>
                <h3 className="font-semibold text-btn_login overflow-hidden text-left cursor-pointer">
                  Cường Phùng
                </h3>
              </div>
              <button className="mt-[16px] flex flex-row justify-start items-center pl-[16px] pr-[16px] border border-[#f1f1f8] rounded-md min-h-[36px] select-none hover:bg-[#f8f8f8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  width="20"
                  height="25"
                  className="tiktok-2r6r7f-StyledEditIcon e33dl3i2 font-semibold"
                >
                  <path
                    fill="black"
                    fillRule="evenodd"
                    d="M15.393 2.226a.842.842 0 00-1.17.02L8.142 8.33a.842.842 0 00-.247.595v2.34c0 .464.377.841.842.841h2.183a.842.842 0 00.596-.246l6.237-6.238a.843.843 0 00-.02-1.211l-2.34-2.184zM9.58 9.273l5.26-5.26 1.107 1.033-5.374 5.375h-.993V9.273zM9.58 2c.232 0 .42.189.42.421v.842a.421.421 0 01-.42.421H4.526a.842.842 0 00-.842.842v10.948c0 .465.377.842.842.842h10.947a.842.842 0 00.842-.842V10.42c0-.232.189-.421.421-.421h.842c.233 0 .422.188.422.421v5.053A2.526 2.526 0 0115.473 18H4.526A2.526 2.526 0 012 15.474V4.526A2.526 2.526 0 014.526 2H9.58z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-2 font-semibold text-li">Edit profile</span>
              </button>
            </div>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5546 8.35111L13.3171 8.16468V7.37972V3.50006L21.4998 12.0001L13.3171 20.5001V16.3738V15.3664L12.3098 15.3738C8.838 15.3994 5.4275 17.0466 2.49983 19.5882C2.54612 19.2536 2.67769 18.641 2.94391 17.8329C3.3786 16.5132 4.01326 15.1988 4.88691 13.971C6.71045 11.4083 9.24414 9.16046 12.5546 8.35111Z"
                stroke="#161823"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="flex flex-row mb-2">
            <span className="text-li flex flex-row justify-center items-center">
              <span className="text-lg font-semibold">1</span>
              <p className="text-base font-normal text-[#50525a] ml-2">
                Following
              </p>
            </span>
            <span className="ml-3 mr-3 text-li flex flex-row justify-center items-center">
              <span className="text-lg font-semibold">1</span>
              <p className="text-base font-normal text-[#50525a] ml-2">
                Followers
              </p>
            </span>
            <span className="text-li flex flex-row justify-center items-center">
              <span className="text-lg font-semibold">0</span>
              <p className="text-base font-normal text-[#50525a] ml-2">Likes</p>
            </span>
          </div>
          <span className="text-base font-normal">Đi lên từ IT</span>
        </div>
      </div>
      <div>
        <div className="filt max-w-[460px] flex flex-row border-b border-gray-300 relative">
          <div
            className="video basis-1/2 text-center p-2"
            onMouseOver={handleMOVideos}
          >
            Videos
          </div>
          <div
            className="liked basis-1/2 text-center p-2"
            onMouseOver={handleMOLiked}
          >
            Liked
          </div>
          <div className="truot absolute w-[50%] h-1 bg-black top-[38px]"></div>
        </div>
        <div></div>
      </div>
    </ContentProfileStyle>
  );
};

export default ContentProfile;
