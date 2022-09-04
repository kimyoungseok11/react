import React from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route
            path="/profiles/:username"
            element={<Profile></Profile>}
          ></Route>
        </Route>
        <Route path="/articles" element={<Articles></Articles>}>
          <Route path=":id" element={<Article></Article>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
