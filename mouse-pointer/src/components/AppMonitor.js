import React, { useState } from "react";

const AppMonitor = () => {
  const [person, setPerson] = useState({
    name: "엘리",
    title: "개발자",
    mentor: {
      name: "밥",
      title: "시니어개발자",
    },
  });
  //   const changeText = (param) => {};
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name`);
          const tmpPerson = { ...person, name: name };
          setPerson(tmpPerson);
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title`);
          const tmpPerson = {
            ...person,
            mentor: { ...person.mentor, title: title },
          };
          setPerson(tmpPerson);
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
};

export default AppMonitor;
