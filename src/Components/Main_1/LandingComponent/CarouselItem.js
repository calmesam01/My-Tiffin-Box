import React from 'react';
import '../../../media/css/Main_1/LandingComponent.css';
import {Paper} from '@material-ui/core'
import Open_Tiffin from '../../../media/images/open_tiffin.png'
import Landing from '../../../media/images/image.png';

function CarouselItem(props)
{
    return (
        <div className = "row">
            <div className = "col-md-6 landing_images_col">
                
                <Paper className = "paper_style">
                    <img src = {props.item.name == "1" ? Landing : Open_Tiffin} className = "landing_images_style"></img><hr/>
                    <center><p className = "landing_images_desc">{props.item.description}</p></center> 
                </Paper>
            </div>
        </div>
    )
}
  
  export default CarouselItem;
  