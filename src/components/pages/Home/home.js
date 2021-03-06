import React from 'react';
import './home.css';
import Banner from '../../Banner/banner';
import Products from '../../Products/products';
import Follow from '../../Follow/follow';
import Testimonials from '../../Testimonials/testimonials';
import Footer from '../../Footer/footer';
import Backdrop from '../../Backdrop/backdrop'
import { selectBasket, selectOpen, setOpen } from '../../../features/basketSlice';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../../Cart/cart';


function Home() {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);
	let toggleCart = useSelector(selectOpen)
  
  const handleShoppingCart = () => {
		console.log(toggleCart)
		dispatch(setOpen())
		}
  
  return (
    <div className="home">
      <Banner />
      <Products />
      <Follow />
      <Testimonials />
      <Footer />
      
    </div>
  );
}

export default Home;
