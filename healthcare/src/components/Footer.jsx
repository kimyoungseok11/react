import React from "react";
import style from "../css/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <copyright>
        Copyright 2022. <b>서경대학교 산학협력단</b> All Right Reserved.
      </copyright>
    </div>
  );
};

export default Footer;
