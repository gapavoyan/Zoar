import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper";
import slierData from './dataBase/dataSlider';
import "./swiper.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Slider() {
  const [dataSlider, setDateSlider] = useState([])
  useEffect(() => {
    setDateSlider(slierData)
  }, [])
  return (
    // setInterval(() => {
      <Swiper
        dir="rtl"
        navigation={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination,Autoplay]}
        className="mySwiper"
      >
        {
          dataSlider.map((el) => <SwiperSlide key={el.id}><img src={el.url} /></SwiperSlide>)
        }
      </Swiper>
    // }, 2000)
  )
}

export default Slider