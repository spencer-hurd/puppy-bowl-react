import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import PlayerId from "./PlayerId";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pup/:id" element={<PlayerId />}></Route>
      </Routes>
    </div>
  );
};
export default AllRoutes;
