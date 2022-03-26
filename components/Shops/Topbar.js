import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ShopGrid from './ShopGrid';
import ShopList from './ShopList';

const Topbar = () => {
  const [show, setShow] = useState(true);
  const {  products,  productsCount, resPerPage, filteredProductsCount,} = useSelector(state => state.allProducts);  
  return (
    <>
    <div className="shop-topbar-wrapper mb-40">
      <div className="shop-topbar-left">
          <div className="showing-item">
              <span>Showing 1- {filteredProductsCount>resPerPage ?  resPerPage: filteredProductsCount} of {filteredProductsCount} results</span>
          </div>
      </div>
      <div className="shop-topbar-right">
          <div className="shop-sorting-area">
              <select className="nice-select nice-select-style-1">
                  <option>Default Sorting</option>
                  <option>Sort by popularity</option>
                  <option>Sort by average rating</option>
                  <option>Sort by latest</option>
              </select>
          </div>
          <div className="shop-view-mode nav">
              <a href="#shop-1" data-bs-toggle="tab"><i className=" ti-layout-grid3 " onClick={()=>setShow(!show)}
              ></i> </a>
              <a className="active" href="#shop-2" data-bs-toggle="tab"><i className=" ti-view-list-alt " 
              onClick={()=>setShow(!show)}
              ></i></a>
          </div>
      </div>
    </div>
    {show ?<ShopGrid/>:<ShopList/>}
    </>
  )
}

export default Topbar