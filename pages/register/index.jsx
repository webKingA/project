import React, { useState } from "react";
import style from "./index.module.css";
import Swal from "sweetalert2";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
// import Icons Start

import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";

// import Icons End

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");
  const router = useRouter();

  function clickRegisterHandler() {
    if (
      username.length != 0 &&
      password.length != 0 &&
      confirmPassword.length != 0
    ) {
      let data = {
        username: username,
        password: password,
        confirmPassword: confirmPassword,
      };

      fetch(
        "http://62.3.41.67:8090/api/Register/registeruser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.result.succeeded) {
            // const decoded = jwt_decode(data.token);

            // window.localStorage.setItem(
            //   "token",
            //   data.token
            // );
            // window.localStorage.setItem("user", decoded.Id);
            // Cookie.set("token", data.token);
            router.push("/");

            Swal.fire({
              icon: "success",
              text: "ثبت نام شما موفقیت آمیز بود",
            });
          } else {
            Swal.fire({
              icon: "error",
              text: "مقادیر وارد شده صحیح نمیباشد!!!",
            });
          }
        });

      setUsername("");
      setPassword("");
      setConfirmPassword("");
    } else {
      Swal.fire({
        icon: "error",
        text: "لطفا تمامی موارد را وارد نمایید !!!",
      });
    }
  }

  return (
    <div className={style.register__container}>
      <div className={style.overlay}></div>
      <div className={style.register__wrappper}>
        <h3>ثبت نام</h3>
        <span>
          <AiOutlineUser />
          <input
            type="text"
            placeholder="نام کاربری :"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </span>
        <span>
          <RiLockPasswordLine />
          <input
            type="password"
            placeholder="رمز عبور :"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </span>
        <span>
          <RiLockPasswordLine />
          <input
            type="password"
            placeholder="تکرار رمز عبور :‌"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
          />
        </span>
        <button onClick={clickRegisterHandler}>
          ثبت نام
        </button>
      </div>
    </div>
  );
};

export default Index;
