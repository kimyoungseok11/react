import React from "react";

const Todos = ({ id, text, isActive, onRemove, onToggle }) => {
  const style = {
    fontWeight: 600,
    color: isActive ? "green" : "black",
    cursor: "pointer",
  };
  return (
    <div>
      <label
        style={style}
        onClick={() => {
          onToggle(id);
        }}
      >
        {text}
      </label>
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

export default Todos;
