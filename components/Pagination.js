import React from 'react'

const Pagination = () => {
  return (
    <div className="pagination-style-1" data-aos="fade-up" data-aos-delay="200">
    <ul>
        <li><a className="active" href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a className="next" href="#"><i className=" ti-angle-double-right "></i></a></li>
    </ul>
</div>
  )
}

export default Pagination