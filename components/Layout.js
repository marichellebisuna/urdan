import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  return (  
    <div className='main-wrapper main-wrapper-2'>
      <Header />
      <ToastContainer position="top-right" />
            {children}     
      <Footer />
    </div> 
  );
};

export default Layout;
