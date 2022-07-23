import React, { useState } from "react";

const Edit = () => {
  const [color, setColor] = useState("");
  const [password, setPassword] = useState("");

  const validate = (e) => {
    if (password === "0000") {
      setColor("green");
    }
  };

  const passwordVaild = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <input
        style={{ backgroundColor: color }}
        value={password}
        onChange={passwordVaild}
      ></input>
      <button onClick={validate}>Validate</button>
      <div>{password}</div>
    </div>
  );
};

export default Edit;
