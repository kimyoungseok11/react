import React, { useState } from "react";

const Average = () => {
  const [number, setNumber] = useState("");
  const [list, setList] = useState([]);
  const [average, setAverage] = useState(0);
  const onChange = (e) => {
    console.log(e.target.value);
    setNumber(e.target.value);
  };

  const onClick = () => {
    const newList = list.concat(...number);
    console.log(newList);
    const sum = newList.reduce(
      (sum, value, index) => parseInt(sum) + parseInt(value)
    );
    setList(newList);
    setAverage(sum / list.length);
    setNumber("");
  };
  return (
    <div>
      <input name="number" value={number} onChange={onChange}></input>
      <button onClick={onClick}>버튼</button>
      <div>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </div>
      <div>
        <b>평균값 : </b>
        {average}
      </div>
    </div>
  );
};

export default Average;
