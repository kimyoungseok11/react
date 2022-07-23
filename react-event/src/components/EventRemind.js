import React, { useState } from "react";

const EventRemind = () => {
  const [userForm, setUserForm] = useState({
    message: "",
    name: "",
  });

  const { formMessage, formName } = userForm;

  const onClick = (e) => {
    setUserForm({
      message: "",
      name: "",
    });
  };

  const formHandleChange = (e) => {
    const nextForm = {
      ...userForm,
      [e.target.name]: e.target.value,
    };
    setUserForm(nextForm);
  };

  return (
    <div>
      <input
        onChange={formHandleChange}
        type="text"
        name="formMessage"
        value={formMessage}
        placeholder="메세지 입력"
      ></input>
      <input
        onChange={formHandleChange}
        type="text"
        name="formName"
        value={formName}
        placeholder="이름 입력"
      ></input>
      <div>{formMessage}</div>
      <div>{formName}</div>
      <button onClick={onClick}>초기화</button>
    </div>
  );
};

export default EventRemind;
