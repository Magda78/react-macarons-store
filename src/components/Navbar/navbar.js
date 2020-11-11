import React, { useState, useEffect } from 'react';
import './navbar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase';
//import Cart from '../Cart/cart';

function Navbar() {
	const user = useSelector(selectUser);
	
	return (
		<div className="navbar">
			<div className="navbar__items">
				<Link to='/'><h3>Shop</h3></Link>
				<h3 onClick={() => auth.signOut()}>{user.displayName}</h3>
				<ShoppingCartIcon />
			</div>
		</div>
	);
}



export default Navbar;
