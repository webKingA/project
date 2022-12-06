import React, {
  useState,
  useEffect,
  useCallback,
} from "react";
import style from "./index.module.css";
import Link from "next/link";
import { useRecoilState } from "recoil";
import {
  ModalEditPassword,
  ModalEditEmail,
  ModalEditPhoneNumber,
} from "../../state/atoms";

// import Icons Start

import { AiOutlineUser } from "react-icons/ai";
import { SiYourtraveldottv } from "react-icons/si";
import { HiUsers } from "react-icons/hi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaWallet } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";

// import Icons End

// Component Import Start

import Header from "../../Components/Profile/Header/Header";
import Partone from "../../Components/Profile/index/partone/partone";
import Parttwo from "../../Components/Profile/index/parttwo/parttwo";
import Partthree from "../../Components/Profile/index/partthree/partthree";
import Partfour from "../../Components/Profile/index/partfour/partfour";

// Component Import End

// mui Start

import Button from "@mui/material/Button";

// mui End

// axios
import fetchClient from "../../utils/fetchClient";

const Index = () => {
  useEffect(() => {
    if (window.localStorage.getItem("token") == null) {
      window.location = "/login";
    }
  }, []);

  const [showModalEditPass, setShowModalEditPass] =
    useRecoilState(ModalEditPassword);
  const [showModalEditEmail, setShowModalEditEmail] =
    useRecoilState(ModalEditEmail);
  const [
    showModalEditPhoneNumber,
    setShowModalEditPhoneNumber,
  ] = useRecoilState(ModalEditPhoneNumber);
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] =
    useState("");

  const submitEditEmail = () => {
    if (!userEmail) return;
    const id = localStorage.getItem("user");

    const data = {
      id: Number(id),
      email: userEmail,
    };
    fetchClient
      .put("/UserProfile/updateuser", data)
      .then((res) => {
        console.log(red);
      });
  };

  return (
    <div className={style.profile__container}>
      <div className={style.profile__wrapper}>
        <div className={style.profile__wrapper__navbar}>
          <ul>
            <li className={style.active_bg}>
              <Link
                href="/profile"
                className={style.active_text}
              >
                <AiOutlineUser
                  className={style.active_icon}
                />
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
            <li>
              <Link href="/profile/transactions">
                <FaWallet />
                موجودی و تراکنش ها
              </Link>
            </li>
            <li
              onClick={() => {
                window.localStorage.removeItem("token");
                window.localStorage.removeItem("isAdmin");
                window.location = "/";
              }}
            >
              <IoExitOutline />
              خروج از حساب کاربری
            </li>
          </ul>
        </div>
        <div
          className={style.profile__wrapper__information}
        >
          <Partone />
          <Parttwo />
          <Partthree />
          <Partfour />
          {showModalEditPass && (
            <div className={style.modalEditPass}>
              <div>
                <FaTimes
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowModalEditPass(false);
                  }}
                />
                <p>تغییر کلمه عبور</p>
                <small>
                  رمز عبور فعلی و رمز عبور جدید خود را وارد
                  نمایید.
                </small>
                <input
                  type="password"
                  placeholder="رمز عبور فعلی"
                  value={oldPassword}
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                  }}
                />
                <span>
                  <input
                    type="password"
                    placeholder="رمز عبور جدید"
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  />
                  <input
                    type="password"
                    placeholder="تکرار رمز عبور جدید"
                    value={repeatNewPassword}
                    onChange={(e) => {
                      setRepeatNewPassword(e.target.value);
                    }}
                  />
                </span>
                <Button
                  style={{
                    width: "450px",
                    padding: "10px",
                    fontFamily: "k",
                    marginBottom: "2rem",
                  }}
                  variant="contained"
                >
                  تغییر رمز عبور
                </Button>
              </div>
              <div
                onClick={() => {
                  setShowModalEditPass(false);
                }}
              ></div>
            </div>
          )}
          {showModalEditEmail && (
            <div className={style.modalEditPass}>
              <div>
                <FaTimes
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowModalEditEmail(false);
                  }}
                />
                <p>ویرایش آدرس ایمیل</p>
                <small>
                  برای ویرایش، آدرس ایمیل جدید خود را وارد
                  کنید.
                </small>
                <input
                  type="email"
                  placeholder="رمز عبور فعلی"
                  value={userEmail}
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                />
                <Button
                  style={{
                    width: "450px",
                    padding: "10px",
                    fontFamily: "k",
                    marginBottom: "2rem",
                  }}
                  variant="contained"
                  onClick={submitEditEmail}
                >
                  تایید
                </Button>
              </div>
              <div
                onClick={() => {
                  setShowModalEditEmail(false);
                }}
              ></div>
            </div>
          )}
          {showModalEditPhoneNumber && (
            <div className={style.modalEditPass}>
              <div>
                <FaTimes
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowModalEditPhoneNumber(false);
                  }}
                />
                <p>ویرایش شماره موبایل</p>
                <small>
                  برای ویرایش، شماره موبایل جدید خود را وارد
                  کنید.
                </small>
                <input
                  type="text"
                  placeholder="09121234567"
                  value={userMobile}
                  onChange={(e) => {
                    setUserMobile(e.target.value);
                  }}
                />
                <Button
                  style={{
                    width: "450px",
                    padding: "10px",
                    fontFamily: "k",
                    marginBottom: "2rem",
                  }}
                  variant="contained"
                >
                  تایید و دریافت کد
                </Button>
              </div>
              <div
                onClick={() => {
                  setShowModalEditPhoneNumber(false);
                }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
// export async function getServerSideProps(){
//    fetch('http://185.164.73.141:8090/api/UserProfile/getuser?id=1',{
//     method: "GET",
//     headers:{
//       token: "berear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3Nmb3JtIjoiZXlKRGJHRnBiWE1pT2x0N0lsUjVjR1VpT2lKaFkyTmxjM05tYjNKdElpd2lWbUZzZFdVaU9pSjBaWE4wTWlKOUxIc2lWSGx3WlNJNkltRmpZMlZ6YzJadmNtMGlMQ0pXWVd4MVpTSTZJbEp2YkdWTllXNWhaMjFsYm5RaWZTeDdJbFI1Y0dVaU9pSmhZMk5sYzNObWIzSnRJaXdpVm1Gc2RXVWlPaUoxYzJWeVRXRnVZV2R0Wlc1MEluMHNleUpVZVhCbElqb2lZV05qWlhOelptOXliU0lzSWxaaGJIVmxJam9pZEdWemRDSjlMSHNpVkhsd1pTSTZJbUZqWTJWemMyWnZjbTBpTENKV1lXeDFaU0k2SWtGa2JXbHVJbjBzZXlKVWVYQmxJam9pWVdOalpYTnpabTl5YlNJc0lsWmhiSFZsSWpvaVFXUnRhVzRpZlN4N0lsUjVjR1VpT2lKaFkyTmxjM05tYjNKdElpd2lWbUZzZFdVaU9pSlNiMnhsVFdGdVlXZHRaVzUwSW4wc2V5SlVlWEJsSWpvaVlXTmpaWE56Wm05eWJTSXNJbFpoYkhWbElqb2lkWE5sY2sxaGJtRm5iV1Z1ZENKOUxIc2lWSGx3WlNJNkltRmpZMlZ6YzJadmNtMGlMQ0pXWVd4MVpTSTZJa0ZrYldsdUluMHNleUpVZVhCbElqb2lZV05qWlhOelptOXliU0lzSWxaaGJIVmxJam9pZFhObGNrMWhibUZuYldWdWRDSjlYWDA9IiwiSWQiOiIxIiwiVE1TIjoiMSIsIkNvV29ya2VyIjoiIiwiSXNIdWJVc2VyIjoiRmFsc2UiLCJJc0N1c3RvbWVyIjoiVHJ1ZSIsIkZ1bGxOYW1lIjoiMDkxMjAxNDg2MDQiLCJuYmYiOjE2Njk4MTA1NTIsImV4cCI6MTY3MDQxNTM1MiwiaWF0IjoxNjY5ODEwNTUyfQ.CK2YaRXeTZhAKQ3ga-lohjjbr-KOlX5K2FWfkjdFml8"
//     }
//   }).then(res => res.json()).then(data => console.log(data))
//
//   return {
//     props:{
//
//     }
//   }
// }
export default Index;
