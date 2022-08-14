import React from "react";
import { MdRemoveCircleOutline } from "react-icons/md";
import "../css/TodoItem.css";

const TodoItem = (props) => {
  return (
    <div className="item">
      <input type="checkbox"></input>
      <div>{props.name}</div>
      <button className="remove-button">
        <MdRemoveCircleOutline></MdRemoveCircleOutline>
      </button>
    </div>
  );
};

TodoItem.defaultProps = {
  name: "dd",
};

export default TodoItem;
