import React, { useState, useRef } from "react";
import style from "./Header.module.css";
import Link from "next/link";

// import Icons Start

import { FaBars } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { AiOutlineLeft } from "react-icons/ai";

// import Icons End

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  let ulRef = useRef();
  let aRef = useRef();

  return (
    <div className={style.header__container}>
      {showNavbar == true && (
        <div className={style.navbar}>
          <span>
            <FaTimesCircle
              onClick={() => {
                setShowNavbar(false);
              }}
            />
          </span>
          <span>
            <img src="/images/download.png" alt="" />
          </span>
          <span>
            <ul>
              <Link href="/">
                مدیریت کاربران
                <AiOutlineLeft />
              </Link>
              <Link href="/profile-admin/role-managment">
                مدیریت نقش ها
                <AiOutlineLeft />
              </Link>
              <li
                onClick={() => {
                  ulRef.current.classList.toggle(style.hide);
                  aRef.current.classList.toggle(style.m_top);
                }}
              >
                مدیریت رزرو ها
                <AiOutlineLeft />
                <ul ref={ulRef} className={style.hide}>
                  <Link href="/profile-admin/internal-flight">
                    پرواز داخلی
                    <AiOutlineLeft />
                  </Link>
                  <Link href="/profile-admin/internal-hotels">
                    هتل های داخلی
                    <AiOutlineLeft />
                  </Link>
                </ul>
              </li>
              <Link href="/profile-admin/conflicts" ref={aRef}>
                لیست مغایرت ها
                <AiOutlineLeft />
              </Link>
              <Link href="/profile-admin/reports">
                لیست گزارشات
                <AiOutlineLeft />
              </Link>
              <li>
                <span className={style.span3}>
                  <p
                    onClick={() => {
                      window.localStorage.removeItem("token");
                      window.localStorage.removeItem("isAdmin");
                      window.location = "/";
                    }}
                  >
                    خروج
                  </p>
                </span>
              </li>
            </ul>
          </span>
        </div>
      )}
      <span className={style.span1}>
        <FaBars
          onClick={() => {
            setShowNavbar(true);
          }}
        />
      </span>
      <span className={style.span2}>
        <FaUserCircle />
        <p>09120148604</p>
      </span>
    </div>
  );
};

export default Header;
