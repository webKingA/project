import React, { useState } from "react";
import style from "./BestTour.module.css";
import Card from "./Card";
// import Icons Start

import Header from "./Header";

// import Icons End

const BestTour = () => {
  return (
    <section className={style.container_bestTour}>
      <Header />
      <div className={style.container_card}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
       
      </div>
    </section>
  );
};

export default BestTour;
