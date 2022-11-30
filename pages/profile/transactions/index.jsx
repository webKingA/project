import React from "react";
import style from "./transactions.module.css";
import Link from "next/link";

// import Icons Start

import { AiOutlineUser } from "react-icons/ai";
import { SiYourtraveldottv } from "react-icons/si";
import { HiUsers } from "react-icons/hi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

// import Icons End

// import Component Start

import Partone from "../../../Components/Profile/transactions/partone";
import Parttwo from "../../../Components/Profile/transactions/parttwo";

// import Component End

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
            <li>
              <Link href="/profile/ticketing">
                <TfiHeadphoneAlt />
                درخواست پشتیبانی
              </Link>
            </li>
            <li className={style.active_bg}>
              <Link href="/profile/transactions" className={style.active_text}>
                <FaWallet className={style.active_icon} />
                موجودی و تراکنش ها
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.profile__wrapper__information}>
            <Partone />
            <Parttwo />
        </div>
      </div>
    </div>
  );
}
