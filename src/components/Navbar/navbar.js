import React, { useState, useEffect } from 'react';
import './navbar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//import { connect } from 'react-redux';
//import { toogleCartHidden } from '../redux/cart/cart.action';
import { Link } from 'react-router-dom';
import Cart from '../Cart/cart';
import { auth, provider } from '../../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function Navbar() {

const signIn = () => {
	auth.signInWithPopup(provider).catch(error => {
		alert(error.message)
	})
} 

	return (
		<div className="navbar">
			<div className="navbar__items">
				<Link to='/'><h3>Shop</h3></Link>
				<h3 onClick={signIn}>SignIn</h3>
				<ShoppingCartIcon />
			</div>
		</div>
	);
}



export default Navbar//;
