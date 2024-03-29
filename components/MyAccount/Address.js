import React from 'react'
import Link from 'next/link'

const Address = () => {
  return (
    <div className="tab-pane fade" id="address-edit" role="tabpanel">
      <div className="myaccount-content">
          <h3>Billing Address</h3>
          <address>
              <p><strong>Alex Tuntuni</strong></p>
              <p>1355 Market St, Suite 900 <br/>
                  San Francisco, CA 94103</p>
              <p>Mobile: (123) 456-7890</p>
          </address>
          <a href="#" className="check-btn sqr-btn "><i className="fa fa-edit"></i> Edit Address</a>
      </div>
    </div>
  )
}

export default Address