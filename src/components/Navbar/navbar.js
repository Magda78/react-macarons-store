import React from 'react';
import './navbar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import { toogleCartHidden } from '../redux/cart/cart.action';
import { Link } from 'react-router-dom';
import Cart from '../Cart/cart';
import { signInWihGoogle } from '../../firebase'

function Navbar({ toogleCartHidden, hidden }) {
	return (
		<div className="navbar">
			<div className="navbar__items">
				<Link to='/'><h3>Shop</h3></Link>
				<h3 onClick={signInWihGoogle}>SignIn</h3>
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
