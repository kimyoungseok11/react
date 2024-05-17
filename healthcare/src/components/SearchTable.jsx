import React, { useContext, useState, useEffect } from "react";
import style from "../css/SearchTable.module.css";
import common from "../css/common.module.css";
import ResetBtn from "./ResetBtn";
import { RiCloseLargeLine } from "react-icons/ri";
import { RecommendContext } from "../contexts/RecommendContext";

const SearchTable = (props) => {
  const tablelines = props.lists.lines;
  const { recommendItem, changeRecommendItem, hashList, changeHashList } =
    useContext(RecommendContext);
  const [resetList, setResetList] = useState([]); //리셋 버튼 초기화

  //리셋 버튼 누를 시 초기화 항목 배열 생성
  useEffect(() => {
    const tmpArray = [];
    for (let i = 0; i < tablelines.length; i++) {
      for (let j = 0; j < tablelines[i].tds.length; j++) {
        const name = tablelines[i].tds[j].name;
        if (name.indexOf("all") !== 0 && !tmpArray.includes(name)) {
          tmpArray.push(name);
        }
      }
    }
    setResetList(tmpArray);
  }, []);

  //테이블 항목 누를 시 해시태그 생성
  const categoryClick = (e) => {
    const hashId = e.target.id;
    const hashClass = e.target.name;
    const hashValue = e.target.value;
    const hashText = e.target.placeholder;
    const isChecked = e.target.checked;

    if (isChecked) {
      const newArray = [
        ...hashList,
        { hashId, hashClass, hashValue, hashText },
      ];
      changeHashList(newArray);
      changeRecommendItem(hashClass, hashValue);
    } else {
      const newArray = hashList.filter((select) => {
        return select.hashId !== hashId;
      });
      changeHashList(newArray);
      changeRecommendItem(hashClass, hashValue);
    }
  };

  //해쉬태그 x버튼 클릭
  const xBtnClick = (e) => {
    const newArray = hashList.filter((select) => {
      return select.hashId !== e.currentTarget.id;
    });

    changeHashList(newArray);
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
                    checked={
                      recommendItem?.[td.name] &&
                      recommendItem[td.name].includes(td.value)
                    }
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
            {hashList.map((select, idx) => (
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
        <ResetBtn resetList={resetList} />
      </div>
    </div>
  );
};

export default SearchTable;
