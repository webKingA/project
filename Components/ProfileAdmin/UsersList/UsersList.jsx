import React, { useState } from "react";
import style from "./UsersList.module.css";

import Button from "@mui/material/Button";

import { AiOutlinePlus } from "react-icons/ai";
import { FaTimesCircle } from "react-icons/fa";

const UsersList = () => {
  const [showAdvanceSearch, setShowAdvanceSearch] = useState(false);
  const [addNewUser, setAddNewUser] = useState(false);
  const [advanceSearchInputValue, setAdvanceSearchInputValue] = useState("");
  const [addUserName, setAddUserName] = useState("");
  const [addUserFamily, setAddUserFamily] = useState("");
  const [addUserUsername, setAddUserUsername] = useState("");
  const [addUserPassword, setAddUserPassword] = useState("");
  const [addUserRepeatPassword, setAddUserRepeatPassword] = useState("");
  const [addUserEmail, setAddUserEmail] = useState("");
  const [addUserPhone, setAddUserPhone] = useState("");

  return (
    <div className={style.userslist__container}>
      <span>لیست کاربران</span>
      <span>
        <Button
          variant="outlined"
          style={{
            padding: "5px 15px",
            fontFamily: "v",
            fontSize: "16px",
          }}
          onClick={() => {
            setShowAdvanceSearch(true);
          }}
        >
          جستجوی پیشرفته
        </Button>
        <Button
          variant="contained"
          startIcon={<AiOutlinePlus />}
          style={{
            padding: "5px 15px",
            backgroundColor: "#654fef",
            fontFamily: "v",
            fontSize: "16px",
            display: "flex",
            gap: "10px",
          }}
          onClick={() => {
            setAddNewUser(true);
          }}
        >
          کاربر جدید
        </Button>
      </span>
      {showAdvanceSearch && (
        <div className={style.advancesearch}>
          <div>
            <div>
              <small>متن جستجو</small>
              <input
                type="text"
                placeholder="متن مورد نظر را وارد نمایید : "
                value={advanceSearchInputValue}
                onChange={(e) => setAdvanceSearchInputValue(e.target.value)}
              />
            </div>
            <div></div>
            <div>
              <Button
                variant="text"
                style={{ padding: "10px", fontSize: "16px", fontFamily: "v" }}
                onClick={() => {
                  setShowAdvanceSearch(false);
                }}
              >
                انصراف
              </Button>
              <Button
                variant="contained"
                style={{
                  padding: "5px 15px",
                  backgroundColor: "#654fef",
                  fontSize: "16px",
                  fontFamily: "v",
                }}
              >
                جستجو
              </Button>
            </div>
          </div>
          <div
            onClick={() => {
              setShowAdvanceSearch(false);
            }}
          ></div>
        </div>
      )}
      {addNewUser && (
        <div className={style.addnewuser}>
          <div>
            <div>
              <span>افزودن کاربر جدید</span>
              <span>
                <FaTimesCircle onClick={() => setAddNewUser(false)} />
              </span>
            </div>
            <div>
              <small>نام</small>
              <input
                type="text"
                placeholder="نام خود را وارد کنید"
                value={addUserName}
                onChange={(e) => setAddUserName(e.target.value)}
              />
            </div>
            <div>
              <small>نام خانوادگی</small>
              <input
                type="text"
                placeholder="نام خانوادگی خود را وارد کنید"
                value={addUserFamily}
                onChange={(e) => setAddUserFamily(e.target.value)}
              />
            </div>
            <div>
              <small>نام کاربری</small>
              <input
                type="text"
                placeholder="نام کاربری خود را وارد کنید"
                value={addUserUsername}
                onChange={(e) => setAddUserUsername(e.target.value)}
              />
            </div>
            <div>
              <span>
                <small>پسورد</small>
                <input
                  type="text"
                  placeholder="رمز عبور خود را وارد کنید"
                  value={addUserPassword}
                  onChange={(e) => setAddUserPassword(e.target.value)}
                />
              </span>
              <span>
                <small>تکرار پسورد</small>
                <input
                  type="text"
                  placeholder="رمز عبور خود را مجدد وارد نمایید"
                  value={addUserRepeatPassword}
                  onChange={(e) => setAddUserRepeatPassword(e.target.value)}
                />
              </span>
            </div>
            <div>
              <span>
                <small>ایمیل</small>
                <input
                  type="text"
                  placeholder="ایمیل خود را وارد کنید"
                  value={addUserEmail}
                  onChange={(e) => setAddUserEmail(e.target.value)}
                />
              </span>
              <span>
                <small>شماره تلفن</small>
                <input
                  type="text"
                  placeholder="شماره تلفن خود را وارد کنید"
                  value={addUserPhone}
                  onChange={(e) => setAddUserPhone(e.target.value)}
                />
              </span>
            </div>
            <div>
              <Button
                variant="text"
                style={{ padding: "10px", fontFamily: "v", fontSize: "16px" }}
              >
                ارسال
              </Button>
              <Button
                variant="contained"
                style={{
                  padding: "5px 15px",
                  backgroundColor: "#654fef",
                  fontFamily: "v",
                  fontSize: "16px",
                }}
                onClick={() => setAddNewUser(false)}
              >
                انصراف
              </Button>
            </div>
          </div>
          <div onClick={() => setAddNewUser(false)}></div>
        </div>
      )}
    </div>
  );
};

export default UsersList;
