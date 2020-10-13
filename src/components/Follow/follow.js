import React from 'react';
import './follow.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Follow() {
    return (
        <div className='follow'>
            <h3>Follow Us</h3>
            <div className='follow__icons'>
                <div className='follow__iconsContainer'>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                </div>
            </div>
        </div>
    )
}

export default Follow;
