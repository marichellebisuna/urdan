import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import BillingDetails from '../components/Checkout/BillingDetails'
import YourOrder from '../components/Checkout/YourOrder'

const checkout = () => {
  return (
    <>
    <Breadcrumb title="checkout"/>
    <div className="checkout-main-area pb-100 pt-100">
      <div className="container">
        <div className="customer-zone mb-20">
          <p className="cart-page-title">Returning customer? <a className="checkout-click1" href="#">Click here to login</a></p>
          <div className="checkout-login-info">
            <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
              <form action="#">
                  <div className="row">
                      <div className="col-lg-6 col-md-6">
                          <div className="sin-checkout-login">
                              <label>Username or email address <span>*</span></label>
                              <input type="text" name="user-name"/>
                          </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                          <div className="sin-checkout-login">
                              <label>Passwords <span>*</span></label>
                              <input type="password" name="user-password"/>
                          </div>
                      </div>
                  </div>
                  <div className="button-remember-wrap">
                      <button className="button" type="submit">Login</button>
                      <div className="checkout-login-toggle-btn">
                          <input type="checkbox"/>
                          <label>Remember me</label>
                      </div>
                  </div>
                  <div className="lost-password">
                      <a href="#">Lost your password?</a>
                  </div>
              </form>
          </div>
        </div>
        <div className="customer-zone mb-20">
            <p className="cart-page-title">Have a coupon? <a className="checkout-click3" href="#">Click here to enter your code</a></p>
            <div className="checkout-login-info3">
                <form action="#">
                    <input type="text" placeholder="Coupon code"/>
                    <input type="submit" value="Apply Coupon"/>
                </form>
            </div>
        </div>
        <div className="checkout-wrap pt-30">
          <div className="row">
            <div className="col-lg-7">
              <BillingDetails/>
            </div>
            <div className="col-lg-5">
              <YourOrder/>
            </div>
          </div>
        </div>
      </div>
    </div>   
    </>
   
  )
}

export default checkout