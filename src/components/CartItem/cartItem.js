import React from 'react';
import './cartItem.css';

function CartItem({item}) {
    const { url, title, price, quantity } = item
    return (
        <div className='cartItem'>
            <div className='cartItem__img'>
                <img src={url} alt=''/>
            </div>
            <div className='cartItem__details'>
                <h4>{title}</h4>
                <h4>{quantity} x ${price}</h4>
            </div>
        </div>
    )
}

export default CartItem
