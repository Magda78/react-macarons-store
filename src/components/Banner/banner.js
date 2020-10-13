import React from 'react';
import './banner.css';

function Banner() {
	return (
		<div className="banner">
			<div className='banner__left'>
                <div className='banner__leftInfo'>
                    <h2>Something for sweet tooth</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. </p>
                    <button>Order</button>
                </div>
            </div>
            <div className='banner__right'>
            </div>
		</div>
	);
}

export default Banner;
