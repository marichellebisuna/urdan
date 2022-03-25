import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const RelatedProducts = () => {
const { products} = useSelector(state => state.allProducts);  
    
const [productItems, setProductItems] = useState(products)

useEffect(()=>{   
setProductItems(products)
},[products])

  return (
    <div className="related-product-area pb-95">
      <div className="container">
          <div className="section-title-2 st-border-center text-center mb-75" data-aos="fade-up" data-aos-delay="200">
              <h2>Related Products</h2>
          </div>
          <div className="related-product-active swiper-container">
              <div className="swiper-wrapper">
                     <Swiper
        slidesPerView={5}
        loop={true}
        spaceBetween={30} 
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        className="mySwiper"
      >   
              {products && products.length === 0 
                ? 
                <div className="alert alert-danger mt-2 w-100">No products found.</div>
                : 
                productItems && productItems.map(product=>(<SwiperSlide>
                      <div key={product._id} className="swiper-slide" >
                      <div className="product-wrap" data-aos="fade-up" data-aos-delay="200">
                          <div className="product-img img-zoom mb-25">
                              <Link href={`/product/${product._id}`}><a >
                                  <Image src={product.images[0].url} alt="" width={270} height={300}/>
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
                              <h3><Link href="/product/:id"><a >{product.title}</a></Link ></h3>
                              <div className="product-price">
                                  <span className="old-price">$25.89 </span>
                                  <span className="new-price">${product.price}</span>
                              </div>
                          </div>
                      </div>
                  </div></SwiperSlide>               
                ))} </Swiper>
              </div>
          </div>
       
          
      </div>
    </div>
  )
}

export default RelatedProducts