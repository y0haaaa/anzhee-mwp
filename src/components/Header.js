import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import Order from './Order';

export default function Header(props) {

    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div className='top-header'>
                <div className = 'logo'>
                    <a href = 'https://anzhee.ru/' target="_blank">
                        <img src = './img/anzee_blue_logo.png'></img>
                    </a>
                </div>
                <div className='phone'>
                    <FaPhone className='phone-ico' />
                    <span className='phone-number'>8 (800) 505-70-45</span>
                </div>
                <div onClick={() => setCartOpen(cartOpen = !cartOpen)} className='shop-cart'>
                    <FaCartShopping className={`shop-cart-button ${cartOpen && 'active'}`}/>
                    <div className='shop-cart-counter'>5</div>
                    {cartOpen &&(
                        <div className='shop-cart-form'>
                            {props.orders.map(el => (
                                <Order key={el.id} item={el}/>
                            ))}
                        </div>
                    )}
                </div>

                <ul className = 'nav'>
                    <li>Каталог</li>
                    <li>Контакты</li>
                    <li>О нас</li>
                </ul>
                
            </div>
            <div className = 'presentation'></div>
        </header>
    )
}
