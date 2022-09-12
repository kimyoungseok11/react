import React from "react";
import NewPage from "./pages/NewPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NewPage></NewPage>}></Route>
        <Route path="/:category" element={<NewPage></NewPage>}></Route>
      </Routes>
    </div>
  );
};

export default App;
