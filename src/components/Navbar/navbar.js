import React from 'react';
import './navbar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Navbar() {
	return (
		<div className="navbar">
			<div className="navbar__items">
				<h3>Products</h3>
				<h3>About</h3>
				<ShoppingCartIcon />
			</div>
		</div>
	);
}

export default Navbar;
