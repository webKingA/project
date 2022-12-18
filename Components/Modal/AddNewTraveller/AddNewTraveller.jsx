import React, { useState } from "react";
import style from "./AddNewTraveller.module.css";
import { useRecoilState } from "recoil";
import { ModalAddNewTraveller } from "../../../state/atoms";
import {createCustomer} from "../../../utils/createCustomer"
// mui Start

import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// mui End

// import Icons Start

import { BiUserPlus } from "react-icons/bi";
import { TiTimes } from "react-icons/ti";
import { IoInformationCircleOutline } from "react-icons/io5";

// import Icons End

import Button from "@mui/material/Button";
import {
  days,
  monthEn,
  yearsEn,
  yearPersianData,
  monthPersianData,
} from "../../../utils/data";
// import formik and yup
import { useFormik } from "formik";
import * as YUp from "yup";
import fetchClient from "../../../utils/fetchClient";
// , February, March, April, May, June, July, August, September, October, November, December.
// initialValues
const initialValues = {
  reserverMobile: "",
  name: "",
  lastName: "",
  latinFirstName: "",
  latinLastName: "",
  nationalNumber: "",
  persianDateOfBirth: "",
  passportNumber: "",
  gender: 0,
  identificationType: 0,
  age: 0,
  ageType: "",
  mobileNumber: "",
  telNumber: "",
  passportStartDate: "",
  passportExpireDate: "",
  birthDayCountryId: 0,
  passportCountryId: 0,
  miladiDatoOfBirth: "",
};

