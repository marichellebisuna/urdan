import React from 'react'
import Image from 'next/image'

const MobileMenu = () => {
  return (
    <div className="off-canvas-active">
    <a className="off-canvas-close"><i className=" ti-close "></i></a>
    <div className="off-canvas-wrap">
        <div className="welcome-text off-canvas-margin-padding">
            <p>Default Welcome Msg! </p>
        </div>
        <div className="mobile-menu-wrap off-canvas-margin-padding-2">
            <div id="mobile-menu" className="slinky-mobile-menu text-left">
                <ul>
                    <li>
                        <a href="#">HOME</a>
                        <ul>
                            <li><a href="index.html">Home version 1 </a></li>
                            <li><a href="index-2.html">Home version 2</a></li>
                            <li><a href="index-3.html">Home version 3</a></li>
                            <li><a href="index-4.html">Home version 4</a></li>
                            <li><a href="index-5.html">Home version 5</a></li>
                            <li><a href="index-6.html">Home version 6</a></li>
                            <li><a href="index-7.html">Home version 7</a></li>
                            <li><a href="index-8.html">Home version 8</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">SHOP</a>
                        <ul>
                            <li>
                                <a href="#">Shop Layout</a>
                                <ul>
                                    <li><a href="shop.html">Standard Style</a></li>
                                    <li><a href="shop-sidebar.html">Shop Grid Sidebar</a></li>
                                    <li><a href="shop-list.html">Shop List Style</a></li>
                                    <li><a href="shop-list-sidebar.html">Shop List Sidebar</a></li>
                                    <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                    <li><a href="shop-location.html">Store Location</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Product Layout</a>
                                <ul>
                                    <li><a href="product-details.html">Tab Style 1</a></li>
                                    <li><a href="product-details-2.html">Tab Style 2</a></li>
                                    <li><a href="product-details-gallery.html">Gallery style </a></li>
                                    <li><a href="product-details-affiliate.html">Affiliate style</a></li>
                                    <li><a href="product-details-group.html">Group Style</a></li>
                                    <li><a href="product-details-fixed-img.html">Fixed Image Style </a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">PAGES </a>
                        <ul>
                            <li><a href="about-us.html">About Us </a></li>
                            <li><a href="cart.html">Cart Page</a></li>
                            <li><a href="checkout.html">Checkout </a></li>
                            <li><a href="my-account.html">My Account</a></li>
                            <li><a href="wishlist.html">Wishlist </a></li>
                            <li><a href="compare.html">Compare </a></li>
                            <li><a href="contact-us.html">Contact us </a></li>
                            <li><a href="login-register.html">Login / Register </a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">BLOG </a>
                        <ul>
                            <li><a href="blog.html">Blog Standard </a></li>
                            <li><a href="blog-sidebar.html">Blog Sidebar</a></li>
                            <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="about-us.html">ABOUT US</a>
                    </li>
                    <li>
                        <a href="contact-us.html">CONTACT US</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="language-currency-wrap language-currency-wrap-modify">
            <div className="currency-wrap border-style">
                <a className="currency-active" href="#">$ Dollar (US) <i className=" ti-angle-down "></i></a>
                <div className="currency-dropdown">
                    <ul>
                        <li><a href="#">Taka (BDT) </a></li>
                        <li><a href="#">Riyal (SAR) </a></li>
                        <li><a href="#">Rupee (INR) </a></li>
                    </ul>
                </div>
            </div>
            <div className="language-wrap">
                <a className="language-active" href="#"><Image src="/assets/images/icon-img/flag.png" alt=""width={16} height={11}/> English <i className=" ti-angle-down "></i></a>
                <div className="language-dropdown">
                    <ul>
                        <li><a href="#"><Image src="/assets/images/icon-img/flag.png" alt=""width={16} height={11}/>English </a></li>
                        <li><a href="#"><Image src="/assets/images/icon-img/spanish.png" alt=""width={16} height={11}/>Spanish</a></li>
                        <li><a href="#"><Image src="/assets/images/icon-img/arabic.png" alt=""width={16} height={11}/>Arabic </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default MobileMenu