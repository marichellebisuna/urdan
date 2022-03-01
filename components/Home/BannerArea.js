import React from 'react'
import Image from 'next/image'

const BannerArea = () => {
  return (
    <div className="banner-area pt-100 pb-70">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
                <div className="banner-wrap mb-30" data-aos="fade-up" data-aos-delay="200">
                    <a href="product-details.html"><Image src="/assets/images/banner/banner-1.png" alt="" width={270} height={300}/></a>
                    <div className="banner-content-1">
                        <h5>new arrival</h5>
                        <h3>Office Chair</h3>
                        <div className="banner-btn">
                            <a href="product-details.html">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="banner-wrap mb-30" data-aos="fade-up" data-aos-delay="400">
                    <a href="product-details.html"><Image src="/assets/images/banner/banner-2.png" alt="" width={270} height={300}/></a>
                    <div className="banner-content-1">
                        <h5>new arrival</h5>
                        <h3>Hanging Chair</h3>
                        <div className="banner-btn">
                            <a href="product-details.html">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="banner-wrap mb-30" data-aos="fade-up" data-aos-delay="600">
                    <a href="product-details.html"><Image src="/assets/images/banner/banner-3.png" alt="" width={270} height={300}/></a>
                    <div className="banner-content-1">
                        <h5>new arrival</h5>
                        <h3>Folding Chair</h3>
                        <div className="banner-btn">
                            <a href="product-details.html">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default BannerArea