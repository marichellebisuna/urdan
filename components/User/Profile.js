import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { toast } from 'react-toastify'
import ButtonLoader from '../layout/ButtonLoader'
import Loader from '../Loader'

import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, clearErrors } from '../../redux/actions/userActions'
import { UPDATE_PROFILE_RESET } from '../../redux/constants/userConstants'
import Breadcrumb from '../Breadcrumb'
import Link from 'next/link'

const Profile = () => {

    const dispatch = useDispatch()
    const router = useRouter();

    const [user, setUser] = useState({
        firstName: '',
        lasstName: '',
        email: '',
        password: ''
    })

    const { firstName, lastName, email, password } = user

    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState('/assets/images/avatar.png');

    const { user: loadedUser, loading } = useSelector(state => state.loadedUser)
    const { error, isUpdated, loading: updateLoading } = useSelector(state => state.user)

    useEffect(() => {

        if (loadedUser) {
            setUser({
                firstName: loadedUser.firstName,
                lastName: loadedUser.lastName,
                email: loadedUser.email
            })
            if(loadedUser.avatar) {
               setAvatarPreview(loadedUser.avatar.url)
            }
           
        }

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (isUpdated) {
            router.push('/');
            dispatch({ type: UPDATE_PROFILE_RESET })
        }

    }, [dispatch, isUpdated, error, loadedUser])


    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            firstName, lastName, email, password, avatar
        }

        dispatch(updateProfile(userData))

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
      <div><Breadcrumb title='update profile'/></div>
      <div className="login-register-area pb-100 pt-95">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="login-register-wrapper">
                <div className="login-register-tab-list nav">
                  
                      <h4 style={{color:' #e97730'}}> Update Profile </h4>
                 
                </div>
                <div id="lg2" className="tab-pane">
                  <div className="login-form-container">
                    <div className="login-register-form">
                      <form action="#" method="post" onSubmit={submitHandler}>
                      <div className='form-group center '>
                        {/* <label htmlFor='avatar_upload' className='pb-1'>Avatar</label> */}
                        <div className='d-flex align-items-center center wrapper'>
                            <div>
                                <figure className='avatarr ml-3 item-rtl'>
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
                            
                            </div>  
                            <div className='d-flex flex-column custom-file-label py-1'>  
                                <div className=' text-center  ' htmlFor='customFile'>
                                          Change
                                         
                                </div>
                               <span className='text-center'><i className='fa fa-camera'></i></span>
                            </div>           
                        </div>
                      </div> 
                      <label htmlFor="name_field" className='pb-1'>First Name </label>
                        <input type="text" placeholder="Fist Name" id="name_field"
                                  className="form-control"
                                  name='firstName'
                                  value={firstName}
                                  onChange={onChange}/>
                                   <label htmlFor="name_field" className='pb-1'>Last Name </label>
                                   <input type="text" placeholder="Last Name" id="name_field"
                                  className="form-control"
                                  name='lastName'
                                  value={lastName}
                                  onChange={onChange}/>
                                   <label htmlFor="name_field" className='pb-1'>Email</label>
                         <input placeholder="Email"  type="email"
                                  id="email_field"
                                  className="form-control"
                                  name='email'
                                  value={email}
                                  onChange={onChange}/>   
                                   <label htmlFor="name_field" className='pb-1'>Password</label>       
                        <input type="password"
                                  id="password_field"
                                  className="form-control"
                                  name='password'
                                  value={password}
                                  onChange={onChange} placeholder="Password"/ >        
                          
                         
  
                            
                        <div className="button-box btn-hover">
                            <button id="login_button"
                              type="submit"
                              className="btn btn-block py-3"
                              disabled={loading ? true : false}> {loading ? <ButtonLoader /> : 'UPDATE'}</button>
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

export default Profile
