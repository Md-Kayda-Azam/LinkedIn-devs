import React from "react";
import HeaderMenu from "../../Components/HeaderMenu/HeaderMenu";
import "./Home.scss";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="linkedIn-header">
        <HeaderMenu />
      </div>
      <div className="home-line">
        <Outlet />
      </div>
    </>
  );
};

export default Home;
