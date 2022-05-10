import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux';

import Swiper, { Navigation} from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

 //import { Modal } from 'react-bootstrap';
import Modal from '../ModalWindow'

const ProductArea = () => {
const [popUpContent, setPopUpContent] = useState([]);
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const showModal = (product) =>{    
    console.log(product.title);
    console.log(product.price);       
    setPopUpContent([product])  
    setShow(true)
} 

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
                                    <button className="product-action-btn-1" title="Quick View"
                                    onClick={()=>showModal( product ) }>   
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
                                    <span className="old-price">$25.90 </span>
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

    {show && 
             <div className="quickview-modal-style" onClick={handleClose}>
            <div className="modal-dialog modal-dialog-centered" role="document" >
                <div className="modal-content" >
                    <div className="modal-header">
                        <a href="#" className="close" onClick={handleClose}><i className=" ti-close "></i></a>
                    </div>
                    {popUpContent.map((pop)=>{  
                        return (
                    <div className="modal-body">
                        <div className="row gx-0">
                            <div className="col-lg-5 col-md-5 col-12">
                                <div className="modal-img-wrap">                                
                                    <Image 
                                src={pop.images[0].url}
                                alt="" width={429} height={476}/>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-12">
                                <div className="product-details-content quickview-content">
                                    <h2>{pop.title}</h2>
                                    <div className="product-details-price">
                                        <span className="old-price">$25.89 </span>
                                        <span className="new-price">${pop.price}</span>
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
                                    <p>{pop.description}</p>
                                    <div className="product-details-action-wrap">
                                        <div className="product-quality">
                                            <input className="cart-plus-minus-box input-text qty text" name="qtybutton" value="1"/>
                                        </div>
                                        <div className="single-product-cart btn-hover">
                                            <a href="#">Add to cart</a>
                                        </div>
                                        <div className="single-product-wishlist">
                                            <a title="Wishlist" href="#"><i className="pe-7s-like"></i></a>
                                        </div>
                                        <div className="single-product-compare">
                                            <a title="Compare" href="#"><i className="pe-7s-shuffle"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ) 
                    })}
                </div>
            </div>
            </div>    

    }          
        </div>    
    </div>
  )
}

export default ProductArea
