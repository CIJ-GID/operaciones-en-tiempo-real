import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import img from "../assets/fuerzas/1.png";
import img2 from "../assets/fuerzas/2.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const SwiperComponent = () => {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="h-full w-full"
        breakpoints={{
          1900: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        <SwiperSlide className="swiperSlide">
          <img src={img} className="w-[100%] 2xl:h-full  2xl:w-auto" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img2} className="w-[100%] 2xl:h-full  2xl:w-auto" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img} className="w-[100%] 2xl:h-full  2xl:w-auto" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img2} className="w-[100%] 2xl:h-full  2xl:w-auto" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img} className="w-[100%] 2xl:h-full  2xl:w-auto" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img2} className="w-[100%] 2xl:h-full  2xl:w-auto" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img} className="w-[100%] 2xl:h-full  2xl:w-auto" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img2} className="w-[100%] 2xl:h-full  2xl:w-auto" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img} className="w-[100%] 2xl:h-full  2xl:w-auto" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img2} className="w-[100%] 2xl:h-full  2xl:w-auto" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img} className="w-[100%] 2xl:h-full  2xl:w-auto" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src={img2} className="w-[100%] 2xl:h-full  2xl:w-auto" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
