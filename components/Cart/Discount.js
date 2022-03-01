import React from 'react'

const Discount = () => {
  return (
    <div className="cart-calculate-discount-wrap mb-40">
    <h4>Coupon Discount </h4>
    <div className="calculate-discount-content">
        <p>Enter your coupon code if you have one.</p>
        <div className="input-style">
            <input type="text" placeholder="Coupon code"/>
        </div>
        <div className="calculate-discount-btn btn-hover">
            <a className="btn theme-color" href="#">Apply Coupon</a>
        </div>
    </div>
</div>
  )
}

export default Discount