import React from 'react';
import Payment from '../Components/Payment';
import {useState} from 'react';

function Payments () {
    const [RotiVal, setRotiVal] = useState(localStorage.getItem('RotiVal'));
    const [DahiVal, setDahiVal] = useState(localStorage.getItem('DahiVal'));
    const [SaladVal, setSaladVal] = useState(localStorage.getItem('SaladVal'));
    const [AchaarVal, setAchaarVal] = useState(localStorage.getItem('AchaarVal'));
    const [DessertVal, setDessertVal] = useState(localStorage.getItem('DessertVal'));
    const [TodaysSpecialVal, setTodaysSpecialVal] = useState(localStorage.getItem('TodaysSpecialVal'));
    const [myArr_1, setmyArr_1] = useState(localStorage.getItem('myArr_1'));

    var Dahi = 1;
    var Salad = 2;
    var Achaar = 0;
    var Dessert = 0;
    var TodaysSpecial = 0;
    var arr_2 = [Dahi, Salad, Achaar, Dessert, TodaysSpecial];
    var arr_3 = ['Dahi', 'Dahi', 'Salad', 'Dessert'];
    console.log(JSON.parse(myArr_1));
    
    return (
        <div>
            <p> Rotis:  {RotiVal} </p>
            <p> Dahi:  {DahiVal} </p>
            <p> Salad: {SaladVal} </p>
            <p> Achaar:  {AchaarVal} </p>
            <p> Dessert: {DessertVal} </p>
            <p>Dahi :  {Dahi} </p>
            <p>Salad :  {Salad} </p>
            <p> Today's Special: {TodaysSpecialVal} </p>
            <p> 1: {myArr_1} </p>
            <Payment />
        </div>
    );
};

export default Payments;