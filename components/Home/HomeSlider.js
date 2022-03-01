import React from 'react'
import img1 from '../../public/assets/images/slider/slider-bg-1.jpg'
import img2 from '../../public/assets/images/slider/slider-img-1-2.png'
import img3 from '../../public/assets/images/slider/slider-img-2-2.png'
import Image from 'next/image'

const HomeSlider = () => {
  return (
    <> 
    <div className="slider-area">    
    <div className="slider-active swiper-container">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="intro-section slider-height-1 slider-content-center bg-img single-animation-wrap slider-bg-color-1" style={{ backgroundImage:`url(${img1})`}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="slider-content-1 slider-animated-1">
                                    <h3 className="animated">new arrival</h3>
                                    <h1 className="animated">Summer <br/>Collection</h1>
                                    <div className="slider-btn btn-hover">
                                        <a href="product-details.html" className="btn animated">
                                            Shop Now <i className=" ti-arrow-right "></i>
                                        </a>
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
            </div>
            <div className="swiper-slide">
                <div className="intro-section slider-height-1 slider-content-center bg-img single-animation-wrap slider-bg-color-1" style={{ backgroundImage:`url(${img1})`}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="slider-content-1 slider-animated-1">
                                    <h3 className="animated">new arrival</h3>
                                    <h1 className="animated">Winter <br/>Collection</h1>
                                    <div className="slider-btn btn-hover">
                                        <a href="product-details.html" className="btn animated">
                                            Shop Now <i className=" ti-arrow-right "></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="hero-slider-img-1 slider-animated-1">
                                    <Image className="animated animated-slider-img-1" src={img3} alt="" width={625} height={406}/>
                                    <div className="product-offer animated">
                                        <h5>30% <span>Off</span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-slider-prev main-slider-nav"><i className="fa fa-angle-left"></i></div>
            <div className="home-slider-next main-slider-nav"><i className="fa fa-angle-right"></i></div>
        </div>
    </div>
</div>
</>
  )
}

export default HomeSlider