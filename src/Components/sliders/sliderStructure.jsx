import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import descriptionSlider from "../dataBase/dataDescriptionSlider";
import "swiper/css";
import "swiper/css/navigation";
import "../css/swiperStruct.css";
import { Navigation, Autoplay } from "swiper";
function SliderStructure() {
  return (
    <div className="grid grid-cols-1 pt-[75px] md:grid-cols-2 lg:pt-[145px] gap-4 px-[3.64vw]">
      {descriptionSlider.map(({ images, slider_items }) => {
        return (
          <div className="relative">
            <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              autoplay={true}
              className="mySwiper"
            >
              {images.map((image) => (
                <SwiperSlide>
                  <img src={image} alt="slider image" />
                </SwiperSlide>
              ))}
            </Swiper>
            <p className="absolute uppercase bottom-10 left-10 text-white text-[1.5625vw] z-[1]">
              {slider_items}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default SliderStructure;
