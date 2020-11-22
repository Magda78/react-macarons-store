import React,{ useEffect }from 'react';
import './App.css';
import Home from './components/pages/Home/home';
import Checkout from './components/pages/Checkout/checkout';
import Navbar from './components/Navbar/navbar';
import Login from './components/pages/LogIn/login';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './features/userSlice';
import { login, logout} from './features/userSlice';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51HYvl8LnOOmb4AwPUBJpQo3s6TKDdcTAHg3ExipDIg7Sd0oRFa5uc1K5g5LKOL6IuCncKJUWGJ0RxQtNmCFqiqjy00jS7UkApt");


function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser);

  useEffect (() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('user is', authUser)
      if(authUser) {
        //user login
        dispatch (
          login({
            uid: authUser.uid,
            displayName: authUser.displayName
          })
        )
      }else {
        //user logout
        dispatch(logout())
      }

    })
  },[dispatch]);

  return (
    <div className="app">
      {
        user ? (
          <>
          <Navbar />
      <Switch>
        <Route exact path = '/' component={Home}/>
        <Route path = '/checkout'>
          <Elements stripe={promise}>
            <Checkout />
          </Elements>  
        </Route>
      </Switch> 
      </>
        )
        : (
          <Login />
        )
      }
      
    </div>
  );
}

export default App;
