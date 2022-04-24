import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  function login() {
    setTimeout(() => {
      //페이지를 이동
      navigate("/");
    }, 1000);
  }
  console.log(props.isLogin);
  if (props.isLogin) {
    return (
      <div>
        <h2>로그인 하기</h2>
        <h2>isLogin {props.isLogin}</h2>
        <button onClick={login}>로그인</button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{props.isLogin}</h2>
      </div>
    );
  }
}

export default Login;
