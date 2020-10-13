import React from 'react';
import './item.css';

function Item() {
    return (
        <div className='item'>
            <div className='item__img'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdzyi3-we_nv5EWZNEqxGOu09KzMooSdk3zlqWoEw_t8ITM49ZBmPfObVKLs0&usqp=CAc' alt='' />
            </div>
            <div className='item__details'>
                <h3>macaroon</h3>
                <p>12.66</p>
            </div>
        </div>
    )
}

export default Item
