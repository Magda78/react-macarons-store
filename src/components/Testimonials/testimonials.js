import React from 'react';
import './testimonials.css';

function Testimonials() {
    return (
        <div className='testimonials'>
             <h3>Testimonials</h3>
             <div className='testimonials__list'>
             <div className='testimonials__content'>
                <div className='testimonials__person'>
                    <img src='./img/avatar1.png' alt='a-1'/>
                    <h2>Joe Doe</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quia maiores similique voluptates quos et unde labore architecto facilis tempore.</p>
                </div>
                <div className='testimonials__person'>
                    <img src='../../img/avatar2.png' alt='a-2'/>
                    <h2>Joe Doe I</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, omnis? Officia perferendis sed vel? Voluptas exercitationem temporibus nostrum iusto laudantium?</p>
                </div>
                <div className='testimonials__person'>
                    <img src='../../img/avatar3.png' alt='a-3'/>
                    <h2>Joe Doe II</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur temporibus eum veritatis velit animi, reiciendis nobis? Omnis repellendus perferendis voluptate.</p>
                </div>
            </div>
             </div>
        </div>
    )
}

export default Testimonials;
