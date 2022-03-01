import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Link from 'next/link'

const Register = () => {
  return (
    <>
    <div><Breadcrumb title='register'/></div>
    <div className="login-register-area pb-100 pt-95">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 offset-lg-2">
            <div className="login-register-wrapper">
              <div className="login-register-tab-list nav">
                <Link href="/login">
                <a className="active" >
                    <h4> login </h4>
                </a></Link>
                <Link href="/register">
                <a data-bs-toggle="tab" href="#lg2">
                    <h4> register </h4>
                </a></Link>
              </div>
              <div id="lg2" className="tab-pane">
                <div className="login-form-container">
                  <div className="login-register-form">
                    <form action="#" method="post">
                      <input type="text" name="user-name" placeholder="Username"/>
                      <input type="password" name="user-password" placeholder="Password"/>
                      <input name="user-email" placeholder="Email" type="email"/>
                      <div className="button-box btn-hover">
                          <button type="submit">Register</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Register