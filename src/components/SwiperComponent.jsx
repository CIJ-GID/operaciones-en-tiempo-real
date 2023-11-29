import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

export const SwiperComponent = () => {
  const [imageURLs, setImageURLs] = useState([]);
  
  useEffect(() => {
    const storage = getStorage();
    const storageRef = ref(storage, "images"); // Sin la barra inclinada al final
  
    
    // Obtén la lista de archivos en la carpeta
    listAll(storageRef)
    .then((res) => {
      const promises = res.items.map((item) => getDownloadURL(item));
      return Promise.all(promises);
    })
    .then((urls) => {
      setImageURLs(urls);
    })
    .catch((error) => {
      console.error("Error al obtener URLs de imágenes:", error.code, error.message);
    });
}, []);

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
      {imageURLs.map((url, index) => (
        <SwiperSlide key={index} className="swiperSlide">
          <img src={url} className="h-auto w-full" alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
