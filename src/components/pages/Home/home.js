import React, {useEffect, useState} from 'react';
import Banner from '../../Banner/banner';
import Products from '../../Products/products';
import Follow from '../../Follow/follow';
import Testimonials from '../../Testimonials/testimonials';
import Footer from '../../Footer/footer';

function Home() {
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