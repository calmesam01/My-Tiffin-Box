import React from 'react';
import '../../media/css/Main_1/LandingComponent.css';
import CarouselItem from './LandingComponent/CarouselItem';
import Carousel from 'react-material-ui-carousel';
import Icon from './LandingComponent/Icons';

function LandingComponent(props) {
    var items = [
      {
          name: "1",
          description: "Get your food delieverd faster",
      },
      {
          name: "2",
          description: "The same old steel tiffins at your door step"
      }
  ]
    return (
        <div className="landing_page_main">
          <div className = "row">
            <div className = "col-md-6 landing_images_col">
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
            </div>
            <div className = "col-md-6">
                <Icon />
            </div>
          </div>
        </div>
    );
  }
  
  export default LandingComponent;
  