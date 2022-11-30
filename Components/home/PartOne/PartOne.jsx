import React, { useEffect } from "react";
import style from "./PartOne.module.css";
import Input from "./../../input/Input";

// import mui Start

import Button from "@mui/material/Button";

// import mui End

const PartOne = () => {
  return (
    <div className={style.partone}>
      <div>
        <span>سفر خود را جستجو کنید...</span>
        <span>
          <p className={style.active__btn}>پرواز</p>
          <p>اتوبوس</p>
          <p>پرواز و هتل</p>
          <p>تور</p>
          <p>هتل</p>
          <p>بیمه</p>
        </span>
        <span>
          <Input type="text" placeholder="پرواز" />
          <Button
            style={{
              width: "10rem",
              padding: "10px",
              fontFamily: "v",
              fontSize: "16px",
              backgroundColor: "rgb(7, 22, 184)",
              borderRadius: "10px",
            }}
            variant="contained"
          >
            جستجو کن!
          </Button>
        </span>
      </div>
      <div>
        <p>آغازگر قصه سفر شمائیم</p>
      </div>
    </div>
  );
};

export default PartOne;
