import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import CartTable from '../components/Cart/CartTable'
import Discount from '../components/Cart/Discount'
import Shipping from '../components/Cart/Shipping'
import SubTotal from '../components/Cart/SubTotal'

const cart = () => {
  return (
    <>
    <Breadcrumb title='cart'/>
    <div className="cart-area pt-100 pb-100">
      <div className="container">
          <div className="row">
            <CartTable/>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <Shipping/>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Discount/>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <SubTotal/>
            </div>
          </div>
        </div>
    </div>
   </>   
  )
}

export default cart