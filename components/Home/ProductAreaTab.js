import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux';

import Swiper, { Navigation} from 'swiper'; 
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductArea = () => {  
const { products} = useSelector(state => state.allProducts);    
    
const [productItems, setProductItems] = useState(products)

useEffect(()=>{   
setProductItems(products)
},[products])

const swiper = new Swiper('.product-slider-active-1', {
loop: true,
spaceBetween: 30,
modules:[Navigation],
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
    <div className="product-area pb-95" >
    <div className="container">
        <div className="section-border section-border-margin-1" data-aos="fade-up" data-aos-delay="200">
            <div className="section-title-timer-wrap bg-white">
                <div className="section-title-1">
                    <h2>Deal Of The Day </h2>
                </div>
            </div>
        </div>
        <div className="product-slider-active-1 swiper-container swiper ">
            <div id="sliderActiveTwo" className="swiper-wrapper">               
                {products && products.length === 0 
                ? 
                <div className="alert alert-danger mt-2 w-100">No products found.</div>
                : 
                productItems && productItems.map(product=>(               

                <div className="swiper-slide" key={product._id}>
                    <div className="product-wrap" data-aos="fade-up" data-aos-delay="200">
                        <div className="product-img img-zoom mb-25">
                            <Link href={`/product/${product._id}`}>
                            <a>
                                <Image 
                                src={product.images[0].url}
                                alt="" width={270} height={300}/>
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
                            <h3> <Link href={`/product/${product._id}`}><a>{product.title}</a></Link></h3>  
                            <div className="product-price">
                                <span className="old-price">$25.89 </span>                 
                                <span className="new-price">${product.price} </span>

                            </div>
                        </div>
                    </div>
                </div>  
   ))}
  </div>
            <div className="product-prev-1 product-nav-1 " data-aos="fade-up" data-aos-delay="200"><i className="fa fa-angle-left"></i></div>
            <div className="product-next-1 product-nav-1 " data-aos="fade-up" data-aos-delay="200"><i className="fa fa-angle-right"></i></div>
        </div>
    </div>
</div>                       
  )
}

export default ProductArea
