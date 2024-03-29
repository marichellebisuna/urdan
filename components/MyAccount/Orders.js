import React from 'react'
import Link from 'next/link'

const Orders = () => {
  return (
<div className="tab-pane fade" id="orders" role="tabpanel">
    <div className="myaccount-content">
        <h3>Orders</h3>
        <div className="myaccount-table table-responsive text-center">
            <table className="table table-bordered">
                <thead className="thead-light">
                    <tr>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Aug 22, 2018</td>
                        <td>Pending</td>
                        <td>$3000</td>
                        <td><a href="cart.html" className="check-btn sqr-btn ">View</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>July 22, 2018</td>
                        <td>Approved</td>
                        <td>$200</td>
                        <td><a href="cart.html" className="check-btn sqr-btn ">View</a></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>June 12, 2017</td>
                        <td>On Hold</td>
                        <td>$990</td>
                        <td><a href="cart.html" className="check-btn sqr-btn ">View</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

export default Orders