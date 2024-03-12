import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import VideoDetail from "./pages/VideoDetail";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "/videos", element: <Videos /> },
        { path: "/videos/:videoId", element: <VideoDetail /> },
      ],
    },
  ]);
  // AIzaSyBHgy2ATq9ZELy6VxcG75Swzew;
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
