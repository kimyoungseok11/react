import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import style from "../css/Root.module.css";

const Root = () => {
  return (
    <div className={style.root}>
      <Header></Header>
      <div className={style.ContentsWrap}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
