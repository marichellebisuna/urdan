import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Pagination from 'react-js-pagination';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const ShopList = () => {

    const router = useRouter()

    const { products,  productsCount, resPerPage, filteredProductsCount,} = useSelector(state => state.allProducts);  

    let { location, page = 1 } = router.query;
    page = Number(page)

  
    const handlePagination = (pageNumber) => {

        if (location) {
            let url = window.location.search

            url.includes('&page') ?
                url = url.replace(/(page=)[^\&]+/, '$1' + pageNumber)
                :
                url = url.concat(`&page=${pageNumber}`)

            router.push(url)

        } else {

            router.push(`/products/?page=${pageNumber}`)
            
        }

    }

    let count = productsCount;
    if (location) {
        count = filteredRoomsCount
    }

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
                        <Link href={`/product/${product._id}`}>
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
                    <h3><Link href={`/product/${product._id}`}>

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
        {resPerPage < count &&
    <div className="d-flex justify-content-center mt-5">
        <Pagination
            activePage={page}
            itemsCountPerPage={resPerPage}
            totalItemsCount={productsCount}
            onChange={handlePagination}
            nextPageText={'Next'}
            prevPageText={'Prev'}
            firstPageText={'First'}
            lastPageText={'Last'}
            itemClass='page-item'
            linkClass='page-link'
        />
    </div>
    }   
    </div>     
 )
}

export default ShopList