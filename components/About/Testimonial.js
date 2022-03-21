import React, { useEffect } from 'react'
import Image from 'next/image'
import Swiper, { Navigation} from 'swiper'; 
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from '../../public/assets/images/testimonial/client-1.png'
import img2 from '../../public/assets/images/testimonial/client-2.png'
import bg from '../../public/assets/images/bg/bg-4.png'

const Testimonial = () => {
    
    useEffect(()=>{   
        const swiper = new Swiper('.testimonial-active', {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        // modules:[Navigation],
        autoplay: {
            delay: 1000,
          },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3
            }
        },
    });
swiper
        },[])
  return (
      <>
     
    <div className="testimonial-area pb-100">
    <div className="container">
        <div className="section-title-2 st-border-center text-center mb-75" >
            <h2>Testimonial</h2>
        </div>
        <div className="testimonial-active swiper-container swiper">
            <div id="sliderActiveSeven" className="swiper-wrapper">
           
                <div className="swiper-slide">
                    <div className="single-testimonial" >
                        <div className="testimonial-img">
                            <Image src={img1} alt="" width={80} height={80}/>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore.</p>
                        <div className="testimonial-info">
                            <h4>Amrita Sha</h4>
                            <span> Our Client.</span>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="single-testimonial" >
                        <div className="testimonial-img">
                            <Image src={img2} alt="" width={80} height={80}/>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore.</p>
                        <div className="testimonial-info">
                            <h4>Andi Lane</h4>
                            <span> Designer.</span>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="single-testimonial" >
                        <div className="testimonial-img">
                            <Image src={img1} alt="" width={80} height={80}/>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore.</p>
                        <div className="testimonial-info">
                            <h4>Ted Ellison</h4>
                            <span> Developer.</span>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="single-testimonial">
                        <div className="testimonial-img">
                            <Image src={img2} alt="" width={80} height={80}/>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore.</p>
                        <div className="testimonial-info">
                            <h4>Aliah Pitts</h4>
                            <span> Customer.</span>
                        </div>
                    </div>
                </div>
   
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Testimonial