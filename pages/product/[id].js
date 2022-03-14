import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import { getProductDetails } from '../../redux/actions/productActions'
import { wrapper } from '../../redux/store'


export default function Index() {
 
  return (
    <>    
     <Breadcrumb title='product details'/>
     <ProductDetails/>       
    </>
  
  )
}



export const getServerSideProps = wrapper.getServerSideProps(async ({ req, params, store }) => {
  await store.dispatch(getProductDetails(req, params.id))
 
})
