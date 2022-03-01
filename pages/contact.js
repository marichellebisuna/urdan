import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ContactForm from '../components/Contact/ContactForm'
import ContactUsArea from '../components/Contact/ContactUsArea'
import MapArea from '../components/Contact/MapArea'

const contact = () => {
  return (
    <div>
      <Breadcrumb title='contact us'/>
      <ContactUsArea/>
      <MapArea/>
      <ContactForm/>     
    </div>
  )
}

export default contact