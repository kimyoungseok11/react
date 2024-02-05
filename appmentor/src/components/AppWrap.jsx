import React from "react";

const AppWrap = () => {
  return (
    <div>
      {/* 하이오더 컴포넌트에 전달할 내용을 작성함 */}
      <AppNav>
        <Avatar
          image="https://images.unsplash.com/photo-1682686581556-a3f0ee0ed556?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="bob"
          size={200}
        />
      </AppNav>
    </div>
  );
};

// 하이 오더 컴포넌트
// AppNav 컴포넌트는 children만 인자로 받아서 표출함
function AppNav({ children }) {
  return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}

export default AppWrap;
