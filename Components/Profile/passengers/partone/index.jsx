import React, {useState} from "react";
import { HiSearch } from "react-icons/hi";
import style from './index.module.css';

export default function Partone() {
    const [seaechQuery, setSearchQuery] = useState("")

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
          value={seaechQuery}
          onChange={e => {setSearchQuery(e.target.value)} }
        />
      </div>
    </div>
  );
}
