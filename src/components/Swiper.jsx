import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="h-full w-full"
      >
        <SwiperSlide className="swiperSlide">
          <img src={"../assets/fuerzas/1.png"} height={"100%"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperComponent;
