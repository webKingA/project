import React from "react";
import style from "./index.module.css";
import TextField from "@mui/material/TextField";

// Import Icons Start

import { BsFillCreditCardFill } from "react-icons/bs";
import { AiOutlineLeft } from "react-icons/ai";

// Import Icons End

import Button from "@mui/material/Button";

export default function Partone() {
  return (
    <section className={style.transection}>
      <div>
        <span>
          <BsFillCreditCardFill />
          موجودی حساب کاربری
        </span>
      </div>
      <div>
        <span>
          <p>موجودی حساب</p>
          <span>
            <small>0</small>
            ریال
          </span>
          <span style={{display : "flex" , alignItems : "center"}}>
            انتقال موجودی به حساب بانکی
            <Button
              variant="text"
              endIcon={<AiOutlineLeft />}
              style={{ width: "8rem", display: "flex", gap: "10px" , marginRight : "1rem" }}
            >
              ثبت درخواست
            </Button>
          </span>
        </span>
        <span>
          <p>افزایش موجودی</p>
          <span>
            <TextField
              id="outlined-basic"
              label="مبلغ مورد نظر"
              variant="outlined"
            />
            <Button
              variant="contained"
              style={{
                width: "10rem",
                padding: "10px",
                fontFamily: "v",
                fontSize: "16px",
              }}
            >
              پرداخت
            </Button>
          </span>
        </span>
      </div>
    </section>
  );
}
