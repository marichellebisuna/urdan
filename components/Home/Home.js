import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import BannerArea from './BannerArea';
import BrandLogo from './BrandLogo';
import HomeSlider from './HomeSlider';
import HotProducts from './HotProducts';
import ProductArea from './ProductArea';
import ProductAreaTab from './ProductAreaTab';
import ServiceArea from './ServiceArea';
import SingleBanner from './SingleBanner';
import TwoBannerArea from './TwoBannerArea';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
 
return <div className="main-wrapper main-wrapper-2">   
    <HomeSlider/>
    <BannerArea/>
    <ProductAreaTab/>
    <TwoBannerArea/>
    <ServiceArea/>
    <ProductArea />
    <SingleBanner/>
    <HotProducts/>
    <BrandLogo />    
  </div>
};

export default Home;

