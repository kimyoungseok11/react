import React from "react";
import styles from "./Button1.module.css";

const Button1 = () => {
  return (
    <div>
      <button className={styles.button}>Button1</button>
      <button id={styles.button}>button</button>
    </div>
  );
};

export default Button1;
