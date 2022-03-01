import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (   
    <div className="sidebar-wrapper">
        <div className="sidebar-widget mb-40" data-aos="fade-up" data-aos-delay="200">
            <div className="search-wrap-2">
                <form className="search-2-form" action="#">
                    <input placeholder="Search*" type="text"/>
                    <button className="button-search"><i className=" ti-search "></i></button>
                </form>
            </div>
        </div>
        <div className="sidebar-widget sidebar-widget-border mb-40 pb-35" data-aos="fade-up" data-aos-delay="200">
            <div className="sidebar-widget-title mb-30">
                <h3>Filter By Price</h3>
            </div>
            <div className="price-filter">
                <div id="slider-range"></div>
                <div className="price-slider-amount">
                    <div className="label-input">
                        <label>Price:</label>
                        <input type="text" id="amount" name="price" placeholder="Add Your Price" />
                    </div>
                    <button type="button">Filter</button>
                </div>
            </div>
        </div>
        <div className="sidebar-widget sidebar-widget-border mb-40 pb-35" data-aos="fade-up" data-aos-delay="200">
            <div className="sidebar-widget-title mb-25">
                <h3>Product Categories</h3>
            </div>
            <div className="sidebar-list-style">
                <ul>
                    <li><a href="shop.html">Accessories <span>4</span></a></li>
                    <li><a href="shop.html">Book <span>9</span></a></li>
                    <li><a href="shop.html">Clothing <span>5</span></a></li>
                    <li><a href="shop.html">Homelife <span>3</span></a></li>
                    <li><a href="shop.html">Kids & Baby <span>4</span></a></li>
                    <li><a href="shop.html">Stationery <span>8</span></a></li>
                    <li><a href="shop.html">Health & Beauty <span>3</span></a></li>
                    <li><a href="shop.html">Home Appliances <span>4</span></a></li>
                </ul>
            </div>
        </div>
        <div className="sidebar-widget sidebar-widget-border mb-40 pb-35" data-aos="fade-up" data-aos-delay="200">
            <div className="sidebar-widget-title mb-25">
                <h3>Choose Colour</h3>
            </div>
            <div className="sidebar-widget-color sidebar-list-style">
                <ul>
                    <li><a className="black" href="#">Black <span>4</span></a></li>
                    <li><a className="blue" href="#">Blue <span>9</span></a></li>
                    <li><a className="brown" href="#">Brown <span>5</span></a></li>
                    <li><a className="red" href="#">Red <span>3</span></a></li>
                    <li><a className="orange" href="#">Orange <span>4</span></a></li>
                </ul>
            </div>
        </div>
        <div className="sidebar-widget sidebar-widget-border mb-40 pb-35" data-aos="fade-up" data-aos-delay="200">
            <div className="sidebar-widget-title mb-25">
                <h3>Size</h3>
            </div>
            <div className="sidebar-widget-size sidebar-list-style">
                <ul>
                    <li><a href="#">XL <span>4</span></a></li>
                    <li><a href="#">M <span>9</span></a></li>
                    <li><a href="#">LM <span>5</span></a></li>
                    <li><a href="#">L <span>3</span></a></li>
                    <li><a href="#">ML <span>4</span></a></li>
                </ul>
            </div>
        </div>
        <div className="sidebar-widget" data-aos="fade-up" data-aos-delay="200">
            <div className="sidebar-widget-title mb-25">
                <h3>Tags</h3>
            </div>
            <div className="sidebar-widget-tag">
                <a href="#">All, </a>
                <a href="#">Clothing, </a>
                <a href="#"> Kids, </a>
                <a href="#">Accessories, </a>
                <a href="#">Stationery, </a>
                <a href="#">Homelife, </a>
                <a href="#">Appliances, </a>
                <a href="#">Clothing, </a>
                <a href="#">Baby, </a>
                <a href="#">Beauty </a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar