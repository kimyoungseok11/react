import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const InfoReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickName: "",
  });
  const { name, nickName } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickName" value={nickName} onChange={onChange}></input>
        <div>{name}</div>
        <div>{nickName}</div>
      </div>
    </div>
  );
};

export default InfoReducer;
