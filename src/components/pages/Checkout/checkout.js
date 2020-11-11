import React from 'react';
import './checkout.css';
//import { connect } from 'react-redux';
import CheckoutItem from '../../CheckoutItem/checkoutItem';
//import { createStructuredSelector } from 'reselect';
//import {
  //  selectCartItems,
   // selectCartTotal
  //} from '../../redux/cart/cart.selector';

  
function Checkout({cartItems, total}) {
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
            {cartItems.map(item=> (
                <CheckoutItem key={item.id} item={item}/>
            ))
            }
            <div className='checkout__total'>TOTAL: ${total}</div>
        </div>
    )
}


export default Checkout;
