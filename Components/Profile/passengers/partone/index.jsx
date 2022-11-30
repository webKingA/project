import React from "react";
import { HiSearch } from "react-icons/hi";
import style from './index.module.css';

export default function Partone() {
  return (
    <div className={style.profile__passenger}>
      <div>
        <span>
          <HiSearch />
          جستجوی مسافران
        </span>
      </div>
      <div>
        <input
          type="text"
          placeholder="جستجوی نام،نام خانوادگی،کد ملی و شماره پاسپورت"
        />
      </div>
    </div>
  );
}
