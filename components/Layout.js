import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (  
    <div className='main-wrapper main-wrapper-2'>
      <Header />
      {children}
      <Footer />
    </div> 
  );
};

export default Layout;
