import React, { Fragment } from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import FollowingPage from "./components/layout/FollowingPage";
import HeaderFull from "./components/header/HeaderFull";
import ViewProfile from "./components/layout/ViewProfile";
import Main from "./components/layout/Main";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<Header></Header>}>
          <Route path="/" element={<Main></Main>}></Route>
          <Route
            path="/following"
            element={
              <>
                <FollowingPage></FollowingPage>
              </>
            }
          ></Route>
          <Route path="/featured-articles"></Route>
        </Route>
        <Route element={<HeaderFull></HeaderFull>}>
          <Route
            path="/profile"
            element={
              <>
                <ViewProfile></ViewProfile>
              </>
            }
          ></Route>
          <Route path="/:blogID"></Route>
        </Route>
        <Route path="*"></Route>
      </Routes>
    </Fragment>
  );
};

export default App;
