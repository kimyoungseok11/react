import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Links from "./components/Links";
import NavLinks from "./components/NavLInks";
import Login from "./pages/Login";
// import Login from "./pages/Login";

function App() {
  const isLogin = false;

  return (
    <BrowserRouter>
      <Links></Links>
      <NavLinks></NavLinks>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login isLogin={isLogin} />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
