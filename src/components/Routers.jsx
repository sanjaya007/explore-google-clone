import React from "react";
import Home from "./Home";
import Explore from "./Explore";
import { Routes, Route, Navigate } from "react-router-dom";
import All_Result from "./All_Result";
import Images from "./Images";
import News from "./News";
import Videos from "./Videos";

const Routers = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="search" element={<Explore />}>
        <Route path="all" element={<All_Result />} />
        <Route path="images" element={<Images />} />
        <Route path="news" element={<News />} />
        <Route path="videos" element={<Videos />} />
      </Route>
    </Routes>
  );
};

export default Routers;
