import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie';
import { toast } from 'react-toastify'
import ButtonLoader from '../../components/layout/ButtonLoader'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, clearErrors, loadUser } from '../../redux/actions/userActions'

import Breadcrumb from '../Breadcrumb'
import Link from 'next/link'
import { LOAD_USER_SUCCESS } from '../../redux/constants/userConstants'
import axios from 'axios';
import { signIn } from 'next-auth/react'
import { urlObjectKeys } from 'next/dist/shared/lib/utils';


const Register = () => {
  const dispatch = useDispatch()
  const router = useRouter();
  const { redirect } = router.query;

  const [user, setUser] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
  })

  const {firstName, lastName, email, password } = user

  const [avatar, setAvatar] = useState('');
  const [avatarPreview, setAvatarPreview] = useState('/assets/images/avatar1.png');

  const { success, error, loading } = useSelector(state => state.auth)

  const [load, setLoad] = useState(false);
  const { user:userInfo } = useSelector(state => state.loadedUser)


  useEffect(() => {
      if (!userInfo) {
          dispatch(loadUser())
      } 
  }, [dispatch, userInfo])

  useEffect(() => {

      if (success) {       
          // router.push('/login')
      signIn('credentials', {
      redirect: false,
      email: user.email,
      password: user.password
  })
          router.push(redirect || '/');
      }

      if (error) {
          toast.error(error);
          dispatch(clearErrors())
      }

  }, [dispatch, signIn, success, error, router])


  const submitHandler = async(e) => {
      e.preventDefault();

      const userData = {
          firstName, lastName, email, password, 
      }

    dispatch(registerUser(userData))
    
  }

  const onChange = (e) => {

      // if (e.target.name === 'avatar') {

      //     const reader = new FileReader();

      //     reader.onload = () => {
      //         if (reader.readyState === 2) {
      //             setAvatar(reader.result);
      //             setAvatarPreview(reader.result);
      //         }
      //         // setAvatar(avatarPreview);
      //         // setAvatarPreview(avatarPreview);  
      //     }

      //     reader.readAsDataURL(e.target.files[0])

      // } else {
         //setAvatar(avatarPreview);
        //       setAvatarPreview(avatarPreview);  
          setUser({ ...user, [e.target.name]: e.target.value })
      // }

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
                        {/* <div className='form-group mx-auto'>                           
                            <div className='d-flex align-items-center '>
                                <div className='pt-2 wrapper' style={{background:`url(${avatarPreview})`, width:'160px', height:'150px'
                                        }}>
                                     <figure className='avatarr ml-3 item-rtl'>
                                        <Image
                                            src={avatarPreview}
                                            className='rounded-circle'
                                            alt='image'
                                            width={160} height={150}
                                        />
                                    </figure> 
                                
                               
                                 <div className='px-3 input-button'>
                                    <input
                                        type='file'
                                        name='avatar'
                                         className='custom-file-input border-0'
                                        id='customFile'
                                        accept='images/*'
                                      
                                        onChange={onChange}                                       
                                    />
                                  <div className='camera d-flex flex-column pt-1' style={{border:'1px solid #e97730', width:'155px' }} >
                                  <label className=' text-center' style={{border:'none'}} htmlFor='customFile'>
                                                Change Avatar
                                                 
                                    </label>  
                                    <span className='text-center'>
                                      <i className="fa fa-camera" aria-hidden="true" ></i>
                                    </span>  
                                                                   
                                 </div>                                   
                                </div>     
                                  </div>              
                            </div>
                        </div> */}
                      <input type="text" placeholder="Fist Name" id="name_field"
                                className="form-control"
                                name='firstName'
                                value={firstName}
                                onChange={onChange}/>
                                 <input type="text" placeholder="Last Name" id="name_field"
                                className="form-control"
                                name='lastName'
                                value={lastName}
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

                        

                          
                      <div className="button-box btn-hover mt-2">
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