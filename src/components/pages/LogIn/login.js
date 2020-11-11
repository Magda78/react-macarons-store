import React from 'react';
import { auth, provider } from '../../../firebase';
//import { useSelector } from 'react-redux';
//import { selectUser } from '../../features/userSlice';


function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(error => {
            alert(error.message)
        })
    } 
    return (
        <div>
            <button onClick={signIn}>LogIn</button>
        </div>
    )
}

export default Login
