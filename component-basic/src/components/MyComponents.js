import React from "react";

const MyComponents = ({ name, children }) => {
  return (
    <div>
      {name} children 값은 {children}
    </div>
  );
};

MyComponents.defaultProps = {
  name: "기본이름",
};

export default MyComponents;
