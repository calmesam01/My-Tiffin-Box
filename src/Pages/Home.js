import React from 'react';
import Main_1 from '../Components/Main_1/Main_1';
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
import Landing_Image from '../media/images/landing_image.jpg';
import {
    Link
  } from "react-router-dom";


function Home () {
    var data = 'some data';
    return (
        <div>
            {/* Start of Tiffin-Model (second page) */}
            <div className = "main_1">
                <Main_1 />
            </div>
            {/* End of Main-1 section (landing page) */}

            <hr className = "main_1_hr"/><br/>

            {/* Start of Tiffin-Model (second page) */}
            <div className = "main_2" id = "#OrderNow">
                <div className = "row">
                    <div className = "col-sm-12 col-md-12">
                        <p className = "order_now_heading">ORDER NOW</p>
                    </div>
                    <div className = "col-md-4 col-sm-4">
                        <center>
                            <ButtonGroup p1 = "Kadi" p2 = "Daal" p3 = "Rajma" p4 = "Bhindi" p5 = "Shahi Paneer" p6 = "Matar Paneer" />
                        </center>
                    </div>
                    <div className = "col-md-4 col-sm-4" id="Tiffin">
                        <center>
                        <img src = {Salad} style = {{maxWidth: "25%", maxHeight: "25%"}} />
                        <img src = {Shahi_Paneer} style = {{maxWidth: "25%", maxHeight: "25%"}} />
                        <img src = {Gulab_Jamun} style = {{maxWidth: "25%", maxHeight: "25%"}} />
                        <img src = {Matar_Paneer} style = {{maxWidth: "25%", maxHeight: "25%"}} />
                        </center>
                    </div>
                    <div className = "col-md-4 col-sm-4">
                        <center>
                            <ButtonGroup p1 = "Roti" p2 = "Dahi" p3 = "Salad" p4 = "Achaar" p5 = "Dessert" p6 = "Today's Special" />
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;