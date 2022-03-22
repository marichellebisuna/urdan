import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BannerArea = () => {
  return (
    <div className="banner-area pt-100 pb-70">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
                <div className="banner-wrap mb-30" data-aos="fade-up" data-aos-delay="200">
                <Link href='/products'><a><Image src="/assets/images/banner/banner-1.png" alt="" width={370} height={206}/></a></Link>
                    <div className="banner-content-1">
                        <h5>new arrival</h5>
                        <h3>Office Chair</h3>
                        <div className="banner-btn">
                        <Link href='/products'>
                        <a>Shop Now</a>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="banner-wrap mb-30" data-aos="fade-up" data-aos-delay="400">
                <Link href='/products'><a><Image src="/assets/images/banner/banner-2.png" alt="" width={370} height={206}/></a></Link>
                    <div className="banner-content-1">
                        <h5>new arrival</h5>
                        <h3>Hanging Chair</h3>
                        <div className="banner-btn">                            
                        <Link href='/products'>
                        <a>Shop Now</a>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="banner-wrap mb-30" data-aos="fade-up" data-aos-delay="600">
                <Link href='/products'><a><Image src="/assets/images/banner/banner-3.png" alt="" width={370} height={206}/></a></Link>
                    <div className="banner-content-1">
                        <h5>new arrival</h5>
                        <h3>Folding Chair</h3>
                        <div className="banner-btn">
                        <Link href='/products'>
                        <a>Shop Now</a>
                        </Link>
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