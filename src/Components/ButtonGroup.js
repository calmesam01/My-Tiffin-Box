import React from 'react';
import '../media/css/home.css'
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
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
import '../media/css/Tiffin-Model/tiffin_model.css';


function ButtonGroup (props) {
    const [DalVal, setDalVal] = useState(localStorage.setItem('DalVal', ''));
    const [KadiVal, setKadiVal] = useState(localStorage.setItem('KadiVal', ''));
    const [RajmaVal, setRajmaVal] = useState(localStorage.setItem('RajmaVal', ''));
    const [BhindilVal, setBhindilVal] = useState(localStorage.setItem('BhindilVal', ''));
    const [ShahiPaneerVal, setShahiPaneerVal] = useState(localStorage.setItem('ShahiPaneerVal', ''));
    const [MatarPaneerVal, setMatarPaneerVal] = useState(localStorage.setItem('MatarPaneerVal', ''));

    const [RotiVal, setRotiVal] = useState(localStorage.setItem('RotiVal', ''));
    const [DahiVal, setDahiVal] = useState(localStorage.setItem('DahiVal', ''));
    const [SaladVal, setSaladVal] = useState(localStorage.setItem('SaladVal', ''));
    const [AchaarVal, setAchaarVal] = useState(localStorage.setItem('AchaarVal', ''));
    const [DessertVal, setDessertVal] = useState(localStorage.setItem('DessertVal', ''));
    const [TodaysSpecialVal, setTodaysSpecialVal] = useState(localStorage.setItem('TodaysSpecialVal', ''));
    
    //Items Array for pusing into the local storage
    var itemsArray = {};

    //The counter has value between 0 and 4 where 0 means tiffin is empty
    var counter = 0;

    const [myArr_1, setmyArr_1] = useState(localStorage.setItem('myArr_1', ''));

    var DalCounter = 0;
    var KadiCounter = 0;
    var RajmaCounter = 0;
    var BhindiCounter = 0;
    var ShahiPaneerCounter = 0;
    var MatarPaneerCounter = 0;

    var RotiCounter = 0;
    var DahiCounter = 0;
    var SaladCounter = 0;
    var AchaarCounter = 0;
    var DessertCounter = 0;
    var TodaysSpecialCounter = 0;

    //Setters for adding value into the Tiffin Model in Local Storage

    function AddDal (event) {
        event.preventDefault();
        if (counter >= 0 && counter <= 3) {
            if (itemsArray.Dal) {
                itemsArray.Dal += 1;
            }
            else {
                itemsArray.Dal = 1;
            }
            counter+=1;
        }  
    }
    function AddKadi (event) {
        event.preventDefault();
        if (counter >= 0 && counter <= 3) {
            if (itemsArray.Kadi) {
                itemsArray.Kadi += 1;
            }
            else {
                itemsArray.Kadi = 1;
            }
            counter+=1;
        }  
    }
    function AddRajma (event) {
        event.preventDefault();
        if (counter >= 0 && counter <= 3) {
            if (itemsArray.Rajma) {
                itemsArray.Rajma += 1;
            }
            else {
                itemsArray.Rajma = 1;
            }
            counter+=1;
        } 
    }
    function AddBhindi (event) {
        event.preventDefault();
        if (counter >= 0 && counter <= 3) {
            if (itemsArray.Bhindi) {
                itemsArray.Bhindi += 1;
            }
            else {
                itemsArray.Bhindi = 1;
            }
            counter+=1;
        }   
    }
    function AddShahiPaneer (event) {
        event.preventDefault();
        if (counter >= 0 && counter <= 3) {
            if (itemsArray.ShahiPaneer) {
                itemsArray.ShahiPaneer += 1;
            }
            else {
                itemsArray.ShahiPaneer = 1;
            }
            counter+=1;
        }  
    }
    function AddMatarPaneer (event) {
        event.preventDefault();
        if (counter >= 0 && counter <= 3) {
            if (itemsArray.MatarPaneer) {
                itemsArray.MatarPaneer += 1;
            }
            else {
                itemsArray.MatarPaneer = 1;
            }
            counter+=1;
        }  
    }

    function AddRoti (event) {
        event.preventDefault();
        if (counter >= 0 && counter <= 3) {
            if (!itemsArray.Roti) {
                itemsArray.Roti = 1;
                counter+=1;
            }
        }  
    }
    function AddDahi (event) {
        event.preventDefault();
        if (counter >= 0 && counter <= 3) {
            if (itemsArray.Dahi) {
                itemsArray.Dahi += 1;
            }
            else {
                itemsArray.Dahi = 1;
            }
            counter+=1;
        }  
    }
    function AddSalad (event) {
        event.preventDefault();
        if (counter >= 0 && counter <= 3) {
            if (itemsArray.Salad) {
                itemsArray.Salad += 1;
            }
            else {
                itemsArray.Salad = 1;
            }
            counter+=1;
        } 
    }
    function AddAchaar (event) {
        event.preventDefault();
        if (counter >= 0 && counter <= 3) {
            if (itemsArray.Achaar) {
                itemsArray.Achaar += 1;
            }
            else {
                itemsArray.Achaar = 1;
            }
            counter+=1;
        }   
    }
    function AddDessert (event) {
        event.preventDefault();
        if (counter >= 0 && counter <= 3) {
            if (itemsArray.Dessert) {
                itemsArray.Dessert += 1;
            }
            else {
                itemsArray.Dessert = 1;
            }
            counter+=1;
        }  
    }
    function AddTodaysSpecial (event) {
        event.preventDefault();
        if (counter >= 0 && counter <= 3) {
            if (itemsArray.TodaysSpecial) {
                itemsArray.TodaysSpecial += 1;
            }
            else {
                itemsArray.TodaysSpecial = 1;
            }
            counter+=1;
        }  
    }

    //Setters for removing value into the Tiffin Model in Local Storage

    function RemoveDal (event) {
        event.preventDefault();
        if (counter > 0) {
            if (itemsArray.Dal > 1) {
                itemsArray.Dal -= 1;
                counter -= 1;
            }
            else if (itemsArray.Dal == 1) {
                delete itemsArray["Dal"];
                counter -= 1;
            }
        } 
    }
    function RemoveKadi (event) {
        event.preventDefault();
        if (counter > 0) {
            if (itemsArray.Kadi > 1) {
                itemsArray.Kadi -= 1;
                counter -= 1;
            }
            else if (itemsArray.Kadi == 1) {
                delete itemsArray["Kadi"];
                counter -= 1;
            }
        } 
    }
    function RemoveRajma (event) {
        event.preventDefault();
        if (counter > 0) {
            if (itemsArray.Rajma > 1) {
                itemsArray.Rajma -= 1;
                counter -= 1;
            }
            else if (itemsArray.Rajma == 1) {
                delete itemsArray["Rajma"];
                counter -= 1;
            }
        } 
    }
    function RemoveBhindi (event) {
        event.preventDefault();
        if (counter > 0) {
            if (itemsArray.Bhindi > 1) {
                itemsArray.Bhindi -= 1;
                counter -= 1;
            }
            else if (itemsArray.Bhindi == 1) {
                delete itemsArray["Bhindi"];
                counter -= 1;
            }
        } 
    }
    function RemoveShahiPaneer (event) {
        event.preventDefault();
        if (counter > 0) {
            if (itemsArray.ShahiPaneer > 1) {
                itemsArray.ShahiPaneer -= 1;
                counter -= 1;
            }
            else if (itemsArray.ShahiPaneer == 1) {
                delete itemsArray["ShahiPaneer"];
                counter -= 1;
            }
        } 
    }
    function RemoveMatarPaneer (event) {
        event.preventDefault();
        if (counter > 0) {
            if (itemsArray.MatarPaneer > 1) {
                itemsArray.MatarPaneer -= 1;
                counter -= 1;
            }
            else if (itemsArray.MatarPaneer == 1) {
                delete itemsArray["MatarPaneer"];
                counter -= 1;
            }
        } 
    }
    
    function RemoveRoti (event) {
        event.preventDefault();
        if (RotiCounter >= 1) {
            RotiCounter-=1;
        } 
    }
    function RemoveDahi (event) {
        event.preventDefault();
        if (counter > 0) {
            if (itemsArray.Dahi > 1) {
                itemsArray.Dahi -= 1;
                counter -= 1;
            }
            else if (itemsArray.Dahi == 1) {
                delete itemsArray["Dahi"];
                counter -= 1;
            }
        } 
    }
    function RemoveSalad (event) {
        event.preventDefault();
        if (counter > 0) {
            if (itemsArray.Salad > 1) {
                itemsArray.Salad -= 1;
                counter -= 1;
            }
            else if (itemsArray.Salad == 1) {
                delete itemsArray["Salad"];
                counter -= 1;
            }
        } 
    }
    function RemoveAchaar (event) {
        event.preventDefault();
        if (counter > 0) {
            if (itemsArray.Achaar > 1) {
                itemsArray.Achaar -= 1;
                counter -= 1;
            }
            else if (itemsArray.Achaar == 1) {
                delete itemsArray["Achaar"];
                counter -= 1;
            }
        } 
    }
    function RemoveDessert (event) {
        event.preventDefault();
        if (counter > 0) {
            if (itemsArray.Dessert > 1) {
                itemsArray.Dessert -= 1;
                counter -= 1;
            }
            else if (itemsArray.Dessert == 1) {
                delete itemsArray["Dessert"];
                counter -= 1;
            }
        } 
    }
    function RemoveTodaysSpecial (event) {
        event.preventDefault();
        if (counter > 0) {
            if (itemsArray.TodaysSpecial > 1) {
                itemsArray.TodaysSpecial -= 1;
                counter -= 1;
            }
            else if (itemsArray.TodaysSpecial == 1) {
                delete itemsArray["TodaysSpecial"];
                counter -= 1;
            }
        } 
    }

    //Final Setter for Local Storage
    function SubmitVal () {
        localStorage.setItem('DalVal', DalCounter);
        localStorage.setItem('KadiVal', KadiCounter);
        localStorage.setItem('RajmaVal', RajmaCounter);
        localStorage.setItem('BhindilVal', BhindiCounter);
        localStorage.setItem('ShahiPaneerVal', ShahiPaneerCounter);
        localStorage.setItem('MatarPaneerVal', MatarPaneerCounter);

        localStorage.setItem('RotiVal', RotiCounter);
        localStorage.setItem('DahiVal', DahiCounter);
        localStorage.setItem('SaladVal', SaladCounter);
        localStorage.setItem('AchaarVal', AchaarCounter);
        localStorage.setItem('DessertVal', DessertCounter);
        localStorage.setItem('TodaysSpecialVal', TodaysSpecialCounter);

        localStorage.setItem('myArr_1', JSON.stringify(itemsArray));
    }
 

    return (
        <div className = "row order-now-page">
            <div className = "col-sm-12">
                <center>
                    <p className = "order-now-text">THE TIFFIN</p>
                    <h4>CUSTOMIZED HOME-MADE INDIAN FOOD</h4>
                </center>
            </div>
            <div className = "col-sm-4 col-md-4">
                <center><div className="btn-group-vertical" id="ButtonGroup" style = {{fontFamily: "optima"}}>
                    <div className="btn-group-horizontal">
                        <button type="button" onClick={AddDal} className="btn btn-plus "> + </button>
                        <button type="button" className="btn btn-item"> Daal </button>
                        <button type="button" onClick={RemoveDal} className="btn btn-minus"> - </button>
                    </div>
                    <div className="btn-group-horizontal">
                        <button type="button" onClick={AddKadi} className="btn btn-plus"> + </button>
                        <button type="button" className="btn btn-item"> Kadi </button>
                        <button type="button" onClick={RemoveKadi} className="btn btn-minus"> - </button>
                    </div>
                    <div className="btn-group-horizontal">
                        <button type="button" onClick={AddRajma} className="btn btn-plus"> + </button>
                        <button type="button" className="btn btn-item"> Rajma </button>
                        <button type="button" onClick={RemoveRajma} className="btn btn-minus"> - </button>
                    </div>
                    <div className="btn-group-horizontal">
                        <button type="button" onClick={AddBhindi} className="btn btn-plus"> + </button>
                        <button type="button" className="btn btn-item"> Bhindi </button>
                        <button type="button" onClick={RemoveBhindi} className="btn btn-minus"> - </button>
                    </div>
                    <div className="btn-group-horizontal">
                        <button type="button" onClick={AddDessert} className="btn btn-plus"> + </button>
                        <button type="button" className="btn btn-item"> Shahi Paneer </button>
                        <button type="button" onClick={RemoveDessert} className="btn btn-minus"> - </button>
                    </div>
                    <div className="btn-group-horizontal">
                        <button type="button" onClick={AddMatarPaneer} className="btn btn-plus"> + </button>
                        <button type="button" className="btn btn-item"> Matar Paneer </button>
                        <button type="button" onClick={RemoveMatarPaneer} className="btn btn-minus"> - </button>
                    </div>
                </div></center>
            </div>
            <div className = "col-md-4 col-sm-4">
                        <center>
                        <img className = "tiffin-box-model-1" src = {Salad} style = {{maxWidth: "25%", maxHeight: "25%"}} />
                        <img className = "tiffin-box-model-2" src = {Shahi_Paneer} style = {{maxWidth: "25%", maxHeight: "25%"}} />
                        <img className = "tiffin-box-model-3" src = {Gulab_Jamun} style = {{maxWidth: "25%", maxHeight: "25%"}} />
                        <img className = "tiffin-box-model-4" src = {Matar_Paneer} style = {{maxWidth: "25%", maxHeight: "25%"}} />
                        </center>
                        <div className = "col-sm-12 col-md-12"><br/><br/><br/><br/><br/><br/>
                            <center>
                                <button type="submit" className = "btn btn-checkout" onClick={SubmitVal}> <Link to="/Payment"> Order Now </Link> </button>
                            </center>
            </div>
            </div>
            <div className = "col-sm-4 col-md-4">
            <center><div className="btn-group-vertical" id="ButtonGroup" style = {{fontFamily: "optima"}}>
                    <div className="btn-group-horizontal">
                        <button type="button" onClick={AddRoti} className="btn btn-plus "> + </button>
                        <button type="button" className="btn btn-item"> Roti </button>
                        <button type="button" onClick={RemoveRoti} className="btn btn-minus"> - </button>
                    </div>
                    <div className="btn-group-horizontal">
                        <button type="button" onClick={AddDahi} className="btn btn-plus"> + </button>
                        <button type="button" className="btn btn-item"> Dahi </button>
                        <button type="button" onClick={RemoveDahi} className="btn btn-minus"> - </button>
                    </div>
                    <div className="btn-group-horizontal">
                        <button type="button" onClick={AddSalad} className="btn btn-plus"> + </button>
                        <button type="button" className="btn btn-item"> Salad </button>
                        <button type="button" onClick={RemoveSalad} className="btn btn-minus"> - </button>
                    </div>
                    <div className="btn-group-horizontal">
                        <button type="button" onClick={AddAchaar} className="btn btn-plus"> + </button>
                        <button type="button" className="btn btn-item"> Achaar </button>
                        <button type="button" onClick={RemoveAchaar} className="btn btn-minus"> - </button>
                    </div>
                    <div className="btn-group-horizontal">
                        <button type="button" onClick={AddDessert} className="btn btn-plus"> + </button>
                        <button type="button" className="btn btn-item"> Dessert </button>
                        <button type="button" onClick={RemoveDessert} className="btn btn-minus"> - </button>
                    </div>
                    <div className="btn-group-horizontal">
                        <button type="button" onClick={AddTodaysSpecial} className="btn btn-plus"> + </button>
                        <button type="button" className="btn btn-item"> Today's Special </button>
                        <button type="button" onClick={RemoveTodaysSpecial} className="btn btn-minus"> - </button>
                    </div>
                </div></center>
            </div>
            <div className = "col-sm-12 col-md-12">
                <center><button type="submit" className = "btn btn-success" onClick={SubmitVal}> <Link to="/Payment"> Order Now </Link> </button></center>
            </div>
        </div>
    );
}

export default ButtonGroup