import React from "react";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import styled, { css } from "styled-components";
import TailwindComponents from "./components/TailwindComponents";

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  color: #b9eaff;
  ${(props) =>
    props.primary &&
    css`
      background-color: #009cd5;
      color: white;
    `};
`;

const App = () => {
  return (
    <div>
      <Button1></Button1>
      <Button2></Button2>
      <Container>
        <Button>Normal button</Button>
        <Button primary="true">Primary button</Button>
      </Container>
      <TailwindComponents />
    </div>
  );
};

export default App;
