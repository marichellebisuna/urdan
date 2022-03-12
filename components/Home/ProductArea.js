import React from 'react'
import Image from 'next/image'

const ProductArea = () => {
    
  return (
    <div className="product-area pb-100">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6">
                <div className="home-single-product-img" data-aos="fade-up" data-aos-delay="200">
                    <a href="product-details.html"><Image src="/assets/images/product/single-product.png" alt="" width={504}
        height={370}/></a>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="home-single-product-content">
                    <h2 data-aos="fade-up" data-aos-delay="200">Modern Chair</h2>
                    <h3 data-aos="fade-up" data-aos-delay="400">$20.25</h3>
                    <p data-aos="fade-up" data-aos-delay="600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore mt aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                    <div className="product-color" data-aos="fade-up" data-aos-delay="800">
                        <span>Color :</span>
                        <ul>
                            <li><a title="Pink" className="pink" href="#">pink</a></li>
                            <li><a title="Yellow" className="yellow" href="#">yellow</a></li>
                            <li><a title="Purple" className="purple" href="#">purple</a></li>
                        </ul>
                    </div>
                    <div className="product-details-action-wrap" data-aos="fade-up" data-aos-delay="1000">
                        <div className="product-quality">
                            <input className="cart-plus-minus-box input-text qty text" name="qtybutton" value="1" />
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
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProductArea