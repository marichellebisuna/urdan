import React from 'react'
import Image from 'next/image'

const FunFactArea = () => {
  return (
    <div className="funfact-area bg-img pt-100 pb-70" style={{backgroundImage:"url(assets/images/bg/bg-4.png)"}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="single-funfact text-center mb-30" data-aos="fade-up" data-aos-delay="200">
                    <div className="funfact-img">
                        <Image src="/assets/images/icon-img/client.png" alt="" width={38} height={37}/>
                    </div>
                    <h2 className="count">120</h2>
                    <span>Happy Clients</span>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="single-funfact text-center mb-30" data-aos="fade-up" data-aos-delay="400">
                    <div className="funfact-img">
                        <Image src="/assets/images/icon-img/award.png" alt="" width={38} height={37}/>
                    </div>
                    <h2 className="count">90</h2>
                    <span>Award Winning</span>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="single-funfact text-center mb-30" data-aos="fade-up" data-aos-delay="600">
                    <div className="funfact-img">
                        <Image src="/assets/images/icon-img/item.png" alt="" width={38} height={37}/>
                    </div>
                    <h2 className="count">230</h2>
                    <span>Totel Items</span>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="single-funfact text-center mb-30 mrgn-none" data-aos="fade-up" data-aos-delay="800">
                    <div className="funfact-img">
                        <Image src="/assets/images/icon-img/cup.png" alt="" width={38} height={37}/>
                    </div>
                    <h2 className="count">350</h2>
                    <span>Cups of Coffee</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default FunFactArea