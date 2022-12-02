import React, { useEffect, useState } from "react";
import style from "./PartOne.module.css";
import Slider from "./Slider";
import { flyItems } from "../../../utils/data";
import SelectList from "./SelectList";
import { RiArrowLeftRightLine } from "react-icons/ri";
import RangeDatePicker from "./RangeDatePicker";


const PartOne = () => {
  const [selected, setSelected] = useState({
    id: 0,
    name: "fly",
    label: "پرواز",
  });
  const [origin,setOrigin] = useState(null)
  const [destination,setDestination] = useState(null)
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
              <SelectList placeholder="مبدا" value={origin} setValue={setOrigin}/>
              <div className={style.leftRightLine}>
                <RiArrowLeftRightLine size={20} />
              </div>
              <SelectList placeholder="مقصد" value={destination} setValue={setDestination} />
            </div>
            <div className={style.range_date_container}>
              <RangeDatePicker placeholder="تاریخ رفت"  />
              <RangeDatePicker placeholder="تاریخ برگشت" />
            </div>
            <button className={style.btn_search}>جستجو</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartOne;
