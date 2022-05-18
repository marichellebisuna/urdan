import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const ProductArea = () => {
    const { products} = useSelector(state => state.allProducts)
  
const [product, setProduct] = useState(products)

    useEffect(()=>{
        setProduct(products)
        },[products])
       
  return (
    <div className="product-area pb-100">
    <div className="container">
 
   
        <div  className="row">   

            <div className="col-lg-6 col-md-6">               
                <div className="home-single-product-img" data-aos="fade-up" data-aos-delay="200">
                    <Link href={`/product/${product._id}`}>                  
                    <Image src={ product[0].images[0].url} alt="" width={504} height={370}/>
                    </Link>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="home-single-product-content">
                    <h2 data-aos="fade-up" data-aos-delay="200">{product[0].title}</h2>
                    <h3 data-aos="fade-up" data-aos-delay="400">${product[0].price}</h3>
                    <p data-aos="fade-up" data-aos-delay="600">{product[0].description}</p>
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