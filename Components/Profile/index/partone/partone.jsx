import React from "react";
import style from './partone.module.css';
import Button from "@mui/material/Button";

import { BsChevronLeft } from "react-icons/bs";

const Partone = ({user}) => {
  return (
    <div className={style.profile__wrapper__information__first}>
      <span>
        <img src="./images/avatar-edd6c4f8.svg" alt="logo" />
       {user?.userName}
      </span>
      <span>
        <p>موجودی حساب</p>
        <p>
          <small>0</small>
          ریال
        </p>
        <Button
          size="medium"
          style={{
            fontFamily: "k",
            padding: "10px",
            borderRadius: "10px",
            display: "flex",
            gap: "10px",
          }}
          endIcon={<BsChevronLeft />}
        >
          افزایش موجودی
        </Button>
      </span>
    </div>
  );
};

export default Partone;
