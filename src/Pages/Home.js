import React from 'react';
import Main_1 from '../Components/Main_1/Main_1';
import WhyUs from '../Components/WhyUs'
import TiffinGallary from '../Components/TiffinGallary';
import ButtonGroup from '../Components/ButtonGroup';
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
import {
    Link
  } from "react-router-dom";


function Home () {
    var data = 'some data';
    return (
        <div>
            <div className = "main_1">
                <Main_1 />
            </div>
            <div>
                <WhyUs />
            </div>
        </div>
    );
};

export default Home;