import React from 'react';
import './cart.css';
import CartItem from '../CartItem/cartItem';
import { selectBasket } from '../../features/basketSlice';
import { useSelector } from 'react-redux';

function Cart({cartItems, history, toogleCartHidden}) {
    const basket = useSelector(selectBasket);
    return (
        <div className='cart'>
            <div className='cart__items'>
                {
                    basket ? (
                        basket.map(item => (
                            <CartItem 
                            id={item.id}
                            title={item.title}
                            url={item.url}
                            price={item.price}
                            quantity= {1}
                            />
                        ))
                        ) :
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
