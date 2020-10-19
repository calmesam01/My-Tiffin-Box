import React from 'react';
import Cookies from 'universal-cookie';
import '../media/css/home.css'
import TiffinModel_1 from './Tiffin-Model-1';
import TiffinModel_2 from './Tiffin-Model-2';
import TiffinModel_3 from './Tiffin-Model-3';
import TiffinModel_4 from './Tiffin-Model-4';
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
import Todays_Special from '../media/images/todays_special.svg';
import '../media/css/Tiffin-Model/tiffin_model.css'; 


function ButtonGroup (props) {

    const [itemsArray, setItemsArray] = useState([{}]);

    var orderArr = [];
    
    var a = [];
    var b = [];
    var prev;
    
    var Order_Item_1 = '';
    var Order_Item_2 = '';
    var Order_Item_3 = '';
    var Order_Item_4 = '';

    const [Items, setItems] = useState([]);
    const [ItemsCount, setItemsCount] = useState([]);

    
    // const [MyArrF, setMyArrF] = useState([]);

    const [Item_1_Empty, SetItem_1_Empty] = useState(true);
    const [Item_2_Empty, SetItem_2_Empty] = useState(true);
    const [Item_3_Empty, SetItem_3_Empty] = useState(true);
    const [Item_4_Empty, SetItem_4_Empty] = useState(true);

    //The counter has value between 0 and 4 where 0 means tiffin is empty
    var counter = 0;
    const [count, setCount] = useState(0);
    const [Item_1, setItem_1] = useState(Tiffin);
    const [Item_2, setItem_2] = useState(Tiffin);
    const [Item_3, setItem_3] = useState(Tiffin);
    const [Item_4, setItem_4] = useState(Tiffin);

    const [Src_1, setSrc_1] = useState(Tiffin);
    const [Src_2, setSrc_2] = useState(Tiffin);
    const [Src_3, setSrc_3] = useState(Tiffin);
    const [Src_4, setSrc_4] = useState(Tiffin);

    const [myArr_1, setmyArr_1] = useState(localStorage.setItem('myArr_1', ''));
    const [myArr_2, setmyArr_2] = useState(localStorage.setItem('myArr_2', ''));

    const [AddToCart, SetAddToCart] = useState(false);

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

    function AddDaal (event) {
        event.preventDefault();
        if (count >= 0 && count <= 3) {
            // if (itemsArray.Daal) {
            //     itemsArray.Daal += 1;
            // }
            // else {
            //     itemsArray.Daal = 1;
            // }
            
            if (Item_1_Empty) {
                SetItem_1_Empty(false);
                setItem_1(Daal);
                setCount(count+1);
            }
            else {
                if (Item_2_Empty) {
                    SetItem_2_Empty(false);
                    setItem_2(Daal);
                    setCount(count+1);
                }
                else {
                    if (Item_3_Empty) {
                        SetItem_3_Empty(false);
                        setItem_3(Daal);
                        setCount(count+1);
                    }
                    else {
                        if (Item_4_Empty) {
                            SetItem_4_Empty(false);
                            setItem_4(Daal);
                            setCount(count+1);
                        }
                    }
                }
            }
            
        }  
        console.log(count);
    }
    function AddKadi (event) {
        event.preventDefault();
        if (count >= 0 && count <= 3) {
            if (Item_1_Empty) {
                SetItem_1_Empty(false);
                setItem_1(Kadi);
                setCount(count+1);
            }
            else {
                if (Item_2_Empty) {
                    SetItem_2_Empty(false);
                    setItem_2(Kadi);
                    setCount(count+1);
                }
                else {
                    if (Item_3_Empty) {
                        SetItem_3_Empty(false);
                        setItem_3(Kadi);
                        setCount(count+1);
                    }
                    else {
                        if (Item_4_Empty) {
                            SetItem_4_Empty(false);
                            setItem_4(Kadi);
                            setCount(count+1);
                        }
                    }
                }
            }
        }  
    }
    function AddRajma (event) {
        event.preventDefault();
        if (count >= 0 && count <= 3) {
            if (Item_1_Empty) {
                SetItem_1_Empty(false);
                setItem_1(Rajma);
                setCount(count+1);
            }
            else {
                if (Item_2_Empty) {
                    SetItem_2_Empty(false);
                    setItem_2(Rajma);
                    setCount(count+1);
                }
                else {
                    if (Item_3_Empty) {
                        SetItem_3_Empty(false);
                        setItem_3(Rajma);
                        setCount(count+1);
                    }
                    else {
                        if (Item_4_Empty) {
                            SetItem_4_Empty(false);
                            setItem_4(Rajma);
                            setCount(count+1);
                        }
                    }
                }
            }
        }
    }
    function AddBhindi (event) {
        event.preventDefault();
        if (count >= 0 && count <= 3) {
            if (Item_1_Empty) {
                SetItem_1_Empty(false);
                setItem_1(Bhindi);
                setCount(count+1);
            }
            else {
                if (Item_2_Empty) {
                    SetItem_2_Empty(false);
                    setItem_2(Bhindi);
                    setCount(count+1);
                }
                else {
                    if (Item_3_Empty) {
                        SetItem_3_Empty(false);
                        setItem_3(Bhindi);
                        setCount(count+1);
                    }
                    else {
                        if (Item_4_Empty) {
                            SetItem_4_Empty(false);
                            setItem_4(Bhindi);
                            setCount(count+1);
                        }
                    }
                }
            }
        }  
    }
    function AddShahiPaneer (event) {
        event.preventDefault();
        if (count >= 0 && count <= 3) {
            if (Item_1_Empty) {
                SetItem_1_Empty(false);
                setItem_1(Shahi_Paneer);
                setCount(count+1);
            }
            else {
                if (Item_2_Empty) {
                    SetItem_2_Empty(false);
                    setItem_2(Shahi_Paneer);
                    setCount(count+1);
                }
                else {
                    if (Item_3_Empty) {
                        SetItem_3_Empty(false);
                        setItem_3(Shahi_Paneer);
                        setCount(count+1);
                    }
                    else {
                        if (Item_4_Empty) {
                            SetItem_4_Empty(false);
                            setItem_4(Shahi_Paneer);
                            setCount(count+1);
                        }
                    }
                }
            }
        }  
    }
    function AddMatarPaneer (event) {
        event.preventDefault();
        if (count >= 0 && count <= 3) {
            if (Item_1_Empty) {
                SetItem_1_Empty(false);
                setItem_1(Matar_Paneer);
                setCount(count+1);
            }
            else {
                if (Item_2_Empty) {
                    SetItem_2_Empty(false);
                    setItem_2(Matar_Paneer);
                    setCount(count+1);
                }
                else {
                    if (Item_3_Empty) {
                        SetItem_3_Empty(false);
                        setItem_3(Matar_Paneer);
                        setCount(count+1);
                    }
                    else {
                        if (Item_4_Empty) {
                            SetItem_4_Empty(false);
                            setItem_4(Matar_Paneer);
                            setCount(count+1);
                        }
                    }
                }
            }
        }  
    }

    function AddRoti (event) {
        event.preventDefault();
        if (count >= 0 && count <= 3) {
            if (Item_1_Empty) {
                SetItem_1_Empty(false);
                setItem_1(Roti);
                setCount(count+1);
            }
            else {
                if (Item_2_Empty) {
                    SetItem_2_Empty(false);
                    setItem_2(Roti);
                    setCount(count+1);
                }
                else {
                    if (Item_3_Empty) {
                        SetItem_3_Empty(false);
                        setItem_3(Roti);
                        setCount(count+1);
                    }
                    else {
                        if (Item_4_Empty) {
                            SetItem_4_Empty(false);
                            setItem_4(Roti);
                            setCount(count+1);
                        }
                    }
                }
            }
        }  
    }
    function AddDahi (event) {
        event.preventDefault();
        if (count >= 0 && count <= 3) {
            if (Item_1_Empty) {
                SetItem_1_Empty(false);
                setItem_1(Dahi);
                setCount(count+1);
            }
            else {
                if (Item_2_Empty) {
                    SetItem_2_Empty(false);
                    setItem_2(Dahi);
                    setCount(count+1);
                }
                else {
                    if (Item_3_Empty) {
                        SetItem_3_Empty(false);
                        setItem_3(Dahi);
                        setCount(count+1);
                    }
                    else {
                        if (Item_4_Empty) {
                            SetItem_4_Empty(false);
                            setItem_4(Dahi);
                            setCount(count+1);
                        }
                    }
                }
            }
        }  
    }
    function AddSalad (event) {
        event.preventDefault();
        if (count >= 0 && count <= 3) {
            if (Item_1_Empty) {
                SetItem_1_Empty(false);
                setItem_1(Salad);
                setCount(count+1);
            }
            else {
                if (Item_2_Empty) {
                    SetItem_2_Empty(false);
                    setItem_2(Salad);
                    setCount(count+1);
                }
                else {
                    if (Item_3_Empty) {
                        SetItem_3_Empty(false);
                        setItem_3(Salad);
                        setCount(count+1);
                    }
                    else {
                        if (Item_4_Empty) {
                            SetItem_4_Empty(false);
                            setItem_4(Salad);
                            setCount(count+1);
                        }
                    }
                }
            }
        }   
    }
    function AddRice (event) {
        event.preventDefault();
        if (count >= 0 && count <= 3) {
            if (Item_1_Empty) {
                SetItem_1_Empty(false);
                setItem_1(Rice);
                setCount(count+1);
            }
            else {
                if (Item_2_Empty) {
                    SetItem_2_Empty(false);
                    setItem_2(Rice);
                    setCount(count+1);
                }
                else {
                    if (Item_3_Empty) {
                        SetItem_3_Empty(false);
                        setItem_3(Rice);
                        setCount(count+1);
                    }
                    else {
                        if (Item_4_Empty) {
                            SetItem_4_Empty(false);
                            setItem_4(Rice);
                            setCount(count+1);
                        }
                    }
                }
            }
        }  
    }
    function AddGulabJamun (event) {
        event.preventDefault();
        if (count >= 0 && count <= 3) {
            if (Item_1_Empty) {
                SetItem_1_Empty(false);
                setItem_1(Gulab_Jamun);
                setCount(count+1);
            }
            else {
                if (Item_2_Empty) {
                    SetItem_2_Empty(false);
                    setItem_2(Gulab_Jamun);
                    setCount(count+1);
                }
                else {
                    if (Item_3_Empty) {
                        SetItem_3_Empty(false);
                        setItem_3(Gulab_Jamun);
                        setCount(count+1);
                    }
                    else {
                        if (Item_4_Empty) {
                            SetItem_4_Empty(false);
                            setItem_4(Gulab_Jamun);
                            setCount(count+1);
                        }
                    }
                }
            }
        }  
    }
    function AddTodaysSpecial (event) {
        event.preventDefault();
        if (count >= 0 && count <= 3) {
            if (Item_1_Empty) {
                SetItem_1_Empty(false);
                setItem_1(Todays_Special);
                setCount(count+1);
            }
            else {
                if (Item_2_Empty) {
                    SetItem_2_Empty(false);
                    setItem_2(Todays_Special);
                    setCount(count+1);
                }
                else {
                    if (Item_3_Empty) {
                        SetItem_3_Empty(false);
                        setItem_3(Todays_Special);
                        setCount(count+1);
                    }
                    else {
                        if (Item_4_Empty) {
                            SetItem_4_Empty(false);
                            setItem_4(Todays_Special);
                            setCount(count+1);
                        }
                    }
                }
            }
        }  
    }
    //Setters for removing value into the Tiffin Model in Local Storage
    function RemoveDaal (event) {
        event.preventDefault();
        if (count > 0) {
            if (!Item_1_Empty && Item_1 == Daal) {
                SetItem_1_Empty(true);
                setItem_1(Tiffin);
                setCount(count-1);
            }
            else {
                if (!Item_2_Empty && Item_2 == Daal) {
                    SetItem_2_Empty(true);
                    setItem_2(Tiffin);
                    setCount(count-1);
                }
                else {
                    if (!Item_3_Empty && Item_3 == Daal) {
                        SetItem_3_Empty(true);
                        setItem_3(Tiffin);
                        setCount(count-1);
                    }
                    else {
                        if (!Item_4_Empty && Item_4 == Daal) {
                            SetItem_4_Empty(true);
                            setItem_4(Tiffin);
                            setCount(count-1);
                        }   
                    }
                }
            }
        }
    }
            
    function RemoveKadi (event) {
        event.preventDefault();
        if (count > 0) {
            if (!Item_1_Empty && Item_1 == Kadi) {
                SetItem_1_Empty(true);
                setItem_1(Tiffin);
                setCount(count-1);
            }
            else {
                if (!Item_2_Empty && Item_2 == Kadi) {
                    SetItem_2_Empty(true);
                    setItem_2(Tiffin);
                    setCount(count-1);
                }
                else {
                    if (!Item_3_Empty && Item_3 == Kadi) {
                        SetItem_3_Empty(true);
                        setItem_3(Tiffin);
                        setCount(count-1);
                    }
                    else {
                        if (!Item_4_Empty && Item_4 == Kadi) {
                            SetItem_4_Empty(true);
                            setItem_4(Tiffin);
                            setCount(count-1);
                        }
                    }
                }
            }
        }
    }
    function RemoveRajma (event) {
        event.preventDefault();
        if (count > 0) {
            if (!Item_1_Empty && Item_1 == Rajma) {
                SetItem_1_Empty(true);
                setItem_1(Tiffin);
                setCount(count-1);
            }
            else {
                if (!Item_2_Empty && Item_2 == Rajma) {
                    SetItem_2_Empty(true);
                    setItem_2(Tiffin);
                    setCount(count-1);
                }
                else {
                    if (!Item_3_Empty && Item_3 == Rajma) {
                        SetItem_3_Empty(true);
                        setItem_3(Tiffin);
                        setCount(count-1);
                    }
                    else {
                        if (!Item_4_Empty && Item_4 == Rajma) {
                            SetItem_4_Empty(true);
                            setItem_4(Tiffin);
                            setCount(count-1);
                        }
                    }
                }
            }
        }
    }
    function RemoveBhindi (event) {
        if (count > 0) {
            if (!Item_1_Empty && Item_1 == Bhindi) {
                SetItem_1_Empty(true);
                setItem_1(Tiffin);
                setCount(count-1);
                    }
            else {
                if (!Item_2_Empty && Item_2 == Bhindi) {
                    SetItem_2_Empty(true);
                    setItem_2(Tiffin);
                    setCount(count-1);
                }
                else {
                    if (!Item_3_Empty && Item_3 == Bhindi) {
                        SetItem_3_Empty(true);
                        setItem_3(Tiffin);
                        setCount(count-1);
                    }
                    else {
                        if (!Item_4_Empty && Item_4 == Bhindi) {
                            SetItem_4_Empty(true);
                            setItem_4(Tiffin);
                            setCount(count-1);
                        }  
                    }
                }
            }
        }
    }
    function RemoveShahiPaneer (event) {
        event.preventDefault();
        if (count > 0) {
            if (!Item_1_Empty && Item_1 == Shahi_Paneer) {
                SetItem_1_Empty(true);
                setItem_1(Tiffin);
                setCount(count-1);
                    }
            else {
                if (!Item_2_Empty && Item_2 == Shahi_Paneer) {
                    SetItem_2_Empty(true);
                    setItem_2(Tiffin);
                    setCount(count-1);
                }
                else {
                    if (!Item_3_Empty && Item_3 == Shahi_Paneer) {
                        SetItem_3_Empty(true);
                        setItem_3(Tiffin);
                        setCount(count-1);
                    }
                    else {
                        if (!Item_4_Empty && Item_4 == Shahi_Paneer) {
                            SetItem_4_Empty(true);
                            setItem_4(Tiffin);
                            setCount(count-1);
                        }  
                    }
                }
            }
        }
    }
    function RemoveMatarPaneer (event) {
        event.preventDefault();
        if (count > 0) {
            if (!Item_1_Empty && Item_1 == Matar_Paneer) {
                SetItem_1_Empty(true);
                setItem_1(Tiffin);
                setCount(count-1);
                    }
            else {
                if (!Item_2_Empty && Item_2 == Matar_Paneer) {
                    SetItem_2_Empty(true);
                    setItem_2(Tiffin);
                    setCount(count-1);
                }
                else {
                    if (!Item_3_Empty && Item_3 == Matar_Paneer) {
                        SetItem_3_Empty(true);
                        setItem_3(Tiffin);
                        setCount(count-1);
                    }
                    else {
                        if (!Item_4_Empty && Item_4 == Matar_Paneer) {
                            SetItem_4_Empty(true);
                            setItem_4(Tiffin);
                            setCount(count-1);
                        }  
                    }
                }
            }
        }
    }
    
    function RemoveRoti (event) {
        event.preventDefault();
        if (count > 0) {
            if (!Item_1_Empty && Item_1 == Roti) {
                SetItem_1_Empty(true);
                setItem_1(Tiffin);
                setCount(count-1);
                    }
            else {
                if (!Item_2_Empty && Item_2 == Roti) {
                    SetItem_2_Empty(true);
                    setItem_2(Tiffin);
                    setCount(count-1);
                }
                else {
                    if (!Item_3_Empty && Item_3 == Roti) {
                        SetItem_3_Empty(true);
                        setItem_3(Tiffin);
                        setCount(count-1);
                    }
                    else {
                        if (!Item_4_Empty && Item_4 == Roti) {
                            SetItem_4_Empty(true);
                            setItem_4(Tiffin);
                            setCount(count-1);
                        }  
                    }
                }
            }
        }
    }
    function RemoveDahi (event) {
        event.preventDefault();
        if (count > 0) {
            if (!Item_1_Empty && Item_1 == Dahi) {
                SetItem_1_Empty(true);
                setItem_1(Tiffin);
                setCount(count-1);
                    }
            else {
                if (!Item_2_Empty && Item_2 == Dahi) {
                    SetItem_2_Empty(true);
                    setItem_2(Tiffin);
                    setCount(count-1);
                }
                else {
                    if (!Item_3_Empty && Item_3 == Dahi) {
                        SetItem_3_Empty(true);
                        setItem_3(Tiffin);
                        setCount(count-1);
                    }
                    else {
                        if (!Item_4_Empty && Item_4 == Dahi) {
                            SetItem_4_Empty(true);
                            setItem_4(Tiffin);
                            setCount(count-1);
                        }  
                    }
                }
            }
        }
    }
    function RemoveSalad (event) {
        event.preventDefault();
        if (count > 0) {
            if (!Item_1_Empty && Item_1 == Salad) {
                SetItem_1_Empty(true);
                setItem_1(Tiffin);
                setCount(count-1);
                    }
            else {
                if (!Item_2_Empty && Item_2 == Salad) {
                    SetItem_2_Empty(true);
                    setItem_2(Tiffin);
                    setCount(count-1);
                }
                else {
                    if (!Item_3_Empty && Item_3 == Salad) {
                        SetItem_3_Empty(true);
                        setItem_3(Tiffin);
                        setCount(count-1);
                    }
                    else {
                        if (!Item_4_Empty && Item_4 == Salad) {
                            SetItem_4_Empty(true);
                            setItem_4(Tiffin);
                            setCount(count-1);
                        }  
                    }
                }
            }
        }
    }
    function RemoveRice (event) {
        event.preventDefault();
        if (count > 0) {
            if (!Item_1_Empty && Item_1 == Rice) {
                SetItem_1_Empty(true);
                setItem_1(Tiffin);
                setCount(count-1);
                    }
            else {
                if (!Item_2_Empty && Item_2 == Rice) {
                    SetItem_2_Empty(true);
                    setItem_2(Tiffin);
                    setCount(count-1);
                }
                else {
                    if (!Item_3_Empty && Item_3 == Rice) {
                        SetItem_3_Empty(true);
                        setItem_3(Tiffin);
                        setCount(count-1);
                    }
                    else {
                        if (!Item_4_Empty && Item_4 == Rice) {
                            SetItem_4_Empty(true);
                            setItem_4(Tiffin);
                            setCount(count-1);
                        }  
                    }
                }
            }
        }
    }
    function RemoveGulabJamun (event) {
        event.preventDefault();
        if (count > 0) {
            if (!Item_1_Empty && Item_1 == Gulab_Jamun) {
                SetItem_1_Empty(true);
                setItem_1(Tiffin);
                setCount(count-1);
                    }
            else {
                if (!Item_2_Empty && Item_2 == Gulab_Jamun) {
                    SetItem_2_Empty(true);
                    setItem_2(Tiffin);
                    setCount(count-1);
                }
                else {
                    if (!Item_3_Empty && Item_3 == Gulab_Jamun) {
                        SetItem_3_Empty(true);
                        setItem_3(Tiffin);
                        setCount(count-1);
                    }
                    else {
                        if (!Item_4_Empty && Item_4 == Gulab_Jamun) {
                            SetItem_4_Empty(true);
                            setItem_4(Tiffin);
                            setCount(count-1);
                        }  
                    }
                }
            }
        }
    }
    function RemoveTodaysSpecial (event) {
        event.preventDefault();
        if (count > 0) {
            if (!Item_1_Empty && Item_1 == Todays_Special) {
                SetItem_1_Empty(true);
                setItem_1(Tiffin);
                setCount(count-1);
                    }
            else {
                if (!Item_2_Empty && Item_2 == Todays_Special) {
                    SetItem_2_Empty(true);
                    setItem_2(Tiffin);
                    setCount(count-1);
                }
                else {
                    if (!Item_3_Empty && Item_3 == Todays_Special) {
                        SetItem_3_Empty(true);
                        setItem_3(Tiffin);
                        setCount(count-1);
                    }
                    else {
                        if (!Item_4_Empty && Item_4 == Todays_Special) {
                            SetItem_4_Empty(true);
                            setItem_4(Tiffin);
                            setCount(count-1);
                        }  
                    }
                }
            }
        }
    }


    useEffect (() => {
        setSrc_1(Item_1);
        setSrc_2(Item_2);
        setSrc_3(Item_3);
        setSrc_4(Item_4);
    }, [Item_1, Item_2, Item_3, Item_4, Item_1_Empty, Item_2_Empty, Item_3_Empty, Item_4_Empty]);


    //Final Setter for Local Storage
    function SubmitVal () {
        // localStorage.setItem('DaalVal', DaalCounter);
        // localStorage.setItem('KadiVal', KadiCounter);
        // localStorage.setItem('RajmaVal', RajmaCounter);
        // localStorage.setItem('BhindilVal', BhindiCounter);
        // localStorage.setItem('ShahiPaneerVal', ShahiPaneerCounter);
        // localStorage.setItem('MatarPaneerVal', MatarPaneerCounter);

        // localStorage.setItem('RotiVal', RotiCounter);
        // localStorage.setItem('DahiVal', DahiCounter);
        // localStorage.setItem('SaladVal', SaladCounter);
        // localStorage.setItem('AchaarVal', AchaarCounter);
        // localStorage.setItem('DessertVal', DessertCounter);
        // localStorage.setItem('TodaysSpecialVal', TodaysSpecialCounter);
        // localStorage.setItem('myArr_1', JSON.stringify(itemsArray));
        // console.log(myArr);
        // console.log(MyArrF)

        Order_Item_1 = Item_1.substring(14, Item_1.length - 13);
        Order_Item_1 = Order_Item_1.replace('_', ' ');
        Order_Item_1 = Order_Item_1.charAt(0).toUpperCase() + Order_Item_1.slice(1);

        Order_Item_2 = Item_2.substring(14, Item_2.length - 13);
        Order_Item_2 = Order_Item_2.replace('_', ' ');
        Order_Item_2 = Order_Item_2.charAt(0).toUpperCase() + Order_Item_2.slice(1);

        Order_Item_3 = Item_3.substring(14, Item_3.length - 13);
        Order_Item_3 = Order_Item_3.replace('_', ' ');
        Order_Item_3 = Order_Item_3.charAt(0).toUpperCase() + Order_Item_3.slice(1);

        Order_Item_4 = Item_4.substring(14, Item_4.length - 13);
        Order_Item_4 = Order_Item_4.replace('_', ' ');
        Order_Item_4 = Order_Item_4.charAt(0).toUpperCase() + Order_Item_4.slice(1);

        orderArr.push(Order_Item_1, Order_Item_2, Order_Item_3, Order_Item_4);

        // setItemsArray([Order_Item_1, Order_Item_2, Order_Item_3, Order_Item_4]);
        


        orderArr.sort();

        for (var i = 0; i < orderArr.length; i++) {
            if (orderArr[i] !== prev) {
              a.push(orderArr[i]);
              b.push(1);
            } else {
              b[b.length - 1]++;
            }
            prev = orderArr[i];
        }

        setItems(a);
        setItemsCount(b);

        SetAddToCart(true);
    }

    function Proceed () {
        localStorage.setItem('myArr_1', Items);
        localStorage.setItem('myArr_2', JSON.stringify(ItemsCount));
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
                        <button type="button" onClick= {AddDaal} className="btn btn-plus "> + </button>
                        <button type="button" className="btn btn-item"> Daal </button>
                        <button type="button" onClick={RemoveDaal} className="btn btn-minus"> - </button>
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
                        <button type="button" onClick={AddShahiPaneer} className="btn btn-plus"> + </button>
                        <button type="button" className="btn btn-item"> Shahi Paneer </button>
                        <button type="button" onClick={RemoveShahiPaneer} className="btn btn-minus"> - </button>
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
                            <div className = "row">
                                <div className = "col-md-3">
                                    <TiffinModel_1 Src1 = {Src_1} />
                                </div>
                                <div className = "col-md-3">
                                    <TiffinModel_2 Src2 = {Src_2} />
                                </div>
                                <div className = "col-md-3">
                                    <TiffinModel_3 Src3 = {Src_3} />
                                </div>
                                <div className = "col-md-3">
                                    <TiffinModel_4 Src4 = {Src_4} />
                                </div>
                            </div>
                        </center>
                        <div className = "col-sm-12 col-md-12">
                            <center>
                                {AddToCart &&
                                <div className = "order-final jumbotron">
                                    <p className="h4 mb-12 your-order-label">YOUR ORDER</p>
                                    <div className = "row">
                                        {/* <div className = "col-sm-12 col-md-6">
                                            <p className="h4 mb-12 your-order">Salad x 1</p>
                                            <p className="h4 mb-12 your-order">Shahi Paneer x 1</p>
                                        </div>
                                        <div className = "col-sm-12 col-md-6">
                                            <p className="h4 mb-12 your-order">Gulab Jamun x 1</p>
                                            <p className="h4 mb-12 your-order">Matar Paneer x 1</p>
                                        </div> */}
                                        <div className = "col-sm-6 col-md-6">
                                            <p className="h4 mb-12 your-order"> {Items[0]} </p>
                                            <p className="h4 mb-12 your-order"> {Items[1]} </p>
                                            <p className="h4 mb-12 your-order"> {Items[2]} </p>
                                            <p className="h4 mb-12 your-order"> {Items[3]} </p>
                                        </div>
                                        <div className = "col-sm-6 col-md-6">
                                            <p className="h4 mb-12 your-order"> {ItemsCount[0]} </p>
                                            <p className="h4 mb-12 your-order"> {ItemsCount[1]} </p>
                                            <p className="h4 mb-12 your-order"> {ItemsCount[2]} </p>
                                            <p className="h4 mb-12 your-order"> {ItemsCount[3]} </p>
                                        </div>
                                    </div>
                                    
                                </div>}
                                {!AddToCart && <button type="submit" className = "btn btn-checkout" onClick={SubmitVal}>  ADD TO CART </button>}
                                <br/>
                                {AddToCart && <Link to="/Payment"><button type="submit" className = "btn btn-checkout" onClick={Proceed} >  PROCEED TO PAYMENT </button></Link>}
                            </center>
            </div>
            </div>
            <div className = "col-sm-4 col-md-4">
            <center><div className="btn-group-vertical" id="ButtonGroup" style = {{fontFamily: "optima"}}>
                    <div className="btn-group-horizontal">
                        <button type="button" onClick={AddRice} className="btn btn-plus"> + </button>
                        <button type="button" className="btn btn-item"> Rice </button>
                        <button type="button" onClick={RemoveRice} className="btn btn-minus"> - </button>
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
                        <button type="button" onClick={AddRoti} className="btn btn-plus "> + </button>
                        <button type="button" className="btn btn-item"> Roti x 8 </button>
                        <button type="button" onClick={RemoveRoti} className="btn btn-minus"> - </button>
                    </div>
                    <div className="btn-group-horizontal">
                        <button type="button" onClick={AddGulabJamun} className="btn btn-plus"> + </button>
                        <button type="button" className="btn btn-item"> Gulab Jamun </button>
                        <button type="button" onClick={RemoveGulabJamun} className="btn btn-minus"> - </button>
                    </div>
                    
                    <div className="btn-group-horizontal">
                        <button type="button" onClick={AddTodaysSpecial} className="btn btn-plus"> + </button>
                        <button type="button" className="btn btn-item"> Today's Special </button>
                        <button type="button" onClick={RemoveTodaysSpecial} className="btn btn-minus"> - </button>
                    </div>
                </div></center>
            </div>
        </div>
    );
}

export default ButtonGroup