import React from 'react';
import './products.css';
import Item from '../Item/item';

function Products() {
    return (
        <div className='products'>
            <h3>Our Products</h3>
            <div className='product__list'>
                <Item />
            </div>
        </div>
    )
}

export default Products
