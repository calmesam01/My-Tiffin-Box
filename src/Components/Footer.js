import React from 'react';
import Twitter from '../media/images/t.png'
import Facebook from '../media/images/f.png'
import Instagram from '../media/images/i.png'
import Footer_Bg from '../media/images/shape2.png'
import '../media/css/Footer.css'

function Footer () {
    return (
        <div>
            <footer className="footer">
                <div className="container container1">
                    <div className="row">
                        <div className="col-12 col-md-4 footer-menu">
                                    <ul>
                                        <li>
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="chef.html">Meet Our Chef</a>
                                        </li>
                                        <li>
                                            <a href="terms_of_use.html">Terms of Service</a>
                                        </li>
                                        <li>
                                            <a href="privacy_policy.html">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="refund_policy.html">Refund Policy</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">FAQ</a>
                                        </li>
                                    </ul>
                        </div>
                        <div className = "col-md-4 col-sm-4">
                                    <ul>
                                        <li>
                                            <a href="index.html#">Career</a>
                                        </li>
                                        <li>
                                            <a href="index.html#">Blog</a>
                                        </li>
                                        <li>
                                            <a href="index.html#">Become a Partner</a>
                                        </li>
                                        <li>
                                            <a href="feedback.html">Feedback</a>
                                        </li>
                                </ul>
                        </div>
                        <div className="col-12 col-md-4 footer-soc">
                            <a href="#"><img src= {Twitter} alt="#" /></a>
                            <a href="#"><img src= {Facebook} alt="#" /></a>
                            <a href="#"><img src= {Instagram} alt="#" /></a><br/><br/>
                            <p>Subscribe now for newsletters and<br/>exciting offers</p>
                            <form>
                                <input type="email" className = "form" name="email" id="news_email" placeholder="Enter Email ID" />
                                <button type="submit" className = "btn">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className = "row">
                        <div className="col-12 footer-copyright">
                            <center><p>Copyright getmytiffin.ca 2020, All rights reserved</p></center>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;