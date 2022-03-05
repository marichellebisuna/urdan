import React, {useEffect} from 'react'
import Breadcrumb from '../components/Breadcrumb'
import AboutUsArea from '../components/About/AboutUsArea'
import BannerArea from '../components/About/BannerArea'
import Testimonial from '../components/About/Testimonial'
import FunFactArea from '../components/About/FunFactArea'
import TeamArea from '../components/About/TeamArea'
import SubscribeArea from '../components/About/SubscribeArea'
import Script from 'next/Script'


const about = () => {

  return (
    <div>
       <Script src='/assets/js/main.js' strategy="lazyOnLoad"></Script>
      <Breadcrumb title='about us'/>
      <AboutUsArea/>
      <BannerArea/>
      <Testimonial/>
      <FunFactArea/>
      <TeamArea/>
      <SubscribeArea/>
    </div>
  )
}

export default about