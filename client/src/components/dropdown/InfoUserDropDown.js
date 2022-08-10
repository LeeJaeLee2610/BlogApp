import React, { Fragment, useState } from "react";

const InfoUserDropDown = ({ item }) => {
  const [showInfoUser, setShowInfoUser] = useState(false);
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
    <Fragment>
      <div
        className="relative cursor-pointer hover:bg-[#f8f8f8]"
        onMouseOver={() => setShowInfoUser(true)}
        onMouseOut={() => setShowInfoUser(false)}
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
          <div className="absolute z-10 bg-white min-w-[300px] border rounded-lg shadow-md left-10">
            <div className="flex flex-row justify-between items-center pt-2 pl-2 pr-2">
              <img
                src={`./images/${item.image_path}`}
                alt=""
                className="w-[36px] h-[36px] rounded-full object-cover"
              />
              {following ? (
                <button
                  className="min-w-[99px] pt-[5px] pb-[5px] pl-[8px] pr-[8px] border border-[#888888] rounded-lg text-black bg-transparent font-semibold outline-none"
                  onClick={() => {
                    handleFollowing(item.uid);
                  }}
                >
                  Following
                </button>
              ) : (
                <button
                  className="min-w-[100px] pt-[6px] pb-[6px] pl-[8px] pr-[8px] bg-[#ef2950] text-white rounded-lg font-semibold text-su"
                  onClick={() => {
                    handleFollow(item.uid);
                  }}
                >
                  Follow
                </button>
              )}
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

export default InfoUserDropDown;
