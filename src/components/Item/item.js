import React, { useState } from 'react';
import './item.css';
import { selectBasket, setBasket } from '../../features/basketSlice';
import { useSelector, useDispatch } from 'react-redux';


function Item({item, addItem, cartItems}) {
    const dispatch = useDispatch()
	const basket = useSelector(selectBasket);
    const { id, url, title, price } = item
    let { quantity } = item
    const [buttonTitle, setButtonTitle] = useState('Add to the card')

    const addToTheCartHandler = (id) => (
        dispatch(setBasket(
            {
                id: id,
                url: url,
                title: title,
                price: price,
                quantity: quantity
            }
        )),
        setButtonTitle('In the cart')
        )


    return (
        <div className='item'>
            <div className='item__img'>
                <img src={url} alt='' />
    <button onClick={() => addToTheCartHandler(id)}>
    {buttonTitle}
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
