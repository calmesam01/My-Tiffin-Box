import React from 'react';
import '../media/css/navbar.css'
import Logo from '../media/images/logo.jpg';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-inverse " style = {{fontFamily: "optima"}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
            <a className="navbar-brand" href="#">
              
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li><a href="#">Order Now</a></li>
              <li><a href="#">Tiffin of the day</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"> Register</a></li>
              <li><a href="#"> Subscribe</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;