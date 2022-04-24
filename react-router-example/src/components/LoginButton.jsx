import { Navigate } from "react-router-dom";

export default function LoginButton() {
  function login() {
    const navigator = Navigate();

    setTimeout(() => {
      navigator("/");
    }, 1000);
  }

  return (
    <div>
      <button onClick={login}>로그인하기</button>
    </div>
  );
}
