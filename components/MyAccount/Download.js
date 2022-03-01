import React from 'react'
import Link from 'next/link'

const Download = () => {
  return (
    <div className="tab-pane fade" id="download" role="tabpanel">
                                            <div className="myaccount-content">
                                                <h3>Downloads</h3>
                                                <div className="myaccount-table table-responsive text-center">
                                                    <table className="table table-bordered">
                                                        <thead className="thead-light">
                                                            <tr>
                                                                <th>Product</th>
                                                                <th>Date</th>
                                                                <th>Expire</th>
                                                                <th>Download</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Haven - Free Real Estate PSD Template</td>
                                                                <td>Aug 22, 2018</td>
                                                                <td>Yes</td>
                                                                <td><a href="#" className="check-btn sqr-btn "><i className="fa fa-cloud-download"></i> Download File</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>HasTech - Profolio Business Template</td>
                                                                <td>Sep 12, 2018</td>
                                                                <td>Never</td>
                                                                <td><a href="#" className="check-btn sqr-btn "><i className="fa fa-cloud-download"></i> Download File</a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
  )
}

export default Download