import React from 'react';
import './App.css';
import Home from './components/pages/Home/home';
import Checkout from './components/pages/Checkout/checkout';
import Navbar from './components/Navbar/navbar';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path = '/' component={Home}/>
        <Route path = '/checkout' component={Checkout}/>
      </Switch> 
    </div>
  );
}

export default App;
