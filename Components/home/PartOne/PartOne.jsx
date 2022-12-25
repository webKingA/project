import React, { useEffect, useState } from "react";
import style from "./PartOne.module.css";
import Slider from "./Slider";
import { flyItems } from "../../../utils/data";
import SelectList from "./SelectList";
import { RiArrowLeftRightLine } from "react-icons/ri";
import CountPerson from "./CountPerson";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import RangeDatePicker from "./rangeDatePicker/RangeDatePicker";
import FlightDatePicker from "./flightDatePicker";

const PartOne = ({ cities }) => {
  const [selected, setSelected] = useState({
    id: 0,
    name: "fly",
    label: "پرواز",
  });
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [dropdownState, setDropdownState] =
    useState(undefined);
  const [flightRoute, setFlightRoute] = useState([
    {
      label: "یک طرفه",
      value: "oneway",
    },
    {
      label: "دو طرفه",
      value: "twoway",
    },
  ]);

  const [datePicker, setDatePicker] = useState({
    originDate: null,
    destinationDate: null,
  });
  const [value, setValue] = useState(null);
  const [count, setCount] = useState({
    adultL: 1,
    child: 0,
    baby: 0,
  });

  const router = useRouter();

  const arrowLeftRightLine = () => {
    setOrigin(destination);
    setDestination(origin);
  };
  const search = () => {
    if (selected.name === "fly") {
      if (!origin || !destination || !count.adultL) {
        return Swal.fire({
          icon: "error",
          text: "لطفا فیلد های مربوط را پر کنید، تا بتواینم بهتر کمکتان کنیم",
        });
      }
    }

    const { destinationDate, originDate } = datePicker;
    const originD = new DateObject(originDate)
      .convert(persian, persian_en)
      .format();
    const destinationD = new DateObject(destinationDate)
      .convert(persian, persian_en)
      .format();

    if (selected.name === "fly") {
      router.push({
        pathname: "/flight",
        query: {
          origin: origin.id,
          destination: destination.id,
          adultL: count.adultL,
          child: count.child,
          baby: count.baby,
          originD,
          destinationD,
          selected: selected.name,
        },
      });
    }
    if (selected.name === "hotel") {
      router.push({
        pathname: "/hotel",
        originD,
        destinationD,
        adultL: count.adultL,
        child: count.child,
        baby: count.baby,
      });
    }
  };
  return (
    <section className={style.container_partOne}>
      <Slider />
      <div className={style.container_form}>
        <div>
          {/* seelct and search */}
          <div>
            <div>
              <h1>سفر خود را جستجو کنید...</h1>
              <div className={style.tabs_fly}>
                {flyItems.map((i) => (
                  <button
                    onClick={() => setSelected(i)}
                    className={`${
                      selected.id === i.id
                        ? style.active
                        : ""
                    }`}
                    key={i.id}
                  >
                    <span>{i.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* seslct */}
          <div className={style.container_selelct}>
            {/* Origin and destination */}
            <div className={style.Origin_destination}>
              {selected.name !== "hotel" && (
                <>
                  <SelectList
                    placeholder="مبدا"
                    value={origin}
                    setValue={setOrigin}
                    cities={cities}
                  />
                  <div
                    onClick={arrowLeftRightLine}
                    className={style.leftRightLine}
                  >
                    <RiArrowLeftRightLine size={20} />
                  </div>
                  <SelectList
                    placeholder="مقصد"
                    value={destination}
                    setValue={setDestination}
                    cities={cities}
                  />
                </>
              )}
            </div>
            <div className={style.range_date_container}>
              <FlightDatePicker/>
              {/* <RangeDatePicker
                value={datePicker.destinationDate}
                setValue={(value) =>
                  setDatePicker({
                    ...datePicker,
                    destinationDate: value,
                  })
                }
                placeholder="تاریخ برگشت"
              /> */}
            </div>
            <CountPerson
              count={count}
              setCount={setCount}
            />
            <button
              onClick={search}
              className={style.btn_search}
            >
              جستجو
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartOne;
