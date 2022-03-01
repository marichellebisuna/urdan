import React from 'react'

const AccountDetails = () => {
  return (
    <div className="tab-pane fade" id="account-info" role="tabpanel">
      <div className="myaccount-content">
        <h3>Account Details</h3>
        <div className="account-details-form">
          <form action="#">
            <div className="row">
                <div className="col-lg-6">
                    <div className="single-input-item">
                        <label forHtml="first-name" className="required">First Name</label>
                        <input type="text" id="first-name" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="single-input-item">
                        <label forHtml="last-name" className="required">Last Name</label>
                        <input type="text" id="last-name" />
                    </div>
                </div>
            </div>
            <div className="single-input-item">
                <label forHtml="display-name" className="required">Display Name</label>
                <input type="text" id="display-name" />
            </div>
            <div className="single-input-item">
                <label forHtml="email" className="required">Email Addres</label>
                <input type="email" id="email" />
            </div>
            <fieldset>
                <legend>Password change</legend>
                <div className="single-input-item">
                    <label forHtml="current-pwd" className="required">Current Password</label>
                    <input type="password" id="current-pwd" />
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="single-input-item">
                            <label forHtml="new-pwd" className="required">New Password</label>
                            <input type="password" id="new-pwd" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-input-item">
                            <label forHtml="confirm-pwd" className="required">Confirm Password</label>
                            <input type="password" id="confirm-pwd" />
                        </div>
                    </div>
                </div>
              </fieldset>
              <div className="single-input-item btn-hover">
                  <button className="check-btn sqr-btn">Save Changes</button>
              </div>
          </form>
        </div>
      </div>
    </div> 
  )
}

export default AccountDetails