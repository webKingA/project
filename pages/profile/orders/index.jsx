import React from "react";
import style from "./index.module.css";
import Link from "next/link";

// import Icons Start

import { AiOutlineUser } from "react-icons/ai";
import { SiYourtraveldottv } from "react-icons/si";
import { HiUsers } from "react-icons/hi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaWallet } from "react-icons/fa";
import { TfiSearch } from "react-icons/tfi";
import { AiOutlineInfoCircle } from "react-icons/ai";

// import Icons End

// Component Import Start

import Partone from "../../../Components/Profile/orders/partone/partone";

// Component Import End

// mui Start

import Button from "@mui/material/Button";

// mui End

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
            <li className={style.active_bg}>
              <Link href="/profile/orders" className={style.active_text}>
                <SiYourtraveldottv className={style.active_icon} />
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
          </ul>
        </div>
        <div className={style.profile__wrapper__information}>
          <Partone />
          <div>
            <span>متاسفانه سفارشی برای شما تا به حال ثبت نگردیده است</span>
          </div>
        </div>
      </div>
    </div>
  );
}
