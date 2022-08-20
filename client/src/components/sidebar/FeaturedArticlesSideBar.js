import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InLogFASideBar from "./InLogFASideBar";
import UnLogFASideBar from "./UnLogFASideBar";

const SideBarStyle = styled.div`
  position: fixed;
  width: 15%;
  float: left;
  top: 60px;
  bottom: 0;
  &:hover {
    overflow: auto;

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
  overflow: auto;

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

const FeaturedArticlesSideBar = () => {
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
  });
  return (
    <SideBarStyle>
      {showUnLog ? (
        <UnLogFASideBar></UnLogFASideBar>
      ) : (
        <InLogFASideBar></InLogFASideBar>
      )}
    </SideBarStyle>
  );
};

export default FeaturedArticlesSideBar;
