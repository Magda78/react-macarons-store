import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Banner from './components/Banner/banner';
import Products from './components/Products/products';
import Follow from './components/Follow/follow';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Products />
      <Follow />
    </div>
  );
}

export default App;
