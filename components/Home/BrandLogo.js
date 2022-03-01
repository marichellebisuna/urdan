import React from 'react'
import Image from 'next/image'

const BrandLogo = () => {
  return (
    <div className="brand-logo-area pb-95">
    <div className="container">
        <div className="brand-logo-active swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="single-brand-logo" data-aos="fade-up" data-aos-delay="200">
                        <a href="#"><Image src="/assets/images/brand-logo/brand-logo-1.png" alt="" width={72}
        height={102}/></a>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="single-brand-logo" data-aos="fade-up" data-aos-delay="400">
                        <a href="#"><Image src="/assets/images/brand-logo/brand-logo-2.png" alt="" width={72}
        height={102}/></a>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="single-brand-logo" data-aos="fade-up" data-aos-delay="600">
                        <a href="#"><Image src="/assets/images/brand-logo/brand-logo-3.png" alt="" width={72}
        height={102}/></a>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="single-brand-logo" data-aos="fade-up" data-aos-delay="800">
                        <a href="#"><Image src="/assets/images/brand-logo/brand-logo-4.png" alt="" width={72}
        height={102}/></a>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="single-brand-logo" data-aos="fade-up" data-aos-delay="1000">
                        <a href="#"><Image src="/assets/images/brand-logo/brand-logo-5.png" alt="" width={72}
        height={102}/></a>
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="single-brand-logo" data-aos="fade-up" data-aos-delay="1200">
                        <a href="#"><Image src="/assets/images/brand-logo/brand-logo-1.png" alt="" width={72}
        height={102}/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default BrandLogo