import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import Pagination from 'react-js-pagination'
import { useRouter } from 'next/router';
import Modal from '../ModalWindow'

const ShopGrid = () => {
    const [popUpContent, setPopUpContent] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const showModal = (product) =>{    
    console.log(product.title);
    console.log(product.price);       
    setPopUpContent([product])  
    setShow(true)
} 
  
    const router = useRouter()

    const {  products,  productsCount, resPerPage, filteredProductsCount,} = useSelector(state => state.allProducts);  

    let { location, page = 1 } = router.query;
    page = Number(page)
  

    const handlePagination = (pageNumber) => {

        if (location) {
            const { origin } = absoluteUrl(req);
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
<div id="shop-1" className="tab-pane active">
    <div className="row">
        {products && products.length === 0 
        ? 
            <div className="alert alert-danger mt-2 w-100">No products found.</div>
        : 
             products && products.map(product=>(
                <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={products._id}>
                <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="200">
                    <div className="product-img img-zoom mb-25">
                    <Link href={`/product/${product._id}`}>
                        <a >
                            <Image src={product.images[0].url} alt="" width={270} height={300}/>
                        </a>
                    </Link>
                        <div className="product-badge badge-top badge-right badge-pink">
                            <span>-10%</span>
                        </div>
                        <div className="product-action-wrap">
                            <button className="product-action-btn-1" title="Wishlist"><i className="pe-7s-like"></i></button>
                            <button className="product-action-btn-1" title="Quick View"    onClick={()=>showModal( product ) }> 
                                <i className="pe-7s-look"></i>
                            </button>
                           
                        </div>
                        <div className="product-action-2-wrap">
                            <button className="product-action-btn-2" title="Add To Cart"><i className="pe-7s-cart"></i> Add to cart</button>
                        </div>
                    </div>
                    <div className="product-content">
                        <h3><Link href={`/product/${product._id}`}>
                                <a >{product.title}</a></Link></h3>
                        <div className="product-price">
                            <span className="old-price">$25.89 </span>
                            <span className="new-price">${product.price} </span>
                        </div>
                    </div>
                </div>
                </div>
        ))}  
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

export default ShopGrid