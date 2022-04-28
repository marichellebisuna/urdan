import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

const ModalWindow = ({setIsOpen}) => {

  return (
    <Modal
        show={setIsOpen}       
        size="lg"        
        centered        
      >           
        <Modal.Body >
        <div className="quickview-modal-style" onClick={() => setIsOpen(false)}>
            <div className="modal-dialog modal-dialog-centered" role="document" >
                <div className="modal-content" >
                    <div className="modal-header">
                        <a href="#" className="close" onClick={()=>setIsOpen(false)}><i className=" ti-close "></i></a>
                    </div>
                    <div className="modal-body">
                        <div className="row gx-0">
                            <div className="col-lg-5 col-md-5 col-12">
                                <div className="modal-img-wrap">
                                    <img src="assets/images/product/quickview.png" alt=""/>
                                    {/* <Image 
                                src={product.images[0].url}
                                alt="" width={429} height={476}/> */}
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-12">
                                <div className="product-details-content quickview-content">
                                    <h2>New Modern Chair</h2>
                                    <div className="product-details-price">
                                        <span className="old-price">$25.89 </span>
                                        <span className="new-price">$20.25</span>
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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare tincidunt neque vel semper. Cras placerat enim sed nisl mattis eleifend.</p>
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
                </div>
            </div>
        </div>
         </Modal.Body>
       </Modal>
  )
}

export default ModalWindow