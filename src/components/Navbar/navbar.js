import React, { useState, useEffect } from 'react';
import './navbar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { selectUser } from '../../features/userSlice';
import { selectBasket, selectOpen, setOpen, selectQuantity, setQuantity } from '../../features/basketSlice';
import { setSearch, setOpenMessage, selectProducts, selectOpenMessage, setProducts} from '../../features/productsSlice'
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import Cart from '../Cart/cart';
import Products from '../Products/products';
import Home from '../pages/Home/home';
import Backdrop from '../Backdrop/backdrop';
import BackdropMessage from '../Backdrop/backdropMessage';
import SearchIcon from '@material-ui/icons/Search';
import { HashLink } from 'react-router-hash-link';
import Message from '../../components/Message/message';
//import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
	const dispatch = useDispatch()
	const user = useSelector(selectUser);
	const basket = useSelector(selectBasket);
	const productList = useSelector(selectProducts);
	const quantity = useSelector(selectQuantity);
	let toggleCart = useSelector(selectOpen);
	let toggleMessage = useSelector(selectOpenMessage);
	const [searchInput, setSearchInput] = useState('');
	const [buttonClick, setButtonClick] = useState(false);
	const [cartQuantity, setCartQuantity] = useState(0);
	let sum = 0;
	
	 const handleShoppingCart = () => {
		console.log(toggleCart)
		dispatch(setOpen())
	 }

	 const handleSearch = (e) => {
		 setSearchInput(e.target.value.toUpperCase());
		 dispatch(setSearch(e.target.value.toUpperCase())) //cant pass here setInput because after deleting letter first letter is still there
		 console.log(e.target.value);
		 //console.log(searchInput)
		 e.preventDefault();
	 }

	 const handleSubmitSearch = () => {
		//dispatch(setSearch(searchInput));
		dispatch(setOpenMessage())
		//setButtonClick(!buttonClick);
		 //if(searchInput != '') {
			//dispatch(setSearch(searchInput))
		 //} else {

			//alert('Please pick the flavor');
		 //}
		
		//console.log('FROM NAVBAR:', searchInput)
		//console.log('FROM NAVBAR:',productList)
	 }

	 //const handleRefreshPage = () => {
		// console.log(productList)
		 //window.location.reload();
	// }
	const handleCartQuantity = () => {
		dispatch(setQuantity());
	}

	return (
		<div className="navbar">
			<div className="navbar__items">
			<Link to='/'><HomeIcon /></Link>
					<div className='navbar_itemsSearch'>
						<input type='text' id='input'  onChange={handleSearch}/>
						<HashLink to="#products" className='navbar_itemsSearchLink'><SearchIcon onClick={handleSubmitSearch}/>
						</HashLink>
						{
						 toggleMessage & searchInput == '' ? 
							<>
							<Message />
							<BackdropMessage />
							</> : null
						}
						
				</div>
				
				<h3 onClick={() => auth.signOut()}>Logout</h3>
				<ShoppingCartIcon onClick= {handleShoppingCart}/>
					{
						toggleCart ? 
						<>
						<Cart />
							<Backdrop/>
							</>: null
					}
				<div className='navbar__cartLength'>
					<p>{quantity}</p>
					
				</div>
			</div>
		</div>
	);
	 
}



export default Navbar;
