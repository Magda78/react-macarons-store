import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Banner from './components/Banner/banner';
import Products from './components/Products/products';
import Follow from './components/Follow/follow';
import Testimonials from './components/Testimonials/testimonials';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Products />
      <Follow />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
