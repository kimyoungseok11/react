import React from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Root = () => {
  return (
    <div className="bg-[#19181C] box-border w-[100vw] max-w-[1400px] m-auto">
      <SearchBar></SearchBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
