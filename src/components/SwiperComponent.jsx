import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { images } from "../assets/fuerzas";

export const SwiperComponent = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      className="h-full w-full"
      breakpoints={{
        1900: {
          slidesPerView: 6,
          spaceBetween: 15,
        },
      }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} className="swiperSlide">
          <img src={img} className="h-auto w-full" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
