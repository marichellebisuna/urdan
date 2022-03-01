import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import MiniCart from './Home/MiniCart';
import MobileMenu from './Home/MobileMenu';

const Header = () => {
  return (
    <>
    <header className='header-area header-responsive-padding header-height-1'>
      <div className='header-bottom sticky-bar'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-3 col-md-6 col-6'>
              <div className='logo'>
                <Link href='/'>
                <a >
                  <Image src='/assets/images/logo/logo.png' alt='logo' width={136} height={33}/>
                </a>
                </Link>
              </div>
            </div>
            <div className='col-lg-6 d-none d-lg-block d-flex justify-content-center '>
              <div className='main-menu text-center'>
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
                           
                  </ul>
                </nav>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-6'>
              <div className='header-action-wrap'>
                <div className='header-action-style header-search-1'>
                  <a className='search-toggle' href='#'>
                    <i className='pe-7s-search s-open'></i>
                    <i className='pe-7s-close s-close'></i>
                  </a>
                  <div className='search-wrap-1'>
                    <form action='#'>
                      <input placeholder='Search products…' type='text' />
                      <button className='button-search'>
                        <i className='pe-7s-search'></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className='header-action-style'>
                  <Link href='/login'>
                  <a title='Login Register' >
                    <i className='pe-7s-user'></i>
                  </a>
                  </Link>
                  
                </div>
                <div className='header-action-style'>
                <Link href='/wishlist'>
                  <a title='Wishlist'>
                    <i className='pe-7s-like'></i>
                  </a>
                  </Link>
                </div>
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
