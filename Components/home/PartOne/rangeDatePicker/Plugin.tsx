import { DateObject } from "react-multi-date-picker";

import { Button } from "@mantine/core";

import classNames from "classnames";

function getLocaleName(locale: any) {
  if (!locale || !locale.name) return "";

  return locale.name.split("_")[1];
}

const allNames: any = {
  en: {
    from: "Departure",
    to: "Return",
    confirm: "Confirm",
    close: "Close",
    today: "Today's date",
    solar: "Solar",
    gregorian: "Gregorian",
  },
  fa: {
    from: "رفت",
    to: "برگشت",
    confirm: "تایید",
    close: "بستن",
    today: "تاریخ امروز",
    solar: "شمسی",
    gregorian: "میلادی",
  },
};

const Footer = ({ state, position, closeFun }: any) => {
  const direction: String = ["fa", "ar"].includes(
    getLocaleName(state.date.locale)
  )
    ? "rtl"
    : "ltr";
  const format: String =
    direction === "rtl" ? "DD MMMM" : "DD MMM.";

  const {
    selectedDate,
    date: { locale },
    range,
  } = state;

  let from,
    to = undefined;

  if (range) {
    from = selectedDate[0]?.format?.(format);
    to = selectedDate[1]?.format?.(format);
  } else {
    from = selectedDate?.format?.(format);
    to = undefined;
  }

  const isFaOrEn: string = getLocaleName(locale);
  const localeNames = allNames[isFaOrEn] || allNames.fa;

  return (
    <footer
      className={`range-picker__footer ${direction} ${position}`}
    >
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex font-yekan-bold text-xs text-gray-500">
          {to && (
            <>
             
              <p className="px-1">{localeNames.to}</p>
              <p>{to}</p>
            </>
          )}

          {from && (
            <>
			 <p className="px-1">-</p>
              <p className="px-1">{localeNames.from}</p>
              <p>{from}</p>
			  
            </>
          )}
        </div>
        <button
          className="bg-blue-500 text-white font-yekan-medium text-xs px-4 py-2 rounded-lg"
          onClick={() => closeFun()}
        >
          {(range && selectedDate.length === 2) ||
          (!range && from)
            ? localeNames.confirm
            : localeNames.close}
        </button>
      </div>
    </footer>
  );
};

const Header = ({
  state,
  handleChange,
  position,
  handleFocusedDate,
  DatePicker,
  dateType,
  setDateType,
  handlePropsChange,
}: any) => {
  const direction: String = ["fa", "ar"].includes(
    getLocaleName(state.date.locale)
  )
    ? "rtl"
    : "ltr";
  const {
    range,
    date: { locale },
  } = state;
  const isFaOrEn: string = getLocaleName(locale);
  const localeNames = allNames[isFaOrEn] || allNames.fa;

  function selectToday() {
    let { calendar, format, selectedDate } = state,
      today = new DateObject({ calendar, locale, format });

    if (range) {
      if (!selectedDate) selectedDate = [];

      if (selectedDate.length === 0) {
        selectedDate.push(today);
      } else if (selectedDate.length === 2) {
        selectedDate = [today];
      } else if (selectedDate.length === 1) {
        selectedDate.push(today);
        selectedDate.sort((a: number, b: number) => a - b);
      }
    } else {
      selectedDate = today;
    }

    handleChange(selectedDate, { ...state, selectedDate });
    handleFocusedDate(today);
  }

  const handleChangeDateType = (type: string) => {
    let { calendar, format, selectedDate } = state,
      today = new DateObject({ calendar, locale, format });

    handleChange(selectedDate, { ...state, selectedDate });
    handleFocusedDate(today);
    setDateType(type);
  };

  return (
    <header
      className={`range-picker__header ${direction} ${position}`}
    >
      <div className="flex justify-between items-center !py-4 px-3">
        <div className="flex gap-3">
          <button
            onClick={() => handleChangeDateType("persian")}
            className={`font-yekan-medium text-xs ${
              dateType === "persian"
                ? "bg-blue-600 text-white  px-3 py-2 rounded-lg"
                : ""
            }`}
          >
            {localeNames.solar}
          </button>

          <button
            onClick={() =>
              handleChangeDateType("gregorian")
            }
            className={`font-yekan-medium text-xs ${
              dateType === "gregorian"
                ? "bg-blue-600 text-white  px-3 py-2 rounded-lg"
                : ""
            }`}
          >
            {localeNames.gregorian}
          </button>
        </div>

        <button
          className="font-yekan-medium text-xs bg-blue-600 text-white  px-3 py-2 rounded-lg"
          onClick={selectToday}
        >
          {localeNames.today}
        </button>
      </div>
    </header>
  );
};

export { Footer, Header };
