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

function TiffinModel_1 (props) {
    return (
        <div>
            <img className = "tiffin-box-model-1" src = {props.Src1} style = {{maxWidth: "120%", maxHeight: "120%", padding: "0px 5px 0px 5px"}} />
            {/* <img className = "tiffin-box-model-3" src = {props.Src3} style = {{maxWidth: "25%", maxHeight: "25%"}} />
            <img className = "tiffin-box-model-4" src = {props.Src4} style = {{maxWidth: "25%", maxHeight: "25%"}} /> */}
        </div>
    );
};

export default TiffinModel_1; 