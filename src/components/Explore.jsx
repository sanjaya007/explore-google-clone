import React from "react";
import "../css/explore.css";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import TabBox from "./TabBox";

const Explore = () => {
  return (
    <div className="explore-box">
      <NavBar />
      <TabBox />
      <div className="result-box">
        <Outlet />
      </div>
    </div>
  );
};

export default Explore;
