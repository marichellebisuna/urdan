import React, { useState } from 'react'
import Breadcrumb from '../Breadcrumb'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { toast } from 'react-toastify'
import ButtonLoader from '../layout/ButtonLoader'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
      e.preventDefault();

      setLoading(true);

      const result = await signIn('credentials', {
          redirect: false,
          email,
          password
      })

      setLoading(false)

      if (result.error) {
          toast.error(result.error);
      } else {
          window.location.href = '/'
      }

  }

  return (
    <>
    <div><Breadcrumb title='Login'/></div>
        <div className="login-register-area pb-100 pt-95">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 offset-lg-2">
                        <div className="login-register-wrapper">
                            <div className="login-register-tab-list nav">
                                <Link href="/login">
                                <a className="active"  >
                                    <h4> login </h4>
                                </a></Link>
                                <Link href="/register">
                                <a  >
                                    <h4> register </h4>
                                </a></Link>
                            </div>
                            <div id="lg1" className="tab-pane active">
                                    <div className="login-form-container">
                                        <div className="login-register-form">
                                            <form action="#" method="post" onSubmit={submitHandler}>
                                                <input name="user-name" placeholder="Username" type="email"                         id="email_field"
                                                className="form-control"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}/>
                                                <input type="password" name="user-password" placeholder="Password"
                                                id="password_field"
                                                className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}/>
                                                <div className="login-toggle-btn">
                                                    <input type="checkbox"/>
                                                    <label>Remember me</label>
                                                    <Link href="/password/forgot" className="float-right mb-4">Forgot Password?</Link>
                                                </div>
                                                <div className="button-box btn-hover">
                                                    <button id="login_button"
                            type="submit"
                            className="btn btn-block py-3"
                            disabled={loading ? true : false}>{loading ? <ButtonLoader /> : 'LOGIN'}</button>
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

export default Login