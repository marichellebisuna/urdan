import React from 'react'

const Dashboard = () => {
  return (
    <div className="myaccount-tab-menu nav" role="tablist">
      <a href="#dashboad" className="active" data-bs-toggle="tab">Dashboard</a>
      <a href="#orders" data-bs-toggle="tab">Orders</a>
      <a href="#download" data-bs-toggle="tab">Download</a>
      <a href="#payment-method" data-bs-toggle="tab">Payment Method</a>
      <a href="#address-edit" data-bs-toggle="tab">Address</a>
      <a href="#account-info" data-bs-toggle="tab">Account Details</a>
      <a href="login-register.html">Logout</a>
    </div>
  )
}

export default Dashboard