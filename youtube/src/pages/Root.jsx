import React from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Root = () => {
  return (
    <div className="bg-[#19181C] box-border w-[100vw]">
      <SearchBar></SearchBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
