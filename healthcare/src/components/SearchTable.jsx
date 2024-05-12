import React, { useState } from "react";
import style from "../css/SearchTable.module.css";
import common from "../css/common.module.css";
import categoryStyle from "../css/CategoryList.module.css";
import ResetBtn from "./ResetBtn";

const SearchTable = (props) => {
  const tablelines = props.lists.lines;
  const [selectList, setSelectList] = useState([]);
  const categoryClick = (e) => {
    console.log(e.target.name);
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
                    onChange={(e) => {
                      categoryClick(e);
                    }}
                  ></input>
                  <label>{td.text}</label>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={`${common.content} ${categoryStyle.categoryList}`}>
        <div className={categoryStyle.categoryWrap}></div>
        <ResetBtn />
      </div>
    </div>
  );
};

export default SearchTable;
