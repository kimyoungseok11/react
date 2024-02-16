import React, { useEffect, useState } from "react";
import useProducts from "../hooks/use-products";

const Products = () => {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });
  const handleChange = () => {
    setChecked((checked) => !checked);
  };

  if (loading) {
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
