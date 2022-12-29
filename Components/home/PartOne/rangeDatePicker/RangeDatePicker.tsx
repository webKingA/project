import { memo, useEffect, useRef, useState } from "react";
import gregorian from "react-date-object/calendars/gregorian";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";

import { Tooltip } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import Inputs from "./Inputs";
import { Footer, Header } from "./Plugin";
import {
  _FormatDateFa,
  _GregorianLocal,
  _PersianLocal,
} from "../../../../utils/constants/dateConstants";
import {
  todayEnDate,
  todayFaDate,
} from "../../../../utils/dateUtils";

interface IDatePicker {
  value: any;
  setValue: (val: any) => void;
  setRef: (ref: any) => void;
  onOpenDatePicker?: (elem: HTMLElement) => void;
  range: "oneway" | "twoway"; // متوجه می شیم که مسیر یکطرفه هست یا دو طرفه
  inputOnActiveReturningDate?: () => void; // برای فعال سازی فیلد برگشت استفاده می شه
  onAfterCloseDatePicker?: () => void;
}

const RangeDatePicker = ({
  value,
  setValue,
  onOpenDatePicker,
  setRef,
  range,
  inputOnActiveReturningDate = undefined,
  onAfterCloseDatePicker,
}: IDatePicker) => {
  const smScreen = useMediaQuery("(max-width: 768px)");
  const [dateType, setDateType] = useState<any>("persian");
  const [shouldCloseCalendar, setShouldCloseCalendar] =
    useState(false);

  const ref = useRef<
    | (HTMLInputElement & {
        closeCalendar: () => void;
        openCalendar: () => void;
        isOpen: boolean;
      })
    | null
  >();

  /**
   * @description
   * اینپوت تاریخ رو توی استیت ذخیره می کنیم
   * برای باز و بسته کردن داینامیک
   */
  useEffect(() => {
    setRef(ref.current as HTMLElement);
  }, [ref]);

  /**
   * @description
   * رفع مشکل باگ تغییر رنج
   * وقتی حالت برگشت فعال باشد و کاربر تاریخ رفت و برگشت را هم انتخاب کرده باشد
   * اگر رنچ را به یکطرفه تغییر دهد، تاریخ رفت و برگشت در فیلد تاریخ رفت تنظیم می‌شود
   * که در این صورت ما مقدار تاریخ را ریست می کنیم
   * تا از این باگ جلوگیری کنیم
   */
  // useEffect(() => {
  // 	if (!value || !Array.isArray(value)) return;
  // 	if (value.length !== 2) return;

  // 	setValue(null);
  // }, [range]);

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
    // window.addEventListener('click', handleClickOutside);
    // return () => {
    // 	window.removeEventListener('click', handleClickOutside);
    // };
  }, []);

  return (
    <>
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
        mapDays={({ date, selectedDate }) => {
          if (smScreen) return;
          let TooltipText = "";

          if (
            Array.isArray(selectedDate) &&
            selectedDate.length === 1
          ) {
            TooltipText = "تاریخ برگشت";
          } else {
            TooltipText = "تاریخ رفت";
          }

          return {
            children: (
              <Tooltip
                label={TooltipText}
                withArrow
                arrowSize={4}
                position="top"
                // placement="center"
                transition="pop"
                transitionDuration={150}
              >
                <p>{date.format("D")}</p>
              </Tooltip>
            ),
          };
        }}
        value={value}
        ref={ref}
        format={
          dateType === "persian"
            ? _FormatDateFa
            : _FormatDateFa
        }
        calendar={
          dateType === "persian" ? persian : gregorian
        }
        locale={
          dateType === "persian"
            ? persian_fa
            : _GregorianLocal
        }
        minDate={
          dateType === "persian"
            ? todayFaDate()
            : todayEnDate()
        }
        range={range === "twoway"}
        numberOfMonths={smScreen ? 1 : 2}
        className={`datepicker ${
          smScreen ? "mobile-mode" : ""
        }`}
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
        plugins={[
          <Header
            position="top"
            dateType={dateType}
            setDateType={setDateType}
            key="header"
          />,
          <Footer
            position="bottom"
            key="footer"
            closeFun={() => {
              setShouldCloseCalendar(true);

              setTimeout(() => {
                ref.current?.closeCalendar();
                setShouldCloseCalendar(false);

                if (
                  onAfterCloseDatePicker &&
                  onAfterCloseDatePicker instanceof Function
                ) {
                  onAfterCloseDatePicker();
                }
              }, 10);
            }}
          />,
        ]}
        offsetY={-4}
      />
    </>
  );
};

export default memo(RangeDatePicker);
