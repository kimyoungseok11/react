import React, { useContext, useState } from "react";
import style from "../css/SearchTable.module.css";
import common from "../css/common.module.css";
import ResetBtn from "./ResetBtn";
import { RiCloseLargeLine } from "react-icons/ri";
import { RecommendContext } from "../contexts/RecommendContext";

const SearchTable = (props) => {
  const tablelines = props.lists.lines;
  const [selectList, setSelectList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  const { recommendItem, changeRecommendItem } = useContext(RecommendContext);

  //테이블 항목 누를 시 해시태그 생성
  const categoryClick = (e) => {
    const hashId = e.target.id;
    const hashClass = e.target.name;
    const hashValue = e.target.value;
    const hashText = e.target.placeholder;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectList([
        ...selectList,
        { hashId, hashClass, hashValue, hashText },
      ]);
      setCheckedList([...checkedList, hashId]);
      changeRecommendItem(hashClass, hashValue);
    } else {
      const newArray = selectList.filter((select) => {
        return select.hashId !== hashId;
      });
      const newCheckArray = checkedList.filter((checkedItem) => {
        return checkedItem !== hashId;
      });

      setSelectList(newArray);
      setCheckedList(newCheckArray);
      changeRecommendItem(hashClass, hashValue);
    }
  };

  //해쉬태그 x버튼 클릭
  const xBtnClick = (e) => {
    const newArray = selectList.filter((select) => {
      return select.hashId !== e.currentTarget.id;
    });

    const newCheckArray = checkedList.filter((checkedItem) => {
      return checkedItem !== e.currentTarget.id;
    });

    setSelectList(newArray);
    setCheckedList(newCheckArray);
    changeRecommendItem(e.currentTarget.name, e.currentTarget.value);
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
                    value={td.value}
                    placeholder={td.text}
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
                  className={style.xButton}
                  id={select.hashId}
                  name={select.hashClass}
                  value={select.hashValue}
                  onClick={(e) => xBtnClick(e)}
                >
                  <RiCloseLargeLine
                    color="#424242"
                    width="11px"
                    height="11px"
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
