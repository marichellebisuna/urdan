import React, {useState, useEffect } from 'react'
import Image from 'next/image'
import {useSelector } from 'react-redux';
import Link from 'next/link'
import Modal from '../ModalWindow'

const HotProducts = () => {
    const [isOpen, setIsOpen] = useState(false);

    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 500);
        console.log('page to reload')
    }    

const { products} = useSelector(state => state.allProducts)

const [productItems, setProductItems] = useState(products)

useEffect(()=>{
setProductItems(products)
},[products])

const tempCategory=new Set(products.map(product=>product.category))
let categories = Array.from(tempCategory)
categories = ["all", ...categories]

const handleProducts=(category)=>{
      let tempProducts = [...products]
 
     if(category==="all"){
         return setProductItems(tempProducts)
      
     }
     else{
          let items = tempProducts.filter(products=>products.category===category)
  return setProductItems(items) 

     } 
}
 

  return (
    <div className="product-area pb-60" >
    <div className="container">
        <div className="section-title-tab-wrap mb-75">
            <div className="section-title-2" data-aos="fade-up" data-aos-delay="200">
                <h2>Hot Products</h2>
            </div>
            <div className="tab-style-1 nav" data-aos="fade-up" data-aos-delay="400">
                {categories && categories.map((category, index)=>
                    <a className="active" href="#pro-1" data-bs-toggle="tab" key={index} onClick={()=>{handleProducts(category)}}>{category} </a>
                )}
              
            </div>
        </div>
        <div className="tab-content jump">
            <div id="pro-1" className="tab-pane active">
                <div className="row">
                    {productItems && productItems.length === 0 
                    ? 
                    <div className="alert alert-danger mt-2 w-100">No products found.</div>
                    : 
                    productItems && productItems && productItems.map((item, index)=> <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="200">
                            <div className="product-img img-zoom mb-25">
                            <Link href={`/product/${item._id}`} onClick={refreshPage}>
                                <a>
                                    <Image src={item.images[0].url}alt="" width={270} height={300}/>
                                </a>
                            </Link>
                                <div className="product-badge badge-top badge-right badge-pink">
                                    <span>-10%</span>
                                </div>
                                <div className="product-action-wrap">
                                    <button className="product-action-btn-1" title="Wishlist"><i className="pe-7s-like"></i></button>
                                    <button className="product-action-btn-1" title="Quick View" onClick={() => setIsOpen(true)}>
                                        <i className="pe-7s-look"></i>
                                    </button>
                                    {isOpen && <Modal setIsOpen={setIsOpen} />}
                                </div>
                                <div className="product-action-2-wrap">
                                    <button className="product-action-btn-2" title="Add To Cart"><i className="pe-7s-cart"></i> Add to cart</button>
                                </div>
                            </div>
                            <div className="product-content">
                                <h3><a href="product-details.html">{item.title}</a></h3>
                                <div className="product-price">
                                    <span className="old-price">$25.89 </span>
                                    <span className="new-price">${item.price} </span>
                                </div>
                            </div>
                        </div>
                    </div>)}
                   
                </div>
            </div>
           
        </div>
    </div>
</div>
  )
}

export default HotProducts