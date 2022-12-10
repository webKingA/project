import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Image1 from "../../../public/images/home/architecture.jpg";
import Image2 from "../../../public/images/home/kuala-lumpur.jpg";
import Image3 from "../../../public/images/home/prague.jpg";
import Image from "next/image";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <Swiper
      dir="rtl"
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      // modules={[Autoplay]}
      style={{ width: "100%", height: "100%" }}
    >
      <SwiperSlide>
        <Image fill src={Image1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image fill src={Image2} alt="" />
      </SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <Image fill src={Image3} alt="" />
    </Swiper>
  );
};

export default Slider;