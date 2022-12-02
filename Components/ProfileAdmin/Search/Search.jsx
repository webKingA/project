import React from "react";
import style from "./Search.css";

const Search = () => {
  return (
    <div className={style.search__container}>
      <div>
        <span>
            <small>وضعیت رزرو</small>
        </span>
        <span>
            <small>شماره پیگیری</small>
        </span>
        <span>
            <small>موبایل رزرو کننده</small>
        </span>
        <span>
            <small></small>
        </span>
        <span>
            <small></small>
        </span>
      </div>
      <div></div>
    </div>
  );
};

export default Search;
