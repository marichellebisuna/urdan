import React from 'react'
import Link from 'next/link'

const SingleBanner = () => {
  return (
    <div className="banner-area pb-95" data-aos="fade-up" data-aos-delay="200">
    <div className="container">
        <div className="bg-img bg-padding-1" style={{backgroundImage:"url(/assets/images/bg/bg-1.png)"}}>
            <div className="banner-content-4">
                <h2>New Dining <br/>Chair Set</h2>
                <h3>Up To 30% Off</h3>
                <div className="btn-style-2 btn-hover">
                <Link href='/products' >
                    <a className="btn">
                        Shop Now
                    </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default SingleBanner