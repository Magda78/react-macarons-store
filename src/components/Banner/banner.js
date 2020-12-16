import React from 'react';
import './banner.css';
import BannerImg from '../../assets/banner.jpg'

function Banner() {
	return (
		<div className="banner">
			<div className='banner__left'>
                <div className='banner__leftInfo'>
                    <h2>Something for sweet tooth</h2>
                    <p> Phasellus sollicitudin lorem nec justo molestie placerat. 
                        Pellentesque ac eros elementum, euismod ligula nec, posuere massa. 
                        Vestibulum vel blandit arcu, nec posuere tellus. Ut laoreet nec nibh vel gravida. 
                        Ut facilisis consectetur velit eget consequat. Vestibulum ante ipsum primis in 
                        faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum lorem lectus.  </p>
                </div>
            </div>
            <div className='banner__right'>
                    <img src={BannerImg} />
            </div>
		</div>
	);
}

export default Banner;
