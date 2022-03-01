import React from 'react'
import Image from 'next/image'

const TwoBannerArea = () => {
  return (
    <div className="banner-area pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7">
                        <div className="banner-wrap mb-30" data-aos="fade-up" data-aos-delay="200">
                            <a href="product-details.html"><Image src="/assets/images/banner/banner-4.png" alt="" width={670}
        height={300}/></a>
                            <div className="banner-content-2">
                                <span>Sale 30%</span>
                                <h2>New Furniture</h2>
                                <p>Lorem ipsum dolor sit amet consecte adipisicing elit sed do</p>
                                <div className="btn-style-2 btn-hover">
                                    <a href="product-details.html" className="btn">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5">
                        <div className="banner-wrap mb-30" data-aos="fade-up" data-aos-delay="400">
                            <a href="product-details.html"><Image src="/assets/images/banner/banner-5.png" alt="" width={470}
        height={300}/></a>
                            <div className="banner-content-3">
                                <h3>Up To 30% <Image src="/assets/images/icon-img/sale.png" alt="" width={138}
        height={84}/> Every Item</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TwoBannerArea