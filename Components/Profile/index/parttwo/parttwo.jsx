import React from "react";
import Button from "@mui/material/Button";
import style from "./parttwo.module.css";
import { FiUserCheck } from "react-icons/fi";
import { TiTickOutline } from "react-icons/ti";
import { GrEdit } from "react-icons/gr";
import { HiKey } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { ModalEditPassword , ModalEditEmail , ModalEditPhoneNumber } from "./../../../../state/atoms";

const Parttwo = ({user}) => {
  const [showModalEditPass, setShowModalEditPass] =
    useRecoilState(ModalEditPassword);
  const [showModalEditEmail, setShowModalEditEmail] =
    useRecoilState(ModalEditEmail);
  const [showModalEditPhoneNumber, setShowModalEditPhoneNumber] =
    useRecoilState(ModalEditPhoneNumber);

  return (
    <div className={style.profile__wrapper__information__second}>
      <div>
        <span>
          <FiUserCheck />
          اطلاعات حساب کاربری
        </span>
      </div>
      <div>
        <span>شماره موبایل</span>
        <span> {user?.phoneNumber} </span>
        <span>
          <TiTickOutline />
          تایید شده
        </span>
        <Button
          size="medium"
          style={{
            fontFamily: "k",
            padding: "10px",
            borderRadius: "10px",
            display: "flex",
            gap: "10px",
          }}
          startIcon={<GrEdit />}
          onClick={() => {
            setShowModalEditPhoneNumber(true);
          }}
        >
          ویرایش
        </Button>
      </div>
      <div>
        <span>
          <p>ایمیل {user?.email}</p>
          <Button
            size="medium"
            style={{
              fontFamily: "k",
              padding: "10px",
              borderRadius: "10px",
              display: "flex",
              gap: "10px",
            }}
            startIcon={<GrEdit />}
            onClick={() => {
              setShowModalEditEmail(true);
            }}
          >
            افزودن
          </Button>
        </span>
        <span>
          <Button
            variant="outlined"
            style={{
              fontFamily: "k",
              padding: "14px 20px",
              borderRadius: "10px",
              display: "flex",
              fontSize: "16px",
              gap: "10px",
            }}
            startIcon={<HiKey />}
            onClick={() => {
              setShowModalEditPass(true);
            }}
          >
            ویرایش کلمه عبور
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Parttwo;
