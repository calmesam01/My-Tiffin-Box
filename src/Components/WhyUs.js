import React from 'react';
import '../media/css/Main_1/LandingComponent.css'
import '../media/css/home.css';
import Three_By_Four from '../media/images/3_by_4.jpg';
import Icon_1 from '../media/images/icon1.png';
import Icon_2 from '../media/images/icon2.png';
import Icon_3 from '../media/images/icon3.png';
import Icon_4 from '../media/images/icon4.png';
import Icon_5 from '../media/images/icon5.png';
import Icon_6 from '../media/images/icon6.svg';
import { Icon } from '@material-ui/core';

function WhyUs()
{
    return (
            <div>
				<div className = "row">
                	<div className = "col-md-12 col-sm-12">
						<div className = "parallax">
							<div class="parallax-text">WHY US?</div>
						</div>
					</div>
				</div>

				<div id="portfolio" class="container-fluid text-center bg-grey" >
					<div className="row text-center slideanim">
						<div className="col-sm-4">
							<div className="thumbnail">
								<img src={Icon_1} className = "img img-rounded icon-1"></img><br/>
								<p className = "icon_desc"><strong>Experienced Cooks</strong></p>
								<p>Our cooks have professional experience in food industry</p>
							</div>
							<div className="thumbnail">
								<img src={Icon_4} className = "img img-rounded icon-4"></img><br/>
								<p className = "icon_desc"><strong>Easy on Pocket</strong></p>
								<p>Pay for what you order, no hidden charges, easy for students</p>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="thumbnail">
								<img src={Icon_2} className = "img img-rounded icon-2"></img><br/>
								<p className = "icon_desc"><strong>Whole Wheat Flour Rotis</strong></p>
								<p>We use only the best quality wheat flour </p>
							</div>
							<div className="thumbnail">
								<img src={Icon_5} className = "img img-rounded icon-5"></img><br/>
								<p className = "icon_desc"><strong>Freedom to customers</strong></p>
								<p>Choose from a variety of menu options and the Today's Special</p>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="thumbnail">
								<img src={Icon_3} className = "img img-rounded icon-3"></img><br/>
								<p className = "icon_desc"><strong>Flexible Packages</strong></p>
								<p>We have 3 plans to choose from</p>
							</div>
							<div className="thumbnail">
								<img src={Icon_6} className = "img img-rounded icon-6"></img><br/>
								<p className = "icon_desc"><strong>No Registration Required**</strong></p>
								<p>Order your food without any registration</p>
							</div>
						</div>
					</div>
					<h3 className = "try_now">Not sure about the plans?  <a href = "/OrderNow"><button className = "btn_try_now" >Try Now</button></a></h3>
				</div>

                <div className = "row">
                    <center>
                        
                    </center>
                </div>
            </div>
    )
}

export default WhyUs;