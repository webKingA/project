import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow } from "swiper";
import style from "./mySwiper.module.css";
import Image from "next/image";
export const Slider = () => {
  return (
    <div className={style.mySwiper}>
      this is test
    </div>
  );
};
