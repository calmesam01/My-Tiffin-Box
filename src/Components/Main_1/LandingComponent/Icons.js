import React from 'react';
import '../../../media/css/Main_1/LandingComponent.css'
import Icon_1 from '../../../media/images/icon1.png';
import Icon_2 from '../../../media/images/icon2.png';
import Icon_3 from '../../../media/images/icon3.png';
import Icon_4 from '../../../media/images/icon4.png';
import Icon_5 from '../../../media/images/icon5.png';
import Icon_6 from '../../../media/images/icon6.svg';

function Item(props)
{
    return (
            <div>
                <div className="row icons_row">
					<div className="col-sm-4 col-md-4">
						<img src= {Icon_1} className="img img-rounded icon" alt="#" /><br/><br/>
						<p className="icon_desc">Experienced Cooks</p><br/><br/>
                        <img src= {Icon_4} className="img img-rounded icon" alt="#" /><br/><br/>
						<p className="icon_desc">Easy On Pocket</p>
					</div>
					<div className="col-sm-4 col-md-4">
						<img src= {Icon_2} className="img img-rounded icon" alt="#" /><br/><br/>
						<p className="icon_desc">Whole Wheat Flour Rotis</p><br/><br/>
                        <img src= {Icon_5} className="img img-rounded icon" alt="#" /><br/><br/>
						<p className="icon_desc">Freedom to customers</p>
					</div>
					<div className="col-sm-4 col-md-4">
						<img src= {Icon_3} className="img img-rounded icon" alt="#" /><br/><br/>
						<p className="icon_desc">Flexible Packages</p><br/><br/>
                        <img src= {Icon_6} className="img img-rounded icon" alt="#" /><br/><br/>
						<p className="icon_desc">No Registration Required**</p>
					</div>
				</div>
                <div className = "row">
                    <center><div className = "col-md-10 col-sm-10">
                        <h3 className = "try_now">Not sure about the plans?</h3> <br/>
                        <a href = "#OrderNow"><button className = "btn btn-lg btn_try_now" >Try Now</button></a>
                    </div></center>
					<div className = "col-md-2 col-sm-2">
                    </div>
                </div>
            </div>
    )
}

export default Item;