import React from 'react';
import './cart.css';
import CartItem from '../CartItem/cartItem';
import { selectBasket, setTotal } from '../../features/basketSlice';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Cart({cartItems, history, toogleCartHidden}) {
    const dispatch = useDispatch()
    const basket = useSelector(selectBasket);
    //const isThere = basket.find(item => item.id === id) 
    const totalHandler = () => {
        //  console.log(cartTotal)
          dispatch(setTotal());
      }

    return (
        <div className='cart'>
            <div className='cart__items'>
                {
                    basket.length > 0 ? (   
                                   
                        basket.map(item => (
                        <CartItem 
                             key={item.index}
                             id={item.id}
                             title={item.title}
                             url={item.url}
                             price={item.price}
                             quantity= {item.quantity}
                             />
                        ),
                        )
                        
                        ) :
                    <span className='cart__itemsMsg'>Your cart is empty</span>
                }
            </div>
            <button onClick = {(e) => {
                history.push('/checkout')
                console.log(basket)
                totalHandler()
                    
            }}>Check Out</button>
        </div>
    )
}



export default withRouter(Cart);
