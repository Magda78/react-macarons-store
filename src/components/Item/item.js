import React from 'react';
import './item.css';
import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cart.action';

function Item({item, addItem, cartItems}) {
    const { url, title, price } = item
    return (
        <div className='item'>
            <div className='item__img'>
                <img src={url} alt='' />
    <button onClick = {() => addItem(item)}>
         {cartItems ? 'In the cart': 'Add to the cart'
          }</button>
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

  const mapStateToProps = (state) => ({
	cartItems: state.cart.cartItems
})



export default connect(mapStateToProps, mapDispatchToProps)(Item)
