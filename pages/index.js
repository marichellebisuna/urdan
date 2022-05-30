import Home from '../components/Home/Home';
import { getProducts } from '../redux/actions/productActions'
import { wrapper } from '../redux/store'

export default function Index() {

  return (
  <div>    
   <Home/>
  </div>
   )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, query, store}) => {
  await store.dispatch(getProducts(req, query, query.page, query.name, query.color, query.size, query.price, query.category))  
})


// export async function getServerSideProps({query}) {
//   const page = query.page || 1
//   const category = query.category || 'all'
//   const sort = query.sort || ''
//   const search = query.search || 'all'

//   const res = await getProducts(
//     `product?limit=${page * 6}&category=${category}&sort=${sort}&title=${search}`
//   )
//   // server side rendering
//   return {
//     props: {
//       products: res.products,
//       result: res.result
//     }, // will be passed to the page component as props
//   }
// }