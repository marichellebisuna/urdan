import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import WishlistArea from '../components/Wishlist/WishlistArea'

const wishlist = () => {
  return (
    <div>
      <Breadcrumb title='Wishlist'/>
      <WishlistArea/>
     </div>
  )
}

export default wishlist