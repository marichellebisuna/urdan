import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '../../components/Breadcrumb'
import Description from '../../components/ProductDetails/Description'
import RelatedProducts from '../../components/ProductDetails/RelatedProducts'

const ProductDetails = () => {
  return (
    <>
     <Breadcrumb title='product details'/>
      <div className="product-details-area pb-100 pt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="product-details-img-wrap product-details-vertical-wrap" data-aos="fade-up" data-aos-delay="200">
              <div className="product-details-small-img-wrap">
                <div className="swiper-container product-details-small-img-slider-1 pd-small-img-style">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="product-details-small-img">
                          <Image src="/assets/images/product-details/pro-details-small-img-1.png" alt="Product Thumnail" width={87} height={96}/>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product-details-small-img">
                          <Image src="/assets/images/product-details/pro-details-small-img-2.png" alt="Product Thumnail" width={87} height={96}/>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product-details-small-img">
                          <Image src="/assets/images/product-details/pro-details-small-img-3.png" alt="Product Thumnail" width={87} height={96}/>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product-details-small-img">
                          <Image src="/assets/images/product-details/pro-details-small-img-4.png" alt="Product Thumnail" width={87} height={96}/>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="product-details-small-img">
                          <Image src="/assets/images/product-details/pro-details-small-img-5.png" alt="Product Thumnail" width={87} height={96}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pd-prev pd-nav-style"> <i className="ti-angle-up"></i></div>
                <div className="pd-next pd-nav-style"> <i className="ti-angle-down"></i></div>
              </div>
              <div className="swiper-container product-details-big-img-slider-1 pd-big-img-style">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="easyzoom-style">
                      <div className="easyzoom easyzoom--overlay">
                        <a href="assets/images/product-details/pro-details-zoom-img-1.png">
                            <Image src="/assets/images/product-details/pro-details-large-img-1.png" alt="" width={470} height={522}/>
                        </a>
                      </div>
                      <a href="assets/images/product-details/pro-details-large-img-1.png" className="easyzoom-pop-up img-popup" >
                          <i className="pe-7s-search"></i>
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="easyzoom-style">
                      <div className="easyzoom easyzoom--overlay">
                        <a href="assets/images/product-details/pro-details-zoom-img-2.png" >
                            <Image src="/assets/images/product-details/pro-details-large-img-2.png" alt="" width={470} height={522}/>
                        </a>
                      </div>
                      <a href="assets/images/product-details/pro-details-large-img-2.png" className="easyzoom-pop-up img-popup" >
                          <i className="pe-7s-search"></i>
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="easyzoom-style">
                      <div className="easyzoom easyzoom--overlay">
                        <a href="assets/images/product-details/pro-details-zoom-img-3.png">
                            <Image src="/assets/images/product-details/pro-details-large-img-3.png" alt="" width={470} height={522}/>
                        </a>
                      </div>
                      <a href="assets/images/product-details/pro-details-large-img-3.png" className="easyzoom-pop-up img-popup" >
                          <i className="pe-7s-search"></i>
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="easyzoom-style">
                      <div className="easyzoom easyzoom--overlay">
                       <a href="assets/images/product-details/pro-details-zoom-img-4.png" >
                            <Image src="/assets/images/product-details/pro-details-large-img-4.png" alt="" width={470} height={522}/>
                        </a>
                      </div>
                    <a href="assets/images/product-details/pro-details-large-img-4.png" className="easyzoom-pop-up img-popup" >
                          <i className="pe-7s-search"></i>
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="easyzoom-style">
                      <div className="easyzoom easyzoom--overlay">
                       <a href="assets/images/product-details/pro-details-zoom-img-5.png" >
                            <Image src="/assets/images/product-details/pro-details-large-img-5.png" alt="" width={470} height={522}/>
                        </a>
                      </div>
                      <a href="assets/images/product-details/pro-details-large-img-5.png" className="easyzoom-pop-up img-popup" >
                          <i className="pe-7s-search"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-details-content" data-aos="fade-up" data-aos-delay="400">
              <h2>New Modern Chair</h2>
              <div className="product-details-price">
                <span className="old-price">$25.89 </span>
                <span className="new-price">$20.25</span>
              </div>
              <div className="product-details-review">
                <div className="product-rating">
                    <i className=" ti-star"></i>
                    <i className=" ti-star"></i>
                    <i className=" ti-star"></i>
                    <i className=" ti-star"></i>
                    <i className=" ti-star"></i>
                </div>
                <span>( 1 Customer Review )</span>
              </div>
              <div className="product-color product-color-active product-details-color">
                <span>Color :</span>
                <ul>
                    <li><Link href="#"><a title="Pink" className="pink" >pink</a></Link></li>
                    <li><Link href="#"><a title="Yellow" className="active yellow" >yellow</a></Link></li>
                    <li><Link href="#"><a title="Purple" className="purple" >purple</a></Link></li>
                </ul>
              </div>
              <div className="product-details-action-wrap">
                <div className="product-quality">
                  <input className="cart-plus-minus-box input-text qty text" name="qtybutton" value="1"/>
                </div>
                <div className="single-product-cart btn-hover">
                  <Link href="/cart"><a >Add to cart</a></Link>
                </div>
                <div className="single-product-wishlist">
                  <Link href="/wishlist"><a title="Wishlist" ><i className="pe-7s-like"></i></a></Link>
                </div>
              
              </div>
              <div className="product-details-meta">
                <ul>
                  <li><span className="title">SKU:</span> Ch-256xl</li>
                  <li><span className="title">Category:</span>
                    <ul>
                      <li><Link href="/products"><a>Office</a></Link></li>
                      <li className='px-2'><Link href="/products"><a >Home</a></Link></li>
                    </ul>
                  </li>
                  <li><span className="title">Tags:</span>
                    <ul className="tag">
                      <li><Link href="/products"><a>Furniture</a></Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="social-icon-style-4">
               <Link href="/"><a><i className="fa fa-facebook"></i></a></Link>
               <Link href="/"><a><i className="fa fa-dribbble"></i></a></Link>
               <Link href="/"><a><i className="fa fa-linkedin"></i></a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Description/>
      <RelatedProducts/>
   </div>
    </>
  
  )
}

export default ProductDetails