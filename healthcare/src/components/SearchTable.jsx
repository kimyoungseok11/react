import React from "react";
import style from "../css/SearchTable.module.css";

const SearchTable = (props) => {
  const tablelines = props.lists.lines;
  console.log(tablelines);
  return (
    <div className={style.searchZone}>
      <table>
        <tbody>
          {tablelines.map((line) => (
            <th>{line.th}</th>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchTable;
