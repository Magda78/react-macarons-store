import React from 'react';
import './cart.css';
import CartItem from '../CartItem/cartItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Cart({cartItems, history}) {
    return (
        <div className='cart'>
            <div className='cart__items'>
                {
                    cartItems.length ?
                    cartItems.map(item => (
                        <CartItem 
                        key={item.id}
                        item={item}/>
                    )):
                    <span className='cart__itemsMsg'>Your cart is empty</span>
                }
            </div>
            <button onClick = {() => {
                history.push('/checkout')
            }}>Check Out</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
	cartItems: state.cart.cartItems
})

export default withRouter(connect(mapStateToProps)(Cart));
