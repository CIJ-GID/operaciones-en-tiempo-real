import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import img from "../assets/fuerzas/1.png";
import img2 from "../assets/fuerzas/2.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <>
      <Swiper
        slidesPerView={windowWidth > 1900 ? 6 : 4}
        spaceBetween={windowWidth > 1900 ? 15 : 30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="h-full w-full"
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

export default SwiperComponent;
