import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Pagination from './Pagination'

const ShopGrid = () => {
  return (
    <div >
      <div className="shop-topbar-wrapper mb-40">
        <div className="shop-topbar-left">
          <div className="showing-item">
              <span>Showing 1–12 of 60 results</span>
          </div>
        </div>
        <div className="shop-topbar-right">
          <div className="shop-sorting-area">
            <select className="nice-select nice-select-style-1">
                <option>Default Sorting</option>
                <option>Sort by popularity</option>
                <option>Sort by average rating</option>
                <option>Sort by latest</option>
            </select>
          </div>
          <div className="shop-view-mode nav">
            <Link href="#shop-1">
              <a className="active"  data-bs-toggle="tab"><i className=" ti-layout-grid3 "></i> </a>
            </Link>  
            <Link href="#shop-2"> 
              <a data-bs-toggle="tab" className=""><i className=" ti-view-list-alt "></i></a>
            </Link>   
          </div>
        </div>
      </div>
      <div className="shop-bottom-area">
        <div className="tab-content jump">
          <div id="shop-1" className="tab-pane active">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="200">
                    <div className="product-img img-zoom mb-25">
                      <Link href="/product/:id">
                        <a >
                            <Image src="/assets/images/product/product-5.png" alt="" width={270} height={300}/>
                        </a>
                      </Link>
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
                        <h3><Link href="/product/:id"><a >Interior moderno render</a></Link></h3>
                        <div className="product-price">
                            <span className="old-price">$25.89 </span>
                            <span className="new-price">$20.25 </span>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="400">
                    <div className="product-img img-zoom mb-25">
                      <Link href="/product/:id">
                        <a>
                            <Image src="/assets/images/product/product-6.png" alt="" width={270} height={300}/>
                        </a>
                      </Link>
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
                        <h3>
                          <Link href="/product/:id">
                            <a >Stylish Dining Chair</a>
                          </Link>  
                        </h3>
                        <div className="product-price">
                            <span>$50.25 </span>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="600">
                      <div className="product-img img-zoom mb-25">
                      <Link href="/product/:id">
                          <a >
                              <Image src="/assets/images/product/product-7.png" alt="" width={270} height={300}/>
                          </a>
                      </Link>
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
                          <h3>
                          <Link href="/product/:id">
                            <a>Round Standard Chair</a>
                          </Link>
                            </h3>
                          <div className="product-price">
                              <span className="old-price">$45.00 </span>
                              <span className="new-price">$40.00 </span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="800">
                      <div className="product-img img-zoom mb-25">
                      <Link href="/product/:id">
                          <a >
                              <Image src="/assets/images/product/product-4.png" alt="" width={270} height={300}/>
                          </a>
                      </Link>
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
                          <h3>
                          <Link href="/product/:id">
                            <a >Stylish Swing Chair</a>
                          </Link>
                          </h3>
                          <div className="product-price">
                              <span>$30.25 </span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="200">
                      <div className="product-img img-zoom mb-25">
                        <Link href="/product/:id">
                          <a >
                              <Image src="/assets/images/product/product-8.png" alt="" width={270} height={300}/>
                          </a>
                        </Link>
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
                          <h3>
                          <Link href="/product/:id">
                            <a >Modern Swivel Chair</a>
                          </Link>
                          </h3>
                          <div className="product-price">
                              <span className="old-price">$25.89 </span>
                              <span className="new-price">$20.25 </span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="400">
                      <div className="product-img img-zoom mb-25">
                      <Link href="/product/:id">
                          <a>
                              <Image src="/assets/images/product/product-2.png" alt="" width={270} height={300}/>
                          </a>
                      </Link>
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
                          <h3>
                          <Link href="/product/:id">
                            <a >New Modern Sofa Set</a>
                          </Link></h3>
                          <div className="product-price">
                              <span>$50.25 </span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="600">
                      <div className="product-img img-zoom mb-25">
                      <Link href="/product/:id">
                          <a >
                              <Image src="/assets/images/product/product-3.png" alt="" width={270} height={300}/>
                          </a>
                          </Link>
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
                          <h3> <Link href="/product/:id"><a >Easy Modern Chair</a></Link></h3>
                          <div className="product-price">
                              <span className="old-price">$45.00 </span>
                              <span className="new-price">$40.00 </span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="800">
                      <div className="product-img img-zoom mb-25">
                      <Link href="/product/:id">
                          <a >
                              <Image src="/assets/images/product/product-9.png" alt="" width={270} height={300}/>
                          </a></Link>
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
                          <h3> <Link href="/product/:id"><a>Modern Lounge Chairs</a></Link></h3>
                          <div className="product-price">
                              <span>$30.25 </span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="1000">
                      <div className="product-img img-zoom mb-25">
                      <Link href="/product/:id">
                          <a>
                              <Image src="/assets/images/product/product-1.png" alt="" width={270} height={300}/>
                          </a></Link>
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
                          <h3> <Link href="/product/:id"><a >New Modern Sofa Set</a></Link></h3>
                          <div className="product-price">
                              <span className="old-price">$25.89 </span>
                              <span className="new-price">$20.25 </span>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="pagination-style-1" data-aos="fade-up" data-aos-delay="200">
                <ul>
                  
                    <li>
                    <Link href="#">
                      <a className="active" >1</a>
                    </Link>
                    </li>
                    <li><Link href="#"><a >2</a></Link></li>
                    <li><Link href="#"><a >3</a></Link></li>
                    <li><Link href="#"><a className="next" ><i className=" ti-angle-double-right "></i></a></Link></li>
                </ul>
            </div>
          </div>
          <div id="shop-2" className="tab-pane">
              <div className="shop-list-wrap mb-30">
                  <div className="row">
                      <div className="col-lg-4 col-sm-5">
                          <div className="product-list-img">
                          <Link href="/product/:id">
                              <a >
                                  <Image src="/assets/images/product/product-5.png" alt="Product Style" width={270} height={300}/>
                              </a></Link>
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
                              <h3> <Link href="/product/:id"><a>Interior moderno render</a></Link></h3>
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
              <div className="shop-list-wrap mb-30">
                  <div className="row">
                      <div className="col-lg-4 col-sm-5">
                          <div className="product-list-img">
                          <Link href="/product/:id">
                              <a >
                                  <Image src="/assets/images/product/product-7.png" alt="Product Style" width={270} height={300}/>
                              </a></Link>
                              <div className="product-list-quickview">
                                  <button className="product-action-btn-2" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                      <i className="pe-7s-look"></i>
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-8 col-sm-7">
                          <div className="shop-list-content">
                              <h3> <Link href="/product/:id"><a >Round Standard Chair</a></Link></h3>
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
              <div className="shop-list-wrap mb-30">
                  <div className="row">
                      <div className="col-lg-4 col-sm-5">
                          <div className="product-list-img">
                          <Link href="/product/:id"><a >
                                  <Image src="/assets/images/product/product-4.png" alt="Product Style" width={270} height={300}/>
                              </a></Link>
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
                              <h3> <Link href="/product/:id"><a>Stylish Swing Chair</a></Link></h3>
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
              <div className="shop-list-wrap mb-30">
                  <div className="row">
                      <div className="col-lg-4 col-sm-5">
                          <div className="product-list-img">
                          <Link href="/product/:id"><a >
                                  <Image src="/assets/images/product/product-8.png" alt="Product Style" width={270} height={300}/>
                              </a></Link>
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
                              <h3> <Link href="/product/:id"><a>Modern Swivel Chair</a></Link></h3>
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
              <Pagination/>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopGrid