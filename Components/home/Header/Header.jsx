import { useEffect, useState } from "react";
import style from "./Header.module.css";
import Link from "next/link";
import Logo from "../../../public/images/home/architecture.jpg";
// Import Mui Start
import Button from "@mui/material/Button";

// Import Mui End

// import Icons Start
import { HiPhone } from "react-icons/hi";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
// import Icons End

// styles btns langage
const btnStyle = {
  fontFamily: "v",
  fontSize: "13px",
  cursor: "pointer",
  color: "#fff",
};

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [menuProfile, setMenuProfile] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setIsLogin(true);
    }
  }, []);
  return (
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

        {isLogin ? (
          <div className={style.list_profile_menu}>
            <BiUser
              style={{ cursor: "pointer" }}
              onClick={() => setMenuProfile(!menuProfile)}
              size={26}
            />
            <div
              className={`${
                style.list_profile_menu_option
              } ${menuProfile ? style.active : null}`}
            >
              <Link href="/login">پروفایل کاربری</Link>{" "}
              <Link href="/logout">خروج</Link>{" "}
            </div>
          </div>
        ) : (
          <Link href="/login">
            <Button
              variant="contained"
              style={{
                padding: "5px 20px",
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
        )}

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
};

export default Header;
