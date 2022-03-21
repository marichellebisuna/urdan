import React, {useState, useEffect } from 'react'
import Description from './Description'
import RelatedProducts from './RelatedProducts'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Breadcrumb from '../Breadcrumb'
import Script from 'next/script'
import Swiper, { Navigation} from 'swiper'; 
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductDetails = () => {
const { product} = useSelector(state => state.productDetails);
const [productItem, setProductItem] = useState(product)

useEffect(()=>{
setProductItem(product)
},[product])

const swiper = new Swiper('.product-slider-active-1', {
  loop: true,
  spaceBetween: 30,
  observer: true,
  modules:[Navigation],
          observeParents:true,
          parallax:true,
  navigation: {
      nextEl: '.product-next-1',
      prevEl: '.product-prev-1',
  },
  breakpoints: {
      320: {
          slidesPerView: 1
      },
      576: {
          slidesPerView: 2
      },
      768: {
          slidesPerView: 3
      },
      992: {
          slidesPerView: 3
      },
      1200: {
          slidesPerView: 4
      }
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
              <div className="swiper-container 
                product-details-small-img-slider-1 
              pd-small-img-style">
                <div className="swiper-wrapper">
                  {productItem && productItem.images && productItem.images.map((image)=>
                    <div className="swiper-slide" key={image.public_id}>
                    <div className="product-details-small-img">
                        <Image src={image.url} alt="Product Thumnail" width={87} height={96}/>
                    </div>
                  </div>
                  )}
                 
                </div>
              </div>
              <div className="pd-prev pd-nav-style"> <i className="ti-angle-up"></i></div>
              <div className="pd-next pd-nav-style"> <i className="ti-angle-down"></i></div>
            </div>
            <div className="swiper-container product-details-big-img-slider-1 pd-big-img-style">
              <div className="swiper-wrapper">
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
        <div className="col-lg-6">
          <div className="product-details-content" data-aos="fade-up" data-aos-delay="400">
            <h2>{product.title}</h2>
            <div className="product-details-price">
              <span className="old-price">$25.89 </span>
              <span className="new-price">${product.price}</span>
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