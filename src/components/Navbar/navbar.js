import React, { useState, useEffect } from 'react';
import './navbar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { selectUser } from '../../features/userSlice';
import { selectBasket, selectOpen, setOpen } from '../../features/basketSlice';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import Cart from '../Cart/cart';

function Navbar() {
	const dispatch = useDispatch()
	const user = useSelector(selectUser);
	const basket = useSelector(selectBasket);
	let toggleCart = useSelector(selectOpen)
	
	 const handleShoppingCart = () => {
		console.log(toggleCart)
		dispatch(setOpen())
		
	 }
	
	return (
		<div className="navbar">
			<div className="navbar__items">
				<Link to='/'><HomeIcon /></Link>
				<h3 onClick={() => auth.signOut()}>LogOut</h3>
				<ShoppingCartIcon onClick= {handleShoppingCart}/>
					{
						toggleCart ? (<Cart />) : null
					}
				<div className='navbar__cartLength'>
					<p>{basket.length}</p>
				</div>
			</div>
		</div>
	);
	 
}



export default Navbar;
