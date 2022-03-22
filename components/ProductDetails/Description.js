import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const Description = () => {

const { product} = useSelector(state => state.productDetails);
const [productItem, setProductItem] = useState(product)
  console.log(product)

  useEffect(()=>{
 
    setProductItem(product)
    
    },[product])

  return (
    <div className="description-review-area pb-85 py-5">
      <div className="container">
        <div className="description-review-topbar nav" data-aos="fade-up" data-aos-delay="200">
          <Link href="#des-details1"><a className="active" data-bs-toggle="tab" > Description </a></Link>
          <Link href="#des-details2"><a data-bs-toggle="tab"  className=""> Information </a></Link>
          <Link href="#des-details3"><a data-bs-toggle="tab"  className=""> Reviews </a></Link>
        </div>
        <div className="tab-content">
          <div id="des-details1" className="tab-pane active">
              <div className="product-description-content text-center">
                  <p data-aos="fade-up" data-aos-delay="200"> {product.content}</p>
                  {/* <p data-aos="fade-up" data-aos-delay="400">{product.content}</p> */}
              </div>
          </div>
          <div id="des-details2" className="tab-pane">
              <div className="specification-wrap table-responsive">
                <table>
                  <tbody>
                    <tr>
                        <td className="width1">Brands</td>
                        <td>Airi, Brand, Draven, Skudmart, Yena</td>
                    </tr>
                    <tr>
                        <td className="width1">Color</td>
                        <td>Blue, Gray, Pink</td>
                    </tr>
                    <tr>
                        <td className="width1">Size</td>
                        <td>L, M, S, XL, XXL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
          <div id="des-details3" className="tab-pane">
            <div className="review-wrapper">
              <h3>1 review for Sleeve Button Cowl Neck</h3>
              <div className="single-review">
                <div className="review-img">
                    <Image src="/assets/images/product-details/review-1.png" alt="" width={100} height={100}/>
                </div>
                <div className="review-content">
                  <div className="review-rating">
                    <Link href="#"><a ><i className="ti-star"></i></a></Link>
                    <Link href="#"><a ><i className="ti-star"></i></a></Link>
                    <Link href="#"><a ><i className="ti-star"></i></a></Link>
                    <Link href="#"><a ><i className="ti-star"></i></a></Link>
                    <Link href="#"><a ><i className="ti-star"></i></a></Link>
                  </div>
                  <h5><span>HasTech</span> - April 29, 2020</h5>
                  <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque</p>
                </div>
              </div>
            </div>
            <div className="ratting-form-wrapper">
              <h3>Add a Review</h3>
              <p>Your email address will not be published. Required fields are marked <span>*</span></p>
              <div className="your-rating-wrap">
                <span>Your rating</span>
                <div className="your-rating">
                    <Link href="#"><a ><i className="ti-star"></i></a></Link>
                    <Link href="#"><a ><i className="ti-star"></i></a></Link>
                    <Link href="#"><a ><i className="ti-star"></i></a></Link>
                    <Link href="#"><a ><i className="ti-star"></i></a></Link>
                    <Link href="#"><a ><i className="ti-star"></i></a></Link>
                </div>
              </div>
              <div className="ratting-form">
                <form action="#">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="rating-form-style mb-15">
                                <label>Name <span>*</span></label>
                                <input type="text"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="rating-form-style mb-15">
                                <label>Email <span>*</span></label>
                                <input type="email"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="rating-form-style mb-15">
                                <label>Your review <span>*</span></label>
                                <textarea name="Your Review"></textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="save-email-option">
                                <p><input type="checkbox"/> <label>Save my name, email, and website in this browser for the next time I comment.</label></p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-submit">
                                <input type="submit" value="Submit"/>
                            </div>
                        </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description