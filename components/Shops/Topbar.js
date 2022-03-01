import React from 'react'
import { useState } from 'react';

const Topbar = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="shop-topbar-wrapper mb-40">
      <div className="shop-topbar-left">
          <div className="showing-item">
              <span>Showing 1–12 of 60 results</span>
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
              <a href="#shop-1" data-bs-toggle="tab"><i className=" ti-layout-grid3 " onClick={e=>setShow(!show)}></i> </a>
              <a className="active" href="#shop-2" data-bs-toggle="tab"><i className=" ti-view-list-alt " onClick={e=>setShow(!show)}></i></a>
          </div>
      </div>
    </div>
  )
}

export default Topbar