import React from 'react';
import Main_1 from './Main_1/Main_1';
import Footer from './Footer'
import Navbar from '../Components/Main_1/Navbar';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import About from '../Pages/About';
import Error from '../Pages/Error';
import Contact from '../Pages/Contact';
import Payments from '../Pages/Payments';
import Plans from '../Pages/Plans';
import Subscribe from '../Pages/Subscribe'
import OrderNow from '../Pages/OrderNow';
import Ordered from '../Pages/Ordered';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component = {Home}>
          </Route>
          <Route exact path="/About" component = {About}>
          </Route>
          <Route exact path="/Register" component = {Register}>
          </Route>
          <Route exact path="/Contact" component = {Contact}>
          </Route>
          <Route exact path="/OrderNow" component = {OrderNow}>
          </Route>
          <Route exact path="/Plans" component = {Plans}>
          </Route>
          <Route exact path="/Payment" component = {Payments}>
          </Route>
          <Route exact path="/Subscribe" component = {Subscribe}>
          </Route>
          <Route path="/OrderComplete" component = {Ordered}>
          </Route>
          <Route path="*" component = {Error}>
          </Route>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