export default function AddNewTraveller() {
  const [showModalAddNewTraveller, setShowModalAddNewTraveller] =
    useRecoilState(ModalAddNewTraveller);

  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [date2, setDate2] = useState("");
  const [month2, setMonth2] = useState("");
  const [year2, setYear2] = useState("");
  const [contry, setContry] = useState("");
  const [contry2, setContry2] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [Latinname, setLatinName] = useState("");
  const [Latinlastname, setLatinLastName] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [passNumber, setPassNumber] = useState("");

  const handlePassNumber = (event) => {
    setPassNumber(event.target.value);
  };

  const handleNationalCode = (event) => {
    setNationalCode(event.target.value);
  };

  const handleLatinLastName = (event) => {
    setLatinLastName(event.target.value);
  };

  const handleLatinName = (event) => {
    setLatinName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleContry = (event) => {
    setContry(event.target.value);
  };

  const handleContry2 = (event) => {
    setContry2(event.target.value);
  };

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleChangeYear2 = (event) => {
    setYear2(event.target.value);
  };

  const handleChangeMonth2 = (event) => {
    setMonth2(event.target.value);
  };

  const handleChangeDate2 = (event) => {
    setDate2(event.target.value);
  };

  const handleChangeGender = (event) => {
    if (e.target.value == "مرد") {
      setGender(1);
    } else {
      setGender(0);
    }
  };

  // function clickSubmitHandler() {
  //   let sendData = {
  //     // reserverMobile: "string",
  //     name: `${name}`,
  //     lastName: `${lastname}`,
  //     latinFirstName: `${Latinname}`,
  //     latinLastName: `${Latinlastname}`,
  //     nationalNumber: `${nationalCode}`,
  //     persianDateOfBirth: `${year}-${month}-${date}`,
  //     // passportNumber: "string",
  //     gender: { gender },
  //     // identificationType: 0,
  //     age: { age },
  //     // ageType: "string",
  //     // mobileNumber: "string",
  //     // telNumber: "string",
  //     // passportStartDate: "2022-12-10T09:14:41.486Z",
  //     // passportExpireDate: "2022-12-10T09:14:41.486Z",
  //     // birthDayCountryId: 0,
  //     // passportCountryId: 0,
  //     miladiDatoOfBirth: `${year2}-${month2}-${date2}T09:14:41.486Z`,
  //   };

  //   fetch(
  //     "http://62.3.41.67:8090/api/CustomerPassengers/createCustomerPassengers",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //       body: JSON.stringify(sendData),
  //     }
  //   ).then((res) => console.log(res));
  // }

  const [yearPersian, setyearPersian] = useState("");
  const [monthPersian, setMonthPersian] = useState("");
  const [dayPersian, setDayPersian] = useState("");
  const [yearMiladi, setYearMiladi] = useState("");
  const [monthMiladi, setMonthMiladi] = useState("");
  const [dayMiladi, setDayMiladi] = useState("");

  const formik = useFormik({
    initialValues,
    onSubmit:async (values) => {
      const data = {
        ...values,
        persianDateOfBirth: `${yearPersian}-${monthPersian}-${dayPersian}`,
        passportExpireDate: `${yearMiladi}-${monthMiladi}-${dayMiladi}`,
      };

      await createCustomer(data)
      setShowModalAddNewTraveller(false)
    },
  });
  return (
    <section className={style.section2}>
      <div>
        <div>
          <span>
            <BiUserPlus />
            افزودن مسافر جدید
          </span>
          <span>
            <TiTimes
              onClick={() => {
                setShowModalAddNewTraveller(false);
              }}
            />
          </span>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <span>اطلاعات عمومی</span>
            <span>
              <IoInformationCircleOutline />
              اطلاعات مسافران باید کاملا منطبق با مدارک شناسایی‌ باشد.
            </span>
          </div>
          <section className={style.Section1}>
            <div>
              <span>
                <TextField
                  id="outlined-basic"
                  label="نام فارسی (الزامی)"
                  variant="outlined"
                  style={{ width: "100%" }}
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </span>
              <span>
                <TextField
                  id="outlined-basic"
                  label="نام خانوادگی فارسی (الزامی)"
                  variant="outlined"
                  style={{ width: "100%" }}
                  name="lastName"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
              </span>
              <span>
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                  style={{
                    width: "100%",
                    fontFamily: "k",
                    fontSize: "14px",
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">روز</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Age"
                      value={dayPersian}
                      onChange={(e) => setDayPersian(e.target.value)}
                    >
                      {days.map((day) => {
                        <MenuItem value={day.id}>{day.name}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">ماه</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Age"
                      value={monthPersian}
                      onChange={(e) => setMonthPersian(e.target.value)}
                    >
                      {monthPersianData.map((month) => {
                        <MenuItem value={month.id}>{month.name}</MenuItem>;
                      })}
                      <MenuItem value={2}>اردیبهشت</MenuItem>
                      <MenuItem value={3}>خرداد</MenuItem>
                      <MenuItem value={4}>تیر</MenuItem>
                      <MenuItem value={5}>مرداد</MenuItem>
                      <MenuItem value={6}>شهریور</MenuItem>
                      <MenuItem value={7}>مهر</MenuItem>
                      <MenuItem value={8}>آبان</MenuItem>
                      <MenuItem value={9}>آذر</MenuItem>
                      <MenuItem value={10}>دی</MenuItem>
                      <MenuItem value={11}>بهمن</MenuItem>
                      <MenuItem value={12}>اسفند</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">سال</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Age"
                      value={yearPersian}
                      onChange={(e) => setyearPersian(e.target.value)}
                    >
                      {yearPersianData.map((year) => {
                        <MenuItem value={year}>{year}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </ButtonGroup>
              </span>
            </div>
            <div>
              <span>
                <TextField
                  id="outlined-basic"
                  label="نام لاتین (الزامی)"
                  variant="outlined"
                  style={{ width: "100%" }}
                  name="latinFirstName"
                  onChange={formik.handleChange}
                  value={formik.values.latinFirstName}
                />
              </span>
              <span>
                <TextField
                  id="outlined-basic"
                  label="نام خانوادگی لاتین (الزامی)"
                  variant="outlined"
                  style={{ width: "100%" }}
                  name="latinLastName"
                  onChange={formik.handleChange}
                  value={formik.values.latinLastName}
                />
              </span>
              <span>
                <FormControl
                  sx={{ m: 1, minWidth: 120 }}
                  style={{ width: "100%" }}
                >
                  <Select
                    displayEmpty
                    inputProps={{
                      "aria-label": "Without label",
                    }}
                    style={{ width: "100%" }}
                    name="gender"
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                  >
                    <MenuItem value={0} style={{ width: "100%" }}>
                      <em>مرد</em>
                    </MenuItem>
                    <MenuItem value={1} style={{ width: "100%" }}>
                      زن
                    </MenuItem>
                  </Select>
                </FormControl>
              </span>
            </div>
          </section>
          <div className={style.section3}>
            <p>کد ملی</p>
            <small>
              کد ملی برای مسافرین ایرانی که قصد سفرهای داخل ایران را دارند مورد
              نیاز است.
            </small>
            <TextField
              id="outlined-basic"
              label="کد ملی"
              variant="outlined"
              style={{ width: "100%" }}
              name="nationalNumber"
              onChange={formik.handleChange}
              value={formik.values.nationalNumber}
            />
          </div>
          <div className={style.section4}>
            <p>اطلاعات پاسپورت</p>
            <small>
              اطلاعات پاسپورت برای مسافرین ایرانی که قصد سفر های خارجی را دارند
              و همچنین مسافرین غیرایرانی که قصد استفاده از هر نوع خدماتی را
              داشته باشند مورد نیاز است.
            </small>
            <section className={style.Section1}>
              <div>
                <span>
                  <TextField
                    id="outlined-basic"
                    label="شماره پاسپورت"
                    variant="outlined"
                    style={{ width: "100%" }}
                    name="passportNumber"
                    onChange={formik.handleChange}
                    value={formik.values.passportNumber}
                  />
                </span>
                <span>
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                    style={{
                      width: "100%",
                      fontFamily: "k",
                      fontSize: "14px",
                    }}
                  >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">روز</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        value={dayMiladi}
                        onChange={(e) => setDayMiladi(e.target.value)}
                      >
                        {days.map((day) => {
                          <MenuItem value={day.id}>{day.name}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">ماه</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        value={monthMiladi}
                        onChange={(e) => setMonthMiladi(e.target.value)}
                      >
                        {monthEn.map((month) => {
                          <MenuItem value={month.id}>{month.name}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">سال</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        value={yearMiladi}
                        onChange={(e) => setYearMiladi(e.target.value)}
                      >
                        {yearsEn.map((year) => {
                          <MenuItem value={year}>{year}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>
                  </ButtonGroup>
                </span>
                <span>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      کشور صادر کننده پاسپورت
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="کشور صادر کننده پاسپورت"
                      name="passportCountryId"
                      onChange={formik.handleChange}
                      value={formik.values.passportCountryId}
                    >
                      <MenuItem value={1}>ایران</MenuItem>
                      <MenuItem value={2}>ترکیه</MenuItem>
                      <MenuItem value={3}>عراق</MenuItem>
                    </Select>
                  </FormControl>
                </span>
              </div>
              <div>
                <span>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      کشور صادر کننده پاسپورت
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="کشور صادر کننده پاسپورت"
                      name="age"
                      onChange={formik.handleChange}
                      value={formik.values.age}
                    >
                      <MenuItem value={18}>18</MenuItem>
                      <MenuItem value={19}>19</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                    </Select>
                  </FormControl>
                </span>
              </div>
            </section>
          </div>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "end",
              width: "100%",
              backgroundColor: "rgba(52, 152, 219,.1)",
              padding: "1rem 0",
            }}
          >
            <Button
              variant="outlined"
              style={{
                width: "12rem",
                padding: "12px",
                fontFamily: "k",
                fontSize: "16px",
                borderRadius: "10px",
              }}
              onClick={() => {
                setShowModalAddNewTraveller(false);
              }}
            >
              انصراف
            </Button>
            <Button
              type="submit"
              variant="contained"
              style={{
                width: "12rem",
                padding: "12px",
                fontFamily: "k",
                fontSize: "16px",
                borderRadius: "10px",
                marginLeft: "1rem",
              }}
            >
              تایید
            </Button>
          </div>
        </form>
      </div>
      <div
        onClick={() => {
          setShowModalAddNewTraveller(false);
        }}
      ></div>
    </section>
  );
}
