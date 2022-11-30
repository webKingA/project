import React from "react";
import style from "./Header.module.css";
import Link from "next/link";

// Import Mui Start

import Button from "@mui/material/Button";

// Import Mui End

// import Icons Start

import { HiPhone } from "react-icons/hi";

// import Icons End

const Header = () => {
  return (
    <div className={style.header__home}>
      <div>
        <span>
          <Button
            variant="text"
            style={{
              padding: "10px",
              fontFamily: "v",
              fontSize: "14px",
              cursor: "pointer",
              color: "#fff",
            }}
          >
            EN
          </Button>
          <Button
            variant="text"
            style={{
              padding: "10px",
              fontFamily: "v",
              fontSize: "14px",
              cursor: "pointer",
              color: "#fff",
            }}
          >
            FA
          </Button>
          <Link href="/login">
            <Button
              variant="contained"
              style={{
                padding: "5px 20px",
                borderRadius: "20px 10px",
                fontFamily: "k",
                fontSize: "14px",
                cursor: "pointer",
                backgroundColor: "#e74c3c",
                color: "#fff",
              }}
            >
              ورود
            </Button>
          </Link>
        </span>
        <span>میتوانم کمکتان کنم ؟</span>
      </div>
      <div>
        <Link href="/other-services">سایر خدمات</Link>
        <Link href="/tourism-magazine">مجله گردشگری</Link>
        <Link href="/visa">ویزا</Link>
      </div>
      <div>
        <span>
          03132008
          <HiPhone />
        </span>
      </div>
    </div>
  );
};

export default Header;
