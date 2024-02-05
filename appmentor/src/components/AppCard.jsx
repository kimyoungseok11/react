import React from "react";

const AppCard = () => {
  return (
    <div>
      <Card>
        <h1>Card1</h1>
      </Card>
      <Card>
        <h2>Card2</h2>
        <p>설명</p>
      </Card>
    </div>
  );
};

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderRadius: "20px",
        color: "white",
        minHeight: "200px",
        maxWidth: "200px",
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}

export default AppCard;
