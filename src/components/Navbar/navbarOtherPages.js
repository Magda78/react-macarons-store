import React, { useState, useEffect } from 'react';
import './navbar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { selectUser } from '../../features/userSlice';
import { selectBasket, selectOpen, setOpen } from '../../features/basketSlice';
import { setSearch, selectProducts } from '../../features/productsSlice'
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import Cart from '../Cart/cart';
//import Home from '../pages/Home/home';
import Backdrop from '../Backdrop/backdrop';
import SearchIcon from '@material-ui/icons/Search';

function NavbarOtherPages() {
	const dispatch = useDispatch()
	const user = useSelector(selectUser);
	const basket = useSelector(selectBasket);
	const productList = useSelector(selectProducts)
	let toggleCart = useSelector(selectOpen);
	const [searchInput, setSearchInput] = useState('')
	
	 const handleShoppingCart = () => {
		console.log(toggleCart)
		dispatch(setOpen())
	 }

	 const handleSearch = (e) => {
		 setSearchInput(e.target.value.toUpperCase());
		 console.log(e.target.value);
	 }

	 const handleSubmitSearch = () => {
		 dispatch(setSearch(searchInput))
		console.log('FROM NAVBAR:', searchInput)
		console.log('FROM NAVBAR:',productList)
	 }
	
	return (
		<div className="navbar">
			<div className="navbar__items">
				<Link to='/'><HomeIcon /></Link>
				
				<h3 onClick={() => auth.signOut()}>LogOut</h3>
				<ShoppingCartIcon onClick= {handleShoppingCart}/>
					{
						toggleCart ? 
						<>
						<Cart />
							<Backdrop/>
							</>: null
					}
				<div className='navbar__cartLength'>
					<p>{basket.length}</p>
				</div>
			</div>
		</div>
	);
	 
}

export default NavbarOtherPages;