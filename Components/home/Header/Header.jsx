import React from "react";
import style from "./Header.module.css";
import Link from "next/link";
import Logo from "../../../public/images/home/architecture-1868667_1920.jpg";
// Import Mui Start
import Button from "@mui/material/Button";

// Import Mui End

// import Icons Start
import { HiPhone } from "react-icons/hi";
import Image from "next/image";

// import Icons End

// styles btns langage
const btnStyle = {
  fontFamily: "v",
  fontSize: "13px",
  cursor: "pointer",
  color: "#fff",
};

const Header = () => (
  <header className={style.container_header}>
    {/* buttons langage and btn login */}
    <div>
      <span>
        <Button variant="text" style={btnStyle}>
          EN
        </Button>
        <Button variant="text" style={btnStyle}>
          FA
        </Button>
      </span>

      <Link href="/#">
        <Button
          variant="contained"
          style={{
            padding: "2px 20px",
            borderRadius: "35px 10px",
            fontFamily: "k",
            fontSize: "11px",
            cursor: "pointer",
            backgroundColor: "#e74c3c",
            color: "#fff",
          }}
        >
          ورود
        </Button>
      </Link>

      <Link href="#">
        {" "}
        <p>میتوانم کمکتان کنم؟</p>
      </Link>
    </div>
    {/* navbar */}
    <ul>
      <li>
        <Link href="#">سایر خدمات</Link>
      </li>
      <span></span>
      <li>
        <Link href="#">مجله گردشگری</Link>
      </li>
      <span></span>
      <li>
        <Link href="#">ویزا</Link>
      </li>
    </ul>
    {/* phone number site */}
    <div>
      <div className={style.base}>
        <Image fill src={Logo} alt="" />
      </div>
      <span>
        03132008 <HiPhone />
      </span>
    </div>
  </header>
);

export default Header;
