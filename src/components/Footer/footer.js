import React from 'react';
import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <img src='./img/Macarons.png' alt='logo' />
            <div className='footer__content'>
                <div className='footer__explore'>
                    <h4>Explore</h4>
                    <p>HomePage</p>
                    <p>About</p>
                </div>
                <div className='footer__follow'>
                    <h4>Follow</h4>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Pinterest</p>
                </div>
                <div className='footer__contact'>
                    <h4>Contact Us</h4>
                    <p>111 Mision Viejo CA</p>
                    <p>macarons@gmail.com</p>
                </div>
            </div>
        </div>
    )
    }
    
export default Footer
