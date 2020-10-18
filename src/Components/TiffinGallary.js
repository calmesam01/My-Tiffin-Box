import React from 'react';
import Tiffin from '../media/images/tiffin5.svg';
import Roti from '../media/images/roti.svg';
import Kadi from '../media/images/kadi.svg';
import Daal from '../media/images/daal.svg';
import Rice from '../media/images/rice.svg';
import Rajma from '../media/images/rajma.svg'
import Shahi_Paneer from '../media/images/shahi_paneer.svg';
import Matar_Paneer from '../media/images/matar_paneer.svg';
import Bhindi from '../media/images/bhindi.svg';
import Dahi from '../media/images/dahi.svg';
import Salad from '../media/images/salad.svg';
import Gulab_Jamun from '../media/images/gulab_jamun.svg';
import TodaysSpecial from '../media/images/todays_special.svg'
import { Label } from 'reactstrap';

function TiffinGallary () {
    return (
        <div className = "tiffin-gallary">
            <p className = "our-menu-text">THE MENU</p>
            <div className = "row">
                <center>
                    <div className = "col-sm-3 col-md-3">
                        <img className = "tiffin-gallary-item" src = {Kadi}></img>
                        <img className = "tiffin-gallary-item" src = {Shahi_Paneer}></img>
                        <img className = "tiffin-gallary-item" src = {Salad}></img>
                    </div>
                    <div className = "col-sm-3 col-md-3">
                        <img className = "tiffin-gallary-item" src = {Daal}></img>
                        <img className = "tiffin-gallary-item" src = {Matar_Paneer}></img>
                        <img className = "tiffin-gallary-item" src = {Dahi}></img>
                    </div>
                    <div className = "col-sm-3 col-md-3">
                        <img className = "tiffin-gallary-item" src = {Rajma}></img>
                        <img className = "tiffin-gallary-item" src = {Roti}></img>
                        <img className = "tiffin-gallary-item" src = {Gulab_Jamun}></img>
                    </div>
                    <div className = "col-sm-3 col-md-3">
                        <img className = "tiffin-gallary-item" src = {Bhindi}></img>
                        <img className = "tiffin-gallary-item" src = {Rice}></img>
                        <img className = "tiffin-gallary-item" src = {TodaysSpecial}></img>
                    </div>
                </center>    
            </div>
        </div>
    );
}

export default TiffinGallary;