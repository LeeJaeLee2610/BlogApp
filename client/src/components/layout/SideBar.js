import React from "react";
import UnLogSideBar from "../sidebar/UnLogSideBar";
import styled from "styled-components";
import InLogSideBar from "../sidebar/InLogSideBar";

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

const SideBar = () => {
  return (
    <SideBarStyle>
      <UnLogSideBar></UnLogSideBar>
      {/* <InLogSideBar></InLogSideBar> */}
    </SideBarStyle>
  );
};

export default SideBar;
