import React from 'react';
import './App.css';
import Home from './components/pages/home';
import Checkout from './components/pages/checkout'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path = '/' component={Home}/>
        <Route path = '/checkout' component={Checkout}/>
      </Switch> 
    </div>
  );
}

export default App;
