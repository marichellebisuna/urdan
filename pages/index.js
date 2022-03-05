import React from 'react';
import BannerArea from '../components/Home/BannerArea';
import BrandLogo from '../components/Home/BrandLogo';
import HomeSlider from '../components/Home/HomeSlider';
import HotProducts from '../components/Home/HotProducts';
import ProductArea from '../components/Home/ProductAreaTab';
import ProductAreaTab from '../components/Home/ProductAreaTab';
import ServiceArea from '../components/Home/ServiceArea';
import SingleBanner from '../components/Home/SingleBanner';
import TwoBannerArea from '../components/Home/TwoBannerArea';


const index = () => {

  return <div className="main-wrapper main-wrapper-2">   
    <HomeSlider/>
    <BannerArea/>
    <ProductAreaTab/>
    <TwoBannerArea/>
    <ServiceArea/>
    <ProductArea/>
    <SingleBanner/>
    <HotProducts/>
    <BrandLogo />    
  </div>;
};

export default index;
