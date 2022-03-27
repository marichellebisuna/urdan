import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { toast } from 'react-toastify'
import ButtonLoader from '../../components/layout/ButtonLoader'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, clearErrors } from '../../redux/actions/userActions'

import Breadcrumb from '../Breadcrumb'
import Link from 'next/link'



const Register = () => {
  const dispatch = useDispatch()
  const router = useRouter();

  const [user, setUser] = useState({
      name: '',
      email: '',
      password: ''
  })

  const { name, email, password } = user

  const [avatar, setAvatar] = useState('');
  const [avatarPreview, setAvatarPreview] = useState('/assets/images/avatar.png');

  const { success, error, loading } = useSelector(state => state.auth)

  useEffect(() => {

      if (success) {
          router.push('/login')
      }

      if (error) {
          toast.error(error);
          dispatch(clearErrors())
      }

  }, [dispatch, success, error, router])


  const submitHandler = (e) => {
      e.preventDefault();

      const userData = {
          name, email, password, avatar
      }

      dispatch(registerUser(userData))

  }

  const onChange = (e) => {

      if (e.target.name === 'avatar') {

          const reader = new FileReader();

          reader.onload = () => {
              if (reader.readyState === 2) {
                  setAvatar(reader.result);
                  setAvatarPreview(reader.result);
              }
          }

          reader.readAsDataURL(e.target.files[0])

      } else {
          setUser({ ...user, [e.target.name]: e.target.value })
      }

  }


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
                    <form action="#" method="post" onSubmit={submitHandler}>
                      <input type="text" placeholder="Username" id="name_field"
                                className="form-control"
                                name='name'
                                value={name}
                                onChange={onChange}/>
                       <input placeholder="Email"  type="email"
                                id="email_field"
                                className="form-control"
                                name='email'
                                value={email}
                                onChange={onChange}/>          
                      <input type="password"
                                id="password_field"
                                className="form-control"
                                name='password'
                                value={password}
                                onChange={onChange} placeholder="Password"/ >        

                        <div className='form-group'>
                            <label htmlFor='avatar_upload '>Avatar</label>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <figure className='avatar ml-3 item-rtl'>
                                        <Image
                                            src={avatarPreview}
                                            className='rounded-circle'
                                            alt='image'
                                            width={150} height={150}
                                        />
                                    </figure>
                                </div>
                               
                                 <div className='px-3 input-button'>
                                    <input
                                        type='file'
                                        name='avatar'
                                         className='custom-file-input border-0'
                                        id='customFile'
                                        accept='images/*'
                                        onChange={onChange}                                       
                                    />
                                  
                                  <label className='custom-file-label' htmlFor='customFile'>
                                                Choose Avatar
                                    </label>
                                    
                                    
                                </div>     
                                                
                            </div>
                          </div>

                          
                      <div className="button-box btn-hover btn-block">
                          <button id="login_button"
                            type="submit"
                            className="btn btn-block py-3"
                            disabled={loading ? true : false}> {loading ? <ButtonLoader /> : 'REGISTER'}</button>
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