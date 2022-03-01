import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MiniCart = () => {
  return (
    <div className="sidebar-cart-active">
    <div className="sidebar-cart-all">
        
        <a className="cart-close" href="#">
            <i className="pe-7s-close"></i>
            </a>
        <div className="cart-content">
            <h3>Shopping Cart</h3>
            <ul>
                <li>
                    <div className="cart-img">
                        <Link href="/product/:id"><a><Image src="/assets/images/cart/cart-1.jpg" alt="" width={98} height={112}/></a></Link>
                    </div>
                    <div className="cart-title">
                        <h4><Link href="/product/:id"><a href="#">Stylish Swing Chair</a></Link></h4>
                        <span> 1 × $49.00	</span>
                    </div>
                    <div className="cart-delete">
                        <Link href="/"><a>×</a></Link>
                    </div>
                </li>
                <li>
                    <div className="cart-img">
                        <Link href="/product/:id"><a><Image src="/assets/images/cart/cart-2.jpg" alt="" width={98} height={112}/></a></Link>
                    </div>
                    <div className="cart-title">
                        <h4><Link href="/product/:id"><a>Modern Chairs</a></Link></h4>
                        <span> 1 × $49.00	</span>
                    </div>
                    <div className="cart-delete">
                        <Link href="/"><a>×</a></Link>
                    </div>
                </li>
            </ul>
            <div className="cart-total">
                <h4>Subtotal: <span>$170.00</span></h4>
            </div>
            <div className="cart-btn btn-hover">
                <Link href="/cart"><a className="theme-color">view cart</a></Link>
            </div>
            <div className="checkout-btn btn-hover">
                <Link href="/checkout"><a className="theme-color">checkout</a></Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default MiniCart