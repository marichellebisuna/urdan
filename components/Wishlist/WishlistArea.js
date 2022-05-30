import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { WISH_ADD_ITEM } from '../../redux/constants/wishConstants';
import createPersistedState from 'use-persisted-state';
import Cookies from 'js-cookie';

const WishlistArea = () => {
    // useEffect(()=>{
    //     const item = Cookies.get('wishItems')
    //     console.log(item)
    //     },[])
   
      const { wishItems, error} = useSelector(state => state.wish);
      console.log(wishItems)

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
                                            {wishItems && wishItems.length === 0 ? <div className="text-center alert alert-danger mt-5 w-100"><b>No wish items selected yet.</b></div> : 
                                            wishItems && wishItems.map( (wish) =>                                           
                                            <tr key={wish._id}>
                                                <td className="product-remove"><a href="#">×</a></td>
                                                <td className="product-thumbnail">
                                                  <Link href='product/:id'>
                                                    <a><Image src={wish.images[0].url} alt="" width={98} height={112}/></a>
                                                  </Link>  
                                                </td>
                                                <td className="product-name">
                                                    <h5><Link href='product/:id'><a >{wish.title}</a></Link></h5>
                                                </td>
                                                <td className="product-wishlist-price"><span className="amount">${wish.price}</span></td>
                                                {wish && wish.inStock === 0 ? 
                                                <td className="stock-status">
                                                    <span className='text-danger'><i className="las la-check"></i> Out of Stock</span>
                                                </td> :
                                                <>
                                                <td className="stock-status">
                                                    <span><i className="las la-check"></i> In Stock</span>
                                                </td>
                                                <td className="wishlist-cart btn-hover"><a href="#">Add to Cart</a></td>
                                                </>
                                            }
                                            </tr>
  )

                                            }
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

export async function getServerSideProps(context) {
    const session = await getSession(context)
    console.log(session)
        
    return {
      props: { session }
    }
  }
  