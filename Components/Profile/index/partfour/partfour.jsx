import React, { useState } from "react";
import Button from "@mui/material/Button";
import { AiFillDollarCircle } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import style from "./partfour.module.css";
import TextField from "@mui/material/TextField";

export default function partfour() {
  const [showModalPersonalInformation, setShowModalPersonalInformation] =
    useState(false);
    const [shabaNumber , setShabaNumber] = useState("")
    const [accountNumber , setAccountNumber] = useState("")
    const [cardNumber , setCardNumber] = useState("")


    return (
    <div className={style.profile__wrapper__information__four}>
      <div>
        <span>
          <AiFillDollarCircle />
          اطلاعات حساب بانکی
        </span>
        <span>
          <Button
            size="medium"
            style={{
              fontFamily: "k",
              padding: "10px",
              borderRadius: "10px",
              display: "flex",
              gap: "10px",
              fontSize: "18px",
            }}
            onClick={() => {
              setShowModalPersonalInformation(!showModalPersonalInformation);
            }}
            startIcon={<GrEdit />}
          >
            ویرایش اطلاعات
          </Button>
        </span>
      </div>
      {showModalPersonalInformation == false ? (
        <>
          <div>
            <span>
              شماره شبا
              <small>____</small>
            </span>
            <span>
              شماره حساب
              <small>____</small>
            </span>
          </div>
          <div>
            <span>
              شماره کارت
              <small>____</small>
            </span>
          </div>
        </>
      ) : (
        <section className={style.Section1}>
          <div>
            <p>
              اطلاعات حساب بانکی به منظور بازگشت وجه پس از استرداد دریافت
              می‌شود.
            </p>
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="شماره شبا"
              variant="outlined"
              style={{width : "100%"}}
              value={shabaNumber}
              onChange={e => {setShabaNumber(e.target.value)}}
            />
            <TextField
              id="outlined-basic"
              label="شماره حساب"
              variant="outlined"
              style={{width : "100%"}}
              value={accountNumber}
              onChange={e => {setAccountNumber(e.target.value)}}

            />
            <TextField
              id="outlined-basic"
              label="شماره کارت"
              variant="outlined"
              style={{width : "100%"}}
              value={cardNumber}
              onChange={e => {setCardNumber(e.target.value)}}
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "end",
              width: "100%",
              backgroundColor: "rgba(52, 152, 219,.1)",
              padding: "1rem 0",
            }}
          >
            <Button
              variant="outlined"
              style={{
                width: "12rem",
                padding: "12px",
                fontFamily: "k",
                fontSize: "16px",
                borderRadius: "10px",
              }}
              onClick={() => {
                setShowModalPersonalInformation(false);
              }}
            >
              انصراف
            </Button>
            <Button
              variant="contained"
              style={{
                width: "12rem",
                padding: "12px",
                fontFamily: "k",
                fontSize: "16px",
                borderRadius: "10px",
                marginLeft: "1rem",
              }}
            >
              تایید
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
