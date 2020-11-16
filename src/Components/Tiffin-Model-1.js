import React from 'react';
import '../media/css/Tiffin-Model/tiffin_model.css';
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

function TiffinModel_1 (props) {
    return (
        <div>
            {props.Src1 != Tiffin && <img className = "tiffin-box-model-1 fade-in" src = {props.Src1} style = {{maxWidth: "25%", maxHeight: "120%", padding: "0px 5px 0px 5px"}} />}
            {props.Src2 != Tiffin && <img className = "tiffin-box-model-2 fade-in" src = {props.Src2} style = {{maxWidth: "25%", maxHeight: "120%", padding: "0px 5px 0px 5px"}} />}
            {props.Src3 != Tiffin && <img className = "tiffin-box-model-3 fade-in" src = {props.Src3} style = {{maxWidth: "25%", maxHeight: "120%", padding: "0px 5px 0px 5px"}} />}
            { <img className = "tiffin-box-model-4 fade-in" src = {props.Src4} style = {{maxWidth: "25%", maxHeight: "120%", padding: "0px 5px 0px 5px"}} />}
        </div>
    );
};

export default TiffinModel_1; 