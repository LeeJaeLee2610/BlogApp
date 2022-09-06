import React, { useEffect, useState } from "react";
import UnLogSideBar from "./UnLogSideBar";
import styled from "styled-components";
import InLogSideBar from "./InLogSideBar";

const SideBarStyle = styled.div`
  position: fixed;
  width: 400px;
  float: left;
  top: 60px;
  bottom: 0;
  &:hover {
    overflow-x: hidden;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 6px;
      height: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #f1f1f2;
      border-radius: 150px;
      height: 10px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    touch-action: auto;
  }
  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 150px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  touch-action: auto;
`;

const ForYouSideBar = () => {
  const [showUnLog, setShowUnLog] = useState(true);
  useEffect(() => {
    fetch(
      `http://localhost:3030/users/getUserByUserName/${sessionStorage.getItem(
        "username"
      )}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setShowUnLog(false);
      })
      .catch((err) => {
        setShowUnLog(true);
      });
    // if (nodeRef.current) {
    //   console.log(nodeRef.current.getBoundingClientRect());
    // }
  });
  return (
    <SideBarStyle>
      {showUnLog ? (
        <UnLogSideBar></UnLogSideBar>
      ) : (
        <InLogSideBar></InLogSideBar>
      )}
    </SideBarStyle>
  );
};

export default ForYouSideBar;
