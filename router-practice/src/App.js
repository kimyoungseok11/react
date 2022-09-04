import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/profile/:username" element={<Profile></Profile>}></Route>
        <Route path="/articles" element={<Articles></Articles>}>
          <Route path=":id" element={<Article></Article>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
