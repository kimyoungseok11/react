import React, { useState } from "react";
import { MdRemoveCircleOutline } from "react-icons/md";
import "../css/TodoItem.css";

const TodoItem = (props) => {
  const { name, id, getIndex, getTask } = props;
  const [modifyTask, setModifyTask] = useState([{ id: 0, name: "" }]);
  const [modalCheck, setModalCheck] = useState(false);

  const visibleModal = () => {
    setModalCheck(true);
  };

  const handleClick = () => {
    getIndex(id);
  };

  const handleModify = (e) => {
    setModifyTask([
      {
        id: id,
        name: e.target.value,
      },
    ]);
  };

  const sendTask = () => {
    getTask(modifyTask);
    setModalCheck(false);
  };

  return (
    <div className="item">
      <input type="checkbox"></input>
      <div onClick={visibleModal}>{name}</div>
      <button className="remove-button">
        <MdRemoveCircleOutline onClick={handleClick}></MdRemoveCircleOutline>
      </button>
      {modalCheck ? (
        <div className="black-box">
          <div className="modify-wrapper">
            <div className="modify-box">
              <div className="input-box">
                <p>일정 : </p>
                <input onChange={handleModify}></input>
              </div>

              <div className="button-group">
                <button onClick={sendTask}>수정</button>
                <button
                  onClick={() => {
                    setModalCheck(false);
                  }}
                >
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

TodoItem.defaultProps = {
  name: "dd",
};

export default TodoItem;
