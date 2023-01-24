import React from "react";
import { Route, Routes } from "react-router-dom";
import CharInfo from "./pages/CharInfo";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SearchPage />}></Route>
        <Route path="/charInfo/:serverId/:name" element={<CharInfo />}></Route>
      </Routes>
    </div>
  );
};

export default App;
