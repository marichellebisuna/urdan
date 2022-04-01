import React, { useState, useEffect } from 'react'

import { toast } from 'react-toastify'
import ButtonLoader from '../layout/ButtonLoader'

import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword, clearErrors } from '../../redux/actions/userActions'
import Breadcrumb from '../Breadcrumb';
import Link from 'next/link';

const ForgotPassword = () => {

    const [email, setEmail] = useState('')

    const dispatch = useDispatch()

    const { error, loading, message } = useSelector(state => state.forgotPassword)

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (message) {
            toast.success(message)
        }

    }, [dispatch, message, error])


    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            email
        }

        dispatch(forgotPassword(userData))

    }


    return (
      <>
        <div><Breadcrumb title='Forgot Password'/></div>
        <div className="login-register-area pb-100 pt-95">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 offset-lg-2">
                        <div className="login-register-wrapper">
                            <div className="login-register-tab-list nav">                                 
                              <h1> Reset your password</h1>   
                              <p className='py-1' style={{ letterSpacing:'2px'}}>Don't worry! Just fill in your email and we'll send you a link to reset your password.</p>                           
                            </div>
                            <div id="lg1" className="tab-pane active">
                              <div className="login-form-container">
                                  <div className="login-register-form">
                                    <form action="#" method="post" onSubmit={submitHandler}>
                                    <h5 className="mb-3">Email Address</h5>
                                      <input name="user-name" type="email"                         
                                        id="email_field"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}/>
                                        
                                      <div className='d-flex justify-content-between align-items-baseline'>
                                        <div className="button-box btn-hover">
                                          <button id="forgot_password_button"
                                              type="submit"
                                              className="btn btn-block py-3"
                                              disabled={loading ? true : false}>
                                                {loading ? <ButtonLoader /> : 'SEND EMAIL'}
                                          </button>
                                        </div>
                                                                  
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

export default ForgotPassword
