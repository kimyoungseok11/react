import React from "react";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NewsPage></NewsPage>}></Route>
        <Route path="/:category" element={<NewsPage></NewsPage>}></Route>
      </Routes>
    </div>
  );
};

export default App;
