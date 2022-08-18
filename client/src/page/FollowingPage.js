import React, { Fragment } from "react";
import styled from "styled-components";
import ContentFollowing from "../components/layout/ContentFollowing";
import SideBar from "../components/sidebar/SideBar";

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
        <ContentFollowing></ContentFollowing>
        <ClearFix></ClearFix>
      </MainStyle>
    </Fragment>
  );
};

export default FollowingPage;
