import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import style from "./style.module.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const TourismMagazine = () => {
  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="next_icon">
        <button>
          <ArrowForwardIosIcon />
        </button>
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="prev_icon">
        <button>
          <ArrowBackIosIcon />
        </button>
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={style.container_tourism_magazinde}>
      <Slider {...settings}>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </Slider>
    </div>
    // <section className={style.container_tourismMagazine}>
    //     <div>
    //         <h1>
    //             مجله‌ی گردشگری شهرزاد بال
    //         </h1>
    //         <p>مجله‌ کاری | لوازم سفر | مناطق گردشگری | اخبار و رویداد‌های گردشگری</p>
    //     </div>
    //     <div className={style.container_card_tourismMagazine}>
    //       <Card/>
    //       <Card/>
    //       <Card/>
    //       <Card/>
    //     </div>
    // </section>
  );
};

export default TourismMagazine;
