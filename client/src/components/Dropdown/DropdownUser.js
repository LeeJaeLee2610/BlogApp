import React, { Fragment } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropdownUser = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  return (
    <Fragment>
      <div
        className="flex items-center justify-center ml-[16px] w-[32px] h-[32px] relative"
        ref={nodeRef}
      >
        <img
          src="../images/1658842290314-282273672_1676657146045001_5848990282228639430_n.jpg"
          alt=""
          className="object-cover w-full h-full rounded-full"
          onClick={() => {
            setShow(!show);
          }}
        />
        {show && (
          <div className="absolute top-full right-0 mt-[10px] bg-[#616161] p-2 border border-black rounded-lg min-w-[120px] border-none outline-none">
            <div className="p-2 cursor-pointer text-white text-center">
              View Profile
            </div>
            <div className="p-2 cursor-pointer text-white text-center border-b border-gray-400">
              Settings
            </div>
            <div className="p-2 cursor-pointer text-white text-center">
              Logout
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default DropdownUser;
