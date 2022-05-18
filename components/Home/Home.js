import React from 'react'
import BannerArea from './BannerArea';
import BrandLogo from './BrandLogo';
import HomeSlider from './HomeSlider';
import HotProducts from './HotProducts';
import ProductAreaTab from './ProductAreaTab';
import ServiceArea from './ServiceArea';
import SingleBanner from './SingleBanner';
import TwoBannerArea from './TwoBannerArea';

const Home = () => {
 
return <div className="main-wrapper main-wrapper-2">   
    <HomeSlider/>
    <BannerArea/>
    <ProductAreaTab/>
    <TwoBannerArea/>
    <ServiceArea/>    
    <SingleBanner/>
    <HotProducts/>
    <BrandLogo />    
  </div>
};

export default Home;

