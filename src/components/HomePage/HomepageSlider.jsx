import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import s1 from "../../asstes/images/s1.png"
import s2 from "../../asstes/images/s2.png"
import s3 from "../../asstes/images/s3.png"
import s4 from "../../asstes/images/s4.png"
import s5 from "../../asstes/images/s5.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function SliderSEC() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={4}
        loop={true}
   
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
          
          },
          "@0.75": {
            slidesPerView: 3,
     
          },
          "@1.00": {
            slidesPerView: 4,
            
          },
          "@1.50": {
            slidesPerView: 5,
            
          },
        }}
      
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>

   <img src={s1}  className="slider_imgp"  />
   
        </SwiperSlide>
        <SwiperSlide>
     

        <img src={s3} className="slider_imgp"  />

        </SwiperSlide>
        <SwiperSlide>
        <img src={s1}  className="slider_imgp"  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s2} className="slider_imgp"  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s3} className="slider_imgp"  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s4} className="slider_imgp"  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s5} className="slider_imgp"  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s1} className="slider_imgp"   />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s2} className="slider_imgp"  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s3} className="slider_imgp"  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s4} className="slider_imgp"  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s5} className="slider_imgp"  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s5} className="slider_imgp"  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s5} className="slider_imgp"   />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s5} className="slider_imgp"   />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s5} className="slider_imgp"  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={s5} className="slider_imgp"   />
        </SwiperSlide>
      </Swiper>
    </>
  );
}