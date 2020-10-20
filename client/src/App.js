import React from 'react';
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

function App() {
  return (
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
  );
}

export default App;
