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
                        <div className = "col-sm-12 col-md-12">
                            <p className="logo-footer">getmytiffin.ca</p>
                        </div>
                    </div>
                    <div className = "row">
                        <div className="col-12 col-md-6 footer-menu">
                            <div className = "row">
                                <div className = "col-md-6 col-sm-4">
                                    <ul>
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
                                    </ul>
                                </div>
                                <div className = "col-md-6 col-sm-4 footer-middle-col">
                                    <ul>
                                        <li>
                                            <a href="index.html#">Career</a>
                                        </li>
                                        <li>
                                            <a href="index.html#">Become a Partner</a>
                                        </li>
                                        <li>
                                            <a href="feedback.html">Feedback</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">FAQ</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                                    
                        </div>
                        
                        <div className="col-12 col-md-6 footer-soc">
                            <a href="#" className = "twitter"><img src= {Twitter} alt="#" /></a>
                            <a href="#" className = "facebook"><img src= {Facebook} alt="#" /></a>
                            <a href="#" className = "instagram"><img src= {Instagram} alt="#" /></a><br/><br/>
                            <p className = "subscribe-now-text">Subscribe now for newsletters <br/>and exciting offers</p>
                            <form>
                                <input type="email" className = "form-control form-email-subscribe" name="email" id="news_email" placeholder="Enter Email ID" />
                                <button type="submit" className = "btn-subscribe-home">Subscribe</button>
                            </form>
                        </div>
                    </div><br/><br/>
                    <div className = "row">
                        <div className="col-12 footer-copyright">
                            <center><p className = "copyright-text">Copyright getmytiffin.ca 2020, All rights reserved</p></center>
                        </div>
                    </div><br/><br/>
                </div>
            </footer>
        </div>
    );
};

export default Footer;