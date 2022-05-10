import React from 'react'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import { getProductDetails, getProducts } from '../../redux/actions/productActions'
import { wrapper } from '../../redux/store'


export default function ProductDetailsPage() {
 
  return (
    <>    
        <ProductDetails/>  
    </>
  
  )
}



export const getServerSideProps = wrapper.getServerSideProps(async ({ req, params, store }) => {
  await store.dispatch(getProductDetails(req, params.id))
  await store.dispatch(getProducts(req))
 
})

