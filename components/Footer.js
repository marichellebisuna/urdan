import React from 'react';

const Footer = () => {
  return (
    <footer className='footer-area'>
      <div className='bg-gray-2'>
        <div className='container'>
          <div className='footer-top pt-80 pb-35'>
            <div className='row'>
              <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                <div className='footer-widget footer-about mb-40'>
                  <div className='footer-logo'>
                    <a href='index.html'>
                      <img src='assets/images/logo/logo.png' alt='logo' />
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, cons adipi elit, sed do eiusmod
                    tempor incididunt ut aliqua.
                  </p>
                  <div className='payment-img'>
                    <a href='#'>
                      <img
                        src='assets/images/icon-img/payment.png'
                        alt='logo'
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                <div className='footer-widget footer-widget-margin-1 footer-list mb-40'>
                  <h3 className='footer-title'>Information</h3>
                  <ul>
                    <li>
                      <a href='about-us.html'>About Us</a>
                    </li>
                    <li>
                      <a href='#'>Delivery Information</a>
                    </li>
                    <li>
                      <a href='#'>Privacy Policy</a>
                    </li>
                    <li>
                      <a href='#'>Terms & Conditions</a>
                    </li>
                    <li>
                      <a href='#'>Customer Service</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-2 col-md-6 col-sm-6 col-12'>
                <div className='footer-widget footer-list mb-40'>
                  <h3 className='footer-title'>My Accound</h3>
                  <ul>
                    <li>
                      <a href='my-account.html'>My Account</a>
                    </li>
                    <li>
                      <a href='#'>Order History</a>
                    </li>
                    <li>
                      <a href='wishlist.html'>Wish List</a>
                    </li>
                    <li>
                      <a href='#'>Newsletter</a>
                    </li>
                    <li>
                      <a href='#'>Order History</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                <div className='footer-widget footer-widget-margin-2 footer-address mb-40'>
                  <h3 className='footer-title'>Get in touch</h3>
                  <ul>
                    <li>
                      <span>Address: </span>Your address goes here{' '}
                    </li>
                    <li>
                      <span>Telephone Enquiry:</span> (012) 345 6789
                    </li>
                    <li>
                      <span>Email: </span>demo@example.com
                    </li>
                  </ul>
                  <div className='open-time'>
                    <p>
                      Open : <span>8:00 AM</span> - Close :{' '}
                      <span>18:00 PM</span>
                    </p>
                    <p>Saturday - Sunday : Close</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-3'>
        <div className='container'>
          <div className='footer-bottom copyright text-center bg-gray-3'>
            <p>
              Copyright ©2021 All rights reserved | Made with{' '}
              <i className='fa fa-heart'></i> by{' '}
              <a href='https://hasthemes.com/'> HasThemes</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
