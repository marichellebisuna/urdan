import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CartTable = () => {
  return (
    <div className="col-12">
    <form action="#">
        <div className="cart-table-content">
            <div className="table-content table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th className="width-thumbnail"></th>
                            <th className="width-name">Product</th>
                            <th className="width-price"> Price</th>
                            <th className="width-quantity">Quantity</th>
                            <th className="width-subtotal">Subtotal</th>
                            <th className="width-remove"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="product-thumbnail">
                                <Link href="/product/:id"><a><Image src="/assets/images/cart/cart-1.jpg" alt="" width={98} height={112}/></a></Link>
                            </td>
                            <td className="product-name">
                                <h5><Link href="/product/:id"><a>Stylish Swing Chair</a></Link></h5>
                            </td>
                            <td className="product-cart-price"><span className="amount">$120.00</span></td>
                            <td className="cart-quality">
                                <div className="product-quality">
                                    <input className="cart-plus-minus-box input-text qty text" name="qtybutton" value="1"/>
                                </div>
                            </td>
                            <td className="product-total"><span>$120.00</span></td>
                            <td className="product-remove"><Link href="/"><a ><i className=" ti-trash "></i></a></Link></td>
                        </tr>
                        <tr>
                            <td className="product-thumbnail">
                                <Link href="/product/:id"><a><Image src="/assets/images/cart/cart-2.jpg" alt="" width={98} height={112}/></a></Link>
                            </td>
                            <td className="product-name">
                                <h5><Link href="/product/:id"><a>Modern Lounge Chairs</a></Link></h5>
                            </td>
                            <td className="product-cart-price"><span className="amount">$120.00</span></td>
                            <td className="cart-quality">
                                <div className="product-quality">
                                    <input className="cart-plus-minus-box input-text qty text" name="qtybutton" value="1"/>
                                </div>
                            </td>
                            <td className="product-total"><span>$120.00</span></td>
                            <td className="product-remove"><Link href="/"><a><i className=" ti-trash "></i></a></Link></td>
                        </tr>
                        <tr>
                            <td className="product-thumbnail">
                                <Link href="/product/:id"><a><Image src="/assets/images/cart/cart-3.jpg" alt="" width={98} height={112}/></a></Link>
                            </td>
                            <td className="product-name">
                                <h5><Link href="/product/:id"><a>Modern Swivel Chair</a></Link></h5>
                            </td>
                            <td className="product-cart-price"><span className="amount">$120.00</span></td>
                            <td className="cart-quality">
                                <div className="product-quality">
                                    <input className="cart-plus-minus-box input-text qty text" name="qtybutton" value="1"/>
                                </div>
                            </td>
                            <td className="product-total"><span>$120.00</span></td>
                            <td className="product-remove"><Link href="/"><a><i className=" ti-trash "></i></a></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="cart-shiping-update-wrapper">
                    <div className="cart-shiping-update btn-hover">
                        <Link href="/products"><a >Continue Shopping</a></Link>
                    </div>
                    <div className="cart-clear-wrap">
                        <div className="cart-clear btn-hover">
                            <button>Update Cart</button>
                        </div>
                        <div className="cart-clear btn-hover">
                            <Link href="/"><a href="#">Clear Cart</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
  )
}

export default CartTable