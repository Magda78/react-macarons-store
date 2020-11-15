import React from 'react';
import './item.css';
//import { selectBasket } from '../../features/basketSlice';
//import { useSelector } from 'react-redux';


function Item({item, addItem, cartItems}) {
    const { url, title, price } = item
    return (
        <div className='item'>
            <div className='item__img'>
                <img src={url} alt='' />
    <button onClick = {() => addItem(item)}>
    Add to the cart
          </button>
            </div>
            <div className='item__details'>
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
        </div>
    )
}




export default Item;
