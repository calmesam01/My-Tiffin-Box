import React from 'react';
import '../../media/css/Main_1/Navbar.css';
import Landing_Bg from '../../media/images/shape1.png';

function Navbar(props) {
    return (
        <div className="landing_page_main">
          <img src = {Landing_Bg} className = "landing_bg" ></img>
          <nav className="navbar navbar-inverse " style = {{fontFamily: "optima"}}>
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>                        
                </button>
                <a className="navbar-brand logo" href="/">
                  <p className="logo">getmytiffin.ca</p>
                </a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                {/* <ul className="nav navbar-nav">
                  <li><a href="#">Order Now</a></li>
                  <li><a href="#">Tiffin of the day</a></li>
                  <li><a href="#">Our Story</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul> */}
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="/OrderNow">Order Now</a></li>
                  <li><a href="/Plans">See Our Plans</a></li>
                  <li><a href="/About">Our Story</a></li>
                  <li><a href="/Contact">Contact Us</a></li>
                  <li><a href="/Register"> Register</a></li>
                  <li><a href="/Subscribe"> Subscribe</a></li>
                </ul>
              </div>
            </div>
          </nav>         
      </div>
    );
  }
  
  export default Navbar;