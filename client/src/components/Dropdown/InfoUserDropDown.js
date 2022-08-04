import React, { Fragment, useState } from "react";

const InfoUserDropDown = () => {
  const [showInfoUser, setShowInfoUser] = useState(false);
  return (
    <Fragment>
      <div
        className="relative cursor-pointer hover:bg-[#f8f8f8]"
        onMouseOver={() => setShowInfoUser(true)}
        onMouseOut={() => setShowInfoUser(false)}
      >
        <div className="flex flex-row justify-start items-center pl-1 pt-2 pb-2">
          <img
            src="./images/1659172774952-282273672_1676657146045001_5848990282228639430_n.jpg"
            alt=""
            className="w-[32px] h-[32px] object-cover rounded-full"
          />
          <div className="ml-[20px]">
            <div className="flex flex-row items-center font-semibold text-base overflow-hidden">
              Blog ID
            </div>
            <p className="text-sac text-fn">fullname</p>
          </div>
        </div>
        {showInfoUser && (
          <div className="absolute z-10 bg-white min-w-[300px] border rounded-lg shadow-md left-10">
            <div className="flex flex-row justify-between items-center pt-2 pl-2 pr-2">
              <img
                src="./images/1659172774952-282273672_1676657146045001_5848990282228639430_n.jpg"
                alt=""
                className="w-[36px] h-[36px] rounded-full object-cover"
              />
              <button className="p-2 bg-[#ef2950] text-white rounded-lg">
                Follow
              </button>
            </div>
            <div className="flex flex-col p-2">
              <h5 className="font-semibold text-sa">BlogID</h5>
              <p className="text-sa text-sac">Full name</p>
            </div>
            <div className="flex flex-row justify-between items-center pl-2 pr-2 pb-2 max-w-[230px] mx-auto my-auto">
              <span className="font-semibold text-su">16.5M Follow</span>
              <span className="font-semibold text-su">16.5M Likes</span>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default InfoUserDropDown;
