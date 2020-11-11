import React from 'react';
//import { connect } from 'react-redux';
//import { clearItem, addItem, removeItem } from '../redux/cart/cart.action';
import './checkoutItem.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CartItem from '../CartItem/cartItem';

function CheckoutItem({item, clearItem, addItem, removeItem}) {
    const { url, title, price, quantity } = item
    return (
        <div className='checkoutItem'>
            <div className='checkoutItem__img'>
                <img src={url} alt='' />
            </div>
            <span className='checkoutItem__name'>{title}</span>
            <div className='checkoutItem__quantity'>
                <span className='checkoutItem__icons' onClick={() => removeItem(item)}><ArrowLeftIcon/></span>
                <span>{quantity}</span>
                <span className='checkoutItem__icons' onClick={() => addItem(item)}><ArrowRightIcon/></span>
            </div>
            <span className='checkoutItem__price'>${price}</span>
            <span className='checkout__remove checkoutItem__icons'
            onClick={() => clearItem(item)}><DeleteOutlineIcon/></span>
        </div>
    )
}



export default CheckoutItem;
