import React, {useState} from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ShopGrid from '../components/Shops/ShopGrid'
import ShopList from '../components/Shops/ShopList'
import Sidebar from '../components/Shops/Sidebar'

const products = ({show}) => { 

  return (
    <div>
      <Breadcrumb title='Shop'/>
      <div className="shop-area shop-page-responsive pt-100 pb-100">
            <div className="container">
                <div className="row flex-row-reverse">
                  <div className="col-lg-9">
                    {show ?<ShopList/>:<ShopGrid/>}               
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