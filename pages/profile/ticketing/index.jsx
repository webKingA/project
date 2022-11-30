import React from "react";
import style from "./index.module.css";
import Link from "next/link";

// import Icons Start

import { AiOutlineUser } from "react-icons/ai";
import { SiYourtraveldottv } from "react-icons/si";
import { HiUsers } from "react-icons/hi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

// import Icons End

import Button from "@mui/material/Button";

export default function index() {
  return (
    <div className={style.profile__container}>
      <div className={style.profile__wrapper}>
        <div className={style.profile__wrapper__navbar}>
          <ul>
            <li>
              <Link href="/profile">
                <AiOutlineUser />
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
            <li className={style.active_bg}>
              <Link href="/profile/ticketing" className={style.active_text}>
                <TfiHeadphoneAlt className={style.active_icon} />
                درخواست پشتیبانی
              </Link>
            </li>
            <li>
              <Link href="/profile/transactions">
                <FaWallet />
                موجودی و تراکنش ها
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.profile__wrapper__information}>
          <div className={style.profile__passenger}>
            <img src="/images/no-ticket.26b1db6.png" alt="" />
            <p>هنوز درخواست پشتیبانی آنلاین توسط شما ثبت نشده است.</p>
            <small>
              اگر سوال یا مشکلی دارید می توانید با ایجاد درخواست پشتیبانی در
              سریعترین زمان ممکن آن را پیگیری کنید.
            </small>
            <Button
              style={{
                width: "15rem",
                fontFamily: "v",
                fontSize: "16px",
                padding: "15px",
                borderRadius: "10px",
                display : "flex",
                gap : "10px",
                alignItems : "center"
              }}
              variant="contained"
              startIcon={<AiOutlinePlus />}
            >
              ایجاد تیکت جدید
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
