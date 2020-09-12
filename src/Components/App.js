import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'

import Home from '../Pages/Home';
import Register from '../Pages/Register';
import About from '../Pages/About';
import Error from '../Pages/Error';
import Contact from '../Pages/Contact';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OrderNow from '../Pages/OrderNow';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component = {Home}>
          </Route>
          <Route exact path="/about" component = {About}>
          </Route>
          <Route exact path="/register" component = {Register}>
          </Route>
          <Route exact path="/contact" component = {Contact}>
          </Route>
          <Route exact path="/ordernow" component = {OrderNow}>
          </Route>
          <Route path="*" component = {Error}>
          </Route>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
