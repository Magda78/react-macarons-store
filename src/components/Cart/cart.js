import React from 'react';
import './cart.css';
import CartItem from '../CartItem/cartItem';
//import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';
//import { toogleCartHidden } from '../redux/cart/cart.action';

function Cart({cartItems, history, toogleCartHidden}) {
    return (
        <div className='cart'>
            <div className='cart__items'>
                {
               
                    <span className='cart__itemsMsg'>Your cart is empty</span>
                }
            </div>
            <button onClick = {() => {
                history.push('/checkout')
                
            }}>Check Out</button>
        </div>
    )
}



export default Cart;
