import React from 'react'
import Link from 'next/link'

const BillingDetails = () => {
  return (
    <div className="billing-info-wrap">
                                <h3>Billing Details</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-20">
                                            <label>First Name <abbr className="required" title="required">*</abbr></label>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-20">
                                            <label>Last Name <abbr className="required" title="required">*</abbr></label>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="billing-info mb-20">
                                            <label>Company Name <abbr className="required" title="required">*</abbr></label>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="billing-select select-style mb-20">
                                            <label>Country <abbr className="required" title="required">*</abbr></label>
                                            <select className="select-two-active">
                                                <option>Select a country</option>
                                                <option>Azerbaijan</option>
                                                <option>Bahamas</option>
                                                <option>Bahrain</option>
                                                <option>Bangladesh</option>
                                                <option>Barbados</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="billing-info mb-20">
                                            <label>Street Address <abbr className="required" title="required">*</abbr></label>
                                            <input className="billing-address" placeholder="House number and street name" type="text"/>
                                            <input placeholder="Apartment, suite, unit etc." type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="billing-info mb-20">
                                            <label>Town / City <abbr className="required" title="required">*</abbr></label>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="billing-info mb-20">
                                            <label>State / County <abbr className="required" title="required">*</abbr></label>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="billing-info mb-20">
                                            <label>Postcode / ZIP <abbr className="required" title="required">*</abbr></label>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="billing-info mb-20">
                                            <label>Phone <abbr className="required" title="required">*</abbr></label>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="billing-info mb-20">
                                            <label>Email Address <abbr className="required" title="required">*</abbr></label>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout-account mb-25">
                                    <input className="checkout-toggle2" type="checkbox"/>
                                    <span>Create an account?</span>
                                </div>
                                <div className="checkout-account-toggle open-toggle2 mb-30">
                                    <label>Email Address</label>
                                    <input placeholder="Password" type="password"/>
                                </div>
                                <div className="checkout-account mt-25">
                                    <input className="checkout-toggle" type="checkbox"/>
                                    <span>Ship to a different address?</span>
                                </div>
                                <div className="different-address open-toggle mt-30">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>First Name</label>
                                                <input type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>Last Name</label>
                                                <input type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-info mb-20">
                                                <label>Company Name</label>
                                                <input type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-select select-style mb-20">
                                                <label>Country</label>
                                                <select className="select-two-active">
                                                    <option>Select a country</option>
                                                    <option>Azerbaijan</option>
                                                    <option>Bahamas</option>
                                                    <option>Bahrain</option>
                                                    <option>Bangladesh</option>
                                                    <option>Barbados</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-info mb-20">
                                                <label>Street Address</label>
                                                <input className="billing-address" placeholder="House number and street name" type="text"/>
                                                <input placeholder="Apartment, suite, unit etc." type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="billing-info mb-20">
                                                <label>Town / City</label>
                                                <input type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>State / County</label>
                                                <input type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>Postcode / ZIP</label>
                                                <input type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>Phone</label>
                                                <input type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>Email Address</label>
                                                <input type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="additional-info-wrap">
                                    <label>Order notes</label>
                                    <textarea placeholder="Notes about your order, e.g. special notes for delivery. " name="message"></textarea>
                                </div>
                            </div>
  )
}

export default BillingDetails