import React from 'react';
import './checkout.css';
import CheckoutItem from '../../CheckoutItem/checkoutItem';
import { selectBasket } from '../../../features/basketSlice';
import { useSelector } from 'react-redux';
//import { createStructuredSelector } from 'reselect';
//import {
  //  selectCartItems,
   // selectCartTotal
  //} from '../../redux/cart/cart.selector';

  
function Checkout({cartItems, total}) {
    const basket = useSelector(selectBasket);
    return (
        <div className='checkout'> 
            <div className='checkout__header'>
                <div className='checkout__headerItem'>
                    <span>Product</span>
                </div>
                <div className='checkout__headerItem'>
                    <span>Name</span>
                </div>
                <div className='checkout__headerItem'>
                    <span>Quantity</span>
                </div>
                <div className='checkout__headerItem'>
                    <span>Price</span>
                </div>
                <div className='checkout__headerItem'>
                    <span>Remove</span>
                </div>
            </div>
            {basket.map(item=> (
                <CheckoutItem 
                key={item.id} 
                id={item.id} 
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                url={item.url}
                />
            ))
            }
            <div className='checkout__total'>TOTAL: ${total}</div>
        </div>
    )
}


export default Checkout;
