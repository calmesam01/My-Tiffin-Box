import React from 'react';
import '../media/css/home.css';
import Three_By_Four from '../media/images/3_by_4.jpg';

function TiffinGallary () {
    return (
        <div className = "tiffin-gallary">
            <div className = "row">
                <div className = "col-md-12 col-sm-12">
                    <div className = "parallax">
                        <div class="parallax-text">WHY US?</div>
                    </div>
                </div>
            </div>
            <div className = "row">
                <center>
                    <div className = "col-sm-12 col-md-12">
                        <div className = "row">
                            <div className = "col-md-6 col-sm-12">
                                <img className = "rounded-circle sec-2-img" src = {Three_By_Four}></img>
                            </div>
                            <div className = "col-md-6 col-sm-12">
                                <ul className = "ul-sec-2">
                                    <li className = "li-sec-2">Pay Per Item, Why Adjust?</li>
                                    <li className = "li-sec-2">Spices Imported From India</li>
                                    <li className = "li-sec-2">Full Customization To Customers</li>
                                    <li className = "li-sec-2">Money Back Guarantee On Plans**</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </center>    
            </div>
        </div>
    );
}

export default TiffinGallary;