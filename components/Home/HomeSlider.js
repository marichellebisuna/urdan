import React, { useEffect } from 'react'
import bg from '../../public/assets/images/slider/slider-bg-1.jpg'
import img1 from '../../public/assets/images/slider/slider-img-1.png'
import img2 from '../../public/assets/images/slider/slider-img-1-2.png'
import Image from 'next/image'
import Link from 'next/link'

import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';

const HomeSlider = () => {
  return (
    <> 
    <div className="slider-area">    
        <div className=" slider-active swiper-container swiper">
            <div id="sliderActive" className="swiper-wrapper">   
            <Swiper 
            loop= {true}  
            speed= {750}
            effect= {'fade'}
            slidesPerView= {1}  
            modules={[Navigation]} 
            navigation= {{
            nextEl: `.home-slider-next`,
            prevEl: `.home-slider-prev`}}
            >        
               <SwiperSlide> <div className="swiper-slide" >
                    <div className="intro-section slider-height-1 slider-content-center bg-img single-animation-wrap slider-bg-color-1" style={{ backgroundImage:`url(${bg.src})`, width:'1920', height:'770'}}>               
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="slider-content-1 slider-animated-1">
                                        <h3 className="animated">new arrival</h3>
                                        <h1 className="animated">Summer <br/>Collection</h1>
                                        <div className="slider-btn btn-hover">
                                            <Link href='/products'>
                                            <a className="btn animated">
                                                Shop Now <i className=" ti-arrow-right "></i>
                                            </a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="hero-slider-img-1 slider-animated-1">
                                        <Image className="animated animated-slider-img-1" src={img1} alt="" width={625} height={406}/>
                                        <div className="product-offer animated">
                                            <h5>30% <span>Off</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></SwiperSlide>
              <SwiperSlide>  <div className="swiper-slide" >
                    <div className="intro-section slider-height-1 slider-content-center bg-img single-animation-wrap slider-bg-color-1" style={{ backgroundImage:`url(${bg.src})`, width:'1920', height:'770'}}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="slider-content-1 slider-animated-1">
                                        <h3 className="animated">new arrival</h3>
                                        <h1 className="animated">Winter <br/>Collection</h1>
                                        <div className="slider-btn btn-hover">
                                        <Link href='/products'>
                                            <a className="btn animated">
                                                Shop Now <i className=" ti-arrow-right "></i>
                                            </a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="hero-slider-img-1 slider-animated-1">
                                        <Image className="animated animated-slider-img-1" src={img2} alt="" width={625} height={406}/>
                                        <div className="product-offer animated">
                                            <h5>30% <span>Off</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            </SwiperSlide>
    </Swiper>
                <div className="home-slider-prev main-slider-nav" data-aos="fade-up" data-aos-delay="200"><i className="fa fa-angle-left"></i></div>
                <div className="home-slider-next main-slider-nav" data-aos="fade-up" data-aos-delay="200"><i className="fa fa-angle-right"></i></div>
        
            </div>
        </div>
</div>
</>
  )
}

export default HomeSlider