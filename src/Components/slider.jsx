import React, { useEffect, useState }  from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination, Navigation } from "swiper";
import slierData from './dataBase/dataSlider';
import "./swiper.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function Slider() {
  const[dataSlider,setDateSlider] = useState([])
  useEffect(()=>{
    setDateSlider(slierData)
  },[])
  return (
      <Swiper
        pagination={{
          type: "fraction",

        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper to-white"
      >
        {
          dataSlider.map((el)=> <SwiperSlide><img src={el.url}/></SwiperSlide>)
        }
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
  )
}

export default Slider