import React from 'react';
import '../media/css/About.css';
import Why1 from '../media/images/why_icon1.png'
import Why2 from '../media/images/why_icon2.png'
import Why3 from '../media/images/why_icon3.png'
import Why4 from '../media/images/why_icon4.png'
function About() {
    return (
        <div>
            <section className="aboutus_section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12">
                            <h2><center>Getmytiffin.ca </center></h2><br/>
                            <p className = "about-text">We are a modern, customer-oriented, and <strong>technology-based platform</strong> committed to making life easier and convenient for those struggling for their lunch and dinner meals with delivery. We don’t just make fresh and delectable meals, but also deliver to all our customers. <strong>Getmytiffin.ca also offers subscribers to choose from 3 subscription plans and a variety of food items.</strong></p><br/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why_section why_section2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="heading">Why our kitchen? </h2><br/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-3 col-sm-3">
                        <center><div className="box">
                                <img className = "img-1" src={Why1} alt="Home like food" />
                                <h4>Home like food</h4>
                                <p>We deliver home-like meals that recreate your dining experience.</p>
                            </div></center>
                        </div>
                        
                        <div className="col-md-3 col-sm-3">
                        <center><div className="box">
                            <img className = "img-2" src={Why2} alt="Easy Order" />
                                <h4>Easy Order</h4>
                                <p>With just a few clicks, you place an order, then wait while we deliver swiftly</p>
                            </div></center>
                        </div>
                        <div className="col-md-3 col-sm-3">
                        <center><div className="box">
                            <img className = "img-3" src={Why3} alt="100% Refund Guaranteed" />
                                <h4>100% Refund Guaranteed</h4>
                                <p>Guaranteed refund if you are not satisfied.**</p>
                            </div></center>
                        </div>
                        <div className="col-md-3 col-sm-3">
                        <center><div className="box">
                            <img className = "img-4" src={Why4} alt="Help Homeless" />
                                <h4>Help Homeless</h4>
                                <p>We donate $1 after every 5 tiffins sold to the Canadian Homeless Society</p>
                            </div></center>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;