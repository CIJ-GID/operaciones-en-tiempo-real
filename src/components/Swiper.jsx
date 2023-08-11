import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import img from "../assets/fuerzas/1.png";
import img2 from "../assets/fuerzas/2.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperComponent = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="h-full w-full"
      >
        <SwiperSlide className="swiperSlide">
          <img src={img} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img2} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img2} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img2} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img2} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img2} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img} height={"100%"} />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img2} height={"100%"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperComponent;
