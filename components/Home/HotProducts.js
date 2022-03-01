import React from 'react'
import Image from 'next/image'

const HotProducts = () => {
  return (
    <div className="product-area pb-60">
    <div className="container">
        <div className="section-title-tab-wrap mb-75">
            <div className="section-title-2" data-aos="fade-up" data-aos-delay="200">
                <h2>Hot Products</h2>
            </div>
            <div className="tab-style-1 nav" data-aos="fade-up" data-aos-delay="400">
                <a className="active" href="#pro-1" data-bs-toggle="tab">New Arrivals </a>
                <a href="#pro-2" data-bs-toggle="tab" className=""> Best Sellers </a>
                <a href="#pro-3" data-bs-toggle="tab" className=""> Sale Items </a>
            </div>
        </div>
        <div className="tab-content jump">
            <div id="pro-1" className="tab-pane active">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="200">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-5.png" alt="" width={270}
        height={300}/>
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
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="400">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-6.png" alt="" width={270}
        height={300}/>
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
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="600">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-7.png" alt="" width={270}
        height={300}/>
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
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="800">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-4.png" alt="" width={270}
        height={300}/>
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
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="200">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-8.png" alt="" width={270}
        height={300}/>
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
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="400">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-2.png" alt="" width={270}
        height={300}/>
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
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="600">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-3.png" alt="" width={270}
        height={300}/>
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
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="800">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-9.png" alt="" width={270}
        height={300}/>
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
                </div>
            </div>
            <div id="pro-2" className="tab-pane">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-9.png" alt="" width={270}
        height={300}/>
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
                                <h3><a href="product-details.html">Modern Lounge Chairs</a></h3>
                                <div className="product-price">
                                    <span className="old-price">$25.89 </span>
                                    <span className="new-price">$20.25 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-8.png" alt="" width={270}
        height={300}/>
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
                                <h3><a href="product-details.html">Modern Swivel Chair</a></h3>
                                <div className="product-price">
                                    <span>$50.25 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-6.png" alt="" width={270}
        height={300}/>
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
                                <h3><a href="product-details.html">Stylish Dining Chair</a></h3>
                                <div className="product-price">
                                    <span className="old-price">$45.00 </span>
                                    <span className="new-price">$40.00 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-7.png" alt="" width={270}
        height={300}/>
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
                                <h3><a href="product-details.html">Round Standard Chair</a></h3>
                                <div className="product-price">
                                    <span>$30.25 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-5.png" alt="" width={270}
        height={300}/>
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
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-4.png" alt="" width={270}
        height={300}/>
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
                                    <span>$50.25 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-2.png" alt="" width={270}
        height={300}/>
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
                                    <span className="old-price">$45.00 </span>
                                    <span className="new-price">$40.00 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-1.png" alt="" width={270}
        height={300}/>
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
                                    <span>$30.25 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="pro-3" className="tab-pane">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-4.png" alt="" width={270}
        height={300}/>
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
                                <h3><a href="product-details.html">Stylish Swing Chair</a></h3>
                                <div className="product-price">
                                    <span className="old-price">$25.89 </span>
                                    <span className="new-price">$20.25 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-3.png" alt="" width={270}
        height={300}/>
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
                                <h3><a href="product-details.html">Easy Modern Chair</a></h3>
                                <div className="product-price">
                                    <span>$50.25 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-5.png" alt="" width={270}
        height={300}/>
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
                                    <span className="old-price">$45.00 </span>
                                    <span className="new-price">$40.00 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-2.png" alt="" width={270}
        height={300}/>
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
                                    <span>$30.25 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-1.png" alt="" width={270}
        height={300}/>
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
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-8.png" alt="" width={270}
        height={300}/>
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
                                <h3><a href="product-details.html">Modern Swivel Chair</a></h3>
                                <div className="product-price">
                                    <span>$50.25 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-7.png" alt="" width={270}
        height={300}/>
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
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35">
                            <div className="product-img img-zoom mb-25">
                                <a href="product-details.html">
                                    <Image src="/assets/images/product/product-6.png" alt="" width={270}
        height={300}/>
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
                                    <span>$30.25 </span>
                                </div>
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

export default HotProducts