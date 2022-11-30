import React from "react";
import { TfiSearch } from "react-icons/tfi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Button from "@mui/material/Button";
import style from "./partone.module.css";

export default function partone() {
  return (
    <div className={style.partoneorder}>
      <div>
        <span>
          <TfiSearch />
          جستجو سفارش
        </span>
      </div>
      <div>
        <span>
          <AiOutlineInfoCircle />
          برای جستجو در لیست سفرهای من پر کردن حداقل یک فیلد کافیست.
        </span>
      </div>
      <div>
        <span>
          <label htmlFor="">شماره سفارش</label>
          <input type="text" />
        </span>
        <span>
          <span>
            <label htmlFor="">تاریخ</label>
            <input type="text" placeholder="از" />
          </span>
          <span>
            <input type="text" placeholder="تا" />
          </span>
        </span>
      </div>
      <div>
        <Button
          variant="contained"
          style={{
            width: "20rem",
            padding: "10px",
            fontFamily: "k",
            fontSize: "14px",
          }}
        >
          جستجو
        </Button>
      </div>
    </div>
  );
}
