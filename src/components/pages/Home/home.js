import React, {useEffect, useState} from 'react';
import Banner from '../../Banner/banner';
import Products from '../../Products/products';
import Follow from '../../Follow/follow';
import Testimonials from '../../Testimonials/testimonials';
import Footer from '../../Footer/footer';
import { auth } from '../../../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import { login, logout} from '../../../features/userSlice';

function Home() {

  const dispatch = useDispatch()
  const user = useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('user is:', authUser)
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          name: authUser.displayName
        }))
      }
      else {
        dispatch(logout());
      }
    })
  },[dispatch])

  return (
    <div className="app">
      <Banner />
      <Products />
      <Follow />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
