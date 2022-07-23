import React, { useRef } from "react";
import Edit from "./components/Edit";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./components/ScrollBox";

const App = () => {
  const scrollBox = useRef();
  return (
    <div>
      <Edit></Edit>
      <br />
      <ValidationSample></ValidationSample>
      <br />
      <ScrollBox ref={scrollBox}></ScrollBox>
      <button
        onClick={() => {
          scrollBox.current.scrollToBottom();
        }}
      >
        맨 밑으로
      </button>
    </div>
  );
};

export default App;
