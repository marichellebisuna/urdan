import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import WishlistArea from '../components/Wishlist/WishlistArea'
import { addToWish, listWish } from '../redux/actions/wishActions'
import { wrapper } from '../redux/store'

const wishlist = () => {
  return (
    <div>
      <Breadcrumb title='Wishlist'/>
      <WishlistArea/>
     </div>
  )
}

export default wishlist


