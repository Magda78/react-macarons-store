import React from 'react';
import './item.css';

function Item({id, title, price, url}) {
    return (
        <div className='item'>
            <div className='item__img'>
                <img src={url} alt='' />
            </div>
            <div className='item__details'>
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default Item
