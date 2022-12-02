import React from "react";
import style from "./BestTour.module.css";
import Image1 from "../../../public/images/home/kuala-lumpur.jpg";
import Image from "next/image";
const Card = () => {
  return (
    <div>
      <div className={style.card}>
        <Image fill className={style.image_card} src={Image1} alt="" />
        <p className={style.desc_card}>
            <span>تور تفریحی</span>
            <span>شش روز و پنج شب</span>
        </p>
        <span className={style.robon}>۱۵%</span>
      </div>
      <div className={style.info_card}>
        <div>
        <p>استامبول</p>
        <p>۲,۹۰۰,۰۰۰</p>
        </div>
        <p>عضویت در باشگاه مشتریان و ۱۰% تخفیف</p>
      </div>
    </div>
  );
};

export default Card;
