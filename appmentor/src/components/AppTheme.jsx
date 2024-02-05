import React, { useContext } from "react";
import "../css/AppTheme.css";
import { DarkModeContext, DarkModeProvider } from "../context/DarkModeContext";

const AppTheme = () => {
  return (
    // darkModeProvider를 사용하기 위해서 원하는 곳에 감싸준다
    // header, main, footer를 모두 감싸주었기 때문에 전 컴포넌트에서 사용가능하다
    <DarkModeProvider>
      <Header></Header>
      <Main></Main>
      <Footer />
    </DarkModeProvider>
  );
};

function Header() {
  return <header className="header">Header</header>;
}

function Main() {
  return (
    <main className="main">
      Main
      <Profile />
    </main>
  );
}

function Footer() {
  return <div className="footer">Footer</div>;
}
function Profile() {
  return (
    <div>
      Profile
      <User />
      <Products />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      product
      <ProductDetail />
    </div>
  );
}

function ProductDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      productDetail
      <p>
        DarkMode:
        {darkMode ? (
          <span style={{ backgroundColor: "black", color: "white" }}>
            Dark Mode
          </span>
        ) : (
          <span>Light Mode</span>
        )}
      </p>
      <button
        onClick={() => {
          toggleDarkMode();
        }}
      >
        toggle
      </button>
    </div>
  );
}
export default AppTheme;
