import React from 'react'

const Welcome = () => {
  return (
    <div className="tab-pane fade show active" id="dashboad" role="tabpanel">
      <div className="myaccount-content">
        <h3>Dashboard</h3>
        <div className="welcome">
            <p>Hello, <strong>Alex Tuntuni</strong> (If Not <strong>Tuntuni !</strong><a href="login-register.html" className="logout"> Logout</a>)</p>
        </div>
        <p className="mb-0">From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
      </div>
  </div>
  )
}

export default Welcome