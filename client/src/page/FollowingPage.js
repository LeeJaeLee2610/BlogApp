import React, { Fragment } from "react";
import styled from "styled-components";
import ContentHome from "../components/layout/ContentHome";
import SideBar from "../components/layout/SideBar";

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
        <ContentHome></ContentHome>
        <ClearFix></ClearFix>
      </MainStyle>
    </Fragment>
  );
};

export default FollowingPage;
