import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const YourOrder = () => {
  return (
    <div className="your-order-area">
      <h3>Your order</h3>
      <div className="your-order-wrap gray-bg-4">
          <div className="your-order-info-wrap">
              <div className="your-order-info">
                  <ul>
                      <li>Product <span>Total</span></li>
                  </ul>
              </div>
              <div className="your-order-middle">
                  <ul>
                      <li>Product Name X 1 <span>$329 </span></li>
                      <li>Product Name X 1 <span>$329 </span></li>
                  </ul>
              </div>
              <div className="your-order-info order-subtotal">
                  <ul>
                      <li>Subtotal <span>$329 </span></li>
                  </ul>
              </div>
              <div className="your-order-info order-shipping">
                  <ul>
                      <li>Shipping <p>Enter your full address </p>
                      </li>
                  </ul>
              </div>
              <div className="your-order-info order-total">
                  <ul>
                      <li>Total <span>$273.00 </span></li>
                  </ul>
              </div>
          </div>
          <div className="payment-method">
              <div className="pay-top sin-payment">
                  <input id="payment_method_1" className="input-radio" type="radio" value="cheque" checked="checked" name="payment_method"/>
                  <label forHtml="payment_method_1"> Direct Bank Transfer </label>
                  <div className="payment-box payment_method_bacs">
                      <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                  </div>
              </div>
              <div className="pay-top sin-payment">
                  <input id="payment-method-2" className="input-radio" type="radio" value="cheque" name="payment_method"/>
                  <label forHtml="payment-method-2">Check payments</label>
                  <div className="payment-box payment_method_bacs">
                      <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                  </div>
              </div>
              <div className="pay-top sin-payment">
                  <input id="payment-method-3" className="input-radio" type="radio" value="cheque" name="payment_method"/>
                  <label forHtml="payment-method-3">Cash on delivery </label>
                  <div className="payment-box payment_method_bacs">
                      <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                  </div>
              </div>
              <div className="pay-top sin-payment sin-payment-3">
                  <input id="payment-method-4" className="input-radio" type="radio" value="cheque" name="payment_method"/>
                  <label forHtml="payment-method-4" >PayPal <Image alt="" src="/assets/images/icon-img/payment.png" width={270} height={18} className="px-3"/></label>
                  <div className="payment-box payment_method_bacs">
                      <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="Place-order btn-hover">
          <a href="#">Place Order</a>
      </div>
    </div>
  )
}

export default YourOrder