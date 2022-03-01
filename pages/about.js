import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import AboutUsArea from '../components/About/AboutUsArea'
import BannerArea from '../components/About/BannerArea'
import Testimonial from '../components/About/Testimonial'
import FunFactArea from '../components/About/FunFactArea'
import TeamArea from '../components/About/TeamArea'
import SubscribeArea from '../components/About/SubscribeArea'


const about = () => {
  return (
    <div>
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