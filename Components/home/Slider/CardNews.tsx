import Image from "next/image";
import React from "react";
import style from "./mySwiper.module.css"


export const CardNews = React.memo(function NewsCard() {


  return (
   <div className={style.card_slider}>
    <img   src="https://photoscissors.com/images/samples/3-before.jpg" alt=""/>
   </div>
  );
});

export default CardNews;
