import React from 'react';
import './banner.css';
import BannerImg from '../../assets/banner.jpg'

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
                </div>
            </div>
            <div className='banner__right'>
                    <img src={BannerImg} />
            </div>
		</div>
	);
}

export default Banner;
