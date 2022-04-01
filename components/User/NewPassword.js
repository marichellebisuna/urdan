import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Breadcrumb from '../Breadcrumb';
import { toast } from 'react-toastify'
import ButtonLoader from '../layout/ButtonLoader'

import { useDispatch, useSelector } from 'react-redux';
import { resetPassword, clearErrors } from '../../redux/actions/userActions'

const NewPassword = () => {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch();
    const router = useRouter();

    const { error, loading, success } = useSelector(state => state.forgotPassword)

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            router.push('/login')
        }

    }, [dispatch, success, error])


    const submitHandler = (e) => {
        e.preventDefault();

        const passwords = {
            password, confirmPassword
        }

        dispatch(resetPassword(router.query.token, passwords))

    }


    return (
      <>
        <div><Breadcrumb title='Reset Password'/></div>
        <div className="login-register-area pb-100 pt-95">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 offset-lg-2">
                        <div className="login-register-wrapper">
                            <div className="login-register-tab-list nav">                                 
                                    <h1> Reset account password</h1>   
                                    <p className='py-2' style={{ letterSpacing:'2px'}}>
                                      The password should have atleast 6 characters
                                      </p>                           
                            </div>
                            <div id="lg1" className="tab-pane active">
                                    <div className="login-form-container">
                                        <div className="login-register-form">
                                          <form action="#" method="post" onSubmit={submitHandler}>
                                          <div className="form-group">
                                            <label htmlFor="password_field">Password</label>
                                            <input
                                                type="password"
                                                id="password_field"
                                                className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="confirm_password_field">Confirm Password</label>
                                            <input
                                                type="password"
                                                id="confirm_password_field"
                                                className="form-control"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                        </div>
                                              
                                            <div className='d-flex justify-content-between align-items-baseline'>
                                              <div className="button-box btn-hover">
                                                <button id="forgot_password_button"
                                                    type="submit"
                                                    className="btn btn-block py-3"
                                                    disabled={loading ? true : false}>
                                                      {loading ? <ButtonLoader /> : 'SET PASSWORD'}
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

export default NewPassword
