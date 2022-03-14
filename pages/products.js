import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Sidebar from '../components/Shops/Sidebar'
import Topbar from '../components/Shops/Topbar'
import { getProducts } from '../redux/actions/productActions'
import { ALL_PRODUCTS_RESET } from '../redux/constants/productConstants';
import { wrapper } from '../redux/store'

const products = () => {
  return (
    <div>
      <Breadcrumb title='Shop'/>
        <div className="shop-area shop-page-responsive pt-100 pb-100">
              <div className="container">
                  <div className="row flex-row-reverse">
                    <div className="col-lg-9">
                      <div className="shop-bottom-area">
                          <div className="tab-content jump">
                            <Topbar/>                           
                          </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <Sidebar/>
                    </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default products

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, query, store }) => {
  await store.dispatch(getProducts(req, query.page, query.name, query.color, query.size, query.price, query.category))
 await store.dispatch({type:ALL_PRODUCTS_RESET})
})