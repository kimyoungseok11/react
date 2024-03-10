import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const [checked, setChecked] = useState(false);
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products", checked],
    queryFn: async () => {
      console.log("fetching....");
      return fetch(`data/${checked ? "sale_" : ""}products.json`).then((res) =>
        res.json()
      );
    },
  });
  const handleChange = () => {
    setChecked((checked) => !checked);
  };

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>에러가 발생했음</div>;
  }
  return (
    <div>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      ></input>
      <label htmlFor="checkbox">show only sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>

      {/* <button onClick={() => setCount((prev) => prev + 1)}>{count}</button> */}
    </div>
  );
};

export default Products;
