import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profiles from "./pages/Profiles";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile/:username" element={<Profiles />}></Route>
      </Routes>
    </div>
  );
};

export default App;
