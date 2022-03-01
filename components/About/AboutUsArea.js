import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AboutUsArea = () => {
  return (
    <div className="about-us-area pt-100 pb-100">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-content text-center">
                            <h2 data-aos="fade-up" data-aos-delay="200">Furniture</h2>
                            <h1 data-aos="fade-up" data-aos-delay="300">Best Furniture</h1>
                            <p data-aos="fade-up" data-aos-delay="400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua. Ut enim ad minim venia quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                            <p className="mrg-inc" data-aos="fade-up" data-aos-delay="500">in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div className="btn-style-3 btn-hover" data-aos="fade-up" data-aos-delay="600">
                              <Link href='/products'>
                                <a className="btn border-radius-none">Shop Now</a>
                              </Link>  
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-img" data-aos="fade-up" data-aos-delay="400">
                            <Image src="/assets/images/banner/about-us.png" alt="" width={495} height={317}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AboutUsArea