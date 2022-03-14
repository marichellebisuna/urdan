import React, { useEffect } from 'react'
import Topbar from './Topbar'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { ALL_PRODUCTS_RESET } from '../../redux/constants/productConstants';
import Pagination from 'react-js-pagination';

const ShopList = () => {
    const dispatch = useDispatch();
    const { products} = useSelector(state => state.allProducts);  

    useEffect(() => {
     dispatch({type:ALL_PRODUCTS_RESET})
    }, [])
    
  return (
    <div id="shop-2" className="tab-pane active">
    {products && products.length === 0 
    ? 
    <div className="alert alert-danger mt-2 w-100">No products found.</div>
    : 
    products && products.map(product=>(
        <div className="shop-list-wrap mb-30" data-aos="fade-up" data-aos-delay="200" key={product._id}>
        <div className="row">
            <div className="col-lg-4 col-sm-5">
                <div className="product-list-img">
                        <Link href="/product/:id">
                    <a >
                        <Image src={product.images[0].url} alt="Product Style" width={270} height={300}/>
                    </a></Link>
                    <div className="product-list-badge badge-right badge-pink">
                        <span>-20%</span>
                    </div>
                    <div className="product-list-quickview">
                        <button className="product-action-btn-2" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="pe-7s-look"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 col-sm-7">
                <div className="shop-list-content">
                    <h3> <Link href="/product/:id">
                    <a >{product.title}</a></Link></h3>
                    <div className="product-price">
                        <span className="old-price">$70.89 </span>
                        <span className="new-price">${product.price} </span>
                    </div>
                    <div className="product-list-rating">
                        <i className=" ti-star"></i>
                        <i className=" ti-star"></i>
                        <i className=" ti-star"></i>
                        <i className=" ti-star"></i>
                        <i className=" ti-star"></i>
                    </div>
                    <p>{product.description}</p>
                    <div className="product-list-action">
                        <button className="product-action-btn-3" title="Add to cart"><i className="pe-7s-cart"></i></button>
                        <button className="product-action-btn-3" title="Wishlist"><i className="pe-7s-like"></i></button>
                        <button className="product-action-btn-3" title="Compare"><i className="pe-7s-shuffle"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ))}   
        <Pagination/>             
    </div>     
 )
}

export default ShopList