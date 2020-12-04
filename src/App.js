import React,{ useEffect }from 'react';
import './App.css';
import Home from './components/pages/Home/home';
import Checkout from './components/pages/Checkout/checkout';
import Navbar from './components/Navbar/navbar';
import Login from './components/pages/LogIn/login';
import Orders from './components/pages/Orders/orders';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './features/userSlice';
import { login, logout} from './features/userSlice';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51HqNdwGB4kjijur7PvxaEvxhx7WY2SX3mg9ydOCKxlJuASB8ItzmyWwASL71ouPsnmrOyNKyDltVV6fYytN9Ma3E00VQbCwBxt");


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
    <Router>
      <div className="app">
      {
        user ? (
          <>
          <Navbar />
      <Switch>
       <Route exact path = '/' >
         <Home />
         </Route>
        <Route path = '/checkout'>
          <Elements stripe={promise}>
            <Checkout />
          </Elements>  
        </Route>
        <Route path ='/orders' component={Orders}/> 
      </Switch> 
      </>
        )
        : (
          <Login />
        )
      }
      
    </div>
    </Router>
  );
}

export default App;
