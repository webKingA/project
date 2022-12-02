import React, { useState } from "react";
import ReactSlick from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import style from "./mySwiper.module.css";
const slides = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
];
export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <section className={style.slider}>
      <ReactSlick {...settings}>
        {slides.map((i, index) => (
          <div className={style.slide_items} key={index}>
            <img src={i} />
          </div>
        ))}
      </ReactSlick>
    </section>
  );
};
