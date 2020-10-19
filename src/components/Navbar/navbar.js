import React from 'react';
import './navbar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import toogleCartHidden from '.././redux/cart/cart.action'

function Navbar({ toogleCartHidden }) {
	return (
		<div className="navbar">
			<div className="navbar__items">
				<h3>Products</h3>
				<h3>About</h3>
				<ShoppingCartIcon onClick={toogleCartHidden}/>
			</div>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	toogleCartHidden: () => dispatch(toogleCartHidden())
});

export default connect(null, mapDispatchToProps)(Navbar);
