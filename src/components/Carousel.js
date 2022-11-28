import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
function Slider() {
  return (
   <>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
       
      
        modules={[Autoplay]}
        className="mySwiper"
        
        >
        <SwiperSlide><img src={`${process.env.PUBLIC_URL}assests/front.jpeg`} alt="" className='w-full  h-[400px]  sm:h-[600px]'/></SwiperSlide>
        <SwiperSlide><img src={`${process.env.PUBLIC_URL}assests/mainimage.jpg`} alt="" className='w-full brightness-50 h-[400px]  sm:h-[600px]'/>
        
          <h1 className=' absolute md:inset-0 md:top-[40%] inset-0 top-[50%] sm:top-[50%] text-xl  sm:text-3xl md:text-7xl text-center font-bold  uppercase  text-white'>One of best Realtors</h1>
          
          <h1 className=' absolute md:inset-0 md:top-[52%]  inset-0 top-[55%] sm:top-[55%] text-xl md:text-7xl sm:text-3xl text-center font-bold  uppercase  text-white'>In Istanbul</h1>
        
        </SwiperSlide>
       
        
      </Swiper>
   </>
  )
}

export default Slider