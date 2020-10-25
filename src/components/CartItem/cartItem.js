import React from 'react'

function CartItem({item}) {
    const { url, title, price, quantity } = item
    return (
        <div className='cartItem'>
            <img src={url} alt=''/>
            <div className='cartItem__details'>
                <h4>{title}</h4>
                <h4>{quantity} x ${price}</h4>
            </div>
        </div>
    )
}

export default CartItem
