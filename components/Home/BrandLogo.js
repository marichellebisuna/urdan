import React from 'react'
import Image from 'next/image'

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


const BrandLogo = () => {
  return (
    <div className="brand-logo-area pb-95">
    <div className="container">
        <div className="brand-logo-active swiper-container">
            <div className="swiper-wrapper">
            <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><div className="swiper-slide">
                    <div className="single-brand-logo" data-aos="fade-up" data-aos-delay="200">
                        <a href="#"><Image src="/assets/images/brand-logo/brand-logo-1.png" alt="" width={72}
        height={102}/></a>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide>          <div className="swiper-slide">
                    <div className="single-brand-logo" data-aos="fade-up" data-aos-delay="400">
                        <a href="#"><Image src="/assets/images/brand-logo/brand-logo-2.png" alt="" width={108}
        height={84}/></a>
                    </div>
                </div> </SwiperSlide>
                <SwiperSlide>          <div className="swiper-slide">
                    <div className="single-brand-logo" data-aos="fade-up" data-aos-delay="600">
                        <a href="#"><Image src="/assets/images/brand-logo/brand-logo-3.png" alt="" width={107}
        height={93}/></a>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide>         <div className="swiper-slide">
                    <div className="single-brand-logo" data-aos="fade-up" data-aos-delay="800">
                        <a href="#"><Image src="/assets/images/brand-logo/brand-logo-4.png" alt="" width={111}
        height={77}/></a>
                    </div>
                </div> </SwiperSlide>
                <SwiperSlide>         <div className="swiper-slide">
                    <div className="single-brand-logo" data-aos="fade-up" data-aos-delay="1000">
                        <a href="#"><Image src="/assets/images/brand-logo/brand-logo-5.png" alt="" width={79}
        height={98}/></a>
                    </div>
                </div> </SwiperSlide>
                <SwiperSlide>         <div className="swiper-slide">
                    <div className="single-brand-logo" data-aos="fade-up" data-aos-delay="1200">
                        <a href="#"><Image src="/assets/images/brand-logo/brand-logo-1.png" alt="" width={72}
        height={102}/></a>
                    </div>
                </div></SwiperSlide>
        </Swiper>
            </div>
        </div>
    </div>
</div>
  )
}

export default BrandLogo