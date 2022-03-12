import { useSelector, useDispatch } from 'react-redux';
import Home from '../components/Home/Home';

import { getProducts } from '../redux/actions/productActions'

import { wrapper } from '../redux/store'


export default function Index() {
  const dispatch = useDispatch()
  return (
  <div>    
   <Home/>
  </div>
   )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, query, store }) => {
  await store.dispatch(getProducts(req, query.page, query.name, query.color, query.size, query.price, query.category))
 
})

