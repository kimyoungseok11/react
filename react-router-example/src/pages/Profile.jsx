import { useParams } from "react-router-dom";

export default function Profile() {
  const id = useParams().id;
  console.log(id, typeof id);
  return (
    <div>
      <h2>profile 페이지 입니다</h2>
      {id && <p>id는 {id}입니다</p>}
    </div>
  );
}
