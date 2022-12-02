import React from "react";
import { TfiSearch } from "react-icons/tfi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Button from "@mui/material/Button";
import style from "./partone.module.css";
import {useState} from "react";

export default function partone() {
    const [orderNumber, setOrderNumber] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
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
          <input type="text" value={orderNumber} onChange={e => {setOrderNumber(e.target.value)} }/>
        </span>
        <span>
          <span>
            <label htmlFor="">تاریخ</label>
            <input type="text" placeholder="از" value={from} onChange={e => {setFrom(e.target.value)} }/>
          </span>
          <span>
            <input type="text" placeholder="تا" value={to} onChange={e => {setTo(e.target.value)} } />
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
