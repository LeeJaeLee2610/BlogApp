import React, { Fragment, useRef, useState } from "react";
import LoginModal from "../modal/LoginModal";

const UnInfoUserDropDown = ({ item }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showInfoUser, setShowInfoUser] = useState(false);
  const [coords, setCoords] = useState({});
  const nodeRef = useRef(null);

  function handleMouseOver() {
    setShowInfoUser(true);
    if (nodeRef.current) {
      setCoords(nodeRef.current.getBoundingClientRect());
      console.log(nodeRef.current.getBoundingClientRect());
      console.log(coords);
    }
  }

  function handleFollow() {
    setShowLogin(true);
  }
  return (
    <Fragment>
      <LoginModal
        open={showLogin}
        handleClose={() => setShowLogin(false)}
      ></LoginModal>
      <div
        className="relative cursor-pointer hover:bg-[#f8f8f8]"
        onMouseOver={() => handleMouseOver()}
        onMouseOut={() => setShowInfoUser(false)}
        ref={nodeRef}
      >
        <div className="flex flex-row justify-start items-center pl-1 pt-2 pb-2">
          <img
            src={`./images/${item.image_path}`}
            alt=""
            className="w-[32px] h-[32px] object-cover rounded-full"
          />
          <div className="ml-[20px]">
            <div className="flex flex-row items-center font-semibold text-base overflow-hidden">
              {item.blogID}
            </div>
            <p className="text-sac text-fn">
              {item.firstname ? `${item.firstname} ${item.lastname}` : ""}
            </p>
          </div>
        </div>
        {showInfoUser && (
          <div
            className={`absolute z-10 bg-white min-w-[300px] border rounded-lg shadow-md left-[40px]`}
          >
            <div className="flex flex-row justify-between items-center pt-2 pl-2 pr-2">
              <img
                src={`./images/${item.image_path}`}
                alt=""
                className="w-[36px] h-[36px] rounded-full object-cover"
              />
              <button
                className="min-w-[100px] pt-[6px] pb-[6px] pl-[8px] pr-[8px] bg-[#ef2950] text-white rounded-lg font-semibold text-su"
                onClick={() => {
                  handleFollow();
                }}
              >
                Follow
              </button>
            </div>
            <div className="flex flex-col p-2">
              <h5 className="font-semibold text-sa">{item.blogID}</h5>
              <p className="text-sa text-sac">
                {item.firstname ? `${item.firstname} ${item.lastname}` : ""}
              </p>
            </div>
            <div className="flex flex-row justify-between items-center pl-2 pr-2 pb-2 max-w-[230px] mx-auto my-auto">
              <span className="font-semibold text-su">
                {item.follower} Follow
              </span>
              <span className="font-semibold text-su">{item.like} Likes</span>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default UnInfoUserDropDown;
