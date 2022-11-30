import React from "react";
import "./Header.module.css";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { BiQuestionMark } from "react-icons/bi";
import { SiYourtraveldottv } from "react-icons/si";
import { AiOutlineUser } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { IoWalletOutline } from "react-icons/io5";
import { TbHeadset } from "react-icons/tb";
import { IoExitOutline } from "react-icons/io5";

// mui Start

// mui End

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__wrapper">
        <div className="header__wrapper__menu">
          <span className="header__wrapper__menu__logo">LOGO</span>
          <span className="header__wrapper__menu__navbar">
            <ul>
              <li>
                بلیط
                <BsChevronDown />
                <ul>
                  <Link href="/">پرواز داخلی</Link>
                  <Link href="/">پرواز خارجی</Link>
                  <Link href="/">قطار</Link>
                  <Link href="/">اتوبوس</Link>
                </ul>
              </li>
              <li>
                اقامت
                <BsChevronDown />
                <ul>
                  <Link href="/">هتل</Link>
                  <Link href="/">ویلا و اقامتگاه</Link>
                </ul>
              </li>
              <Link href="/">تور</Link>
              <li>
                بیشتر
                <BsChevronDown />
                <ul>
                  <Link href="/">علی بابا پلاس</Link>
                  <Link href="/">مجله علی بابا</Link>
                  <Link href="/">بیمه مسافرتی</Link>
                </ul>
              </li>
            </ul>
          </span>
        </div>
        <div className="header__wrapper__information">
          <span>
            <BiQuestionMark />
            مرکز پشتیبانی آنلاین
          </span>
          <span>
            <SiYourtraveldottv />
            سفر های من
          </span>
          <span>
            <div>
              <TiTickOutline />
              <AiOutlineUser />
            </div>
            09304144479
            <BsChevronDown />
            <div>
                
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
