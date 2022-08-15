import React from "react";
import { MdRemoveCircleOutline } from "react-icons/md";
import "../css/TodoItem.css";

const TodoItem = (props) => {
  const { name, id, getIndex } = props;

  const handleClick = () => {
    getIndex(id);
  };

  return (
    <div className="item">
      <input type="checkbox"></input>
      <div>{name}</div>
      <button className="remove-button">
        <MdRemoveCircleOutline onClick={handleClick}></MdRemoveCircleOutline>
      </button>
    </div>
  );
};

TodoItem.defaultProps = {
  name: "dd",
};

export default TodoItem;
