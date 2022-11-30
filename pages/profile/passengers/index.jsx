import React from "react";
import style from "./index.module.css";
import Link from "next/link";
import Partone from "../../../Components/Profile/passengers/partone";
import Parttwo from "../../../Components/Profile/passengers/parttwo";
import { useRecoilState } from "recoil";
import { ModalAddNewTraveller } from "../../../state/atoms";
import AddNewTraveller from "../../../Components/Modal/AddNewTraveller/AddNewTraveller";

// import Icons Start

import { AiOutlineUser } from "react-icons/ai";
import { SiYourtraveldottv } from "react-icons/si";
import { HiUsers } from "react-icons/hi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaWallet } from "react-icons/fa";

// import Icons End

import Button from "@mui/material/Button";

export default function Index() {

  const [showModalAddNewTraveller , setShowModalAddNewTraveller] = useRecoilState(ModalAddNewTraveller);

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
            <li className={style.active_bg}>
              <Link href="/profile/passengers" className={style.active_text}>
                <HiUsers className={style.active_icon} />
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
          <Parttwo />
        </div>
      </div>
      {showModalAddNewTraveller && (
        <AddNewTraveller />
      )}
    </div>
  );
}
