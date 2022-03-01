import Link from 'next/link'
import React from 'react'

const Pagination = () => {
  return (
    <div className="pagination-style-1">
      <ul>
          <li><Link href="#"><a className="active" >1</a></Link></li>
          <li><Link href="#"><a >2</a></Link></li>
          <li><Link href="#"><a >3</a></Link></li>
          <li><Link href="#"><a className="next" ><i className=" ti-angle-double-right "></i></a></Link></li>
      </ul>
    </div>
  )
}

export default Pagination