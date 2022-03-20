import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import Pagination from 'react-js-pagination'
import { useRouter } from 'next/router';

const ShopGrid = () => {
 
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
                            <button className="product-action-btn-1" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal">
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