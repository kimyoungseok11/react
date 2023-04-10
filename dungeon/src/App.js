import React from "react";
import { Route, Routes } from "react-router-dom";
import CharInfo from "./pages/CharInfo";
import SearchPage from "./pages/SearchPage";
import CharDetail from "./pages/CharDetail";
import Rankinfo from "./pages/Rankinfo";
import RankPageButton from "./components/RankPageButton";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SearchPage />}></Route>
        <Route path="/charInfo/:serverId/:name" element={<CharInfo />}></Route>
        <Route path="/charDetail/:serverId" element={<CharDetail />}></Route>
        <Route path="/Rankinfo" element={<Rankinfo />}></Route>
      </Routes>
      <RankPageButton />
    </div>
  );
};

export default App;
