import React from "react";

const User = ({ user, onRemove, onToggle }) => {
  const { id, name, nickname, active } = user;
  const style = {
    color: active === true ? "green" : "black",
    cursor: "pointer",
  };
  return (
    <div>
      <b
        onClick={() => {
          onToggle(id);
        }}
        style={style}
      >
        {name}
      </b>
      <label> : {nickname}</label>
      <button
        onClick={() => {
          onRemove(id);
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default User;
