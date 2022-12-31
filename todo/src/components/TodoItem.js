import React from "react";

const TodoItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  const style = {
    textDecoration: checked ? "line-through" : "none",
    color: checked ? "grey" : "black",
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onToggle(id)}
      ></input>
      <label style={style}>{text}</label>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
