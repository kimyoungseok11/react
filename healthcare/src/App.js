import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Recommend from "./pages/Recommend";
import Personal from "./pages/Personal";
import Buy from "./pages/Buy";
import SubProduct from "./pages/SubProduct";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Recommend /> },
        { path: "/personal", element: <Personal /> },
        { path: "/buy", element: <Buy /> },
        { path: "/subproduct", element: <SubProduct /> },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
