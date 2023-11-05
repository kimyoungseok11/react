import React, { useReducer, useState } from "react";
import personReducer from "../reducer/person-reducer.js";

const AppMentors = () => {
  //   const [person, setPerson] = useState({
  //     name: "엘리",
  //     title: "개발자",
  //     mentors: [
  //       { name: "제임스", title: "시니어개발자" },
  //       {
  //         name: "밥",
  //         title: "주니어개발자",
  //       },
  //     ],
  //   });

  const [person, dispatch] = useReducer(personReducer, {
    name: "엘리",
    title: "개발자",
    mentors: [
      { name: "제임스", title: "시니어개발자" },
      {
        name: "밥",
        title: "주니어개발자",
      },
    ],
  });

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름은 무엇으로 바꾸고 싶은가요`);

          dispatch({ type: "updated", prev, current });
        }}
      >
        멘토의 이름을 바꾸기
      </button>
      <button
        onClick={() => {
          const name = prompt(`추가할 멘토 이름`);
          const title = prompt(`추가할 타이틀`);

          dispatch({ type: "added", name, title });
        }}
      >
        멘토 추가
      </button>
      <button
        onClick={() => {
          const name = prompt(`삭제할 멘토 이름`);

          dispatch({ type: "deleted", name });
        }}
      >
        멘토 삭제
      </button>
    </div>
  );
};

export default AppMentors;
