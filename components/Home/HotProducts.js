import React, {useState, useEffect } from 'react'
import Image from 'next/image'
import {useSelector } from 'react-redux';
import Link from 'next/link'
import Modal from '../ModalWindow'

const HotProducts = () => {
const [popUpContent, setPopUpContent] = useState([]);
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const showModal = (product) =>{    
    console.log(product.title);
    console.log(product.price);       
    setPopUpContent([product])  
    setShow(true)
} 

    const [isOpen, setIsOpen] = useState(false);
    const [tab, setTab] = useState(0)
    const isActive = (index) => {
        if(tab === index) return "active";
        return ""
    }

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
                    <a className={`${isActive(index)}`} href="#pro-1" data-bs-toggle="tab" key={index} onClick={()=>{handleProducts(category)}}>{category} </a>
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
                    productItems && productItems && productItems.map((product, index)=> <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="product-wrap mb-35" data-aos="fade-up" data-aos-delay="200">
                            <div className="product-img img-zoom mb-25">
                            <Link href={`/product/${product._id}`} onClick={refreshPage}>
                                <a>
                                    <Image src={product.images[0].url}alt="" width={270} height={300}/>
                                </a>
                            </Link>
                                <div className="product-badge badge-top badge-right badge-pink">
                                    <span>-10%</span>
                                </div>
                                <div className="product-action-wrap">
                                    <button className="product-action-btn-1" title="Wishlist"><i className="pe-7s-like"></i></button>
                                    <button className="product-action-btn-1" title="Quick View"  onClick={()=>showModal( product ) }>  
                                        <i className="pe-7s-look"></i>
                                    </button>
                                   
                                </div>
                                <div className="product-action-2-wrap">
                                    <button className="product-action-btn-2" title="Add To Cart"><i className="pe-7s-cart"></i> Add to cart</button>
                                </div>
                            </div>
                            <div className="product-content">
                                <h3><a href="product-details.html">{product.title}</a></h3>
                                <div className="product-price">
                                    <span className="old-price">$25.89 </span>
                                    <span className="new-price">${product.price} </span>
                                </div>
                            </div>
                        </div>
                    </div>)}
                   
                </div>
            </div>
           
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

export default HotProducts