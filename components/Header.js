import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import MiniCart from './Home/MiniCart';
import MobileMenu from './Home/MobileMenu';
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../redux/actions/userActions'
import { useSession, signOut, getSession } from 'next-auth/react'
import Search from './Search';
import avatar from '../public/assets/images/avatar1.png'

const Header = () => {
  const dispatch = useDispatch()
  const { user, loading } = useSelector(state => state.loadedUser)
  const [sess, setSess] = useState(null);
  const [me, setMe] = useState(null);
  const {data} = useSession()
  

  useEffect(() => {
      if (!user && !data) {
          dispatch(loadUser())          
      }  
      setMe(user)
      setSess(data)
  }, [dispatch, user, data])

  const logoutHandler = () => {
      signOut();
  }

  return (
    <>
    <header className='header-area header-responsive-padding header-height-1'>
      <div className='header-bottom sticky-bar'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-3 col-md-6 col-6'>
              <div className='logo'>
                <Link href='/' >
                <a >
                  <Image src='/assets/images/logo/logo.png' alt='logo' width={136} height={33}/>
                </a>
                </Link>
              </div>
            </div>
            <div className='col-lg-7 d-none d-lg-block d-flex justify-content-center '>
              <div className='main-menu text-center' >
                <nav>
                  <ul>
                    <li>
                    <Link href='/'>
                      <a>HOME</a>  
                    </Link>  
                                  
                    </li>
                    <li>
                      <Link href='/products'>
                      <a>SHOP</a>  
                    </Link>         
                     
                    </li>
                   <li><Link href='/about'>
                      <a>ABOUT</a>  
                    </Link></li>
                       <li> <Link href='/contact'>
                      <a>CONTACT US</a>  
                    </Link> </li>   
                    {
                    me ? 
                    me &&
                    ( <li className='float-end'>
                      
                          <a >{me && me.avatar ?  
                              <figure className="avatar avatar-nav">
                                  <img
                                      src={me.avatar && me.avatar.url}
                                      alt={me && me.name}
                                      className="rounded-circle"
                                  />
                              </figure> 
                              :  <figure className="avatar avatar-nav">
                                <Image
                                            src={avatar}
                                            className='rounded-circle'
                                            alt='image'
                                            width={150} height={150}
                                        />
                             
                          </figure> 
                            }
                              <span className='text-uppercase mx-3' style={{color:'#535353'}}>Hi {user && user.firstName}!</span>
                              <i className="fa fa-caret-down" aria-hidden="true"></i>
                          </a>
                    <ul className="sub-menu-style">

                   {/* {user.role === 'admin' && (                     
                       <>     
                      <li>
                        <Link href='/admin/rooms'>
                          <a className="dropdown-item">Rooms</a>
                        </Link>
                      </li>

                      <li>
                        <Link href='/admin/bookings'>
                          <a className="dropdown-item">Bookings</a>
                        </Link>
                      </li>   

                      <li>
                        <Link href='/admin/users'>
                          <a className="dropdown-item">Users</a>
                        </Link>
                      </li>  

                      <li>
                        <Link href='/admin/reviews'>
                          <a className="dropdown-item">Reviews</a>
                        </Link>
                      </li> 
                          
                           <hr />
                       </>
                   )} */}
                    
                          <li>
                            <Link href='/bookings/me' passHref>
                              <a className="dropdown-item">My Purchases</a>
                            </Link>
                          </li> 

                          <li>
                            <Link href='/me/update' passHref>
                              <a className="dropdown-item">Profile</a>
                            </Link>
                          </li>   

                          <li>
                            <Link href='/' passHref>
                              <a className="dropdown-item text-danger" onClick={logoutHandler}>Logout</a>
                            </Link>
                          </li>   
                    </ul>
                    </li>)                    
                    :                   
                    sess &&                     
                    ( <li className='float-end'>                      
                          <a >{sess && sess.user.image &&
                          
                              <figure className="avatar avatar-nav">
                                  <img
                                      src={sess.user.image }
                                      alt={sess && sess.user.name}
                                      className="rounded-circle "
                                  />
                              </figure> 
                             
                            }
                              <span className='text-uppercase mx-3' style={{color:'#535353'}}> Hi {sess && sess.user.name}!</span>
                              <i className="fa fa-caret-down" aria-hidden="true"></i>
                          </a>
                    <ul className="sub-menu-style">

                   {/* {user.role === 'admin' && (                     
                       <>     
                      <li>
                        <Link href='/admin/rooms'>
                          <a className="dropdown-item">Rooms</a>
                        </Link>
                      </li>

                      <li>
                        <Link href='/admin/bookings'>
                          <a className="dropdown-item">Bookings</a>
                        </Link>
                      </li>   

                      <li>
                        <Link href='/admin/users'>
                          <a className="dropdown-item">Users</a>
                        </Link>
                      </li>  

                      <li>
                        <Link href='/admin/reviews'>
                          <a className="dropdown-item">Reviews</a>
                        </Link>
                      </li> 
                          
                           <hr />
                       </>
                   )} */}
                    
                          <li>
                            <Link href='/bookings/me' passHref>
                              <a className="dropdown-item">My Purchases</a>
                            </Link>
                          </li> 

                          <li>
                            <Link href='/me/update' passHref>
                              <a className="dropdown-item">Profile</a>
                            </Link>
                          </li>   

                          <li>
                            <Link href='/' passHref>
                              <a className="dropdown-item text-danger" onClick={logoutHandler}>Logout</a>
                            </Link>
                          </li>   
                    </ul>
                    </li>)
                    }
                  </ul>
                </nav>
              </div>
            </div>
            <div className='col-lg-2 col-md-6 col-6' >
              <div className='header-action-wrap'>
            
                
               
                <div className='header-action-style header-search-1'>
                  <a className='search-toggle' href='#'>
                    <i className='pe-7s-search s-open'></i>
                    <i className='pe-7s-close s-close'></i>
                  </a>                  
                 <Search/>                  
                </div>
               
                <div className='header-action-style'>
                <Link href='/wishlist'>
                  <a title='Wishlist'>
                    <i className='pe-7s-like'></i>
                  </a>
                  </Link>
                </div>
 {!data && !user &&
                <div className='header-action-style px-2'>
                  <Link href='/login'>
                  <a title='Login Register' >
                    <i className='pe-7s-user'></i>
                  </a>
                  </Link>                  
                </div>
}
                <div className='header-action-style header-action-cart'>
                  <a className='cart-active' href='#'>
                    <i className='pe-7s-shopbag'></i>
                    <span className='product-count bg-black'>01</span>
                  </a>
                </div>
            
                

                <div className='header-action-style d-block d-lg-none'>
                  <a className='mobile-menu-active-button' href='#'>
                    <i className='pe-7s-menu'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header> 

   
    <MiniCart/>
    <MobileMenu/>
    </>
  );
};

export default Header;


export async function getServerSideProps(context) {
  const session = await getSession(context)
  console.log(session)
  if(!session){
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
  
  return {
    props: { session }
  }
}


// export async function getServerSideProps (context) {
//   return {
//     props: {     
//       session: await getSession(context),     
//     }
//   }
// }
