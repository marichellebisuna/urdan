import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RelatedProducts = () => {
  return (
    <div className="related-product-area pb-95">
      <div className="container">
          <div className="section-title-2 st-border-center text-center mb-75" data-aos="fade-up" data-aos-delay="200">
              <h2>Related Products</h2>
          </div>
          <div className="related-product-active swiper-container">
              <div className="swiper-wrapper">
                  <div className="swiper-slide">
                      <div className="product-wrap" data-aos="fade-up" data-aos-delay="200">
                          <div className="product-img img-zoom mb-25">
                              <Link href="/product/:id"><a >
                                  <Image src="/assets/images/product/product-1.png" alt="" width={270} height={300}/>
                              </a></Link >
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
                              <h3><Link href="/product/:id"><a >New Modern Sofa Set</a></Link ></h3>
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
                              <Link href="/product/:id"><a >
                                  <Image src="/assets/images/product/product-2.png" alt="" width={270} height={300}/>
                              </a></Link >
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
                              <h3><Link href="/product/:id"><a>New Modern Sofa Set</a></Link ></h3>
                              <div className="product-price">
                                  <span>$50.25 </span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="swiper-slide">
                      <div className="product-wrap" data-aos="fade-up" data-aos-delay="600">
                          <div className="product-img img-zoom mb-25">
                              <Link href="/product/:id"><a>
                                  <Image src="/assets/images/product/product-3.png" alt="" width={270} height={300}/>
                              </a></Link >
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
                              <h3><Link href="/product/:id"><a>Easy Modern Chair</a></Link ></h3>
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
                              <Link href="/product/:id"><a>
                                  <Image src="/assets/images/product/product-4.png" alt="" width={270} height={300}/>
                              </a></Link >
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
                              <h3><Link href="/product/:id"><a>Stylish Swing Chair</a></Link ></h3>
                              <div className="product-price">
                                  <span>$30.25 </span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="swiper-slide">
                      <div className="product-wrap">
                          <div className="product-img img-zoom mb-25">
                              <Link href="/product/:id"><a>
                                  <Image src="/assets/images/product/product-2.png" alt="" width={270} height={300}/>
                              </a></Link >
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
                              <h3><Link href="/product/:id"><a>New Modern Sofa Set</a></Link ></h3>
                              <div className="product-price">
                                  <span className="old-price">$80.50 </span>
                                  <span className="new-price">$75.25 </span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default RelatedProducts