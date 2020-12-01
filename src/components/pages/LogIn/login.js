import React from 'react';
import { auth, provider } from '../../../firebase';
import './login.css';
import Macarons from '../../../assets/Macarons.png'
//import { useSelector } from 'react-redux';
//import { selectUser } from '../../features/userSlice';


function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(error => {
            alert(error.message)
        })
    } 
    return (
        <div className="login">
			<div className='login__left'>
                <div className='login__leftInfo'>
                    <img src={Macarons} alt='logo' />
                    <h4>Welcome to our online store </h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse imperdiet eleifend ornare. 
                        Pellentesque et feugiat ex. 
                        Duis quis lorem non lectus posuere dictum vitae in felis. 
                        Fusce ullamcorper, urna quis iaculis convallis, 
                        lacus massa vehicula augue, quis dignissim magna diam vel enim. 
                        Suspendisse posuere, turpis nec malesuada lacinia, 
                        orci metus fermentum dolor, eget congue leo felis eget nisi. 
                        In malesuada risus sed lacinia consectetur.</p>
                        <button onClick={signIn}>LogIn</button>
                </div>
            </div>
            <div className='login__right'>
            </div>
		</div>
    )
}

export default Login
