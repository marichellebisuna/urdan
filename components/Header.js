import React from 'react';

const Header = () => {
  return (
    <header className='header-area header-responsive-padding header-height-1'>
      <div className='header-top d-none d-lg-block bg-gray'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-6'>
              <div className='welcome-text'>
                <p>Default Welcome Msg! </p>
              </div>
            </div>
            <div className='col-lg-6 col-6'>
              <div className='language-currency-wrap'>
                <div className='currency-wrap border-style'>
                  <a className='currency-active' href='#'>
                    $ Dollar (US) <i className=' ti-angle-down '></i>
                  </a>
                  <div className='currency-dropdown'>
                    <ul>
                      <li>
                        <a href='#'>Taka (BDT) </a>
                      </li>
                      <li>
                        <a href='#'>Riyal (SAR) </a>
                      </li>
                      <li>
                        <a href='#'>Rupee (INR) </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='language-wrap'>
                  <a className='language-active' href='#'>
                    <img src='assets/images/icon-img/flag.png' alt='' /> English{' '}
                    <i className=' ti-angle-down '></i>
                  </a>
                  <div className='language-dropdown'>
                    <ul>
                      <li>
                        <a href='#'>
                          <img src='assets/images/icon-img/flag.png' alt='' />
                          English{' '}
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <img
                            src='assets/images/icon-img/spanish.png'
                            alt=''
                          />
                          Spanish
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <img src='assets/images/icon-img/arabic.png' alt='' />
                          Arabic{' '}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header-bottom sticky-bar'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-3 col-md-6 col-6'>
              <div className='logo'>
                <a href='index.html'>
                  <img src='assets/images/logo/logo.png' alt='logo' />
                </a>
              </div>
            </div>
            <div className='col-lg-6 d-none d-lg-block d-flex justify-content-center'>
              <div className='main-menu text-center'>
                <nav>
                  <ul>
                    <li>
                      <a href='index.html'>HOME</a>
                      <ul className='sub-menu-style'>
                        <li>
                          <a href='index.html'>Home version 1 </a>
                        </li>
                        <li>
                          <a href='index-2.html'>Home version 2</a>
                        </li>
                        <li>
                          <a href='index-3.html'>Home version 3</a>
                        </li>
                        <li>
                          <a href='index-4.html'>Home version 4</a>
                        </li>
                        <li>
                          <a href='index-5.html'>Home version 5</a>
                        </li>
                        <li>
                          <a href='index-6.html'>Home version 6</a>
                        </li>
                        <li>
                          <a href='index-7.html'>Home version 7</a>
                        </li>
                        <li>
                          <a href='index-8.html'>Home version 8</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='shop.html'>SHOP</a>
                      <ul className='mega-menu-style mega-menu-mrg-1'>
                        <li>
                          <ul>
                            <li>
                              <a className='dropdown-title' href='#'>
                                Shop Layout
                              </a>
                              <ul>
                                <li>
                                  <a href='shop.html'>standard style</a>
                                </li>
                                <li>
                                  <a href='shop-sidebar.html'>
                                    shop grid sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href='shop-list.html'>shop list style</a>
                                </li>
                                <li>
                                  <a href='shop-list-sidebar.html'>
                                    shop list sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href='shop-right-sidebar.html'>
                                    shop right sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href='shop-location.html'>
                                    store location
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className='dropdown-title' href='#'>
                                Products Layout
                              </a>
                              <ul>
                                <li>
                                  <a href='product-details.html'>tab style 1</a>
                                </li>
                                <li>
                                  <a href='product-details-2.html'>
                                    tab style 2
                                  </a>
                                </li>
                                <li>
                                  <a href='product-details-gallery.html'>
                                    gallery style{' '}
                                  </a>
                                </li>
                                <li>
                                  <a href='product-details-affiliate.html'>
                                    affiliate style
                                  </a>
                                </li>
                                <li>
                                  <a href='product-details-group.html'>
                                    group style
                                  </a>
                                </li>
                                <li>
                                  <a href='product-details-fixed-img.html'>
                                    fixed image style{' '}
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href='shop.html'>
                                <img
                                  src='assets/images/banner/menu.png'
                                  alt=''
                                />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='#'>PAGES</a>
                      <ul className='sub-menu-style'>
                        <li>
                          <a href='about-us.html'>about us </a>
                        </li>
                        <li>
                          <a href='cart.html'>cart page</a>
                        </li>
                        <li>
                          <a href='checkout.html'>checkout </a>
                        </li>
                        <li>
                          <a href='my-account.html'>my account</a>
                        </li>
                        <li>
                          <a href='wishlist.html'>wishlist </a>
                        </li>
                        <li>
                          <a href='compare.html'>compare </a>
                        </li>
                        <li>
                          <a href='contact-us.html'>contact us </a>
                        </li>
                        <li>
                          <a href='login-register.html'>login / register </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='blog.html'>BLOG</a>
                      <ul className='sub-menu-style'>
                        <li>
                          <a href='blog.html'>blog standard </a>
                        </li>
                        <li>
                          <a href='blog-sidebar.html'>blog sidebar</a>
                        </li>
                        <li>
                          <a href='blog-details.html'>blog details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='about-us.html'>ABOUT</a>
                    </li>
                    <li>
                      <a href='contact-us.html'>CONTACT US</a>
                    </li>
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
                  <a title='Login Register' href='login-register.html'>
                    <i className='pe-7s-user'></i>
                  </a>
                </div>
                <div className='header-action-style'>
                  <a title='Wishlist' href='wishlist.html'>
                    <i className='pe-7s-like'></i>
                  </a>
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
  );
};

export default Header;
