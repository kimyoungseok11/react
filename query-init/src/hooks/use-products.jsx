import { useState, useEffect } from "react";

export default function useProducts({ salesOnly }) {
  const [error, setError] = useState(undefined);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // if (products) {
    // }
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((e) => setError("에러가 발생했음"))
      .finally(() => setLoading(false));
    return () => {
      console.log("메모리 정리");
    }; //해당 컴포넌트가 화면에서 unmount될 때 호출되는 함수
  }, [salesOnly]);

  return [loading, error, products];
}
