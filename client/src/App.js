import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import customerNavbarItems from '../src/utils/Data/customerNavbaritems.js';
import Home from '../src/pages/Home/Home.js';
import About from './pages/About/About.js';
import Preorder from './pages/Preorder/Preorder.js';
import Contact from './pages/Contact/Contact.js';
import Footer from './components/Footer/Footer';
import OrderContext from './utils/Contexts/OrderContext.js';

const App = () => {
  const [orderState, setOrderState] = useState({
    orders: []
  });
  
  // when componentDidMount, get orders from localStorage
  useEffect(() => {
    const ordersFromLocal = JSON.parse(localStorage.getItem('orders'));
    if (ordersFromLocal) {
      setOrderState(ordersFromLocal);
    }
  }, []);

  // when Add to cart is clicked, then setOrderState to push new order to orders array
  const onClick = (title, quantity) => {
    const orders = [...orderState.orders, {title, quantity}];
    localStorage.setItem('orders', JSON.stringify({...orderState, orders}));
    setOrderState({...orderState, orders});
  }

  const onDelete = i => {
    const copyState = [...orderState.orders];
    copyState.splice(i, 1);
    setOrderState({orders: copyState});
    localStorage.setItem('orders', JSON.stringify({orders: copyState}));
  }

  // need to use api to send order to backend
  const placeOrder = () => {
    console.log('send order to backend');
  }

  return (
    <OrderContext.Provider value={{orders: orderState.orders, onClick, onDelete, placeOrder}}>    
    <Router>
      <div>
        <Navigation items={customerNavbarItems} />
    
        <Switch>

        <Route path='/contact'>
            <Contact />
          </Route>

        <Route path='/preorder'>
            <Preorder />
          </Route>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/'>
            <Home />
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
    </OrderContext.Provider>
  );
}

export default App;
