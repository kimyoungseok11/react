import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import VideoDetail from "./pages/VideoDetail";
import VideoPlay from "./pages/VideoPlay";
import "./App.css";

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
        { path: "/videoplay/:id", element: <VideoPlay /> },
      ],
    },
  ]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
};

export default App;
