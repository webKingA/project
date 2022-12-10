import React, { useState } from "react";
import style from "./BestTour.module.css";
import Card from "./Card";
// import Icons Start

import CountPerson from "./CountPerson";

// import Icons End

const BestTour = () => {
  return (
    <section className={style.container_bestTour}>
      <CountPerson />
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
