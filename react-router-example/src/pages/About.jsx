import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function About() {
  const name = useLocation().search;
  //   console.log(name);
  //   const obj = new URLSearchParams(id);
  //   console.log(obj.get("name"));

  const query = queryString.parse(name);
  console.log(query);

  return (
    <div>
      <h2>About 입니다</h2>
      {query.name && <p>name은 {query.name}입니다</p>}
    </div>
  );
}
