import React from 'react'
import Link from 'next/link'

const SubTotal = () => {
  return (
    <div className="grand-total-wrap">
      <div className="grand-total-content">
        <h3>Subtotal <span>$180.00</span></h3>
        <div className="grand-shipping">
          <span>Shipping</span>
          <ul>
            <li><input type="radio" name="shipping" value="info" checked="checked"/><label>Free shipping</label></li>
            <li><input type="radio" name="shipping" value="info" checked="checked"/><label>Flat rate: <span>$100.00</span></label></li>
            <li><input type="radio" name="shipping" value="info" checked="checked"/><label>Local pickup: <span>$120.00</span></label></li>
          </ul>
        </div>
        <div className="shipping-country">
            <p>Shipping to Bangladesh</p>
        </div>
        <div className="grand-total">
            <h4>Total <span>$185.00</span></h4>
        </div>
      </div>
      <div className="grand-total-btn btn-hover">
        <Link href="/checkout">
          <a className="btn theme-color" >Proceed to checkout</a></Link>
      </div>
  </div>
  )
}

export default SubTotal