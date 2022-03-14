import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from '../components/Home/Home';
import { getProducts } from '../redux/actions/productActions'
import { ALL_PRODUCTS_RESET } from '../redux/constants/productConstants';
import { wrapper } from '../redux/store'

export default function Index() {
  // const dispatch = useDispatch(); 
  // useEffect(() => {
  //  dispatch({type:ALL_PRODUCTS_RESET})
  // }, [dispatch])

  return (
  <div>    
   <Home/>
  </div>
   )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, query, store }) => {
  await store.dispatch(getProducts(req, query.page, query.name, query.color, query.size, query.price, query.category))
 await store.dispatch({type:ALL_PRODUCTS_RESET})
})

