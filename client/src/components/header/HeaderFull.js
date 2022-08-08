import React, { Fragment, useState, useEffect } from "react";
import InLogin from "../login/InLogin";
import SearchForm from "../form/SearchForm";
import UnLogin from "../login/UnLogin";
import { NavLink, Outlet } from "react-router-dom";

const HeaderFull = () => {
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
    <Fragment>
      <header className="header sticky top-0 bg-white shadow-md">
        <div className="flex flex-row w-full justify-center items-center mx-auto mr-auto">
          <div className="w-1/3 flex justify-start items-center p-3">
            <NavLink
              to="/"
              className="font-bold text-[#ff9696] text-logo font-logofami"
            >
              Social Network
            </NavLink>
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <SearchForm></SearchForm>
          </div>
          <div className="w-1/3 flex justify-end items-center p-3">
            {showUnLog ? <UnLogin></UnLogin> : <InLogin></InLogin>}
          </div>
        </div>
      </header>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default HeaderFull;
