import React, { useState } from "react";
import Products from "./Products";

const AppProducts = () => {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
};

export default AppProducts;
