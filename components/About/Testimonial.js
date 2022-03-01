import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Testimonial = () => {
  return (
    <div className="testimonial-area pb-100">
    <div className="container">
        <div className="section-title-2 st-border-center text-center mb-75" data-aos="fade-up" data-aos-delay="200">
            <h2>Testimonial</h2>
        </div>
        <div className="testimonial-active swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="single-testimonial" data-aos="fade-up" data-aos-delay="200">
                        <div className="testimonial-img">
                            <Image src="/assets/images/testimonial/client-1.png" alt="" width={80} height={80}/>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore.</p>
                        <div className="testimonial-info">
                            <h4>Amrita Sha</h4>
                            <span> Our Client.</span>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="single-testimonial" data-aos="fade-up" data-aos-delay="400">
                        <div className="testimonial-img">
                            <Image src="/assets/images/testimonial/client-2.png" alt="" width={80} height={80}/>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore.</p>
                        <div className="testimonial-info">
                            <h4>Andi Lane</h4>
                            <span> Designer.</span>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="single-testimonial" data-aos="fade-up" data-aos-delay="600">
                        <div className="testimonial-img">
                            <Image src="/assets/images/testimonial/client-1.png" alt="" width={80} height={80}/>
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
                            <Image src="/assets/images/testimonial/client-2.png" alt="" width={80} height={80}/>
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
  )
}

export default Testimonial