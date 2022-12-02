import React from "react";
import style from "./Table.module.css";

// import Mui Start

import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";

// import Mui End

// import Icons Start

import { AiOutlinePlus } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";

// import Icons End

const Table = () => {
  return (
    <div className={style.table__container}>
      <div className={style.pagination__container}>
        <Pagination count={10} color="primary" />
      </div>
      <div className={style.information__table}>
        <table>
            <thead>
                <th>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </th>
            </thead>
            <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
