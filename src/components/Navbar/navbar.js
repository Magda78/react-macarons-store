import React from 'react';
import './navbar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import { toogleCartHidden } from '../redux/cart/cart.action';
import Cart from '../Cart/cart';

function Navbar({ toogleCartHidden, hidden }) {
	return (
		<div className="navbar">
			<div className="navbar__items">
				<h3>Products</h3>
				<h3>About</h3>
				<ShoppingCartIcon onClick={toogleCartHidden}/>
			</div>
			{hidden ? null : <Cart/>}
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	toogleCartHidden: () => dispatch(toogleCartHidden())
});

const mapStateToProps = (state) => ({
	hidden: state.cart.hidden
})


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
