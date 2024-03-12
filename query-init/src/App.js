import React from "react";
import MainProducts from "./components/MainProducts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <MainProducts />
      </QueryClientProvider>
    </div>
  );
};

export default App;
