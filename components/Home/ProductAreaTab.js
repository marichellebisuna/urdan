import React from 'react'
import Image from 'next/image'

const ProductArea = () => {
  return (
    <div className="product-area pb-95">
            <div className="container">
                <div className="section-border section-border-margin-1" data-aos="fade-up" data-aos-delay="200">
                    <div className="section-title-timer-wrap bg-white">
                        <div className="section-title-1">
                            <h2>Deal Of The Day</h2>
                        </div>
                        <div id="timer-1-active" className="timer-style-1">
                            <span>End In: </span>
                            <div data-countdown="2021/8/30"></div>
                        </div>
                    </div>
                </div>
                <div className="product-slider-active-1 swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="product-wrap" data-aos="fade-up" data-aos-delay="200">
                                <div className="product-img img-zoom mb-25">
                                    <a href="product-details.html">
                                        <Image src="/assets/images/product/product-1.png" alt="" width={270} height={300}/>
                                    </a>
                                    <div className="product-badge badge-top badge-right badge-pink">
                                        <span>-10%</span>
                                    </div>
                                    <div className="product-action-wrap">
                                        <button className="product-action-btn-1" title="Wishlist"><i className="pe-7s-like"></i></button>
                                        <button className="product-action-btn-1" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="pe-7s-look"></i>
                                        </button>
                                    </div>
                                    <div className="product-action-2-wrap">
                                        <button className="product-action-btn-2" title="Add To Cart"><i className="pe-7s-cart"></i> Add to cart</button>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h3><a href="product-details.html">New Modern Sofa Set</a></h3>
                                    <div className="product-price">
                                        <span className="old-price">$25.89 </span>
                                        <span className="new-price">$20.25 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="product-wrap" data-aos="fade-up" data-aos-delay="400">
                                <div className="product-img img-zoom mb-25">
                                    <a href="product-details.html">
                                        <Image src="/assets/images/product/product-2.png" alt="" width={270} height={300}/>
                                    </a>
                                    <div className="product-action-wrap">
                                        <button className="product-action-btn-1" title="Wishlist"><i className="pe-7s-like"></i></button>
                                        <button className="product-action-btn-1" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="pe-7s-look"></i>
                                        </button>
                                    </div>
                                    <div className="product-action-2-wrap">
                                        <button className="product-action-btn-2" title="Add To Cart"><i className="pe-7s-cart"></i> Add to cart</button>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h3><a href="product-details.html">New Modern Sofa Set</a></h3>
                                    <div className="product-price">
                                        <span>$50.25 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="product-wrap" data-aos="fade-up" data-aos-delay="600">
                                <div className="product-img img-zoom mb-25">
                                    <a href="product-details.html">
                                        <Image src="/assets/images/product/product-3.png" alt="" width={270} height={300}/>
                                    </a>
                                    <div className="product-badge badge-top badge-right badge-pink">
                                        <span>-10%</span>
                                    </div>
                                    <div className="product-action-wrap">
                                        <button className="product-action-btn-1" title="Wishlist"><i className="pe-7s-like"></i></button>
                                        <button className="product-action-btn-1" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="pe-7s-look"></i>
                                        </button>
                                    </div>
                                    <div className="product-action-2-wrap">
                                        <button className="product-action-btn-2" title="Add To Cart"><i className="pe-7s-cart"></i> Add to cart</button>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h3><a href="product-details.html">Easy Modern Chair</a></h3>
                                    <div className="product-price">
                                        <span className="old-price">$45.00 </span>
                                        <span className="new-price">$40.00 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="product-wrap" data-aos="fade-up" data-aos-delay="800">
                                <div className="product-img img-zoom mb-25">
                                    <a href="product-details.html">
                                        <Image src="/assets/images/product/product-4.png" alt="" width={270} height={300}/>
                                    </a>
                                    <div className="product-action-wrap">
                                        <button className="product-action-btn-1" title="Wishlist"><i className="pe-7s-like"></i></button>
                                        <button className="product-action-btn-1" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="pe-7s-look"></i>
                                        </button>
                                    </div>
                                    <div className="product-action-2-wrap">
                                        <button className="product-action-btn-2" title="Add To Cart"><i className="pe-7s-cart"></i> Add to cart</button>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h3><a href="product-details.html">Stylish Swing Chair</a></h3>
                                    <div className="product-price">
                                        <span>$30.25 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="product-wrap" data-aos="fade-up" data-aos-delay="1000">
                                <div className="product-img img-zoom mb-25">
                                    <a href="product-details.html">
                                        <Image src="/assets/images/product/product-2.png" alt="" width={270} height={300}/>
                                    </a>
                                    <div className="product-badge badge-top badge-right badge-pink">
                                        <span>-10%</span>
                                    </div>
                                    <div className="product-action-wrap">
                                        <button className="product-action-btn-1" title="Wishlist"><i className="pe-7s-like"></i></button>
                                        <button className="product-action-btn-1" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <i className="pe-7s-look"></i>
                                        </button>
                                    </div>
                                    <div className="product-action-2-wrap">
                                        <button className="product-action-btn-2" title="Add To Cart"><i className="pe-7s-cart"></i> Add to cart</button>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h3><a href="product-details.html">New Modern Sofa Set</a></h3>
                                    <div className="product-price">
                                        <span className="old-price">$80.50 </span>
                                        <span className="new-price">$75.25 </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-prev-1 product-nav-1" data-aos="fade-up" data-aos-delay="200"><i className="fa fa-angle-left"></i></div>
                    <div className="product-next-1 product-nav-1" data-aos="fade-up" data-aos-delay="200"><i className="fa fa-angle-right"></i></div>
                </div>
            </div>
        </div>
  )
}

export default ProductArea