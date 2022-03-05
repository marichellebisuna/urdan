import React from 'react'
import img1 from '../../public/assets/images/slider/slider-bg-1.jpg'
import img2 from '../../public/assets/images/slider/slider-img-1-2.png'
import img3 from '../../public/assets/images/slider/slider-img-2-2.png'
import Image from 'next/image'
import Slider from "react-slick";

const HomeSlider = () => {

    function SamplePrevArrow(props) {
        const {  style, onClick } = props;    
        return (
          <div
            className=' main-slider-nav' aria-disabled="false"
            style={{ ...style, 
              boxShadow:" 0px 0px 9.8px 0.2px rgba(0, 0, 0, 0.05)",
              backgroundColor: "#e97730",    
              fontSize: "20px",
              width: "2px",
              height: "20px",
            //   lineHeight: "50px",
            //   display: "block",
            //   textAlign: "center",
              position: "absolute",
              cursor: "pointer",
            //   borderRadius: "100%",
            // //   left: "auto",
              right:"-14px",
              top: "50%",         
              zIndex: 1,         
              transform: "translateY(-50%)" ,  
              WebkitTransform: "translateY(-50%)",
              msTransform: "translateY(-50%)",                      
            }}
            onClick={onClick}>         
            <div className="home-slider-prev main-slider-nav">
                <i className="fa fa-angle-left"></i>
                </div>
          </div>
        );
      }
      
      function SampleNextArrow(props) {
        const {style, onClick } = props;
        return (
          <div
            className="main-slider-nav" aria-disabled="false"
            style={{ ...style, 
              boxShadow:" 0px 0px 9.8px 0.2px rgba(0, 0, 0, 0.05)",
              backgroundColor: "#ffffff",
              fontSize: "20px",
              width: "50px",
              height: "50px",
            //   lineHeight: "50px",
            //   display: "block",
            //   textAlign: "center",
              position: "absolute",
              cursor: "pointer",
            //   borderRadius: "100%",
              left: "14px",
            //   right:"auto",
              top: "50%",         
              zIndex: 1,         
              transform: "translateY(50%)" ,  
              WebkitTransform: "translateY(50%)",
              msTransform: "translateY(50%)",         
           }}
            onClick={onClick}>
           <div className="home-slider-next main-slider-nav"><i className="fa fa-angle-right"></i></div>
          </div>
        );
      }
     
      var settings={
        "className":"swiper-container",
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "infinite": true,
        "arrows": true,
        "dots": false,
        "autoplay" : true,
        "fade" : true,
        // "autoplaySpeed" :2000,
        // "pauseOnHover" : false,
        // "pauseOnFocus" : false,
        "nextArrow":<SampleNextArrow/>,
        "prevArrow":<SamplePrevArrow/>,
        // responsive:[{
        //   "breakpoint":768, "settings": {
        //   "slidesToShow": 1},
        //   "breakpoint":575, "settings": {
        //   "slidesToShow": 1}
        // }]    
      };
      
   

  return (
    <> 
    <div className="slider-area">    
    <div className="slider-active swiper-container">
        <div className="swiper-wrapper">
            
        {/* <Slider {...settings}> */}
            <div className="swiper-slide swiper-slide-active">
                <div className="intro-section slider-height-1 slider-content-center bg-img single-animation-wrap slider-bg-color-1" style={{ backgroundImage:`url(${img1})`}}>
                {/* <Image src="/assets/images/slider/slider-bg-1.jpg" alt="" width={1920} height={770}/> */}
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
            <div className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev">
                <div className="intro-section slider-height-1 slider-content-center bg-img single-animation-wrap slider-bg-color-1" style={{ backgroundImage:`url(${img1})`}}>
                {/* <Image src="/assets/images/slider/slider-bg-1.jpg" alt="" width={1920} height={770}/> */}
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
        {/* </Slider>   */}
            <div className="home-slider-prev main-slider-nav"><i className="fa fa-angle-left"></i></div>
            <div className="home-slider-next main-slider-nav"><i className="fa fa-angle-right"></i></div>
       
        </div>
    </div>
</div>
</>
  )
}

export default HomeSlider