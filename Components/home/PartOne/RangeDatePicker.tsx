import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import style from "./PartOne.module.css";
import {
  _FormatDateFa,
  _GregorianLocal,
  _PersianLocal,
} from "../../../utils/constants/dateConstants";
import {
  todayEnDate,
  todayFaDate,
} from "../../../utils/dateUtils";
interface Props {
  placeholder: string;
  value: any;
  setValue: any;
  range: any;
  inputOnActiveReturningDate: any;
  onOpenDatePicker: any;
}
const RangeDatePicker = ({
  placeholder,
  value,
  setValue,
  range,
  inputOnActiveReturningDate = undefined,
  onOpenDatePicker,
}: Props) => {
  const [shouldCloseCalendar, setShouldCloseCalendar] =
    useState(false);
  const [dateType, setDateType] = useState("persian");
  const ref = useRef<
    | (HTMLInputElement & {
        closeCalendar: () => void;
        openCalendar: () => void;
        isOpen: boolean;
      })
    | null
  >();
  const handleClickOutside = (e: any) => {
    const target = e.target as HTMLElement;

    if (!ref.current?.isOpen) return;

    if (target.classList.contains("js-date-input")) return;

    // privent close datepicker when click on input element
    if (
      target.closest(".js-date-range-picker") &&
      !target.classList.contains("btn-close-calendar")
    )
      return;

    setShouldCloseCalendar(true);

    setTimeout(() => {
      ref.current?.closeCalendar();
      setShouldCloseCalendar(false);
    }, 10);
  };

  	// Event For handleClickOutside
	useEffect(() => {
		window.addEventListener('click', handleClickOutside);

		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	}, []);
  return (
    <div>
      <DatePicker
        render={
          <Inputs
            dateType={dateType}
            type={range}
            value={value}
            onActiveReturningDate={() => {
              if (
                !inputOnActiveReturningDate ||
                typeof inputOnActiveReturningDate !==
                  "function"
              )
                return;

              inputOnActiveReturningDate();
            }}
          />
        }
        buttons={true}
        numberOfMonths={2}
        showOtherDays
        locale={persian_fa}
        ref={ref}
        format={
          dateType === "persian"
            ? _FormatDateFa
            : _FormatDateFa
        }
        calendar={persian}
        minDate={
          dateType === "persian"
            ? todayFaDate()
            : todayEnDate()
        }
        range={range === "twoway"}
        onChange={setValue}
        onClose={() => {
          ref.current?.classList.remove("open");

          return shouldCloseCalendar;
        }}
        onOpen={() => {
          if (
            onOpenDatePicker &&
            onOpenDatePicker instanceof Function
          ) {
            onOpenDatePicker(ref.current as HTMLElement);
          }

          ref.current?.classList.add("open");
        }}
        calendarPosition="bottom-center"
        fixMainPosition
        disableYearPicker
        disableMonthPicker
        hideYear
      />
    </div>
  );
};

export default RangeDatePicker;

const Inputs = ({
  value,
  dateType,
  onActiveReturningDate,
  type,
  ...other
}: any) => {
  const from = value[0] || "";
  const to = value[1] || "";

  const { openCalendar } = other as any;

  const inputPlaceHolder_departing =
    dateType === "persian" ? "رفت" : "Departing";
  const inputPlaceHolder_returning =
    dateType === "persian" ? "برگشت" : "Returning";
  return (
    <div className="flex">
      <input
        name="departing"
        onFocus={openCalendar}
        value={type === "oneway" ? value : from}
        placeholder={inputPlaceHolder_departing}
        readOnly
      />
      {/* <input readOnly className="!w-[200px] bg-red-500"/> */}
      <input
        name="returning"
        onFocus={openCalendar}
        value={to}
        placeholder={inputPlaceHolder_returning}
        readOnly
      />
    </div>
  );
};
