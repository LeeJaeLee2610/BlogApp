import React, { Fragment } from "react";
import ContentPage from "./ContentPage";
import SideBar from "./SideBar";
import styled from "styled-components";

const ClearFix = styled.div`
  clear: both;
`;

const MainStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
`;

const FollowingPage = () => {
  return (
    <Fragment>
      <MainStyle>
        <SideBar></SideBar>
        <ContentPage></ContentPage>
        <ClearFix></ClearFix>
      </MainStyle>
    </Fragment>
  );
};

export default FollowingPage;
