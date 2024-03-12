import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import Products from "./Products";

const MainProducts = () => {
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);
  const client = useQueryClient();
  return (
    <main style={{ display: "flex" }}>
      <div>
        {showLeftProducts && <Products />}
        <button onClick={() => setShowLeftProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <div>
        {showRightProducts && <Products />}
        <button onClick={() => setShowRightProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <button
        onClick={() => {
          client.invalidateQueries(["products", false]);
        }}
      >
        정보가 업데이트 되었음!
      </button>
    </main>
  );
};

export default MainProducts;
