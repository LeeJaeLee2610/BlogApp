import React, { Fragment, useState } from "react";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const TooltipInbox = ({ children }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});
  const handleMouseOver = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };
  return (
    <Fragment>
      {hovered && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span ref={nodeRef} onMouseOver={handleMouseOver}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-su cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </span>
    </Fragment>
  );
};

function TooltipContent({ children, coords }) {
  return ReactDOM.createPortal(
    <p
      className="absolute inline-block text-white -translate-y-full bg-[#616161] rounded-xl max-w-[200px] -translate-x-2/4 mt-7 p-2"
      style={{
        left: coords.left + coords.width / 2,
      }}
    >
      {children}
    </p>,
    document.querySelector("body")
  );
}

export default TooltipInbox;
