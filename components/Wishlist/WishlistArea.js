import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const WishlistArea = () => {
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
                                            <tr>
                                                <td className="product-remove"><a href="#">×</a></td>
                                                <td className="product-thumbnail">
                                                  <Link href='product/:id'>
                                                    <a><Image src="/assets/images/cart/cart-1.jpg" alt="" width={98} height={112}/></a>
                                                  </Link>  
                                                </td>
                                                <td className="product-name">
                                                    <h5><Link href='product/:id'><a >Stylish Swing Chair</a></Link></h5>
                                                </td>
                                                <td className="product-wishlist-price"><span className="amount">$120.00</span></td>
                                                <td className="stock-status">
                                                    <span><i className="las la-check"></i> In Stock</span>
                                                </td>
                                                <td className="wishlist-cart btn-hover"><a href="#">Add to Cart</a></td>
                                            </tr>
                                            <tr>
                                                <td className="product-remove"><a href="#">×</a></td>
                                                <td className="product-thumbnail">
                                                <Link href='product/:id'>
                                                    <a><Image src="/assets/images/cart/cart-2.jpg" alt="" width={98} height={112}/></a></Link>
                                                </td>
                                                <td className="product-name">
                                                    <h5><Link href='product/:id'><a >Modern Lounge Chairs</a></Link></h5>
                                                </td>
                                                <td className="product-wishlist-price"><span className="amount">$120.00</span></td>
                                                <td className="stock-status">
                                                    <span><i className="las la-check"></i> In Stock</span>
                                                </td>
                                                <td className="wishlist-cart btn-hover"><a href="#">Add to Cart</a></td>
                                            </tr>
                                            <tr>
                                                <td className="product-remove"><a href="#">×</a></td>
                                                <td className="product-thumbnail">
                                                <Link href='product/:id'>
                                                    <a><Image src="/assets/images/cart/cart-3.jpg" alt="" width={98} height={112}/></a></Link>
                                                </td>
                                                <td className="product-name">
                                                    <h5><Link href='product/:id'><a >Modern Swivel Chair</a></Link></h5>
                                                </td>
                                                <td className="product-wishlist-price"><span className="amount">$120.00</span></td>
                                                <td className="stock-status">
                                                    <span><i className="las la-check"></i> In Stock</span>
                                                </td>
                                                <td className="wishlist-cart btn-hover"><a href="#">Add to Cart</a></td>
                                            </tr>
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