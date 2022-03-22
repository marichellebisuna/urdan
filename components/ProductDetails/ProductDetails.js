import React, {useState, useEffect } from 'react'
import Description from './Description'
import RelatedProducts from './RelatedProducts'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Breadcrumb from '../Breadcrumb'
import Script from 'next/script'
import Head from "next/head";

import Swiper,{ Navigation, Thumbs, FreeMode, Zoom} from 'swiper'; 

import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/zoom';

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
const { product} = useSelector(state => state.productDetails);
const [productItem, setProductItem] = useState(product)

useEffect(()=>{
 
setProductItem(product)

},[product])

Swiper.use([Navigation, Thumbs, FreeMode, Zoom]);
const productDetailsSmallOne = new Swiper('.product-details-small-img-slider-1', {
  loop: false,
  spaceBetween: 12,
  slidesPerView: 4,
  observer: true,
  modules:[Navigation, Thumbs, FreeMode],
  zoom:true,
  observeParents:true,
  parallax:true,
  direction: 'vertical',
  navigation: {
      nextEl: '.pd-next',
      prevEl: '.pd-prev',
  },
  breakpoints: {
      0: {
          slidesPerView: 2,
      },
      576: {
          slidesPerView: 4,
      },
      992: {
          slidesPerView: 3,
      },
      1200: {
          slidesPerView: 4,
      },
  }
});

const productDetailsBigThree = new Swiper('.product-details-big-img-slider-1', {
  autoplay: false,
  delay: 5000,
  slidesPerView: 1,
  loop: false,
  observer: true,
  modules:[Navigation, Thumbs, FreeMode, Zoom],
  observeParents:true,
  parallax:true,
  thumbs: {
      swiper: productDetailsSmallOne
  },
  zoom: true,
  // zoom: {
  //   maxRatio: 3,
  //   minRatio: 1,
  //   // toggle:true
  // },
  keyboard: {
    enabled: true,
     },
  
});


  return (
    <>
    <Breadcrumb title={product.title}/>
    
    <div className="product-details-area pb-100 pt-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="product-details-img-wrap product-details-vertical-wrap" data-aos="fade-up" data-aos-delay="200">
            <div className="product-details-small-img-wrap">
              <div className="swiper swiper-container 
                product-details-small-img-slider-1 
              pd-small-img-style">
                <div id="productDetailsSmallOne" className="swiper-wrapper">
               
                  {productItem && productItem.images && productItem.images.map((image)=>
                      
                   
                   <div className="swiper-slide " key={image.public_id}>
                    <div className="product-details-small-img ">
                        <Image src={image.url} alt="Product Thumnail" width={87} height={96}/>
                    </div>
                  </div>
                   
                  )}
                 
                </div>
              </div>
              <div className="pd-prev pd-nav-style"> <i className="ti-angle-up"></i></div>
              <div className="pd-next pd-nav-style"> <i className="ti-angle-down"></i></div>
            </div>
            
            <div className="swiper swiper-container product-details-big-img-slider-1 pd-big-img-style">
              <div id="productDetailsBigThree" className="swiper-wrapper">        
           
              {productItem && productItem.images && productItem.images.map((image)=>
              
                   <div className="swiper-slide " key={image.public_id} >
                   {/* <div className="swiper-zoom-container"> */}
                   
                      <div className="zoom-style " data-swiper-zoom="10">
                          <div className=" zoom zoom--overlay " >                            
                              {/* <a href={image.url} > */}
                                  <Image src={image.url} alt={image.title} width={470} height={522}/>
                              {/* </a> */}
                              {/* <div
                                
                                style={{backgroundImage: `url(${image.url})`, width:"470", height:"522"}}
                              ></div> */}
                          </div>
                          
                          {/* <a className="zoom-pop-up img-popup" href={image.url}>
                              <i className="pe-7s-search"></i>
                          </a> */}
                      </div>
                   
                  {/* </div> */}
                  </div>
              
                  )} 
          
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="product-details-content" data-aos="fade-up" data-aos-delay="400">
            <h2>{product.title}</h2>
            <div className="product-details-price">
              <span className="old-price">$25.89 </span>
              <span className="new-price">${product.price}</span>
            </div>
            <div className="product-details-review">
            <div className="rating-outer ">
                <div
                    className="rating-inner "
                    style={{ width: `${(product.rating / 5) * 100}%` }}
                ></div>
            </div>
              {/* <div className="product-rating">
               
                  <i className=" ti-star"></i>
                  <i className=" ti-star"></i>
                  <i className=" ti-star"></i>
                  <i className=" ti-star"></i>
                  <i className=" ti-star"></i>
              </div> */}
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
                <li className="mx-2 text-capitalize"><span className="title">SKU:</span> {product.sku}</li>
                <li><span className="title">Category:</span>
                  <ul>
                    <li className="mx-2 text-capitalize"><Link href="/products"><a>{product.category}</a></Link></li>
                   
                  </ul>
                </li>
                <li><span className="title">Tags:</span>
                
                  <ul className="tag">
                    {product && product.images && product.tags.map((tag, index)=>(
                        <li key={index} className="mx-2 text-capitalize"><Link href="/products"><a>{tag}</a></Link></li>
                ))}
                   
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