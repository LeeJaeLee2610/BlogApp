import React, { Fragment } from "react";
import Header from "./components/layout/Header";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/layout/HomePage";
import FollowingPage from "./components/layout/FollowingPage";
import HeaderFull from "./components/layout/HeaderFull";
import ViewProfile from "./components/layout/ViewProfile";
// import SignUpModal from "./components/modal/SignUpModal";
// import { AuthProvider } from "./contexts/auth-context";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<Header></Header>}>
          <Route
            path="/"
            element={
              <>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route
            path="/following"
            element={
              <>
                <FollowingPage></FollowingPage>
              </>
            }
          ></Route>
        </Route>
        <Route element={<HeaderFull></HeaderFull>}>
          <Route
            path="/profile/:uid"
            element={
              <>
                <ViewProfile></ViewProfile>
              </>
            }
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
