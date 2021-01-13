import React, { useState, useEffect } from 'react';
import '../../media/css/Main_1/LandingComponent.css';
import CarouselItem from './LandingComponent/CarouselItem';
import Carousel from 'react-material-ui-carousel';
import Icons from '../WhyUs';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

function LandingComponent(props) {
    var items = [
      {
          name: "1",
          description: "Get your food delieverd faster",
      }
      ,
      {
          name: "2",
          description: "The same old steel tiffins at your door step"
      }
  ]


  var screenSize = window.screen.width;
  const [ScreenSizeBig, SetScreenSizeBig] = useState(false);

  

  useEffect(() => {
    if (screenSize >= 768) {
      SetScreenSizeBig(true)
    }
  }, [window.screen.width]);

    return (
        <div className="landing_page_main">
          <div className = "row old-landing-text">
            {ScreenSizeBig && 
            <div className = "col-md-6 col-sm-12 fade-in-1">
            <Carousel 
                navButtonsAlwaysInvisible = "true"
                interval = "3500"
                animation = "fade"
                indicators = "false"
                fullHeightHover	= "false">
                {
                  items.map( (item, i) => <CarouselItem key={i} item={item} /> )
                }
            </Carousel>
          </div>}

            {ScreenSizeBig && 
            <div className = "col-md-6 col-sm-12 landing_text_col fade-in-2">
            <div>
              <h1>We offer Balanced Meals<br/> 100% Healthy, 0% Heavy</h1>
              <p className = "small-text">Get free door-step delivery with the self-menu <br/> select option to choose from more than 10 <br/> vegetarian items</p><br/>
            </div>
            <div className = "row">
              <div className = "col-sm-6 col-md-5">
                  <a href = "/OrderNow"><button className = "btn_try_now btn-order-now" >Order Now</button></a>
              </div>
              <div className = "col-sm-6 col-md-5">
                  <a href = "/Plans"><button className = "btn_try_now btn-see-plans" >See Plans</button></a>
              </div>
              <div className = "col-md-2">
              </div>
            </div>
            <div className = "row">
              <div className = "col-md-12 col-sm-12">
              </div>
            </div>
          </div>}

          {!ScreenSizeBig && 
          <div className = "col-sm-12 landing_text_col fade-in-2">
          <div>
              <h1>We offer Balanced Meals<br/> 100% Healthy, 0% Heavy</h1>
              <p className = "small-text">Get free door-step delivery with the self-menu select option to choose from more than 10 vegetarian items</p><br/>
            </div>
            <center><div className = "row">
              <div className = "col-sm-3">
                  <a href = "/OrderNow"><button className = "btn_try_now btn-order-now" >Order Now</button></a>
              </div>
              <div className = "col-sm-3">
                  <a href = "/Plans"><button className = "btn_try_now btn-see-plans" >See Plans</button></a>
              </div>
            </div></center>
          </div>}
          </div>
        </div>
    );
  }
  
  export default LandingComponent;
  