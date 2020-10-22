import React from 'react';
import './item.css';
import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cart.action';

function Item({item, addItem}) {
    const { url, title, price } = item
    return (
        <div className='item'>
            <div className='item__img'>
                <img src={url} alt='' />
                <button onClick = {() => addItem(item)}>Add to the card</button>
            </div>
            <div className='item__details'>
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });



export default connect(null, mapDispatchToProps)(Item)
