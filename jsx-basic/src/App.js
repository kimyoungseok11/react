import "./App.css";
import { Fragment } from "react";

function App() {
  const name = "react";
  const name2 = "vue";
  const undefine = undefined;
  return (
    <>
      <h1>hello react</h1>
      {name === "react" ? <div>react</div> : <div>vue</div>}
      {name === "react" && <div>react맞음</div>}
      {name2 === "react" && <div>react맞음</div>}
      {undefine || "undefined"}
    </>
  );
}

export default App;

// const : 상수, let :
// 변수 var은 scope가 함수 단위 의도치 않게 전역 변수처럼 쓰일 가능성이 있음
// 변수 let은 scope가 블록 단위, var와는 다르게 재선언 불가
