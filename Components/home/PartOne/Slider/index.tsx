import React from "react";
import Swiper from "react-id-swiper";
import "../../../node_modules/swiper/css/swiper.css";

interface Props {
  settings: any;
  children: React.ReactNode;
}
const Slider = ({ settings, children }: Props) => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    ...settings,
  };
  return <Swiper {...params}>{children}</Swiper>;
};

export default Slider;
