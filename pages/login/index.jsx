import React, { useState } from "react";
import style from "./index.module.css";
import Swal from "sweetalert2";
import Cookie from "js-cookie";
// import Icons Start

import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

// import Icons End

// decode
import jwt_decode from "jwt-decode";
import Router from "next/router";

const Index = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function clickLoginHandler() {
    if (userName.length != 0 && password.length != 0) {
      let data = {
        username: userName,
        password: password,
        rememberMe: true,
      };

      fetch("http://62.3.41.67:8090/api/v1/Login/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.isSuccess == true) {
            const decoded = jwt_decode(data.token);

            window.localStorage.setItem(
              "token",
              data.token
            );
            window.localStorage.setItem("user", decoded.Id);
            Cookie.set("token", data.token);
            Router.push("/");
            // data.access.some((item) => {
            //   if (item == "Admin") {
            //     window.location = "/profile-admin";
            //     window.localStorage.setItem(
            //       "isAdmin",
            //       true
            //     );
            //   } else {
            //     window.location = "/profile";
            //     window.localStorage.setItem(
            //       "isAdmin",
            //       false
            //     );
            //   }
            // });
          } else {
            Swal.fire({
              icon: "error",
              text: "نام کاربری یا کلمه عبور وارد شده صحیح نمیباشد!!!",
            });
          }
        });

      setUserName("");
      setPassword("");
    } else {
      Swal.fire({
        icon: "error",
        text: "برای لاگین نیاز است نام کاربری و کلمه عبور خود را وارد کنید!!!!",
      });
    }
  }

  return (
    <div className={style.login__container}>
      <div className={style.overlay}></div>
      <div className={style.login__wrappper}>
        <h3>ورود</h3>
        <span>
          <AiOutlineUser />
          <input
            type="text"
            placeholder="نام کاربری :"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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
        <button onClick={clickLoginHandler}>ورود</button>
      </div>
    </div>
  );
};

export default Index;
