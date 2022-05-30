import React from 'react'

const BannerArea = () => {
  return (
    <div className="banner-area pb-100">
    <div className="bg-img bg-padding-2" style={{backgroundImage:"url(/assets/images/bg/bg-2.png)"}}>
        <div className="container">
            <div className="banner-content-5 banner-content-5-static">
                <span data-aos="fade-up" data-aos-delay="200">Up To 40% Off</span>
                <h1 data-aos="fade-up" data-aos-delay="400">New Furniture <br/>Sofa Set</h1>
                <div className="btn-style-3 btn-hover" data-aos="fade-up" data-aos-delay="600">
                    <a className="btn border-radius-none" href="/products">Shop Now</a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default BannerArea