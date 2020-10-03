import React from 'react';
import '../media/css/home.css'
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../media/css/Tiffin-Model/tiffin_model.css';


function ButtonGroup (props) {
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
    var RotiCounter = 0;
    var AchaarCounter = 0;
    var DessertCounter = 0;
    var TodaysSpecialCounter = 0;

    //Setters for adding value into the Tiffin Model in Local Storage
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
        localStorage.setItem('RotiVal', RotiCounter);
        localStorage.setItem('DahiVal', counter);
        localStorage.setItem('SaladVal', counter);
        localStorage.setItem('AchaarVal', AchaarCounter);
        localStorage.setItem('DessertVal', DessertCounter);
        localStorage.setItem('TodaysSpecialVal', TodaysSpecialCounter);

        localStorage.setItem('myArr_1', JSON.stringify(itemsArray));
    }
 

    return (
        <div>
            <div className="btn-group-vertical" id="ButtonGroup" style = {{fontFamily: "optima"}}>
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
            </div>
            <button type="submit" onClick={SubmitVal}> <Link to="/OrderNow"> Order Now </Link> </button>
        </div>
    );
}

export default ButtonGroup