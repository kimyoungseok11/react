import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<About />} path="/about"></Route>
        <Route element={<Profile />} path="/profile/:name"></Route>
      </Routes>
    </div>
  );
};

export default App;
