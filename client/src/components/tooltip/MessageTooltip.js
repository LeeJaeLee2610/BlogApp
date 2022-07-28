import React, { Fragment, useState } from "react";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

const MessageTooltip = ({ children }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState({});
  const handleHover = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };
  return (
    <Fragment>
      {hovered && <TootTipContent coords={coords}>{children}</TootTipContent>}
      <span ref={nodeRef} onMouseOver={handleHover}>
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
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </span>
    </Fragment>
  );
};

function TootTipContent({ children, coords }) {
  return ReactDOM.createPortal(
    <p
      className="absolute inline-block text-white -translate-y-full bg-[#616161] rounded-xl max-w-[200px] -translate-x-2/4 p-2 mt-7"
      style={{
        left: coords.left + coords.width / 2,
      }}
    >
      {children}
    </p>,
    document.querySelector("body")
  );
}

export default MessageTooltip;
