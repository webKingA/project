import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import Link from "next/link";
import { useRecoilState } from "recoil";
import {
  ModalEditPassword,
  ModalEditEmail,
  ModalEditPhoneNumber,
} from "../../state/atoms";

// import Icons Start

import { AiOutlineUser } from "react-icons/ai";
import { SiYourtraveldottv } from "react-icons/si";
import { HiUsers } from "react-icons/hi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaWallet } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";

// import Icons End

// Component Import Start

import Header from "../../Components/Profile/Header/Header";
import Partone from "../../Components/Profile/index/partone/partone";
import Parttwo from "../../Components/Profile/index/parttwo/parttwo";
import Partthree from "../../Components/Profile/index/partthree/partthree";
import Partfour from "../../Components/Profile/index/partfour/partfour";

// Component Import End

// mui Start

import Button from "@mui/material/Button";

// mui End

const Index = () => {
  useEffect(() => {
    if (window.localStorage.getItem('token') == null) {
      window.location = '/login';
    }
  }, []);

  const [showModalEditPass, setShowModalEditPass] =
    useRecoilState(ModalEditPassword);
  const [showModalEditEmail, setShowModalEditEmail] =
    useRecoilState(ModalEditEmail);
  const [showModalEditPhoneNumber, setShowModalEditPhoneNumber] =
    useRecoilState(ModalEditPhoneNumber);

  return (
    <div className={style.profile__container}>
      <div className={style.profile__wrapper}>
        <div className={style.profile__wrapper__navbar}>
          <ul>
            <li className={style.active_bg}>
              <Link href="/profile" className={style.active_text}>
                <AiOutlineUser className={style.active_icon} />
                حساب کاربری
              </Link>
            </li>
            <li>
              <Link href="/profile/orders">
                <SiYourtraveldottv />
                سفر های من
              </Link>
            </li>
            <li>
              <Link href="/profile/passengers">
                <HiUsers />
                لیست مسافران
              </Link>
            </li>
            <li>
              <Link href="/profile/ticketing">
                <TfiHeadphoneAlt />
                درخواست پشتیبانی
              </Link>
            </li>
            <li>
              <Link href="/profile/transactions">
                <FaWallet />
                موجودی و تراکنش ها
              </Link>
            </li>
            <li
              onClick={() => {
                window.localStorage.removeItem("token");
                window.location = "/";
              }}
            >
              <IoExitOutline />
              خروج از حساب کاربری
            </li>
          </ul>
        </div>
        <div className={style.profile__wrapper__information}>
          <Partone />
          <Parttwo />
          <Partthree />
          <Partfour />
          {showModalEditPass && (
            <div className={style.modalEditPass}>
              <div>
                <FaTimes
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowModalEditPass(false);
                  }}
                />
                <p>تغییر کلمه عبور</p>
                <small>رمز عبور فعلی و رمز عبور جدید خود را وارد نمایید.</small>
                <input type="password" placeholder="رمز عبور فعلی" />
                <span>
                  <input type="password" placeholder="رمز عبور جدید" />
                  <input type="password" placeholder="تکرار رمز عبور جدید" />
                </span>
                <Button
                  style={{
                    width: "450px",
                    padding: "10px",
                    fontFamily: "k",
                    marginBottom: "2rem",
                  }}
                  variant="contained"
                >
                  تغییر رمز عبور
                </Button>
              </div>
              <div
                onClick={() => {
                  setShowModalEditPass(false);
                }}
              ></div>
            </div>
          )}
          {showModalEditEmail && (
            <div className={style.modalEditPass}>
              <div>
                <FaTimes
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowModalEditEmail(false);
                  }}
                />
                <p>ویرایش آدرس ایمیل</p>
                <small>برای ویرایش، آدرس ایمیل جدید خود را وارد کنید.</small>
                <input type="password" placeholder="رمز عبور فعلی" />
                <Button
                  style={{
                    width: "450px",
                    padding: "10px",
                    fontFamily: "k",
                    marginBottom: "2rem",
                  }}
                  variant="contained"
                >
                  تایید
                </Button>
              </div>
              <div
                onClick={() => {
                  setShowModalEditEmail(false);
                }}
              ></div>
            </div>
          )}
          {showModalEditPhoneNumber && (
            <div className={style.modalEditPass}>
              <div>
                <FaTimes
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowModalEditPhoneNumber(false);
                  }}
                />
                <p>ویرایش شماره موبایل</p>
                <small>برای ویرایش، شماره موبایل جدید خود را وارد کنید.</small>
                <input type="password" placeholder="شماره موبایل" />
                <Button
                  style={{
                    width: "450px",
                    padding: "10px",
                    fontFamily: "k",
                    marginBottom: "2rem",
                  }}
                  variant="contained"
                >
                  تایید و دریافت کد
                </Button>
              </div>
              <div
                onClick={() => {
                  setShowModalEditPhoneNumber(false);
                }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
