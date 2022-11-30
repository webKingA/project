import React from "react";
import { FaWheelchair } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { BiUserPlus } from "react-icons/bi";
import style from "./index.module.css";
import { useRecoilState } from "recoil";
import { ModalAddNewTraveller } from "./../../../../state/atoms";

import Button from "@mui/material/Button";

export default function Parttwo() {
  const [showModalAddNewTraveller, setShowModalAddNewTraveller] =
    useRecoilState(ModalAddNewTraveller);

  return (
    <div className={style.profile__passenger2}>
      <div>
        <span>
          <FaWheelchair />
          لیست مسافران
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
            }}
            startIcon={<AiOutlinePlus />}
            onClick={() => {
              setShowModalAddNewTraveller(true);
            }}
          >
            افزودن مسافر جدید
          </Button>
        </span>
      </div>
      <div>
        <img src="/images/no-passengers-944b0186.svg" alt="" />
        <p>لیست مسافران شما خالی است</p>
        <p>
          برای دسترسی راحت‌تر به اطلاعات مسافران خود در هنگام خرید، مسافران خود
          را اضافه کنید.
        </p>
      </div>
      <div>
        <Button
          variant="contained"
          style={{
            fontFamily: "v",
            padding: "14px",
            borderRadius: "10px",
            display: "flex",
            gap: "10px",
            width: "15rem",
          }}
          startIcon={<BiUserPlus />}
          onClick={() => {
            setShowModalAddNewTraveller(true);
          }}
        >
          افزودن مسافر
        </Button>
      </div>
    </div>
  );
}
