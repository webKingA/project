import React, { useEffect, useState } from "react";
import style from "./PartOne.module.css";
import Input from "./../../input/Input";
// import mui Start

import Button from "@mui/material/Button";
import Slider from "./Slider";
import Image from "next/image";
import { flyItems } from "../../../utils/data";

// import mui End

const PartOne = () => {
  const [selected, setSelected] = useState({
    id: 0,
    name: "fly",
    label: "پرواز",
  });
  return (
    <section className={style.container_partOne}>
      <Slider />
      <div className={style.container_form}>
        <div>
          <div>
            <h1>سفر خود را جستجو کنید...</h1>
            <div className={style.tabs_fly}>
              {flyItems.map((i) => (
                <button
                  onClick={() => setSelected(i)}
                  className={`${
                    selected.id === i.id ? style.active : ""
                  }`}
                  key={i.id}
                >
                  <span>{i.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartOne;
