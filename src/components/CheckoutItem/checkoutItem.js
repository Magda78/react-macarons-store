import React from 'react';
//import { connect } from 'react-redux';
//import { clearItem, addItem, removeItem } from '../redux/cart/cart.action';
import './checkoutItem.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { selectBasket } from '../../features/basketSlice';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/cartItem';

function CheckoutItem({id,url,price,quantity,title, clearItem, addItem, removeItem}) {
    //const { url, title, price, quantity } = item
    const basket = useSelector(selectBasket);

    const addItemHandler = () => (
        console.log('add')
    )

    const minusItemHandler = () => (
        console.log('minus')
    )

    const removeItemHandler = () => (
        console.log('remove')
    );
    return (
        <div className='checkoutItem'>
            <div className='checkoutItem__img'>
                <img src={url} alt='' />
            </div>
            <span className='checkoutItem__name'>{title}</span>
            <div className='checkoutItem__quantity'>
                <span className='checkoutItem__icons' onClick={minusItemHandler}><ArrowLeftIcon/></span>
                <span>{quantity}</span>
                <span className='checkoutItem__icons' onClick={addItemHandler}><ArrowRightIcon/></span>
            </div>
            <span className='checkoutItem__price'>${price}</span>
            <span className='checkout__remove checkoutItem__icons' onClick={removeItemHandler}><DeleteOutlineIcon/></span>
        </div>
    )
}



export default CheckoutItem;
