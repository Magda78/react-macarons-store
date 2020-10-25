import React from 'react';
import './cart.css';
import CartItem from '../CartItem/cartItem';
import { connect } from 'react-redux';

function Cart({cartItems}) {
    return (
        <div className='cart'>
            <div className='cart__items'>
                {
                    cartItems.map(item => (
                        <CartItem 
                        key={item.id}
                        item={item}/>
    ))
                }
            </div>
            <button>Check Out</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
	cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(Cart);
