import React, { Fragment } from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import HeaderFull from "./components/header/HeaderFull";
import HomePage from "./page/HomePage";
import ViewProfilePage from "./page/ViewProfilePage";
import FollowingPage from "./page/FollowingPage";
import FeaturedArticles from "./page/FeaturedArticles";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<Header></Header>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/following"
            element={<FollowingPage></FollowingPage>}
          ></Route>
          <Route
            path="/featured-articles"
            element={<FeaturedArticles></FeaturedArticles>}
          ></Route>
        </Route>
        <Route element={<HeaderFull></HeaderFull>}>
          <Route
            path="/profile"
            element={<ViewProfilePage></ViewProfilePage>}
          ></Route>
        </Route>
        <Route path="*"></Route>
      </Routes>
    </Fragment>
  );
};

export default App;
