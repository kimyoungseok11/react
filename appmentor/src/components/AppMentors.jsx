import React, { useState } from "react";

const AppMentor = (props) => {
  const [person, setPerson] = useState({
    name: "엘리",
    title: "개발자",
    mentors: [
      {
        name: "밥",
        title: "시니어개발자",
      },
      {
        name: "제임스",
        title: "시니어개발자",
      },
    ],
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt("누구의 이름을 바꿀까요?");
          const current = prompt("이름은 어떻게 바꿀까요?");

          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
                return { ...mentor, name: current };
              } else {
                return mentor;
              }
            }),
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const name = prompt("추가할 이름?");
          const title = prompt("추가할 타이틀?");

          setPerson((person) => ({
            ...person,
            mentors: [...person.mentors, { name, title }],
          }));
        }}
      >
        멘토 추가하기
      </button>
      <button
        onClick={() => {
          const name = prompt("삭제할 이름?");

          setPerson((person) => ({
            ...person,
            mentors: person.mentors.filter((mentor) => mentor.name !== name),
          }));
        }}
      >
        멘토 삭제하기
      </button>
    </div>
  );
};

export default AppMentor;
