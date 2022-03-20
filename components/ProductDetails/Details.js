import React, {useState, useEffect } from 'react'
import Description from './Description'
import RelatedProducts from './RelatedProducts'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Breadcrumb from '../Breadcrumb'
import Script from 'next/script'

import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react' 

const ProductDetails = () => {
  const { product} = useSelector(state => state.productDetails);
console.log(product)

const [productItem, setProductItem] = useState(product)
console.log(product)
useEffect(()=>{
setProductItem(product)
},[product])
console.log(productItem)

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(next)
      })
    })
  }
}
const [sliderRef, instanceRef] = useKeenSlider({
  initial: 0,
})
const [thumbnailRef] = useKeenSlider(
  {
    initial: 0,
    slides: {
      perView: 4,
      spacing: 10,
    },
  },
  [ThumbnailPlugin(instanceRef)]
)
  return (
    <>
    <Script
        id="product-details-small-img-slider-1"
        src="/assets/js/main.js"
       
      />
      <Breadcrumb title={product.title}/>
     
    <div className="product-details-area pb-100 pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="product-details-img-wrap product-details-vertical-wrap" data-aos="fade-up" data-aos-delay="200">
                            <div className="product-details-small-img-wrap">
                                <div className="swiper-container product-details-small-img-slider-1 pd-small-img-style">
                                 
                                  <div className="swiper-wrapper">
                                    <div ref={sliderRef} className="keen-slider">
                                    {productItem && productItem.images && productItem.images.map((image)=>
                    <div className="swiper-slide" key={image.public_id}>
                    <div className="product-details-small-img">
                        <Image src={image.url} alt="Product Thumnail" width={87} height={96}/>
                    </div>
                  </div>
                  )}
                                   
                                    </div>
                                  </div>
                                  
                                </div>
                                <div className="pd-prev pd-nav-style"> <i className="ti-angle-up"></i></div>
                                <div className="pd-next pd-nav-style"> <i className="ti-angle-down"></i></div>
                            </div>
                            <div className="swiper-container product-details-big-img-slider-1 pd-big-img-style">
                                <div className="swiper-wrapper">
                                  <div ref={thumbnailRef} className="keen-slider thumbnail">
                                  {productItem && productItem.images && productItem.images.map((image)=>
                    <div className="swiper-slide" key={image.public_id}>
                   <div className="swiper-slide">
                                        <div className="easyzoom-style">
                                            <div className="easyzoom easyzoom--overlay">
                                                <a href={image.url}>
                                                    <Image src={image.url} alt={image.title} width={470} height={522}/>
                                                </a>
                                            </div>
                                            <a className="easyzoom-pop-up img-popup" href={image.url}>
                                                <i className="pe-7s-search"></i>
                                            </a>
                                        </div>
                                    </div>
                  </div>
                  )}
                                    
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
                                    <li><a title="Pink" className="pink" href="#">pink</a></li>
                                    <li><a title="Yellow" className="active yellow" href="#">yellow</a></li>
                                    <li><a title="Purple" className="purple" href="#">purple</a></li>
                                </ul>
                            </div>
                            <div className="product-details-action-wrap">
                                <div className="product-quality">
                                    <input className="cart-plus-minus-box input-text qty text" name="qtybutton" value="1"/>
                                </div>
                                <div className="single-product-cart btn-hover">
                                    <a href="#">Add to cart</a>
                                </div>
                                <div className="single-product-wishlist">
                                    <a title="Wishlist" href="wishlist.html"><i className="pe-7s-like"></i></a>
                                </div>
                                <div className="single-product-compare">
                                    <a title="Compare" href="#"><i className="pe-7s-shuffle"></i></a>
                                </div>
                            </div>
                            <div className="product-details-meta">
                                <ul>
                                    <li><span className="title">SKU:</span> Ch-256xl</li>
                                    <li><span className="title">Category:</span>
                                        <ul>
                                            <li><a href="#">Office</a>,</li>
                                            <li><a href="#">Home</a></li>
                                        </ul>
                                    </li>
                                    <li><span className="title">Tags:</span>
                                        <ul className="tag">
                                            <li><a href="#">Furniture</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="social-icon-style-4">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                                <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 </>
  )
}

export default ProductDetails