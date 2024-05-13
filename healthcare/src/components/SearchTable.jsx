import React, { useState } from "react";
import style from "../css/SearchTable.module.css";
import common from "../css/common.module.css";
import ResetBtn from "./ResetBtn";
import { RiCloseLargeLine } from "react-icons/ri";

const SearchTable = (props) => {
  const tablelines = props.lists.lines;
  const [selectList, setSelectList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  //테이블 항목 누를 시 해시태그 생성
  const categoryClick = (e) => {
    const hashId = e.target.id;
    const hashClass = e.target.name;
    const hashText = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectList([...selectList, { hashId, hashClass, hashText }]);
      setCheckedList([...checkedList, hashId]);
    } else {
      const newArray = selectList.filter((select) => {
        return select.hashId !== hashId;
      });
      setSelectList(newArray);
    }
  };

  //해쉬태그 x버튼 클릭
  const xBtnClick = (e) => {
    const newArray = selectList.filter((select) => {
      return select.hashId !== e.target.id;
    });

    const newCheckArray = selectList.filter((select) => {
      return select.hashId !== e.target.id;
    });

    setSelectList(newArray);
    setCheckedList(newCheckArray);

    console.log(checkedList);
  };

  return (
    <div className={style.searchZone}>
      <table>
        <tbody>
          {tablelines.map((line, idx) => (
            <tr key={idx}>
              <th>{line.th}</th>
              {line.tds.map((td, idx) => (
                <td key={idx}>
                  <input
                    type="checkbox"
                    id={td.id}
                    name={td.name}
                    value={td.text}
                    checked={checkedList.includes(td.id)}
                    onChange={(e) => {
                      categoryClick(e);
                    }}
                  ></input>
                  <label htmlFor={td.id}>{td.text}</label>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={`${common.content} ${common.categoryList}`}>
        <div className={common.categoryWrap}>
          <ul className={common.categoryChecked}>
            {selectList.map((select, idx) => (
              <li
                key={idx}
                id={`hash${select.hashId}`}
                className={`hash${select.hashClass}`}
                tabIndex={idx}
              >
                {select.hashText}
                <button
                  type="button"
                  id={select.hashId}
                  onClick={(e) => xBtnClick(e)}
                >
                  <RiCloseLargeLine
                    id={select.hashId}
                    onClick={(e) => xBtnClick(e)}
                    color="#424242"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <ResetBtn />
      </div>
    </div>
  );
};

export default SearchTable;
