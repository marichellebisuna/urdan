import React from 'react'
import Topbar from './Topbar'
import Image from 'next/image'
import Link from 'next/link'

const ShopList = () => {
  return (
    <>
    <Topbar/>
    <div className="shop-bottom-area">
      <div className="tab-content jump">
          <div id="shop-1" className="tab-pane">
              <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <div className="product-wrap mb-35">
                          <div className="product-img img-zoom mb-25">
                              <a href="product-details.html">
                                  <Image src="/assets/images/product/product-5.png" alt="" width={270} height={300}/>
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
                              <h3><a href="product-details.html">Interior moderno render</a></h3>
                              <div className="product-price">
                                  <span className="old-price">$25.89 </span>
                                  <span className="new-price">$20.25 </span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <div className="product-wrap mb-35">
                          <div className="product-img img-zoom mb-25">
                              <a href="product-details.html">
                                  <Image src="/assets/images/product/product-6.png" alt="" width={270} height={300}/>
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
                              <h3><a href="product-details.html">Stylish Dining Chair</a></h3>
                              <div className="product-price">
                                  <span>$50.25 </span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <div className="product-wrap mb-35">
                          <div className="product-img img-zoom mb-25">
                              <a href="product-details.html">
                                  <Image src="/assets/images/product/product-7.png" alt="" width={270} height={300}/>
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
                              <h3><a href="product-details.html">Round Standard Chair</a></h3>
                              <div className="product-price">
                                  <span className="old-price">$45.00 </span>
                                  <span className="new-price">$40.00 </span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <div className="product-wrap mb-35">
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
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <div className="product-wrap mb-35">
                          <div className="product-img img-zoom mb-25">
                              <a href="product-details.html">
                                  <Image src="/assets/images/product/product-8.png" alt="" width={270} height={300}/>
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
                              <h3><a href="product-details.html">Modern Swivel Chair</a></h3>
                              <div className="product-price">
                                  <span className="old-price">$25.89 </span>
                                  <span className="new-price">$20.25 </span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <div className="product-wrap mb-35">
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
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <div className="product-wrap mb-35">
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
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <div className="product-wrap mb-35">
                          <div className="product-img img-zoom mb-25">
                              <a href="product-details.html">
                                  <Image src="/assets/images/product/product-9.png" alt="" width={270} height={300}/>
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
                              <h3><a href="product-details.html">Modern Lounge Chairs</a></h3>
                              <div className="product-price">
                                  <span>$30.25 </span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                      <div className="product-wrap mb-35">
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
              </div>
              <div className="pagination-style-1">
                  <ul>
                      <li><a className="active" href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a className="next" href="#"><i className=" ti-angle-double-right "></i></a></li>
                  </ul>
              </div>
          </div>
          <div id="shop-2" className="tab-pane active">
              <div className="shop-list-wrap mb-30" data-aos="fade-up" data-aos-delay="200">
                  <div className="row">
                      <div className="col-lg-4 col-sm-5">
                          <div className="product-list-img">
                              <a href="product-details.html">
                                  <Image src="/assets/images/product/product-5.png" alt="Product Style" width={270} height={300}/>
                              </a>
                              <div className="product-list-badge badge-right badge-pink">
                                  <span>-20%</span>
                              </div>
                              <div className="product-list-quickview">
                                  <button className="product-action-btn-2" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                      <i className="pe-7s-look"></i>
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-8 col-sm-7">
                          <div className="shop-list-content">
                              <h3><a href="product-details.html">Interior moderno render</a></h3>
                              <div className="product-price">
                                  <span className="old-price">$70.89 </span>
                                  <span className="new-price">$55.25 </span>
                              </div>
                              <div className="product-list-rating">
                                  <i className=" ti-star"></i>
                                  <i className=" ti-star"></i>
                                  <i className=" ti-star"></i>
                                  <i className=" ti-star"></i>
                                  <i className=" ti-star"></i>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor labor incididunt ut et dolore magna aliqua.</p>
                              <div className="product-list-action">
                                  <button className="product-action-btn-3" title="Add to cart"><i className="pe-7s-cart"></i></button>
                                  <button className="product-action-btn-3" title="Wishlist"><i className="pe-7s-like"></i></button>
                                  <button className="product-action-btn-3" title="Compare"><i className="pe-7s-shuffle"></i></button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="shop-list-wrap mb-30" data-aos="fade-up" data-aos-delay="200">
                  <div className="row">
                      <div className="col-lg-4 col-sm-5">
                          <div className="product-list-img">
                              <a href="product-details.html">
                                  <Image src="/assets/images/product/product-7.png" alt="Product Style" width={270} height={300}/>
                              </a>
                              <div className="product-list-quickview">
                                  <button className="product-action-btn-2" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                      <i className="pe-7s-look"></i>
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-8 col-sm-7">
                          <div className="shop-list-content">
                              <h3><a href="product-details.html">Round Standard Chair</a></h3>
                              <div className="product-price">
                                  <span>$50.25 </span>
                              </div>
                              <div className="product-list-rating">
                                  <i className=" ti-star"></i>
                                  <i className=" ti-star"></i>
                                  <i className=" ti-star"></i>
                                  <i className=" ti-star"></i>
                                  <i className=" ti-star"></i>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor labor incididunt ut et dolore magna aliqua.</p>
                              <div className="product-list-action">
                                  <button className="product-action-btn-3" title="Add to cart"><i className="pe-7s-cart"></i></button>
                                  <button className="product-action-btn-3" title="Wishlist"><i className="pe-7s-like"></i></button>
                                  <button className="product-action-btn-3" title="Compare"><i className="pe-7s-shuffle"></i></button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="shop-list-wrap mb-30" data-aos="fade-up" data-aos-delay="200">
                  <div className="row">
                      <div className="col-lg-4 col-sm-5">
                          <div className="product-list-img">
                              <a href="product-details.html">
                                  <Image src="/assets/images/product/product-4.png" alt="Product Style" width={270} height={300}/>
                              </a>
                              <div className="product-list-badge badge-right badge-pink">
                                  <span>-10%</span>
                              </div>
                              <div className="product-list-quickview">
                                  <button className="product-action-btn-2" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                      <i className="pe-7s-look"></i>
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-8 col-sm-7">
                          <div className="shop-list-content">
                              <h3><a href="product-details.html">Stylish Swing Chair</a></h3>
                              <div className="product-price">
                                  <span className="old-price">$80.89 </span>
                                  <span className="new-price">$60.25 </span>
                              </div>
                              <div className="product-list-rating">
                                  <i className=" ti-star"></i>
                                  <i className=" ti-star"></i>
                                  <i className=" ti-star"></i>
                                  <i className=" ti-star"></i>
                                  <i className=" ti-star"></i>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor labor incididunt ut et dolore magna aliqua.</p>
                              <div className="product-list-action">
                                  <button className="product-action-btn-3" title="Add to cart"><i className="pe-7s-cart"></i></button>
                                  <button className="product-action-btn-3" title="Wishlist"><i className="pe-7s-like"></i></button>
                                  <button className="product-action-btn-3" title="Compare"><i className="pe-7s-shuffle"></i></button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="shop-list-wrap mb-30" data-aos="fade-up" data-aos-delay="200">
                  <div className="row">
                      <div className="col-lg-4 col-sm-5">
                          <div className="product-list-img">
                              <a href="product-details.html">
                                  <Image src="/assets/images/product/product-8.png" alt="Product Style" width={270} height={300}/>
                              </a>
                              <div className="product-list-badge badge-right badge-pink">
                                  <span>-10%</span>
                              </div>
                              <div className="product-list-quickview">
                                  <button className="product-action-btn-2" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                      <i className="pe-7s-look"></i>
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-8 col-sm-7">
                          <div className="shop-list-content">
                              <h3><a href="product-details.html">Modern Swivel Chair</a></h3>
                              <div className="product-price">
                                  <span className="old-price">$45.89 </span>
                                  <span className="new-price">$30.25 </span>
                              </div>
                              <div className="product-list-rating">
                                  <i className=" ti-star"></i>
                                  <i className=" ti-star"></i>
                                  <i className=" ti-star"></i>
                                  <i className=" ti-star"></i>
                                  <i className=" ti-star"></i>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod tempor labor incididunt ut et dolore magna aliqua.</p>
                              <div className="product-list-action">
                                  <button className="product-action-btn-3" title="Add to cart"><i className="pe-7s-cart"></i></button>
                                  <button className="product-action-btn-3" title="Wishlist"><i className="pe-7s-like"></i></button>
                                  <button className="product-action-btn-3" title="Compare"><i className="pe-7s-shuffle"></i></button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="pagination-style-1" data-aos="fade-up" data-aos-delay="200">
                  <ul>
                      <li><a className="active" href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a className="next" href="#"><i className=" ti-angle-double-right "></i></a></li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default ShopList