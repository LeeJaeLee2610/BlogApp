import React, { Fragment } from "react";
import styled from "styled-components";
import ProfileSideBar from "../components/sidebar/ProfileSideBar";
import ContentProfile from "../components/layout/ContentProfile";

const Profile = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  padding-left: 10px;
  padding-right: 10px;
`;

const ClearFix = styled.div`
  clear: both;
`;

const ViewProfilePage = () => {
  return (
    <Fragment>
      <Profile>
        <ProfileSideBar></ProfileSideBar>
        <ContentProfile></ContentProfile>
        <ClearFix></ClearFix>
      </Profile>
    </Fragment>
  );
};

export default ViewProfilePage;
