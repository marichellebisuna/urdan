import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { WISH_EMPTY } from '../../redux/constants/wishConstants';
import { removeFromWish } from '../../redux/actions/wishActions';

const WishlistArea = () => {
     const dispatch = useDispatch()
    const { wishItems} = useSelector(state => state.wish);
console.log(wishItems)
// useEffect(()=>{    
// dispatch({type:WISH_EMPTY})
// },[dispatch])

  return (
    <div className="wishlist-area pb-100 pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="#">
                            <div className="wishlist-table-content">
                                <div className="table-content table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="width-remove"></th>
                                                <th className="width-thumbnail"></th>
                                                <th className="width-name">Product</th>
                                                <th className="width-price"> Unit price </th>
                                                <th className="width-stock-status"> Stock status </th>
                                                <th className="width-wishlist-cart"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                               {wishItems && wishItems.length === 0 
                    ? 
                    <div className="alert alert-danger mt-2 w-100">No products found.</div>
                    : 
                                            
                                            wishItems.map((item, index)=>(                        
                                            <tr key={index}>
                                                <td className="product-remove"><a href="#" onClick={()=>dispatch(removeFromWish(item.product))}>×</a></td>
                                                <td className="product-thumbnail">
                                                  <Link href='product/:id'>
                                                    <a><Image src={item.images[0].url} alt="" width={98} height={112}/></a>
                                                  </Link>  
                                                </td>
                                                <td className="product-name">
                                                    <h5><Link href='product/:id'><a >{item.title}</a></Link></h5>
                                                </td>
                                                <td className="product-wishlist-price"><span className="amount">${item.price}</span></td>
                                                {item.inStock > 0 ? <td className="stock-status">
                                                    <span><i className="las la-check"></i> In Stock</span>
                                                </td>  : <td className="stock-status">
                                                    <span><i className="las la-check"></i> Out of Stock</span>
                                                </td>}
                                               
                                                <td className="wishlist-cart btn-hover"><a href="#">Add to Cart</a></td>
                                            </tr>
                                           ))} 
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default WishlistArea