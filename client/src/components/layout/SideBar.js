import React from "react";
import UnLogSideBar from "../sidebar/UnLogSideBar";
import styled from "styled-components";

const SideBarStyle = styled.div`
  position: fixed;
  width: 400px;
  float: left;
  height: 100vh;
  &:hover {
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 6px;
      height: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #f1f1f2;
      border-radius: 150px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
  /* overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f1f1f2;
    border-radius: 150px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  } */
`;

const SideBar = () => {
  return (
    <SideBarStyle>
      <UnLogSideBar></UnLogSideBar>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
      <div>OK</div>
    </SideBarStyle>
  );
};

export default SideBar;
