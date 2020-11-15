import React, { useState, useEffect } from 'react';
import './navbar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { selectUser } from '../../features/userSlice';
import { selectOpen, setOpen } from '../../features/basketSlice';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import Cart from '../Cart/cart';

function Navbar() {
	const dispatch = useDispatch()
	const user = useSelector(selectUser);
	let toggleCart = useSelector(selectOpen)
	
	 const handleShoppingCart = () => {
		console.log(toggleCart)
		dispatch(setOpen())
		
	 }
	
	return (
		<div className="navbar">
			<div className="navbar__items">
				<Link to='/'><h3>Shop</h3></Link>
				<h3 onClick={() => auth.signOut()}>{user.displayName}</h3>
				<ShoppingCartIcon onClick= {handleShoppingCart}/>
					{
						toggleCart ? (<Cart />) : null
					}
			</div>
		</div>
	);
	 
}



export default Navbar;
