import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../src/pages/Home';
import SigninSide from '../src/pages/SigninSide';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          {/* <Route path="/signin">
            <SigninSide />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
