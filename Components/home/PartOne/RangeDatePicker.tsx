import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import style from "./PartOne.module.css";
interface Props{
  placeholder:string
}
const RangeDatePicker = ({placeholder}:Props) => {
  return (
    <div>
      <DatePicker
        style={{
          backgroundColor: "aliceblue",
          height: "24px",
          borderRadius: "8px",
          fontSize: "14px",
          padding: "3px 10px",
          fontFamily:"v"
        }}
        buttons={true}
        disableMonthPicker
        disableYearPicker
        calendar={persian}
        locale={persian_fa}
        className={`${style.range_date_picker}`}
      placeholder={placeholder}
      />
    </div>
  );
};

export default RangeDatePicker;
